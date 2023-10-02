import pytest
from pydantic import ValidationError

from faststream.nats import TestNatsBroker

from .pydantic_fields_nats import broker, handle


@pytest.mark.asyncio
async def test_handle():
    async with TestNatsBroker(broker, with_real=True) as br:
        await br.publish({"name": "John", "user_id": 1}, subject="test-subject")
        await handle.wait_call(timeout=3)
        handle.mock.assert_called_once_with({"name": "John", "user_id": 1})

    assert handle.mock.call_count == 0

@pytest.mark.asyncio
async def test_validation_error():
    async with TestNatsBroker(broker, with_real=True) as br:
        with pytest.raises(ValidationError):
            await br.publish("wrong message", subject="test-subject")
            await handle.wait_call(timeout=3)

        handle.mock.assert_called_once_with("wrong message")
