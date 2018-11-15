import {Labels} from '../labels';
import * as types from '../ActionTypes';
import {labels} from '../../shared/labels';

describe('labels reducer', () => {
  it('should return the initial state', () => {
    expect(Labels(undefined, {})).toEqual({labels: []})
  });
  
  it('should handle ADD_LABELS', () => {
    expect(
        Labels({labels: []}, {
        type: types.ADD_LABELS,
        payload: labels
         })
    ).toEqual({labels: labels})
  });
});