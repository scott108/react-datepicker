import {creatCalendar} from '../../src/components/utils/util';

const expects = {
  preMonth: {year: 2007, month: 11, days: 30},
  nextMonth: {year: 2008, month: 1, days: 31},
  currentMonth: { year: 2007, month: 12, days: 31},
  weeks: [ { year: 2007, month: 11, day: 25, week: 0 },
  { year: 2007, month: 11, day: 26, week: 1 },
  { year: 2007, month: 11, day: 27, week: 2 },
  { year: 2007, month: 11, day: 28, week: 3 },
  { year: 2007, month: 11, day: 29, week: 4 },
  { year: 2007, month: 11, day: 30, week: 5 },
  { year: 2007, month: 12, day: 1, week: 6 },
  { year: 2007, month: 12, day: 2, week: 0 },
  { year: 2007, month: 12, day: 3, week: 1 },
  { year: 2007, month: 12, day: 4, week: 2 },
  { year: 2007, month: 12, day: 5, week: 3 },
  { year: 2007, month: 12, day: 6, week: 4 },
  { year: 2007, month: 12, day: 7, week: 5 },
  { year: 2007, month: 12, day: 8, week: 6 },
  { year: 2007, month: 12, day: 9, week: 0 },
  { year: 2007, month: 12, day: 10, week: 1 },
  { year: 2007, month: 12, day: 11, week: 2 },
  { year: 2007, month: 12, day: 12, week: 3 },
  { year: 2007, month: 12, day: 13, week: 4 },
  { year: 2007, month: 12, day: 14, week: 5 },
  { year: 2007, month: 12, day: 15, week: 6 },
  { year: 2007, month: 12, day: 16, week: 0 },
  { year: 2007, month: 12, day: 17, week: 1 },
  { year: 2007, month: 12, day: 18, week: 2 },
  { year: 2007, month: 12, day: 19, week: 3 },
  { year: 2007, month: 12, day: 20, week: 4 },
  { year: 2007, month: 12, day: 21, week: 5 },
  { year: 2007, month: 12, day: 22, week: 6 },
  { year: 2007, month: 12, day: 23, week: 0 },
  { year: 2007, month: 12, day: 24, week: 1 },
  { year: 2007, month: 12, day: 25, week: 2 },
  { year: 2007, month: 12, day: 26, week: 3 },
  { year: 2007, month: 12, day: 27, week: 4 },
  { year: 2007, month: 12, day: 28, week: 5 },
  { year: 2007, month: 12, day: 29, week: 6 },
  { year: 2007, month: 12, day: 30, week: 0 },
  { year: 2007, month: 12, day: 31, week: 1 },
  { year: 2008, month: 1, day: 1, week: 2 },
  { year: 2008, month: 1, day: 2, week: 3 },
  { year: 2008, month: 1, day: 3, week: 4 },
  { year: 2008, month: 1, day: 4, week: 5 },
  { year: 2008, month: 1, day: 5, week: 6 } ]
}

test('Check the result of 5 + ', () => {
  const calendar = creatCalendar(2007, 12);
  expect(JSON.stringify(calendar)).toBe(JSON.stringify(expects));
})