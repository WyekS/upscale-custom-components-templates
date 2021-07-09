export class UppEvent<T> {
    type: string;
    data!: {
        eventType: string;
        keys: T;
    };

    constructor(type: string, data: any) {
        this.type = type;
        this.data = data;
    }
}

// Event handler to be able to receive events from SAP upp Commerce.
export const initEvent = new UppEvent('initialized', null);