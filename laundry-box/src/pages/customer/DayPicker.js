import React, { useState, useEffect } from "react";
import DayPicker from "react-day-picker";
import "react-day-picker/lib/style.css";

const currentYear = new Date().getFullYear();
const fromMonth = new Date(currentYear, 0);
const toMonth = new Date(currentYear + 10, 11);
var today = new Date();
var months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function YearMonthForm({ date, localeUtils, onChange }) {
  const months = localeUtils.getMonths();
  const [bulan, setBulan] = useState("January");

  const years = [];
  for (let i = fromMonth.getFullYear(); i <= toMonth.getFullYear(); i += 1) {
    years.push(i);
  }

  const handleChange = (e) => {
    updateMonth(e);
    console.log(months[e.target.form.month.value]);
    const { year, month } = e.target.form;
    onChange(new Date(year.value, month.value));
  };

  const updateMonth = (e) => {
    setBulan(months[e.target.form.month.value]);
    console.log(bulan);
  };

  useEffect(() => {
    console.log(months[date.getMonth()]);
  }, [date.getMonth()]);

  return (
    <form className="DayPicker-Caption">
      <div className="date-picker">
        <div className="daypicker-text">
          <p className="month-daypicker">{months[date.getMonth()]}</p>
          <p className="month-daypicker today-text">
            Today,{today.getDate()}{" "}
            {today.toLocaleString("en-us", { month: "short" })}{" "}
            {today.getFullYear()}
          </p>
        </div>

        <select
          className="month-select"
          name="month"
          onChange={handleChange}
          value={date.getMonth()}
        >
          {months.map((month, i) => (
            <option key={month} value={i}>
              {month}
            </option>
          ))}
        </select>
        <select
          name="year"
          onChange={handleChange}
          value={date.getFullYear()}
          className="year-select"
        >
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
    </form>
  );
}

export default class Example extends React.Component {
  constructor(props) {
    super(props);
    this.handleYearMonthChange = this.handleYearMonthChange.bind(this);
    this.state = {
      month: fromMonth,
      selectedDay: null,
      monthName: null,
    };
  }

  componentDidMount() {
    var today = new Date();
    var months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    var d = new Date();
    this.state.monthName = months[d.getMonth()];
    console.log(this.state.monthName);
  }

  componentDidUpdate() {
    console.log(this.state.selectedDay);
  }

  handleYearMonthChange(month) {
    this.setState({ month });
  }

  handleDayClick(day, { selected }) {
    console.log(day);
  }

  render() {
    return (
      <>
        <div className="YearNavigation">
          <DayPicker
            month={this.state.month}
            fromMonth={fromMonth}
            toMonth={toMonth}
            selectedDays={this.state.selectedDay}
            onDayClick={this.handleDayClick}
            captionElement={({ date, localeUtils }) => (
              <YearMonthForm
                date={date}
                localeUtils={localeUtils}
                onChange={this.handleYearMonthChange}
              />
            )}
          />
        </div>
      </>
    );
  }
}
