document.getElementById('run-rate-form').addEventListener('submit', function(e) {
  e.preventDefault();

  var currentScore = parseFloat(document.getElementById('current-score').value);
  var currentOvers = parseFloat(document.getElementById('current-overs').value);
  var targetOvers = parseFloat(document.getElementById('target-overs').value);
  var targetScore = parseFloat(document.getElementById('target-score').value);

  calculateTargetScore(currentScore, currentOvers, targetOvers, targetScore);
});


function calculateTargetScore(currentScore, currentOvers, targetOvers, targetScore) {
  var currentRunRate = currentScore / currentOvers;
  var requiredRunRate = targetScore / targetOvers;
  var remainingOvers = targetOvers - currentOvers;
  var remainingTargetScore = targetScore - currentScore;
  var projectedScore = currentScore + (currentRunRate * remainingOvers);

  var output = document.getElementById('output');
  output.innerHTML = "<h2>Results</h2>" +
                      "<p>Current run rate: " + currentRunRate.toFixed(2) + "</p>" +
                      "<p>Required run rate: " + requiredRunRate.toFixed(2) + "</p>" +
                      "<p>Remaining overs: " + remainingOvers + "</p>" +
                      "<p>Remaining target score: " + remainingTargetScore + "</p>" +
                      "<p>Projected score: " + projectedScore.toFixed(0) + "</p>";
}
