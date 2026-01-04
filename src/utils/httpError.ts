export const httpError = (statusCode: number, message: string) => {
    const err = new Error(message) as any;
    err.statusCode = statusCode;
    return err;
};
