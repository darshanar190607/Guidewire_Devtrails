from fastapi import APIRouter
from pydantic import BaseModel
from app.models.curfew_nlp.predict import predict

router = APIRouter()

class CurfewRequest(BaseModel):
    headline: str

@router.post("/predict")
def curfew_predict(req: CurfewRequest):
    result = predict(req.dict())
    return {"curfew_risk": result}
