import * as actions from '../ActionCreators';
import * as types from '../ActionTypes';


// ======== addInput ==========
describe('actions', () => {
    it('should create an action to addInput', () => {
      const payload = 'payload'
      const expectedAction = {
        type: types.ADD_INPUT,
        payload
      }
      expect(actions.addInput(payload)).toEqual(expectedAction)
    })
  })

// ======== removeInput ==========
  describe('actions', () => {
    it('should create an action to removeInput', () => {
      const expectedAction = {
        type: types.REMOVE_INPUT,
      }
      expect(actions.removeInput()).toEqual(expectedAction)
    })
  })

  // ======== clearInput ==========
  describe('actions', () => {
    it('should create an action to clearInput', () => {
      const expectedAction = {
        type: types.CLEAR_INPUT,
      }
      expect(actions.clearInput()).toEqual(expectedAction)
    })
  })

  // ======== addResult ==========
  describe('actions', () => {
    it('should create an action to addResult', () => {
      const payload = 'payload'
      const expectedAction = {
        type: types.ADD_RESULT,
        payload: payload
      }
      expect(actions.addResult(payload)).toEqual(expectedAction)
    })
  })

  // ======== copyResult ==========
  describe('actions', () => {
    it('should create an action to copyResult', () => {
      const expectedAction = {
        type: types.COPY_RESULT,
      }
      expect(actions.copyResult()).toEqual(expectedAction)
    })
  })

  // ======== pasteResult ==========
  describe('actions', () => {
    it('should create an action to pasteResult', () => {
      const expectedAction = {
        type: types.PASTE_RESULT,
      }
      expect(actions.pasteResult()).toEqual(expectedAction)
    })
  })

  // ======== addLabels ==========
  describe('actions', () => {
    it('should create an action to addLabels', () => {
      const payload = 'payload'
      const expectedAction = {
        type: types.ADD_LABELS,
        payload: payload
      }
      expect(actions.addLabels(payload)).toEqual(expectedAction)
    })
  })
