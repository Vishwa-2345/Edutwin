import asyncio
from app.services.ai_content_service import ai_generator

async def test():
    res = await ai_generator.generate_quiz_questions("Functions & Scope", num_questions=1)
    print(res)

asyncio.run(test())
