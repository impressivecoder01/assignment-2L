import type { Request, Response } from "express";
import authService from "../services/auth.service";
import sendResponse from "../../utils/sendResponse";

export const signup = async (req: Request, res: Response) => {
    // const {name, email, password, role} = req.body
    const user = await authService.createUser(req.body)
    if(!user){
        sendResponse(res, {message: "User registered successfully"}, 400)
        return
    }
    sendResponse(res, {message: "User registered successfully",  data: user}, 201)
}