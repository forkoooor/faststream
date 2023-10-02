from faststream import FastStream
from faststream.nats import NatsBroker

broker = NatsBroker("nats://localhost:4222")
app = FastStream(broker)


@broker.subscriber("test-subject")
@broker.publisher("another-subject")
async def handle() -> str:
    return "Hi!"


@broker.subscriber("another-subject")
async def handle_next(msg: str):
    assert msg == "Hi!"


@app.after_startup
async def test():
    await broker.publish("", subject="test-subject")
