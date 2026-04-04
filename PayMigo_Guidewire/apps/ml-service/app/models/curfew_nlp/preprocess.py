import re
import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from app.core.utils import save_pickle

def clean_text(text: str) -> str:
    text = text.lower()
    text = re.sub(r"[^a-z\s]", "", text)
    return text.strip()

def preprocess(df: pd.DataFrame, vectorizer: TfidfVectorizer = None, fit: bool = False):
    texts = df["headline"].fillna("").apply(clean_text).tolist()
    if fit:
        vectorizer = TfidfVectorizer(max_features=5000)
        X = vectorizer.fit_transform(texts)
        save_pickle(vectorizer, "app/models/curfew_nlp/vectorizer.pkl")
        return X, vectorizer
    return vectorizer.transform(texts)
