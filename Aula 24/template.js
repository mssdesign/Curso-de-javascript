const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
  };
  function makeList(arr) {
    // Only change code below this line
    for(var i = 0, failureItems = []; i < 3; i++) {
      var items = `<li class="text-warning">${result.failure[i]}</li>`;

      failureItems.push(items);
    };  
    // Only change code above this line
  
    console.log(failureItems);
  }
  
  const failuresList = makeList(result.failure);