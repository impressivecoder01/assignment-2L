import express, { type Application, type Request, type Response } from "express"
import { errorHandler } from "./middleware/errorHandler";
import authRoutes from  "./api/routes/auth.route"

const app:Application = express();

app.use(express.json())


app.get('/',(req: Request, res: Response)=>{
    // throw Error ('server issue') 
    res.send('ok')
})

app.use("/api/auth",authRoutes)
app.use(errorHandler)

export default app