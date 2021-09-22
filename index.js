// Code your solution in this file!
function returnFirstTwoDrivers(arr) {
  let arrReturn = [];
  for (let i = 0; i <= 1; i++) {
    arrReturn.push(arr[i]);
  }
  return arrReturn;
}
//----------------------------------------------------
const returnLastTwoDrivers = function (arr) {
  return arr.slice(arr.length - 2);
};
//--------------------------------------------------------
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

//--------------------------------------------------------
function createFareMultiplier(int) {
  return function (fare) {
    return int * fare;
  };
}

function fareDoubler(fare) {
  return fare * 2;
}

function fareTripler(fare) {
  return fare * 3;
}

function selectDifferentDrivers(arr, someFunction) {
  if (arr.includes(someFunction)) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === someFunction) {
        let dataFunc = arr[i];
        return dataFunc();
      }
    }
  } else {
    return false;
  }
}
