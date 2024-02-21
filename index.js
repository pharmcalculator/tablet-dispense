document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('calculator-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        var pillPerDose = parseFloat(document.getElementById('pill-per-dose-input').value);
        var timesPerDay = parseFloat(document.getElementById('times-per-day-input').value);
        var totalDays = parseFloat(document.getElementById('total-days-input').value);

        var totalPillDispensing = pillPerDose * timesPerDay * totalDays;

        totalPillDispensing = Math.ceil(totalPillDispensing); // Round up to the nearest integer

        var resultContainer = document.getElementById('result-container');
        resultContainer.innerHTML = `
            <div class="result-box">
                <p class="input-label">Total Pill Dispensing:</p>
                <p class="input-field">${totalPillDispensing}</p>
            </div>
        `;
    });
});