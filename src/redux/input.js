import * as ActionTypes from './ActionTypes';

export const Operations = (state={operations: [], interimResult: ""}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_INPUT:
            var character = action.payload;
            return {...state, operations: state.operations.concat(character)};
        case ActionTypes.CLEAR_INPUT:
            return {...state, operations: []};
        case ActionTypes.ADD_RESULT:
            return {...state, operations: [action.payload]};
        case ActionTypes.COPY_RESULT:
            return {...state, interimResult: state.operations};
        case ActionTypes.PASTE_RESULT:
            return {...state, operations: state.operations.concat(state.interimResult), interimResult: ""}
        default:
            return state;
    }
};