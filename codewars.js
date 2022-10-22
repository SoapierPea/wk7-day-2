//codewars
//Question 1
const haystack = ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] 
function findNeedle(haystack){
    return `found the needle at position ${haystack.indexOf('needle')}`
}
console.log(haystack)

//Question 2
function openOrSenior(data){
    let ans = []
    for(i=0;i<data.length;i++){
      if(data[i][0] >= 55 && data[i][1] > 7){
        ans.push("Senior")
      }else{
        ans.push("Open")
      }
    }
    return ans
  }
  
