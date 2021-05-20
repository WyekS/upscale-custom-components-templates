export class UppEvent<T> {
    type: string;
    data: T;

    constructor(type: string, data: T) {
        this.type = type;
        this.data = data;
    }
}

// Event handler to be able to receive events from SAP Upscale Commerce.
export const initEvent = new UppEvent('initialized', null);