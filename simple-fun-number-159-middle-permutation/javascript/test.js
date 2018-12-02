describe("Basic Tests", function(){
it("It should works for basic tests.", function(){

Test.assertEquals(middlePermutation("abc"),"bac")

Test.assertEquals(middlePermutation("abcd"),"bdca")

Test.assertEquals(middlePermutation("abcdx"),"cbxda")

Test.assertEquals(middlePermutation("abcdxg"),"cxgdba")

Test.assertEquals(middlePermutation("abcdxgz"),"dczxgba")

})})