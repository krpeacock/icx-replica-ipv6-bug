import { createActor } from "../declarations/connection_refused_backend/index.js";
import dotenv from "dotenv";
dotenv.config();

process.env.CONNECTION_REFUSED_BACKEND_CANISTER_ID; //?

const main = async () => {
  const connection_refused_backend = createActor(
    process.env.BACKEND_CANISTER_ID,
    {
      agentOptions: {
        host: "http://localhost:4943",
      },
    }
  );
  const result = await connection_refused_backend.greetSlow("frontend"); //?
  result;
};
main();
