import { app, HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";

export async function message(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
    context.log(`Http function processed request for url "${request.url}"`);
    return { body: `{ "text" : "Hello from the API" }` };
};

app.http('message', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: message
});
