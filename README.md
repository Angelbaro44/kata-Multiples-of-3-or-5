# kata-Multiples-of-3-or-5



If we list all the natural numbers below 13 (Example: [1,2,3,4,5,6,7,8,9,10,11,12,]) that are multiples of 3 or 5, we get 3, 5, 6, 9 and 12. The sum of these multiples is 35.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

Note: If the number is a multiple of both 3 and 5, only count it once. Also, if a number is negative, return 0(for languages that do have them)








Test Cases
-
function test(n, expected) {
  let actual = solution(n)
  Test.assertEquals(actual, expected, `Expected ${expected}, got ${actual}`)
}

Test.describe("basic tests", function(){
  test(10,23)
  test(20,78)
  test(200,9168)
})

Test.describe("smallest cases", function() {
  test(-1,0)
  test(0,0)
  test(1,0)
  test(2,0)
  test(3,0)
  test(4,3)
  test(5,3)
  test(6,8)
})

function _solution(number){
  var sum = 0;
  
  for(var i = 1; i< number; i++){
    if(i % 3 == 0 || i % 5 == 0){
      sum += i
    }
  }
  return sum;
}

Test.describe("random cases", function() {
  for(var i = 0; i < 10; i++) {
    let rand = Math.floor(Math.random() * 200)
    test(rand, _solution(rand));
  }
})
