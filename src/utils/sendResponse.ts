import type { Response } from "express";

const sendResponse = <T>(res: Response, {message, data, error}: {message: unknown, data?: T, error? : boolean}, status = 200):void => {
    res.status(status).json({
        success: error? false: true,
        message: message,
        data: error? undefined :data
    })
}

export default sendResponse