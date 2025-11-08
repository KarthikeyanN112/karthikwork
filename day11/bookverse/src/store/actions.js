export const addBook = async (book) => {
  try {
    const response = await fetch("http://localhost:5000/books", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(book),
    });

    if (!response.ok) {
      throw new Error("Failed to add book");
    }

    console.log("✅ Book added:", book);
  } catch (error) {
    console.error("❌ Error adding book:", error);
  }
};
