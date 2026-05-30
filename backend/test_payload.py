import asyncio
from app.services.ai_content_service import ai_generator
import logging

logging.basicConfig(level=logging.DEBUG)

async def test():
    # Patch call_gemini to print the payload
    original = ai_generator.call_gemini
    
    async def patched_call_gemini(prompt, temperature=0.7, max_tokens=8192, retries=3, json_mode=False):
        print(f"json_mode={json_mode}")
        return await original(prompt, temperature=temperature, max_tokens=max_tokens, retries=retries, json_mode=json_mode)
    
    ai_generator.call_gemini = patched_call_gemini
    
    res = await ai_generator.generate_quiz_questions("Functions & Scope", num_questions=1)
    print("FINAL RES:", res)

asyncio.run(test())
