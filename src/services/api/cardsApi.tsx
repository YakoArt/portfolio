import * as data from '../../data/bd/catalog/face-care/product.json';

export class CardApi {
    dBase: any;
    constructor() {
        this.dBase = { ...data };
        // console.log(this.dBase);
    }
    dataCard() {
        return this.dBase;
    }
}
