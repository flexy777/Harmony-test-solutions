var newType = {};
function elements(array) {
  array.forEach(function (item) {
    var type = typeof item;

    const newType2 = {
      [type]: item,
    };

    newType = Object.assign(newType2, newType);
  });
  console.log(newType);
}

elements([1, "test", true, [1, 2, 3], null]);  // outputs {object: Array(3), boolean: true, string: 'test', number: 1}

