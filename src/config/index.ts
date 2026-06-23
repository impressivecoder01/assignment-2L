import dotenv from 'dotenv'
dotenv.config({quiet: true})
const config = {
    port: process.env.PORT as string,
    database_url: process.env.DATABASE_URL as string,
    node_env: process.env.NODE_ENV as string
}
// console.log(config.database_url);
export default config