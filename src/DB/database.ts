import mongoose from 'mongoose';


const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI || "", {
            dbName: process.env.DB_NAME,
        });
    } catch (error) {
        console.error('Database connection error:', error);
    }
}

mongoose.connection.on('connecting', () => {
    console.log('Connecting to MongoDB...');
});

mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB');
});

mongoose.connection.on('error', (error) => {
    console.error('MongoDB connection error:', error);
});

mongoose.connection.on('disconnected', () => {
    console.log('MongoDB disconnected');
});
export default connectDB;