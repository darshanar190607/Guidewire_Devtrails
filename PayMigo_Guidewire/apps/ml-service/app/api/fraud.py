from fastapi import APIRouter
from pydantic import BaseModel
from app.models.fraud_detector.predict import predict as fraud_predict
from app.models.gps_classifier.predict import predict as gps_predict

router = APIRouter()

class FraudRequest(BaseModel):
    claim_amount: float
    zone_risk: float
    days_since_policy: int
    incident_count: int

class GPSRequest(BaseModel):
    latitude: float
    longitude: float
    speed: float
    hour: int
    zone_id: int

@router.post("/detect")
def fraud_detect(req: FraudRequest):
    result = fraud_predict(req.dict())
    return {"is_fraud": result}

@router.post("/gps")
def gps_classify(req: GPSRequest):
    result = gps_predict(req.dict())
    return {"gps_anomaly": result}
