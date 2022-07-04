import { render, screen } from '@testing-library/react';
import App from './App';

// Count the number of required trucks to deliver chicken everyday
// Time Complexity: O(1)
const count = (operational, maintenance) => {
  if(operational == maintenance || (operational > maintenance && maintenance > 0)) {
    return 2;
  }

  var truckNum = maintenance + 1;

  if(maintenance > operational && operational > 1) {
    const difference = maintenance - operational;
    const offset = operational - 2;
    truckNum -= difference;
    truckNum -= offset;
  }
  
  if(maintenance > 2 * operational && operational > 1) {
    const folds = ((maintenance / operational)*1.0) | 0;
    truckNum = truckNum + (folds - 1);
  }

  return truckNum;
}

/* 
// The test cases were written one-by-one (without map or array) to make the debugging process of the function to be easier
// In case you want to see how the tests look like if we use list of Maps, here's the code

const cases = [
  {'operational': 1, 'maintenance': 0, 'result': 1},
  {'operational': 1, 'maintenance': 1, 'result': 2},
  {'operational': 2, 'maintenance': 1, 'result': 2},
  {'operational': 2, 'maintenance': 2, 'result': 2},
  {'operational': 3, 'maintenance': 2, 'result': 2},
  {'operational': 5, 'maintenance': 3, 'result': 2},
  {'operational': 2, 'maintenance': 5, 'result': 4},
  {'operational': 2, 'maintenance': 7, 'result': 5},
  {'operational': 3, 'maintenance': 7, 'result': 4},
  {'operational': 3, 'maintenance': 20, 'result': 8},
  {'operational': 2, 'maintenance': 3, 'result': 3},
  {'operational': 3, 'maintenance': 5, 'result': 3},
  {'operational': 3, 'maintenance': 6, 'result': 3}
]

test('Test count number of trucks', () => {
  for(var i = 0; i < cases.length; i++) {
    expect(count(cases[i].operational, cases[i].maintenance)).toEqual(cases[i].result);
  }
});
*/

// Test 1
test('Test Operational: 1, Maintenance: 0', () => {
  expect(count(1, 0)).toEqual(1);
});

// Test 2
test('Test Operational: 1, Maintenance: 1', () => {
  expect(count(1, 1)).toEqual(2);
});

// Test 3
test('Test Operational: 2, Maintenance: 1', () => {
  expect(count(2, 1)).toEqual(2);
});

// Test 4
test('Test Operational: 2, Maintenance: 2', () => {
  expect(count(2, 2)).toEqual(2);
});

// Test 5
test('Test Operational: 3, Maintenance: 2', () => {
  expect(count(3, 2)).toEqual(2);
});

// Test 6
test('Test Operational: 5, Maintenance: 3', () => {
  expect(count(5, 3)).toEqual(2);
});

// Test 7
test('Test Operational: 2, Maintenance: 5', () => {
  expect(count(2, 5)).toEqual(4);
});

// Test 8
test('Test Operational: 2, Maintenance: 7', () => {
  expect(count(2, 7)).toEqual(5);
});

// Test 9
test('Test Operational: 3, Maintenance: 7', () => {
  expect(count(3, 7)).toEqual(4);
});

// Test 10
test('Test Operational: 3, Maintenance: 20', () => {
  expect(count(3, 20)).toEqual(8);
});

// Test 11
test('Test Operational: 2, Maintenance: 3', () => {
  expect(count(2, 3)).toEqual(3);
});

// Test 12
test('Test Operational: 3, Maintenance: 5', () => {
  expect(count(3, 5)).toEqual(3);
});

// Test 13
test('Test Operational: 3, Maintenance: 6', () => {
  expect(count(3, 6)).toEqual(3);
});