function findShort(s){
  let arr = s.split(" ")
  let short = arr[0].length
  
  for ( let i = 1; i < arr.length; i++) {
    if (arr[i].length < short) {
      short = arr[i].length
    }
  }
  return short 
}