import { useState, useEffect } from "react";

export const useDateDifferenceFromNow=(startDate)=> {
  const [difference, setDifference] = useState({
    years: 0,
    months: 0,
    days: 0,
  });

  useEffect(() => {
    if (!startDate) return;

    const start = new Date(startDate);
    const end = new Date(); // Current date

    let years = end.getFullYear() - start.getFullYear();
    let months = end.getMonth() - start.getMonth();
    let days = end.getDate() - start.getDate();

    // Adjust the difference if necessary
    if (days < 0) {
      months -= 1;
      days += new Date(end.getFullYear(), end.getMonth(), 0).getDate();
    }

    if (months < 0) {
      years -= 1;
      months += 12;
    }

    setDifference({ years, months, days });
  }, [startDate]);

  return difference;
}
