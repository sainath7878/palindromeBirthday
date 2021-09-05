function reverseStr(str){
    return str.split('').reverse().join('');
}

function isPalindrome(str){
    var reverse = reverseStr(str);

    return str === reverse;
}

function convertDateToStr(date) {
    var dateStr = { day: "", month: "", year: "" };
  
    if (date.day < 10) {
      dateStr.day = "0" + date.day;
    } else {
      dateStr.day = date.day.toString();
    }
  
    if (date.month < 10) {
      dateStr.month = "0" + date.month;
    } else {
      dateStr.month = date.month.toString();
    }
  
    dateStr.year = date.year.toString();
  
    return dateStr;
  }

  function getAllDateFormats(date){
      var dateStr = convertDateToStr(date);
    
      var ddmmyyyy = dateStr.day + dateStr.month + dateStr.year;
      var mmddyyyy = dateStr.month + dateStr.day + dateStr.year;
      var yyyymmdd = dateStr.year + dateStr.month + dateStr.day;
      var ddmmyyy = dateStr.day + dateStr.month + dateStr.year.slice(-2);
      var mmddyy = dateStr.month + dateStr.day + dateStr.year.slice(-2);
      var yymmdd = dateStr.year.slice(-2) + dateStr.month + dateStr.day;

      return [ddmmyyyy,mmddyyyy,yyyymmdd,ddmmyyy,mmddyy,yymmdd]
  }

  function checkPalindromeForAllDateFormats(date){
      var listOfPalindromes = getAllDateFormats(date);

      var isPalindromeFlag = false;

      for(let i=0; i < listOfPalindrome.length;i++){
          if(isPalindrome(listOfPalindromes[i])){
              isPalindromeFlag = true;
              break;
          }
      }
      return isPalindromeFlag;
  }

  