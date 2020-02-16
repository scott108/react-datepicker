const weekHeaders = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
const monthNameTable = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
]
const daysOfMothTable = {
  1: 31, 2: (year) => (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0? 29 : 28,
  3: 31, 4: 30, 5: 31, 6: 30, 7: 31, 8: 31, 9: 30,
  10: 31, 11: 30, 12: 31 
}

const getDays = (year, month) => {
  const days = daysOfMothTable[month];
  if(typeof days === 'function') {
    return days(year);
  }
  return days
}

const getPreMonth = (year, month) => {
  const preMonth = month - 1 > 0? month - 1 : 12;
  const shiftYear = month - 1 > 0? year : year - 1;
  const days = daysOfMothTable[preMonth];
  if(typeof days === 'function') {
    return {
      year: shiftYear,
      month: preMonth,
      days: days(shiftYear)
    };
  }
  return {
    year: shiftYear,
    month: preMonth,
    days
  }
}

const getNextMonth = (year, month) => {
  const preMonth = month + 1 <= 12? month + 1 : 1;
  const shiftYear = month + 1 <= 12? year : year + 1;
  const days = daysOfMothTable[preMonth];
  if(typeof days === 'function') {
    return {
      year: shiftYear,
      month: preMonth,
      days: days(shiftYear)
    };
  }
  return {
    year: shiftYear,
    month: preMonth,
    days
  }
}

const getWeek = (year, month, day) => {
  const Y = (month === 1 || month === 2) ? year - 1 : year;
  const m = ((month + 9) % 12) + 1;
  //b
  const y = Y % 100;
  //a
  const c = Math.floor(Y / 100);
  const startWeekIndex = (day + Math.floor((2.6 * m) - 0.2) + y + Math.floor(y / 4) + Math.floor(c / 4) - (2 * c)) % 7;
  return startWeekIndex < 0 ? 7 + startWeekIndex : startWeekIndex;
}

const creatCalendar = (year, month) => {
  const preMonth = getPreMonth(year, month);
  const nextMonth = getNextMonth(year, month);
  const days = getDays(year, month);
  const beginWeek = getWeek(year, month, 1);
  let indexOffset = beginWeek;
  let canlanderTable = { preMonth, nextMonth, currentMonth: { year, month, days } };
  let weeks = [];
  let week = 0;
  let day = 1;
  while(true) {
    if(indexOffset > 0) {
      weeks.push({
        year: preMonth.year,
        month: preMonth.month,
        day: preMonth.days - indexOffset + 1,
        week
      });
      indexOffset--;
    } else if(day <= days){
      weeks.push({
        year,
        month,
        day: day++,
        week
      });
    } else {
      if(weeks.length < 42) {
        let day = 1;
        for(let i = weeks.length; i < 42; i++) {
          weeks.push({
            year: nextMonth.year,
            month: nextMonth.month,
            day: day++,
            week
          });
          week = week + 1 > 6 ? 0 : week + 1;
        }
      }
      break;
    }
    week = week + 1 > 6 ? 0 : week + 1;
  }
  canlanderTable['weeks'] = weeks;
  return canlanderTable;
}


export {
  creatCalendar,
  weekHeaders,
  monthNameTable,
}