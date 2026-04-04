import pandas as pd
import json
from sklearn.linear_model import LogisticRegression
from app.models.curfew_nlp.preprocess import preprocess
from app.core.utils import save_pickle

def train():
    df = pd.read_csv("app/data/curfew_headlines_10k.csv")
    X, vectorizer = preprocess(df, fit=True)
    y = df["curfew_risk"]

    model = LogisticRegression(max_iter=500)
    model.fit(X, y)

    save_pickle(model, "app/models/curfew_nlp/lr_model.pkl")

    metadata = {"model": "LogisticRegression", "vocab_size": 5000, "accuracy": round(model.score(X, y), 4)}
    with open("app/models/curfew_nlp/metadata.json", "w") as f:
        json.dump(metadata, f)

    print("Curfew NLP trained.")

if __name__ == "__main__":
    train()
