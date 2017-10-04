import * as Redux from 'redux';
// import { CardApi } from '../services/api/cardsApi';
import { WorksApi }  from '../services/api/worksApi';

import { IGlobalState } from '../models/state/globalState';
// import { FilterActions } from './filterActions'

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

    static getWorks(): (dispatch: Redux.Dispatch<any>, getState: () => IGlobalState, thunkService: any) => any {
        return (dispatch: Redux.Dispatch<any>, getState: () => IGlobalState, thunkService: any) => {
            console.log('(Action)-> Works/readJSON was done');
            dispatch({
                type: 'Works/readJSON'
                , payload: WorksApi
            });
        };
    }

    static setCategoryWork(Category:string): (dispatch: Redux.Dispatch<any>, getState: () => IGlobalState, thunkService: any) => any {
        return (dispatch: Redux.Dispatch<any>, getState: () => IGlobalState, thunkService: any) => {
            console.log('(Action)-> Works/setCategory was done');
            dispatch({
                type: 'Works/setCategory',
                payload: Category
            });
        };
    }



}
