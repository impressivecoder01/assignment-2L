import type { NextFunction, Request, Response } from "express";
import config from "../config";

export const errorHandler = (err: unknown, req: Request, res: Response, next: NextFunction) => {
    res.status(500).json({
        success: false,
        message: err instanceof Error? err.message: "Issue there",
        stack: config.node_env === 'development' && err instanceof Error ? err.stack: undefined
    })
}