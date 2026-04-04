import pandas as pd
import json
from sklearn.ensemble import IsolationForest
from app.models.fraud_detector.preprocess import preprocess
from app.core.utils import save_pickle

def train():
    df = pd.read_csv("app/data/synthetic_workers_20k.csv")
    X_scaled, scaler = preprocess(df, fit=True)

    model = IsolationForest(n_estimators=100, contamination=0.05, random_state=42)
    model.fit(X_scaled)

    save_pickle(model, "app/models/fraud_detector/isolation_forest.pkl")

    metadata = {"model": "IsolationForest", "contamination": 0.05}
    with open("app/models/fraud_detector/metadata.json", "w") as f:
        json.dump(metadata, f)

    print("Fraud detector trained.")

if __name__ == "__main__":
    train()
