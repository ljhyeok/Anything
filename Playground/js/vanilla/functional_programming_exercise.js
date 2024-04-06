/**
 * 강의 실습 : https://github.com/indongyoo/functional-javascript/tree/master/%EC%9D%B8%ED%94%84%EB%9F%B0-%EB%8F%99%EC%98%81%EC%83%81-%EA%B0%95%EC%9D%98-%EC%98%88%EC%A0%9C
 * 강의를 들은 내용을 토대로 직접 구현 해보고, 계속 반복하는 공간입니다.
 */
export function sample() {
  return "test";
}
/**
 * 함수를 리턴하는 형태로 구현
 * 인자가 2개이면 inner 함수에서 리턴 값으로 outer 함수의 인자 값으로 받은 함수의 실행 결과를 리턴 하도록 구현
 * 그게 아니면, 리턴 함수의 리턴으로 함수를 정의하고 해당 함수의 리턴 값으로 outer 함수의 인자로 받은 함수의 실행 결과 값을 전달
 */
export function _curry(fn) {
  return function (a, b) {
    // TODO
  }
}

/**
 * curry 함수와 기능은 같지만, 함수 실행 시점을 바꾸는 역할을 구현
 * @param {*} fn 
 * @returns 
 */
export function _curryr(fn) {
  return function (a, b) {
    // TODO
  }
}

// TODO: 객체의 key값을 인자로 받으면, value를 가져오는 함수 정의
// export var _get;

// 두 번째 인자로 받은 함수를 통해, 해당 조건에 맞는 값들을 리턴하는 함수
export function _filter(list, predi) {
  console.log("test");
  // TODO
}

// 두 번째 인자로 받은 함수를 통해, 해당 함수 실행 결과에 맞는 값을 리턴하는 함수
export function _map(list, mapper) {
  // TODO
}

/**
 * 객체인지 판단하는 함수
 * @param {*} obj 
 */
export function _is_object(obj) {
  // TODO
}

/**
 * 객체의 키 값을 가져오는 함수
 */
export function _keys(obj) {
  // TOO
}

// export var _length = _get('length');

// 순회하면서 함수를 실행시키는 함수
export function _each(list, iter) {
  // TOO
}


var slice = Array.prototype.slice;
export function _rest(list, num) {
  return slice.call(list, num || 1);
}

// 순회하면서 함수를 실행시키고, 해당 결과 값을 memoization하여 리턴하는 함수
export function _reduce(list, iter, memo) {
  // TODO
}

// 함수를 인자로 여러개 받아서 순차적으로 실행 시키는 함수
export function _pipe() {
  // TODO
}

// 인자를 받아 결과를 바로 산출해내는 함수
export function _go(arg) {
  // TODO
}

var _values = _map(_identity);

export function _identity(val) {
  return val;
}

// 키 값을 받아서 해당 값만 가져오는 함수 
// export var _pluck = 

/**
 * 예측 하는 함수의 반대되는 결과 값을 반환
 * @param {*} func 
 * @returns 
 */
export function _negate(func) {
  // TODO
}

// 예상 함수 리턴 값의 반대되는 값들만 가져옴
// export var _reject = 

// 유효한 값만 가져오는 함수
// export var _compact = 

// 찾고자 하는 것의 첫번째 값만 가져오는 함수
// var _find = 

// 찻고자 하는 것의 첫번째 인덱스를 리턴해주는 함수
// var _find_index =

// 만족하는 조건이 하나라도 있는지 확인하는 함수
export function _some(data, predi) {
  TODO
}

// 모든 조건을 만족하는지 체크하는 함수
export function _every(data, predi) {

}


