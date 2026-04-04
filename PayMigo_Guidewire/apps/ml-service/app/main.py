from fastapi import FastAPI
from app.api import cluster, premium, trigger, curfew, fraud, forecast, health

app = FastAPI(title="ML Service", version="1.0.0")

app.include_router(health.router, prefix="/health", tags=["health"])
app.include_router(cluster.router, prefix="/cluster", tags=["cluster"])
app.include_router(premium.router, prefix="/premium", tags=["premium"])
app.include_router(trigger.router, prefix="/trigger", tags=["trigger"])
app.include_router(curfew.router, prefix="/curfew", tags=["curfew"])
app.include_router(fraud.router, prefix="/fraud", tags=["fraud"])
app.include_router(forecast.router, prefix="/forecast", tags=["forecast"])
