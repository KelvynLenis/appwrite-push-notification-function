import { updateDocument } from "./appwrite.js";
import { createClient } from 'redis';

export async function getRedisClient() {
  const { _APP_REDIS_PASS, _APP_REDIS_HOST } = process.env;

  const client = createClient({
    password: _APP_REDIS_PASS,
    socket: {
      host: _APP_REDIS_HOST,
      port: 12070
    }
  });

  await client.connect();

  return client;
}

export async function publishMessage(client, channel, message, deviceId, isStolen, log) {
  // const redisPublisher = client.asPublisher();
  // const redisSubscriber = client.asSubscriber();

  log(`Publishing message`);

  // redisSubscriber.subscribe('notifications');

  // redisSubscriber.on('message', async (channel, message) => {
  //   console.log(`Received message: ${message} from channel: ${channel}`);

  //   updateDocument(
  //     client,
  //     "673f3e7f002ac721c7f6",
  //     "673f3e8a0001a6d9233f",
  //     deviceId,
  //     {
  //       isStolen
  //     }
  //   )
  // });

  // redisPublisher.publish('notifications', message.toString());

  // await client.publish(channel, message);
}