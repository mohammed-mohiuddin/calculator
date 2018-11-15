import {labels} from '../labels';

// ======== ADD_INPUT ==========
describe('labels', () => {
    it('should return an array of labels', () => {
      const testLabels = ["1", 
      "2", 
      "3", 
      "x", 
      "4", 
      "5", 
      "6", 
      "=", 
      "7", 
      "8", 
      "9", 
      "C", 
      "0", 
      ".", 
      "/", 
      "copy", 
      "+", 
      "-", 
      "*",  
      "paste"];
      expect(labels).toEqual(testLabels)
    })
  })