import app from "./app";
import connectDB from "./DB/database";
import config from "./config/config";

connectDB()
// Example usage of Dotenv
const PORT = process.env.PORT || 3000;


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
