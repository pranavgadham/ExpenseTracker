import app from "./index.js";
import { connectToMongoDB } from "./src/config/mongodb.js";

const port = process.env.PORT

app.listen(port, () => {
  console.log(`server is listening at port ${port}`);
  connectToMongoDB();
});
