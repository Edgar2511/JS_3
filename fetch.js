const json = localStorage.getItem(".form");
const data = JSON.parse(json);

for (key of body) {
  const markUp = `
    <div> 
    <span> ${key}: ${body[key]} </span>
    </div>
    `;
  document.getElementById("btn").innerHTML = markUp;
}
