describe('findUniq', () => {
  it('should handle sample cases', () => {
    Test.assertEquals(findUniq([ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ]), 'BbBb');
    Test.assertEquals(findUniq([ 'abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba' ]), 'foo');
    Test.assertEquals(findUniq([ 'silvia', 'vasili', 'victor' ]), 'victor');
    Test.assertEquals(findUniq([ 'Tom Marvolo Riddle', 'I am Lord Voldemort', 'Harry Potter' ]), 'Harry Potter');
    Test.assertEquals(findUniq([ '    ', 'a', ' ' ]), 'a');
  });
});
