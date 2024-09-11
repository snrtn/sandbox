import createApp from "./app.js";

const port = 3000;

(async () => {
  const app = await createApp();

  app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });
})();
