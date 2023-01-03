export function parseDate(date: string) {
  const _date = new Date(date);

  let month = "";
  switch (_date.getMonth()) {
    case 0:
      month = "January";
      break;
    case 1:
      month = "February";
      break;
    case 2:
      month = "March";
      break;
    case 3:
      month = "April";
      break;
    case 4:
      month = "May";
      break;
    case 5:
      month = "June";
      break;
    case 6:
      month = "July";
      break;
    case 7:
      month = "August";
      break;
    case 8:
      month = "September";
      break;
    case 9:
      month = "October";
      break;
    case 10:
      month = "November";
      break;
    case 11:
      month = "December";
      break;
    default:
      break;
  }

  return ` ${`${month} ${_date.getDate()}`.padStart(
    2,
    "0"
  )}, ${_date.getFullYear()}`;
}

export function parseQuantity(quantity: string | number): string {
  const _n = Number(quantity);

  switch (true) {
    case _n > (10 ^ 9):
      return `${(_n / (10 ^ 9)).toFixed(1)} B`;

    case _n > (10 ^ 6):
      return `${(_n / (10 ^ 6)).toFixed(1)} M`;

    case _n > (10 ^ 3):
      return `${(_n / (10 ^ 3)).toFixed(1)} K`;

    default:
      return `${_n.toFixed(1)}`;
  }
}
