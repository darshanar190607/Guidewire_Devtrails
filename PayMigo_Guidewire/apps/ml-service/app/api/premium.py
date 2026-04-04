from fastapi import APIRouter
from pydantic import BaseModel
from app.models.premium_engine.predict import predict

router = APIRouter()

class PremiumRequest(BaseModel):
    age: int
    zone_risk: float
    job_type: str
    experience_years: int
    incident_history: int

@router.post("/predict")
def premium_predict(req: PremiumRequest):
    result = predict(req.dict())
    return {"premium": result}
