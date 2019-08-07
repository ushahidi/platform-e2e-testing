import * as dotenv from 'dotenv';
import * as process from 'process';

dotenv.config();


const config = {
    DEPLOYMENT_URL: process.env.TC_DEPLOYMENT_URL,
    EMAIL: process.env.TC_EMAIL,
    PASSWORD: process.env.TC_PASSWORD,
}  

export default config;