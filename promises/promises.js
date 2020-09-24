
var add = function (x, y) {
  console.log('add');
  return new Promise((resolve, reject) => {
    try {
      let sum = x + y;
      setTimeout(() => {
        resolve(sum);
      }, 2000);
    } catch (e) {
      reject(Error("It broke", e));
    }
  })
}

var substract = function (x, y) {
  console.log('substract');
  return new Promise((resolve, reject) => {
    try {
      let sum = x - y;
      setTimeout(() => {
        resolve(sum);
      }, 2000);
    } catch (e) {
      reject(Error("It broke", e));
    }
  })
}

add(2,2)
  .then((added) => {
    console.log('then', added)
    return substract(added, 2)
  })
  .then((substracted) => {
    console.log('then', substracted)
  })