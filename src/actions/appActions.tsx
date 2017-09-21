import * as Redux from 'redux';
import { CardApi } from '../services/api/cardsApi';

import { IGlobalState } from '../models/state/globalState';

export class AppActions {

    static showSpinner(): (dispatch: Redux.Dispatch<any>, getState: () => IGlobalState, thunkService: any) => any {
        return (dispatch: Redux.Dispatch<any>, getState: () => IGlobalState, thunkService: any) => {
            return Promise.resolve(dispatch({
                type: 'App/Spinner/Show'
            }));
        };
    }

    static hideSpinner(): (dispatch: Redux.Dispatch<any>, getState: () => IGlobalState, thunkService: any) => any {
        return (dispatch: Redux.Dispatch<any>, getState: () => IGlobalState, thunkService: any) => {
            return Promise.resolve(dispatch({
                type: 'App/Spinner/Hide'
            }));
        };
    }

    static cards(): (dispatch: Redux.Dispatch<any>, getState: () => IGlobalState, thunkService: any) => any {
        return (dispatch: Redux.Dispatch<any>, getState: () => IGlobalState, thunkService: any) => {
            dispatch({
                type: 'Card/Base'
                , payload: CardApi
            });
        };
    }

}
