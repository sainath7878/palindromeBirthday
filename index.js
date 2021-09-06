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

      for(let i=0; i < listOfPalindromes.length;i++){
          if(isPalindrome(listOfPalindromes[i])){
              isPalindromeFlag = true;
              break;
          }
      }
      return isPalindromeFlag;
  }

  function isLeapYear(year){
    if(year % 400 === 0){
      return true;
    }
    if(year % 100 === 0){
      return false;
    }

    if(year % 4 === 0){
      return true;
    }
    return false;
  }

  function getNextDate(date){
    var day = date.day + 1;
    var month = date.month;
    var year = date.year;

    var daysInMonths = [31,28,31,30,31,30,31,31,30,31,30,31];

    if(month === 2){
      if(isLeapYear(year)){
        if(day > 29){
          day = 1;
          month++;
        }
      }
      else{
        if(day > 28){
          day = 1;
          month++;
        }
        
      }
    }
    else{
      if(day > daysInMonths[month-1]){
        day = 1;
        month++;
      }
    }

    if(month > 12){
      month = 1;
      year++;
    }

    return {
      day : day,
      month:month,
      year : year
    }

  }

  function getNextPalindromeDate(date){

    var counter = 0;
    var nextDate = getNextDate(date);

    while(1){
      counter++;
      var isPalindrome = checkPalindromeForAllDateFormats(nextDate);
      if(isPalindrome){
        break;
      }
      nextDate = getNextDate(nextDate);
    }
    

    return [counter , nextDate];
  }