import pandas as pd
from sklearn.preprocessing import StandardScaler
from app.core.utils import save_pickle

FEATURES = ["claim_amount", "zone_risk", "days_since_policy", "incident_count"]

def preprocess(df: pd.DataFrame, scaler: StandardScaler = None, fit: bool = False):
    X = df[FEATURES].fillna(0)
    if fit:
        scaler = StandardScaler()
        X_scaled = scaler.fit_transform(X)
        save_pickle(scaler, "app/models/fraud_detector/scaler.pkl")
        return X_scaled, scaler
    return scaler.transform(X)
