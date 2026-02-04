const formatDate = require("./formatDate");

function assertEqual(actual, expected, message) {
  if (actual !== expected) {
    throw new Error(`${message} | Expected: ${expected}, Got: ${actual}`);
  }
}

// Tests
assertEqual(formatDate("2024-01-01"), "2024-01-01", "String date failed");
assertEqual(formatDate(new Date("2024-02-10")), "2024-02-10", "Date object failed");
assertEqual(formatDate(1700000000000).length, 10, "Timestamp failed");
assertEqual(formatDate("invalid-date"), null, "Invalid input failed");

console.log("All tests passed");
