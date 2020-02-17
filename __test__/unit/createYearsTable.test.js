import { createYearsTable } from '../../src/mydatepicker/utils/util';

const expects = {
  years: [1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010],
  current: 2008
}

test('createYearsTable', () => {
  const yearsTable = createYearsTable(2008);
  expect(JSON.stringify(yearsTable)).toBe(JSON.stringify(expects));
})