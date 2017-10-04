import { applyMiddleware, compose, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { IGlobalState } from '../models/state/globalState';

import AppReducer from './appReducer';
import CardReducer from './cardReducer';
import WorksReducer from './worksReducer';


const enhancer = compose(
    applyMiddleware(
        thunk.withExtraArgument({})
    )
);

const rootReducer =  combineReducers<IGlobalState>({
    app: AppReducer.handle,
    card: CardReducer.handle,
    worksReducer: WorksReducer.handle
  });
// Add the reducer to your store on the `routing` key
export const store = createStore<IGlobalState>(rootReducer, enhancer);