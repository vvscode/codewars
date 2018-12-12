Test.describe("Promise all function fulfilled", function() {

  var promise1 = new Promise(resolve => {
    setTimeout(resolve, 300, 'first');
  });
  
  var promise2 = new Promise(resolve => {
    resolve("second");
  });


  Test.it("returns an array when the promise is resolved", function() {
    all(promise1, promise2).then((fulfill) => {
      var testArr = fulfill;
      Test.assertEquals(testArr[0], "first", "first element of array returned should be 'first'");    
      Test.assertEquals(testArr[1], "second", "second element of array returned should be 'second'");
    });
  }); // end it
  
  }); // end describe
