import { addDays, addMonths, addYears, subDays, subMonths, subYears } from "date-fns";
import { toEC, toGC } from "./convert";
import GeezDate from ".";

export const day = (date: GeezDate) => ({
  next: (): GeezDate => GeezDate.fromDate(addDays(toGC(date), 1)),
  previous: (): GeezDate => GeezDate.fromDate(subDays(toGC(date), 1)),
  afterX: (days: number) => GeezDate.fromDate(addDays(toGC(date), days)),
  beforeX: (days: number) => GeezDate.fromDate(subDays(toGC(date), days)),
});

export const month = (date: GeezDate) => ({
  next: () => GeezDate.fromDate(addMonths(toGC(date), 1)),
  previous: () => GeezDate.fromDate(subMonths(toGC(date), 1)),
  afterX: (months: number) => GeezDate.fromDate(addMonths(toGC(date), months)),
  beforeX: (months: number) => GeezDate.fromDate(subMonths(toGC(date), months)),
});

export const year = (date: GeezDate) => ({
  next: () => GeezDate.fromDate(addYears(toGC(date), 1)),
  previous: () => GeezDate.fromDate(subYears(toGC(date), 1)),
  afterX: (years: number) => GeezDate.fromDate(addYears(toGC(date), years)),
  beforeX: (years: number) => GeezDate.fromDate(subYears(toGC(date), years)),
});
