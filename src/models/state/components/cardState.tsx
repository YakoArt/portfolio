// tslint:disable-next-line:interface-name
export interface ICardState {
    // name: string;
    db: any
}
   
export class CardState implements ICardState {
    db: any;

    constructor() {
        // console.log('cardState');
        this.db = {};
    }
}