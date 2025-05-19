from fastapi import UploadFile, File, APIRouter
from pydantic import BaseModel  
from app.modelos import predecir_enfermedad_corazon, predecir_cancer_mama, predecir_enfermedad_pulmonar

router = APIRouter()

class EntradaCorazon(BaseModel):
    HighBP: int
    HighChol: int
    CholCheck: int
    Smoker: int
    Stroke: int
    PhysActivity: int
    Fruits: int
    Veggies: int
    HvyAlcoholConsump: int
    AnyHealthcare: int
    DiffWalk: int
    Sex: int
    BMI: float
    Diabetes: float
    GenHlth: float
    MentHlth: float
    PhysHlth: float
    Age: float

@router.post('/prediccion_corazon')
def prediccion_corazon(request: EntradaCorazon):
    return  {"predicciones": predecir_enfermedad_corazon(request.dict())}

@router.post('/prediccion_cancer')
def prediccion_cancer(imagen: UploadFile = File(...)):
    imagen = imagen.file.read()
    prediccion = predecir_cancer_mama(imagen)
    return {
        'prediccion':prediccion
    }

@router.post('/prediccion_pulmones')
def prediccion_pulmones(imagen: UploadFile = File(...)):
    imagen = imagen.file.read()
    prediccion = predecir_enfermedad_pulmonar(imagen)
    return {
        'prediccion':prediccion
    }