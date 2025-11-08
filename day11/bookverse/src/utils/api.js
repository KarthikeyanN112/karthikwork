export async function getBooks() {
  const res = await fetch("http://localhost:5000/books");
  return res.json();
}

export async function getBookById(id) {
  const res = await fetch(`http://localhost:5000/books/${id}`);
  return res.json();
}
