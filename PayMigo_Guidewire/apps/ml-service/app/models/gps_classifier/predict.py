import numpy as np
from app.core.utils import load_pickle

_model = _scaler = None

def _load():
    global _model, _scaler
    if _model is None:
        _model = load_pickle("app/models/gps_classifier/gps_rf.pkl")
        _scaler = load_pickle("app/models/gps_classifier/scaler.pkl")

def predict(data: dict) -> bool:
    _load()
    X = np.array([[data["latitude"], data["longitude"], data["speed"], data["hour"], data["zone_id"]]])
    X_scaled = _scaler.transform(X)
    return bool(_model.predict(X_scaled)[0])
