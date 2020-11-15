function solution(number){
      let list = (number>1 )? [...Array(number).keys()] :[...Array(1).keys()];
      return list.filter(x => x%3 == 0 || x%5 == 0).reduce((acc,curr)=>acc+curr);
    }