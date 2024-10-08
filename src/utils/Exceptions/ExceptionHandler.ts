"use strict";
class ExceptionHandler {
    /**
     *
     * @param {httpCode, code, message, data} error
     * @param request
     * @param response
     */
    async handle(error: any, { request, response }: { request: any; response: any }) {
        let code = 500,
            message = "",
            data = {},
            httpCode = 200;
        if (typeof error !== "object") {
            error = new Error(error);
        }
        code = Number(error.code) || 500;
        message = error.message || "";
        data = error.data || error.stack || {};
        httpCode = error.httpCode || 200;
        console.log("ERROR:", error);

        const exceptionName = error.constructor.name;

        response.status(httpCode).send({
            code,
            message,
            data,
        });
    }
}

export default ExceptionHandler;
