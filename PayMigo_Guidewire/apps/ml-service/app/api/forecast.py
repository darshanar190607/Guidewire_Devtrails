from fastapi import APIRouter
from pydantic import BaseModel
from typing import List
from app.models.risk_forecaster.predict import predict

router = APIRouter()

class ForecastRequest(BaseModel):
    sequence: List[List[float]]  # shape: (timesteps, features)

@router.post("/predict")
def forecast_predict(req: ForecastRequest):
    result = predict(req.dict())
    return {"forecast": result}
