import { toEC, toGC } from "./convert";

export const sameDate = (
  { year: yearOne, month: monthOne, date: dateOne }: { year: number; month: number; date: number },
  { year: yearTwo, month: monthTwo, date: dateTwo }: { year: number; month: number; date: number }
) => yearOne === yearTwo && monthOne === monthTwo && dateOne === dateTwo;

export const sameDay = (
  dateOne: { year: number; month: number; date: number },
  dateTwo: { year: number; month: number; date: number }
) => toGC(dateOne).getDay() === toGC(dateTwo).getDay();

export const sameMonth = (
  { year: yearOne, month: monthOne, date: dateOne }: { year: number; month: number; date?: number },
  { year: yearTwo, month: monthTwo, date: dateTwo }: { year: number; month: number; date?: number }
) => yearOne === yearTwo && monthOne === monthTwo;

export const sameYear = (
  { year: yearOne, month: monthOne, date: dateOne }: { year: number; month?: number; date?: number },
  { year: yearTwo, month: monthTwo, date: dateTwo }: { year: number; month?: number; date?: number }
) => yearOne === yearTwo;

export const today = (date: { year: number; month: number; date: number }) =>
  sameDate(date, toEC(new Date()));

export const thisMonth = (date: { year: number; month: number; date: number }) =>
  sameMonth(date, toEC(new Date()));

export const thisYear = (date: { year: number; month: number; date: number }) =>
  sameYear(date, toEC(new Date()));
