import GeezDate from ".";

const is = ({ date }: GeezDate) => ({
  sameDate: ({ date: dateOne }: GeezDate) =>
    dateOne.year === date.year && dateOne.month === date.month && dateOne.date === date.date,

  sameDay: (dateOne: GeezDate) => dateOne.inGC.getDay() === new GeezDate(date).inGC.getDay(),

  sameMonth: ({ date: dateOne }: GeezDate) => dateOne.year === date.year && dateOne.month === date.month,

  sameYear: ({ date: dateOne }: GeezDate) => dateOne.year === date.year,

  today: () =>
    GeezDate.fromDate(new Date()).date.year === date.year &&
    GeezDate.fromDate(new Date()).date.month === date.month &&
    GeezDate.fromDate(new Date()).date.date === date.date,

  thisMonth: () =>
    GeezDate.fromDate(new Date()).date.year === date.year &&
    GeezDate.fromDate(new Date()).date.month === date.month,

  thisYear: () => GeezDate.fromDate(new Date()).date.year === date.year,
});

export default is;
