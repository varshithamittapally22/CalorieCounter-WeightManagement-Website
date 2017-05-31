function calculateCaloriesBurned() {
  var bw = document.getElementById("bodyWeight").value;
  var mn = document.getElementById("minutes").value;
  var mets = document.getElementById("mets").value;
  var cals = bw*mn*mets/60;
  document.getElementById('caloriesBurned').value = cals;
  return false;
};