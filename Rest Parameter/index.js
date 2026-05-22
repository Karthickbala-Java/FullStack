function getLabelHtml(txt, sender, ...name) {
  let html = name.map((name1) => {
    return `<h1>Dear ${name1}</h1>
  <h3>${sender} </h3>`;
  });
  return html.join("");
}

const text = "Thank you for all your hardwork";
const sender = "tom";
const user = { name: "Tom", role: "Developer", email: "tom@example.com" };
const user2 = { name: "Sarah", role: "Designer", email: "sarah@example.com" };
const user3 = { name: "John", role: "Manager", email: "john@example.com" };

document.getElementById("container").innerHTML = getLabelHtml(
  text,
  sender,
  user.name,
  user2.name,
  user3.name,
);
