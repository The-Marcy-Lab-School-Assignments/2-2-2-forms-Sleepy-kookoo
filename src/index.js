/** GENERAL FEEDBACK:
 *
 */

const form = document.querySelector("#new-user-form");
const resultsUsername = document.getElementById("results-username");
const resultsCodingLevel = document.getElementById("results-coding-level");
const resultsLocation = document.getElementById("results-location");
const resultsDidLikeAssignment = document.getElementById("results-did-like-assignment");

const handleSubmit = (event) => {
  event.preventDefault();

  const username = form.elements["username"].value;
  const codingLevel = form.elements["codingLevel"].value;

  const location = form.elements["location"].value;
  const didLikeAssignment = form.elements["did-like-assignment"].checked;

  resultsUsername.textContent = username;
  resultsCodingLevel.textContent = codingLevel.toLowerCase();
  resultsLocation.textContent = location.toLowerCase();

  if (didLikeAssignment) {
    resultsDidLikeAssignment.textContent = 'Yes';
  } else {
    resultsDidLikeAssignment.textContent = 'No';
  }

  form.reset();
};

form.addEventListener("submit", handleSubmit);




