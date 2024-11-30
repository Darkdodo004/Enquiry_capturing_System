import { google } from "googleapis";
import config from "./config/config.js";

const scope=["https://www.googleapis.com/auth/spreadsheets"];

const{GOOGLE_SHEET_CLIENT_EMAIL,GOOGLE_SHEET_PRIVATE_KEY}=config;
const sheetClient=new google.auth.JWT(GOOGLE_SHEET_CLIENT_EMAI,null,GOOGLE_SHEET_PRIVATE_KEY,scope);

export const sheet=google.sheet({
    version: 'v4',
    auth:sheetClient
})

