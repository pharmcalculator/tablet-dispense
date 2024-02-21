function calculate() {
  var pillPerDose = parseFloat(document.getElementById("pillPerDose").value);
  var timesPerDay = parseFloat(document.getElementById("timesPerDay").value);
  var totalDays = parseFloat(document.getElementById("totalDays").value);

  var totalPills = Math.ceil(pillPerDose * timesPerDay * totalDays);

  var resultElement = document.getElementById("result");
  resultElement.innerHTML = "<strong>Total Pills:</strong> " + totalPills;
  resultElement.classList.add("highlight");
}