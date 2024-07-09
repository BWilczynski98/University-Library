from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from api.routers import include_all_routers
from db.database import Base, engine, SessionLocal


app = FastAPI()
Base.metadata.create_all(bind=engine)  # type: ignore
include_all_routers(app)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Adresy, które mają dostęp do API
    allow_credentials=True,
    allow_methods=["*"],  # Metody HTTP, które mają dostęp
    allow_headers=["*"],  # Nagłówki, które mają dostęp
)


@app.middleware("http")
async def log_request(request, call_next):
    print(f"Incoming request: {request.method} {request.url}")
    response = await call_next(request)
    print(f"Outgoing response: {response.status_code}")
    return response


# Uruchomienie aplikacji (tylko dla celów debugowania lokalnie)
if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app, host="127.0.0.1", port=8000, log_level="debug")
