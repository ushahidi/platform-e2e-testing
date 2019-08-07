import * as dotenv from 'dotenv';
import * as process from 'process';

dotenv.config();


const config = {
    DEPLOYMENT_URL: process.env.DEPLOYMENT_URL,
    USERNAME: process.env.USERNAME,
    PASSWORD: process.env.PASSWORD,
}  

export default config;