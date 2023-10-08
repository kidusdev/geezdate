import { toEC, toGC } from "./convert";
import { FormatType, format } from "./format";
import * as navigate from "./navigate";
import is from "./is";

class GeezDate {
  // constructors
  constructor(public date: { readonly year: number; readonly month: number; readonly date: number }) {}

  public static fromDate = (date: Date): GeezDate => toEC(date);
  public static fromNumber = (number: number): GeezDate => toEC(new Date(number));
  public static fromString = (string: string): GeezDate =>
    new GeezDate({ year: +string.split("-")[2], month: +string.split("-")[1], date: +string.split("-")[0] });

  // static properties
  public static formatTypes = FormatType;

  // converting
  public inGC = toGC(this);

  // formating
  /**
   * ### formats
   * * d - date        => 1 - 30
   * * D - day         => ሰንበት - ቐዳም
   * * m - month index => 1 - 13
   * * M - month name  => መስከረም - ጳጉሜ
   * * y - year        => 0000
   * * Y - year        => 0000
   * * E - calender    => ዓ.ም
   *
   * ### Example
   * ```
   * const date = GeezDate.fromDate(new Date())
   * const formatted = date.format("D, M d YY E")
   * console.log(formatted) // output:- ሰንበት, መስከረም 27 2016 ዓ.ም
   * ```
   */
  public format = (pattern: string = "d-m-y e", type: FormatType = FormatType.Amharic) =>
    format(this, pattern, type);

  // navigating
  public navigate = {
    day: navigate.day(this),
    month: navigate.month(this),
    year: navigate.year(this),
  };

  // boolean/checking
  public is = is(this);

  // getters
}

export default GeezDate;
