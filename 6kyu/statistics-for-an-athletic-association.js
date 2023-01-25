// You are the "computer expert" of a local Athletic Association (C.A.A.). Many teams of runners come to compete. Each time you get a string of all race results of every team who has run. For example here is a string showing the individual results of a team of 5 runners:

// "01|15|59, 1|47|6, 01|17|20, 1|32|34, 2|3|17"

// Each part of the string is of the form: h|m|s where h, m, s (h for hour, m for minutes, s for seconds) are positive or null integer (represented as strings) with one or two digits. Substrings in the input string are separated by ,  or ,.

// To compare the results of the teams you are asked for giving three statistics; range, average and median.

// Range : difference between the lowest and highest values. In {4, 6, 9, 3, 7} the lowest value is 3, and the highest is 9, so the range is 9 − 3 = 6.

// Mean or Average : To calculate mean, add together all of the numbers and then divide the sum by the total count of numbers.

// Median : In statistics, the median is the number separating the higher half of a data sample from the lower half. The median of a finite list of numbers can be found by arranging all the observations from lowest value to highest value and picking the middle one (e.g., the median of {3, 3, 5, 9, 11} is 5) when there is an odd number of observations. If there is an even number of observations, then there is no single middle value; the median is then defined to be the mean of the two middle values (the median of {3, 5, 6, 9} is (5 + 6) / 2 = 5.5).

// Your task is to return a string giving these 3 values. For the example given above, the string result will be

// "Range: 00|47|18 Average: 01|35|15 Median: 01|32|34"

// of the form: "Range: hh|mm|ss Average: hh|mm|ss Median: hh|mm|ss"`

// where hh, mm, ss are integers (represented by strings) with each 2 digits.

// Remarks:
// if a result in seconds is ab.xy... it will be given truncated as ab.
// if the given string is "" you will return ""


// MULTIPLE SOLUTIONS REFACTORED

function stat(strg) {
    // RETURNS EDGE CASE
        if(!strg){
          return ''
        }
    // CONVERT EACH TIME TO SECONDS THEN PUT IT IN AN ARRAY TO MAKE IT EASIER TO MANAGE  
        let seconds = strg.split(',')
                          .map(e=>{
                            return e.split('|').map((e,i)=>{
                              return i===0?+e*60*60:i===1?+e*60:+e
                              }).reduce((a,b)=>a+b)
                            })
                          .sort((a,b)=>a-b)
        
    //  HELPER FUNCTION TO FORMAT THE ANSWERS
      const format = (time) => {
        let hr = Math.floor(time/3600)
        let min = Math.floor((time/60))%60
        let sec = Math.floor(time%60)
        return `${hr>9?hr:'0'+hr}|${min>9?min:'0'+min}|${sec>9?sec:'0'+sec}`
      }
    
    //  FUNCTIONS TO CALCULATE THE 3 STATISTICS USING seconds FROM UP TOP
      const range = () =>seconds[seconds.length-1]-seconds[0]
    
      
      const average = () => Math.floor((seconds.reduce((a,b)=>a+b))/seconds.length)
    
      
      const median = () => {
        if(seconds.length%2===0){
          return Math.floor((seconds[seconds.length/2-1]+seconds[seconds.length/2])/2)
        } else {
          return seconds[Math.floor(seconds.length/2)]
        }  
      }
      
    //  RETURNS THE ANSWER HERE
      return (`Range: ${format(range())} Average: ${format(average())} Median: ${format(median())}`)
    }


    // 
    // 
    // 

    function stat(strg) {
        if(!strg){
          return ''
        }
      
        let seconds = strg.split(',')
                          .map(e=>{
                            return e.split('|').map((e,i)=>{
                              return i===0?+e*60*60:i===1?+e*60:+e
                              }).reduce((a,b)=>a+b)
                            })
                          .sort((a,b)=>a-b)
        
      function format(time){
        let hr = Math.floor(time/3600)
        let min = Math.floor((time/60))%60
        let sec = Math.floor(time%60)
        return `${hr>9?hr:'0'+hr}|${min>9?min:'0'+min}|${sec>9?sec:'0'+sec}`
      }
        
      function range(){
        return seconds[seconds.length-1]-seconds[0]
      }
      
      function average(){
        return Math.floor((seconds.reduce((a,b)=>a+b))/seconds.length)
      }
      
      function median(){
        if(seconds.length%2===0){
          return Math.floor((seconds[seconds.length/2-1]+seconds[seconds.length/2])/2)
        } else {
          return seconds[Math.floor(seconds.length/2)]
        }  
      }
      
      return (`Range: ${format(range())} Average: ${format(average())} Median: ${format(median())}`)
    }
    // 
    // 
    // 


    function stat(strg) {
        if(!strg){
          return ''
        }
      
        let seconds = strg.split(',')
                          .map(e=>{
                            return e.split('|').map((e,i)=>{
                              return i===0?+e*60*60:i===1?+e*60:+e
                              }).reduce((a,b)=>a+b)
                            })
                          .sort((a,b)=>a-b)
        
      function range(){
        let result = (seconds[seconds.length-1]-seconds[0])
        let hr = Math.floor(result/3600)
        let min = Math.floor((result/60))%60
        let sec = Math.floor(result%60)
        return `${hr>9?hr:'0'+hr}|${min>9?min:'0'+min}|${sec>9?sec:'0'+sec}`
      }
      
      function average(){
        let result = Math.floor((seconds.reduce((a,b)=>a+b))/seconds.length)
        let hr = Math.floor(result/3600)
        let min = Math.floor((result/60))%60
        let sec = Math.floor(result%60)
        return `${hr>9?hr:'0'+hr}|${min>9?min:'0'+min}|${sec>9?sec:'0'+sec}`
      }
      
      function median(){
        if(seconds.length%2===0){
          let result = Math.floor((seconds[seconds.length/2-1]+seconds[seconds.length/2])/2)
          let hr = Math.floor(result/3600)
          let min = Math.floor((result/60))%60
          let sec = Math.floor(result%60)
          return `${hr>9?hr:'0'+hr}|${min>9?min:'0'+min}|${sec>9?sec:'0'+sec}`
        } else {
          let result = seconds[Math.floor(seconds.length/2)]
          let hr = Math.floor(result/3600)
          let min = Math.floor((result/60))%60
          let sec = Math.floor(result%60)
          return `${hr>9?hr:'0'+hr}|${min>9?min:'0'+min}|${sec>9?sec:'0'+sec}`
        }
        
      }
      
      return (`Range: ${range()} Average: ${average()} Median: ${median()}`)
    }