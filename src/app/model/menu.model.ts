type Option = [string, string];

export default class Menu {
    private _items:Array<Option>;

    constructor(options:Array<Option>) {
        this._items = options;
    }

    get items() {
        return this._items;
    }
}
