import express, { type Application, type Request, type Response } from "express"
import { errorHandler } from "./middleware/errorHandler";


const app:Application = express();


app.get('/',(req: Request, res: Response)=>{
    throw Error ('server issue') 
    res.send('ok')
})
app.use(errorHandler)

export default app