import { ErrorRequestHandler } from 'express';

export const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
    const status = (err as any).statusCode || 500;

    //console.log(err);

    res.status(status).json({
        status: 'error',
        message: err.message || 'Neznámá chyba',
    });
};
