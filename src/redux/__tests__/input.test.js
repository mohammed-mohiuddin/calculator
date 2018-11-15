import {Operations} from '../input';
import * as types from '../ActionTypes';

describe('input reducer', () => {
  it('should return the initial state', () => {
    expect(Operations(undefined, {})).toEqual({operations: [], interimResult: ""})
  });

  it('should handle ADD_INPUT', () => {
    expect(
        Operations({operations: [], interimResult: ""}, {
        type: types.ADD_INPUT,
        payload: "1"
      })).toEqual({operations: ["1"], interimResult: ""})
    });

    it('should handle REMOVE_INPUT', () => {
        expect(
            Operations({operations: ["1"], interimResult: ""}, {
            type: types.REMOVE_INPUT,
        })).toEqual({operations: [], interimResult: ""})
    });

    it('should handle CLEAR_INPUT', () => {
        expect(
            Operations({operations: ["1", "2"], interimResult: ""}, {
            type: types.CLEAR_INPUT,
          })).toEqual({operations: [], interimResult: ""})
    });

    it('should handle ADD_RESULT', () => {
        expect(
            Operations({operations: ["1", "2"], interimResult: ""}, {
            type: types.ADD_RESULT,
            payload: "5"
        })).toEqual({operations: ["5"], interimResult: ""})
    });

    it('should handle COPY_RESULT', () => {
        expect(
            Operations({operations: ["25"], interimResult: ""}, {
            type: types.COPY_RESULT,
        })).toEqual({operations: ["25"], interimResult: "25"})
    });

    it('should handle PASTE_RESULT', () => {
        expect(
            Operations({operations: ["25", "+"], interimResult: "25"}, {
            type: types.PASTE_RESULT,
        })).toEqual({operations: ["25", "+", "25"], interimResult: ""})
    });
})