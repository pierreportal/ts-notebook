import Express from "express";

const app = Express();

import { exec } from "child_process";

async function startContainerC(image: string) {
  try {
    await exec(`export VM_CONTAINER_IMAGE=${image}`);
    const command = `docker-compose up -d --no-deps --force-recreate vm`;

    const { stdout, stderr } = await exec(command);
    console.log("VM started:");
  } catch (error) {
    console.error("Error starting VM:", error);
  }
}

app.get("/start-container", async (req, res) => {
  await startContainerC("node:16-alpine");
  res.send("Container started and listening for commands.");
});

app.listen(5555, () => console.log("Server running on port 5555"));
