import { IAppState } from './appState';
import { ICardState } from './components/cardState';

// tslint:disable-next-line:interface-name
export interface IGlobalState {
    app: IAppState;
    card: ICardState;
}