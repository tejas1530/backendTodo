import app from "./app.js";
import connectDB from "./src/DB/database.js";
import config from "./src/config/config.js";

connectDB()
// Example usage of Dotenv
const PORT = process.env.PORT || 3000;

 
// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
