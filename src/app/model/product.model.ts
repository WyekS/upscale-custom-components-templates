import { MediaData } from "./media.model";
import { PriceData } from "./price.model";

export class ProductData {
    code: string;
    name: string;
    price: PriceData;
    media: MediaData[];
    type: string;

    constructor(code: string, name: string, price: PriceData, media: MediaData[], type: string) {
        this.code = code;
        this.name = name;
        this.price = price;
        this.media = media;
        this.type = type;
    }
}
