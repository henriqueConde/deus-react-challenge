const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

function formatDate(date: Date | string, format = 'YYYY-MM-DD') {
  const theDate = date instanceof Date ? date : new Date(date);

  const day = theDate.getDate().toString().padStart(2, '0');
  const month = (theDate.getMonth() + 1).toString().padStart(2, '0');
  const year = theDate.getFullYear().toString();
  const monthStr = monthNames[theDate.getMonth()];

  let result = format.replace(/YYYY/g, year);
  result = result.replace(/MM/g, month);
  result = result.replace(/DD/g, day);

  return {
    result,
    month,
    monthStr,
    day,
  };
}

export default formatDate;
