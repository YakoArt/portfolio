import { IAppState } from './appState';
import { ICardState } from './components/cardState';
import { IWorksState } from './components/worksState';

// tslint:disable-next-line:interface-name
export interface IGlobalState {
    app: IAppState;
    card: ICardState;
    /* загрзка базы работ (1. Пустого объекта) из json в state */
    worksState: IWorksState; 
}