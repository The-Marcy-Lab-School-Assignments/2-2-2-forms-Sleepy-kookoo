/** GENERAL FEEDBACK:
 *
 */

const form = document.querySelector("#new-user-form");

const handleSubmit = () => {
  form.preventDefault();
};

form.addEventListener("submit", handleSubmit);
