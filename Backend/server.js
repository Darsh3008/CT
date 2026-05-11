const app = require('./app');
const connectDB = require('./src/config/database.js');
const PORT = process.env.PORT || 3000;
connectDB()
.then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });     
}).catch((error) => {
    console.error("Failed to connect to the database:", error);
});