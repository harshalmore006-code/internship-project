
const scoreInput = prompt("Enter your test score (0 to 100):", "85");
const output = document.getElementById("output");

if (scoreInput === null || scoreInput.trim() === "" ||
    !Number.isFinite(Number(scoreInput)) ||
    Number(scoreInput) < 0 || Number(scoreInput) > 100) {
  output.textContent = "Please enter a valid score between 0 and 100.";
} else {
  const score = Number(scoreInput);
  let grade;
  if (score >= 90) grade = "A";
  else if (score >= 80) grade = "B";
  else if (score >= 70) grade = "C";
  else if (score >= 60) grade = "D";
  else grade = "F";

  let gradeToPrint;
  switch (grade) {
    case "A": gradeToPrint = "A"; break;
    case "B": gradeToPrint = "B"; break;
    case "C": gradeToPrint = "C"; break;
    case "D": gradeToPrint = "D"; break;
    default: gradeToPrint = "F";
  }
  const status = score >= 40 ? "Passed" : "Failed";
  output.textContent = `Score: ${score}\nGrade: ${gradeToPrint}\nStatus: ${status}`;
}
