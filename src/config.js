import {config} from 'dotenv'
config()
export const MONGODB_URI=process.env.MONGODB_URI
export const PORT=process.env.PORT || 3000
export const DB_NAME=process.env.DB_NAME
export const RESTHOST=process.env.RESTHOST
