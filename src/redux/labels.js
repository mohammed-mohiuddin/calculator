import * as ActionTypes from './ActionTypes';

export const Labels = (state={labels: []}, action) => {
    switch (action.type){
        case ActionTypes.ADD_LABELS:
            return {...state, labels: action.payload};
        default:
            return state;
    }
};