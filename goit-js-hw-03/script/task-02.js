'use strict';

const countProps = function(obj) {
  let total = 0;
  const properties = Object.entries(obj);
  for (const property of properties) {
    total += 1;
  }
  return total;
};

console.log(countProps({}));

console.log(countProps({ name: 'Mango', age: 2 }));

console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }));
