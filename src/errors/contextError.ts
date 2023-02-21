export class ContextError extends Error {
    constructor(providerName: string) {
        super();
        this.name = 'ContextError';
        this.message = `Hook <${providerName}> is undefined.'}`;
    }
}
