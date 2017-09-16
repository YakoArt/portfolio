import { CardState, ICardState } from '../models/state/components/cardState';

export default class AppReducer {
    static handle(state: any = new CardState, action: any): ICardState {

        switch (action.type) {
            case 'Card/Base': {
                let Data = new action.payload;
                let Base = Data.dBase;
                return {...state, Base};
            }
            default: {
                return state;
            }
        }
    }
}