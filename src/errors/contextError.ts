export class ContextError extends Error {
    constructor(providerName: string) {
        super();
        this.name = 'ContextError';
        this.message = `Context <${providerName}> has not been defined.'}`;
    }
}
