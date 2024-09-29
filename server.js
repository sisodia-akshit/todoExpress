const http = require('http');
const mongoose = require('mongoose')
const dotenv = require('dotenv');

const app = require('./app')
dotenv.config({ path: './config.env' });

mongoose.connect(process.env.CONN_URL, {
});

mongoose.connection.on('connected', () => {
    console.log('Mongo has connected succesfully')
});
mongoose.connection.on('reconnected', () => {
    console.log('Mongo has reconnected')
});
mongoose.connection.on('error', (error) => {
    console.log('Mongo connection has an error', error);
    mongoose.disconnect()
});
mongoose.connection.on('disconnected', () => {
    console.log('Mongoose connection disconnected')
})


const server = http.createServer(app);
server.listen(process.env.PORT,()=>{
    console.log(`Server is running on port localhost:${process.env.PORT}`);
})
