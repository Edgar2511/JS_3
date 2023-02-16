// fetch("https://reqres.in/api/users", {
//   method: "POST",
//   Headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify({
//     // name: "User 1",
//   }),
// })
//   .then((res) => {
//     return res.json();
//   })
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

//===================================================

const form = document.querySelector(".form");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const data = Object.fromEntries(formData);

  const myFetch = fetch("https://reqres.in/api/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));

  // window.location.href = "fetch.html";
});
