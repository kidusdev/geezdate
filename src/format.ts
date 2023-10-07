import { toGC } from "./convert";

const days = ["ሰንበት", "ሰኒ", "ሰሉስ", "ረቡዕ", "ሓሙስ", "ዓርቢ", "ቐዳም"];
const months = [
  "መስከረም",
  "ጥቅምቲ",
  "ሕዳር",
  "ታሕሳስ",
  "ጥሪ",
  "የካቲት",
  "መጋቢት",
  "ሚያዝያ",
  "ግንቦት",
  "ሰነ",
  "ሓምለ",
  "ነሃሰ",
  "ጳጉሜ",
];

/**
 * ### formats
 * * d - date        => 1 - 30
 * * D - day         => ሰንበት - ቐዳም
 * * m - month index => 1 - 13
 * * M - month name  => መስከረም - ጳጉሜ
 * * y - year        => 0000
 * * Y - year        => 0000
 * * E - calender    => ዓ.ም
 */

export const format = function (
  inputDate: { year: number; month: number; date: number },
  pattern: string = "d-m-y e"
) {
  const { date, month, year } = inputDate;

  if (!pattern) throw new Error("pattern is empty!");

  console.log(month);

  if (!date || date < 1 || date > 30) throw new Error(`incorrect date! needed 1 - 30, given ${date}`);
  if (!month || month < 1 || month > 13) throw new Error(`incorrect month! needed 1 - 13, given ${month}`);

  const gcDate = toGC(inputDate);

  return pattern
    .replace(/d+/, `${date < 10 ? `0${date}` : date}`)
    .replace(/D+/, `${days[gcDate.getDay()]}`)

    .replace(/m+/, `${month < 10 ? `0${month}` : month}`)
    .replace(/M+/, `${months[month - 1]}`)

    .replace(/y{3,4}/, `${year}`)
    .replace(/y{1,2}/, `${2016 % 100}`)

    .replace(/Y{3,4}/, `${year}`)
    .replace(/Y{1,2}/, `${2016 % 100}`)

    .replace("E", "ዓ.ም")
    .replace("e", "ዓ.ም");
};
