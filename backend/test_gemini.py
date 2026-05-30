import asyncio
from app.services.ai_content_service import ai_generator

async def test():
    res = await ai_generator.call_gemini("Generate 1 multiple choice question about python as a JSON array", json_mode=True)
    print("RES:", repr(res))

asyncio.run(test())
