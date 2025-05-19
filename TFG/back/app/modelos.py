from tensorflow.keras.models import load_model
import pickle
import joblib
import numpy as np
import cv2


# Para enfermedades del corazon corazon
encoders_corazon = joblib.load('modelos_back/enfermedades_corazon/encoders_standar_corazon.pkl')
ann_modelo_corazon = load_model('modelos_back/enfermedades_corazon/modelo_ann_corazon.keras', compile= False)
rf_modelo_corazon = joblib.load('modelos_back/enfermedades_corazon/modelo_randomforest_corazon.pkl')
lgbm_modelo_corazon = joblib.load('modelos_back/enfermedades_corazon/modelo_lgbm_corazon.pkl')
columnas_ordenadas = ['HighBP', 'HighChol', 'CholCheck', 'Smoker', 'Stroke', 'PhysActivity', 'Fruits', 'Veggies', 'HvyAlcoholConsump', 'AnyHealthcare', 'DiffWalk', 'Sex', 'BMI_esc', 'Diabetes_esc', 'GenHlth_esc', 'MentHlth_esc', 'PhysHlth_esc', 'Age_esc']

def predecir_enfermedad_corazon(datos: dict):
    valores_prediccion = []
    for columna in columnas_ordenadas:
        if columna.split('_')[-1] == 'esc':
            columna_sin_esc = columna.split('_')[0]
            valor = float(datos[columna_sin_esc])  
            valor_escalado = encoders_corazon[columna_sin_esc].transform([[valor]])
            valores_prediccion.append(valor_escalado.ravel()[0])
        else:
            valores_prediccion.append(int(datos[columna])) 

    valores_prediccion = np.array([valores_prediccion])
    prediccion_ann_prob = float(ann_modelo_corazon.predict(valores_prediccion)[0][0])
    prediccion_rf_prob = float(rf_modelo_corazon.predict_proba(valores_prediccion)[0][1])
    prediccion_lgbm_prob = float(lgbm_modelo_corazon.predict_proba(valores_prediccion)[0][1])

    prob_media = (prediccion_ann_prob + prediccion_rf_prob + prediccion_lgbm_prob) / 3

    return {
        'probabilidad_media': prob_media,
        'prediccion_ann': prediccion_ann_prob,
        'prediccion_rf': prediccion_rf_prob,
        'prediccion_lgbm': prediccion_lgbm_prob
    }

# Para Cancer de mama
cnn_cancer = load_model('modelos_back/cancer_Mama/modelo_cancer_de_mama.keras', compile=False)

def predecir_cancer_mama(bytes_imagen: bytes):
    imagen_array = np.frombuffer(bytes_imagen, dtype=np.uint8)    
    imagen = cv2.imdecode(imagen_array, cv2.IMREAD_COLOR)    
    imagen = cv2.resize(imagen, (50, 50)) / 255.0
    imagen = np.expand_dims(imagen, axis=0)
    prediccion = cnn_cancer.predict(imagen)
    return float(prediccion[0][0])

# Para enfermedades de los pulmones
cnn_pulmones = load_model('modelos_back/enfermedades_pulmon/modelo_enfermedades_pulmonares.keras', compile=False)
encoder_cpulmones = joblib.load('modelos_back/enfermedades_pulmon/label_encoder_enfermedades_pulmonares.pkl')


def redimensionar(imagen, dimensiones):
    # dimensiones = (ancho, alto)
    ratio = min(dimensiones[0] / imagen.shape[1], dimensiones[1] / imagen.shape[0])
    nuevo_ancho = int(imagen.shape[1] * ratio)
    nuevo_alto = int(imagen.shape[0] * ratio)
    img_redimensionada = cv2.resize(imagen, (nuevo_ancho, nuevo_alto))
    mascara = np.zeros((dimensiones[1], dimensiones[0]), np.uint8)  # (alto, ancho)
    y_offset = (dimensiones[1] - nuevo_alto) // 2
    x_offset = (dimensiones[0] - nuevo_ancho) // 2
    mascara[y_offset:y_offset + nuevo_alto, x_offset:x_offset + nuevo_ancho] = img_redimensionada
    return mascara

def predecir_enfermedad_pulmonar(bytes_imagen: bytes):
    imagen_array = np.frombuffer(bytes_imagen, dtype=np.uint8)    
    imagen = cv2.imdecode(imagen_array, cv2.IMREAD_GRAYSCALE)    
    imagen = redimensionar(imagen, (512, 512))/255
    imagen = np.expand_dims(imagen, axis=0)
    predicciones = cnn_pulmones.predict(imagen)  
    clase_predicha = np.argmax(predicciones)
    etiqueta = encoder_cpulmones.inverse_transform([clase_predicha])[0]
    return {
        "enfermedad_predicha": etiqueta,
        "probabilidades": float(max(predicciones[0].tolist())) 
    } 