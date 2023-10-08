# GEEZDATE

## Installation

```console
$ npm i geezdate
```

## Usage

### creating instance of GeezDate

```js
// literal GeezDate
const date = new GeezDate({ year: 2016, month: 10, date: 11 });

// from Date object
const date = GeezDate.fromDate(new Date());

// from number
const date = GeezDate.fromNumber(new Date().getTime());

// from string
// NB. string format should be `date-month-year` format
const date = GeezDate.fromString("11-10-2016");
```

### converting to GC

```js
// converting EC to GC
const date = new GeezDate({ year: 2016, month: 10, date: 11 });
const convertedToGC = date.inGC;
```

### formatting

```js
// formatting
// NB. if you are in VSCODE hover over the `format` function to get description
const date = new GeezDate({ year: 2016, month: 10, date: 11 });

// GeezDate.formatTypes.Amharic | GeezDate.formatTypes.Tigrigna;
const formatType = GeezDate.formatTypes.Amharic;

const formatted = date.format("D, M d, YY E", formatType);

console.log(formatted); // እሁድ, መስከረም 27, 2016 ዓ.ም

// d     - date          => 1 - 30
// D     - day           => ሰንበት - ቐዳም
// m     - month index   => 1 - 13
// M     - month name    => መስከረም - ጳጉሜ
// y, Y  - year          => 0000
// E     - calender      => ዓ.ም
```

### navigating between dates

```js
const date = new GeezDate({ year: 2016, month: 10, date: 11 });
const nextDate = date.navigate.day.next();
const previuosDate = date.navigate.day.previous();
const after5Days = date.navigate.day.after(5);
const before15Days = date.navigate.day.before(15);
const after5Months = date.navigate.month.after(5);
...
```

### checking

```js
const date = new GeezDate({ year: 2016, month: 10, date: 11 });
const anotherDate = new GeezDate({ year: 2015, month: 11, date: 10 });

const isToday = date.is.today();
const isThisMonth = date.is.thisMonth();
const isSameMonth = date.is.sameMonth(anotherDate);
...
```

#### Upcoming Features

- Formatting date in all ethiopian languages
- difference between two date
- working with time (hours, minutes and seconds)
- parsing different types of date to GeezDaye
- and more

> for contributing send pull request github link in npm
