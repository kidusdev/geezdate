import GeezDate from ".";
import { amharic, tigrigna } from "./constant";
import { toGC } from "./convert";

export enum FormatType {
  Amharic = "amharic",
  Tigrigna = "tigrigna",
}

export const format = function (inputDate: GeezDate, pattern: string, type: FormatType) {
  const { date, month, year } = inputDate.date;

  if (!pattern) throw new Error("pattern is empty!");
  if (!date || date < 1 || date > 30) throw new Error(`incorrect date! needed 1 - 30, given ${date}`);
  if (!month || month < 1 || month > 13) throw new Error(`incorrect month! needed 1 - 13, given ${month}`);

  const gcDate = toGC(inputDate);
  const days = type === FormatType.Amharic ? amharic.days : tigrigna.days;
  const months = type === FormatType.Amharic ? amharic.months : tigrigna.months;

  return pattern
    .replace(/d+/, `${date < 10 ? `0${date}` : date}`)
    .replace(/D+/, `${days[gcDate.getDay()]}`)

    .replace(/m+/, `${month < 10 ? `0${month}` : month}`)
    .replace(/M+/, `${months[month - 1]}`)

    .replace(/y{2,2}/, `${year}`)
    .replace(/y{1,1}/, `${2016 % 100}`)

    .replace(/Y{2,2}/, `${year}`)
    .replace(/Y{1,1}/, `${2016 % 100}`)

    .replace(/[Ee]+/, "ዓ.ም");
};
