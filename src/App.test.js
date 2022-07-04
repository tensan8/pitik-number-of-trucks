import { render, screen } from '@testing-library/react';
import App from './App';

// Test data for counting trucks without odd-even rule
const normalCases = [
  {'operational': 1, 'maintenance': 0, 'result': 1},
  {'operational': 1, 'maintenance': 1, 'result': 2},
  {'operational': 2, 'maintenance': 1, 'result': 3},
  {'operational': 3, 'maintenance': 1, 'result': 4},
  {'operational': 3, 'maintenance': 2, 'result': 5},
  {'operational': 3, 'maintenance': 3, 'result': 6},
  {'operational': 2, 'maintenance': 5, 'result': 7},
  {'operational': 5, 'maintenance': 3, 'result': 8},
  {'operational': 2, 'maintenance': 7, 'result': 9},
  {'operational': 3, 'maintenance': 7, 'result': 10}
]

// The result belongs to both Odd and Even. Result of 1 means 1 odd truck and 1 even truck.
const oddEvenCases = [
  {'operational': 1, 'maintenance': 0, 'result': 1},
  {'operational': 1, 'maintenance': 1, 'result': 1},
  {'operational': 2, 'maintenance': 1, 'result': 2},
  {'operational': 3, 'maintenance': 1, 'result': 2},
  {'operational': 3, 'maintenance': 2, 'result': 3},
  {'operational': 3, 'maintenance': 3, 'result': 3},
  {'operational': 2, 'maintenance': 5, 'result': 4},
  {'operational': 5, 'maintenance': 3, 'result': 4}
]

// Count the number of required trucks to deliver chicken everyday
const count = (operational, maintenance, oddEvenStatus) => {
  // If odd-even switch was toogled
  if(oddEvenStatus)
    return Math.ceil((operational + maintenance) / 2);
  return operational + maintenance; // Otherwise return the count for number of trucks without considering odd-even rule
}

// Loop through the data, pass it to the defined function, assert the result according to the specified test data
test('Test count number of trucks without even-odd', () => {
  for(var i = 0; i < normalCases.length; i++) {
    expect(count(normalCases[i].operational, normalCases[i].maintenance, false)).toEqual(normalCases[i].result);
  }
});

test('Test count number of trucks WITH even-odd', () => {
  for(var i = 0; i < oddEvenCases.length; i++) {
    expect(count(oddEvenCases[i].operational, oddEvenCases[i].maintenance, true)).toEqual(oddEvenCases[i].result);
  }
});