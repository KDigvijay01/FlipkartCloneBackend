import express from "express";
import { Connection } from "./databases/db.js";
import dotenv from "dotenv";
import DefaultData from "./default.js";
import router from "./routes/route.js";
import cors from "cors";
import bodyParser from "body-parser";
import {v4 as uuid} from "uuid";
// import path from "path";



// import { fileURLToPath } from 'url';
// import { dirname } from 'path';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);


const app= express();

// 49.37.65.195/32
// Digvijay995577

// kumardigvijay01
dotenv.config();
app.use(cors());
app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', router);

// app.get("/", (req, res) => {
//     app.use(express.static(path.resolve(__dirname, "client", "build")));
//     res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
//   });


const PORT=process.env.PORT || 8000;

const USERNAME=process.env.DB_USERNAME;
const PASSWORD=process.env.DB_PASSWORD;

Connection(USERNAME, PASSWORD);

app.listen(PORT, ()=>{
    console.log(`Server is running successfully on port ${PORT}`);

})

DefaultData();


export let paytmMerchantKey=process.env.PAYTM_MERCHANT_KEY;
export let paytmParams={};
paytmParams['MID']=process.env.PAYTM_MID;
paytmParams['WEBSITE']=process.env.PAYTM_WEBSITE;
paytmParams['CHANNEL_ID']=process.env.PAYTM_CHANNEL_ID;
paytmParams['INDUSTRY_TYPE_ID']=process.env.PAYTM_INDUSTRY_TYPE_ID;
paytmParams['ORDER_ID']=uuid();
paytmParams['CUST_ID']=process.env.PAYTM_CUST_ID;
paytmParams['TXN_AMOUNT']='100';
paytmParams['CALLBACK_URL']=`http://localhost:8000/callback`;
paytmParams['EMAIL']='developerdigvijay@gmail.com';
paytmParams['MOBILE_NO']='9988665533';





