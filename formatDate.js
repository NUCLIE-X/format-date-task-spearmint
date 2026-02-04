function formatDate(input) {
  const date = new Date(input);

  if (isNaN(date.getTime())) {
    return null;
  }

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

// Example calls
console.log(formatDate(new Date("2024-01-15"))); // 2024-01-15
console.log(formatDate("2023-12-05"));           // 2023-12-05
console.log(formatDate(1700000000000));          // valid date
console.log(formatDate("invalid-date"));         // null

module.exports = formatDate;
