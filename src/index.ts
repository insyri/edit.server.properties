import { InteractionCommandClient, ShardClient } from "detritus-client";
import dotenv from "dotenv";
dotenv.config();

const TOKEN = process.env.TOKEN;
if (!TOKEN) throw "You must provide a token in the .env file";

const shardClient = new ShardClient(TOKEN, {
  gateway: {
    presence: {
      activity: {
        name: "[/] Using Slash Commands!",
        type: 1,
        url: "https://twitch.tv/insyri",
      },
    },
  },
});

const interactionCommandClient = new InteractionCommandClient(shardClient, {
  useClusterClient: false,
});

(async () => {
  console.log("Starting ShardClient");
  await shardClient.run();
  console.log("ShardClient Started, Starting InteractionCommandClient");
  await interactionCommandClient.run();
  console.log("InteractionCommandClient Started");
})();
