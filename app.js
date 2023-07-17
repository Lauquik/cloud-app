const express = require("express");
const amqp = require('amqplib');

const app = express();

app.use(express.static(__dirname));

async function consumeMessages() {
  try {
    const connection = (await amqp.connect('amqp://localhost:5672'));
    const channel = await connection.createChannel();

    const queue = 'hello';
    await channel.assertQueue(queue, { durable: false });

    channel.consume(queue, (message) => {
      console.log(`Received message: ${message.content.toString()}`);
    }, { noAck: true });
  } catch (error) {
    console.error(error);
  }
}
consumeMessages();

app.get("/", (req, res)=>{
    res.sendFile(__dirname+"/index.html");
});

app.listen(8080, ()=>{
  console.log("listening on port 8080");
});
