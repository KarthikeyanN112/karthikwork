async function loadStudents() {
  const res = await fetch("/students");
  const data = await res.json();

  const container = document.getElementById("students");
  container.innerHTML = "";
  data.forEach(s => {
    const div = document.createElement("div");
    div.className = "student";
    div.innerHTML = `
      <strong>${s.name}</strong> - ${s.department}
      <button onclick="deleteStudent('${s._id}')">🗑️ Delete</button>
    `;
    container.appendChild(div);
  });
}

async function addStudent() {
  const name = document.getElementById("name").value;
  const department = document.getElementById("department").value;

  if (!name || !department) return alert("Please fill all fields!");

  await fetch("/students", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, department })
  });

  document.getElementById("name").value = "";
  document.getElementById("department").value = "";
  loadStudents();
}

async function deleteStudent(id) {
  await fetch(`/students/${id}`, { method: "DELETE" });
  loadStudents();
}

async function searchStudent() {
  const name = document.getElementById("searchBox").value;
  const res = await fetch(`/students?name=${name}`);
  const data = await res.json();

  const resultDiv = document.getElementById("searchResult");
  resultDiv.innerHTML = data.map(s => `<div>${s.name} - ${s.department}</div>`).join("");
}

loadStudents();
