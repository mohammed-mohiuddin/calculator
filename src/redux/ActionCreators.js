import * as ActionTypes from './ActionTypes';
import {CalculateOperations} from '../components/Calculate';
import {labels} from '../shared/labels';

//========== labels ==============

export const addLabels = (labelsArr) => ({
    type: ActionTypes.ADD_LABELS,
    payload: labelsArr
});

export const fetchLabels = () => (dispatch) => {
    dispatch(addLabels(labels));
};


//========== display ==============
export const addInput = (character) => ({
    type: ActionTypes.ADD_INPUT,
    payload: character
});

export const removeInput = () => ({
    type: ActionTypes.REMOVE_INPUT,
});

export const clearInput = () => ({
    type: ActionTypes.CLEAR_INPUT
});

export const addResult = (result) => ({
    type: ActionTypes.ADD_RESULT,
    payload: result
});

export const copyResult = () => ({
    type: ActionTypes.COPY_RESULT,
});

export const pasteResult = () => ({
    type: ActionTypes.PASTE_RESULT,
});

