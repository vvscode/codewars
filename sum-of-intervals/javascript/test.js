describe('sumIntervals', function(){
  it('should return the correct sum for non overlapping intervals', function(){
    var test1 = [[1,5]];
    var test2 = [[1,5],[6,10]];
    Test.assertEquals(sumIntervals(test1), 4);
    Test.assertEquals(sumIntervals(test2), 8);
  });
  
  it('should return the correct sum for overlapping intervals', function(){
    var test1 = [[1,5],[1,5]];
    var test2 = [[1,4],[7, 10],[3, 5]];
    Test.assertEquals(sumIntervals(test1), 4);
    Test.assertEquals(sumIntervals(test2), 7);
  });
});