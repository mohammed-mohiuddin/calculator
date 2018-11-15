import * as ActionTypes from './ActionTypes';

export const Operations = (state={operations: [], interimResult: ""}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_INPUT:
            var character = action.payload;
            return {...state, operations: state.operations.concat(character)};
        case ActionTypes.REMOVE_INPUT:
            return {...state, operations: state.operations.slice(0, -1)};
        case ActionTypes.CLEAR_INPUT:
            return {...state, operations: []};
        case ActionTypes.ADD_RESULT:
            return {...state, operations: [action.payload]};
        case ActionTypes.COPY_RESULT:
            const intermediateResult = state.operations.join('');
            return {...state, interimResult: intermediateResult};
        case ActionTypes.PASTE_RESULT:
            const copiedResult = state.interimResult
            return {...state, operations: state.operations.concat(copiedResult), interimResult: ""}
        default:
            return state;
    }
};