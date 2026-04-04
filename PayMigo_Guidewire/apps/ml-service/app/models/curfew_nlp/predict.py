from app.core.utils import load_pickle

_vectorizer = _model = None

def _load():
    global _vectorizer, _model
    if _model is None:
        _vectorizer = load_pickle("app/models/curfew_nlp/vectorizer.pkl")
        _model = load_pickle("app/models/curfew_nlp/lr_model.pkl")

def predict(data: dict) -> str:
    _load()
    X = _vectorizer.transform([data["headline"]])
    return str(_model.predict(X)[0])
