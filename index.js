import express from "express";
import config from "./config/config.js";
import router from "./router/router.js";


const app=express();
const { PORT }=config;

app.use(express.json());
app.use('/',router);

app.listen(PORT,()=>{
    console.info(`server is running on port ${PORT}`);
});