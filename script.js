function daysOfAYear(year) {
    // Convert input to a number
    year = Number(year);
    
    // Check if the year is a leap year
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return 366; // Leap year
    } else {
        return 365; // Non-leap year
    }
}