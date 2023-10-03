import { toEC, toGC } from "./convert";

class GeezDate {
  public static toEC = (date: Date) => toEC(date);
  public static toGC = (date: { year: number; month: number; date: number }) => toGC(date);
}

export default GeezDate;
