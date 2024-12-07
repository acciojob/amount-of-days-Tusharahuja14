function daysOfAYear(valinput) {
    // Convert input to a number
    const year = Number(valinput);
    
    // Check if the year is a leap year
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return 366; // Leap year
    } else {
        return 365; // Non-leap year
    }
}

// Prompt user for input
const valinput = prompt("Enter a year:");
alert("Number of days in the year: " + daysOfAYear(valinput));
