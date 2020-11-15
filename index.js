function solution(number){
      let list = (number>1 )? [...Array(number).keys()] :[...Array(1).keys()];
      console.log(list.filter(x => x%3 == 0 || x%5 == 0).reduce((acc,curr)=>acc+curr));
    }

//      TEST CASES
      solution(10) // Expected result 23
      solution(20) // Expected result 78
      solution(200) // Expected result 9168
      solution(-1) // Expected result 0
      solution(0) // Expected result 0
      solution(1) // Expected result 0
      solution(2) // Expected result 0
      solution(3) // Expected result 0
      solution(4) // Expected result 3
      solution(5) // Expected result 3
      solution(6) // Expected result 8
