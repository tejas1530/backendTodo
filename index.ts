import app from "./app";
import connectDB from "./src/DB/database";
import config from "./src/config/config";

connectDB()
// Example usage of Dotenv
const PORT = process.env.PORT || 3000;


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
