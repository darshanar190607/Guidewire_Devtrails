import pandas as pd
import json
from sklearn.ensemble import RandomForestClassifier
from app.models.gps_classifier.preprocess import preprocess
from app.core.utils import save_pickle

def train():
    df = pd.read_csv("app/data/workers_final_10k.csv")
    X_scaled, scaler = preprocess(df, fit=True)
    y = df["gps_anomaly"]

    model = RandomForestClassifier(n_estimators=100, random_state=42)
    model.fit(X_scaled, y)

    save_pickle(model, "app/models/gps_classifier/gps_rf.pkl")

    metadata = {"model": "RandomForestClassifier", "n_estimators": 100, "accuracy": round(model.score(X_scaled, y), 4)}
    with open("app/models/gps_classifier/metadata.json", "w") as f:
        json.dump(metadata, f)

    print("GPS classifier trained.")

if __name__ == "__main__":
    train()
