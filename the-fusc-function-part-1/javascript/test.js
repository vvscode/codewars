Test.describe("The fusc function -- part 1", function() {
  Test.describe("Example tests", function() {
    Test.assertEquals(fusc(0), 0) 
    Test.assertEquals(fusc(1), 1)
    Test.assertEquals(fusc(85), 21)
  
    let solutions = [0, 1, 1, 2, 1, 3, 2, 3, 1, 4, 3, 5, 2, 5, 3, 4, 1, 5, 4, 7, 3];
    for(let i=0; i<solutions.length; i++){
    	Test.assertEquals(fusc(i), solutions[i]);
    }
  });
});