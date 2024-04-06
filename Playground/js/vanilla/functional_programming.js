/**
 * 함수형 프로그래밍 연습 공간입니다.
 */
function getRandomUpperCaseLetter() {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const randomIndex = Math.floor(Math.random() * alphabet.length);
  return alphabet[randomIndex];
}

const users = Array.from(Array(20)).map((_, i) => ({
  id: i + 1,
  name: getRandomUpperCaseLetter() + getRandomUpperCaseLetter(),
  age: 20 + i
}));

// filter 구현하기
function _filter(list, predi) {
  const result = [];
  for (let i = 0; i < list.length; i++) {
    if (predi(list[i])) result.push(list[i])
  }
  return result;
}

console.log(_filter(users, function (user) {
  return user.age >= 30;
}));

console.log(_filter(users, function (user) {
  return user.age < 30;
}));

console.clear();

// mapper 구현하기
function _map(list, mapper) {
  const result = [];
  for (let i = 0; i < list.length; i++) {
    result.push(mapper(list[i]));
  }
  return result;
}

var over_30 = _filter(users, function (user) {
  return user.age >= 30;
});

console.log(_map(over_30, function (user) {
  return user.name;
}));


console.clear();

// currying 구현
function _curry(fn) {
  return function (a) {
    return function (b) {
      return fn(a, b)
    }
  }
}

function _curryr(fn) {
  return function (a, b) {
    return arguments.length === 2 ? fn(a, b) : function (b) {
      return fn(b, a);
    }
  }
}

var add = _curry(function (a, b) {
  return a + b;
})
var add10 = add(10);

console.log(add10(5));

console.clear();

var sub = _curryr(function (a, b) {
  return a - b;
});

var sub10 = sub(10);
console.log(sub10(3));

console.clear();

// get 구현하기
var _get = _curryr(function (obj, key) {
  return obj === null ? undefined : obj[key];
})
var user1 = users[0];
console.log(_get(user1, "name"));
console.log(_get("name")(user1));

var get_name = _get("name");
console.log(get_name(users[0]));
console.log(get_name(users[4]));
console.log(get_name(users[8]));

console.clear();

console.log(_map(
  _filter(users, function (user) {
    return user.age >= 30;
  }),
  get_name
));

console.log(_map(
  _filter(users, function (user) {
    return user.age < 30;
  }),
  _get("age")
));


// rest 구현하기
const slice = Array.prototype.slice;
function _rest(list, num) {
  return slice.call(list, num || 1);
}

// reduce 구현하기
function _reduce(list, iter, memo) {
  if (arguments.length === 2) {
    memo = list[0];
    list = _rest(list, 1);
  }
  for (let i = 0; i < list.length; i++) {
    memo = iter(memo, list[i])
  }
  return memo;
}
// console.clear();

// console.log(_reduce([1, 2, 3], function (a, b) {
//   return a + b;
// }, 0));

// console.log(_reduce([1, 2], function (a, b) {
//   return a + b;
// }));

// keys 구현
function _is_object(obj) {
  return typeof obj === "object" && !!obj;
}

function _keys(obj) {
  return _is_object(obj) ? Object.keys(obj) : [];
}

var _length = _get("length");

function _each(list, iter) {
  var keys = _keys(list);
  for (var i = 0, len = keys.length; i < len; i++) {
    iter(list[keys[i]])
  }
  return list;
}

_each({
  13: "ID",
  7: "HD",
  29: "JD"
}, function (name) {
  console.log(name);
})

_each([1, 2, 3, 4], function (value) {
  console.log(value);
}) 
