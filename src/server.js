const app = require("./index");
const connect = require("./configs/db");
app.listen(3434, async () => {
  await connect();
  console.log("listning on port 3434");
});
