console.log("Portfolio Website Loaded!");

// Percentage Calculator
function calculatePercentage() {
    let part = parseFloat(document.getElementById("part").value);
    let total = parseFloat(document.getElementById("total").value);
    if (isNaN(part) || isNaN(total) || total === 0) {
        alert("Please enter valid numbers.");
        return;
    }
    let percentage = (part / total) * 100;
    document.getElementById("result").textContent = `Percentage: ${percentage.toFixed(2)}%`;
}

// Add event listener to the Calculate button
document.getElementById("calculate-btn").addEventListener("click", calculatePercentage);
