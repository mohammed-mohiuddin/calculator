import * as math from 'mathjs';

export const CalculateOperations = (operations) => {
        let result = operations.join('')
        if (result) {
          result = math.eval(result)
          result = math.format(result, { precision: 14 })
          result = String(result)
          return [result];
        }
    }
