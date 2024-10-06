import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './styling/Calender.css'; // Assume you have created this CSS file

function Calender() {
  const [date, setDate] = useState(new Date());

  return (
    <div className="calendar-container">
      <Calendar
        onChange={setDate}
        value={date}
        tileClassName={({ date, view }) => {
          if (view === 'month') {
            const today = new Date();
            if (
              date.getDate() === today.getDate() &&
              date.getMonth() === today.getMonth() &&
              date.getFullYear() === today.getFullYear()
            ) {
              return 'tile-now';
            } else if (date.getDay() === 0 || date.getDay() === 6) {
              return 'tile-weekend';
            }
          }
          return null;
        }}
        calendarType="US"
      />
    </div>
  );
}

export default Calender;
