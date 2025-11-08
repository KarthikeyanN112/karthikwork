// ===================================================
// Blogging & Todo App using Fetch API and Module Pattern
// ===================================================

const App = (() => {
  // API endpoints
  const POSTS_API = "https://jsonplaceholder.typicode.com/posts";
  const TODOS_API = "https://jsonplaceholder.typicode.com/todos";

  // DOM elements
  const postsContainer = document.getElementById("postsContainer");
  const todosContainer = document.getElementById("todosContainer");

  // Generic fetch function with error handling
  async function fetchData(url) {
    try {
      const response = await fetch(url);

      // Check for response status
      if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Fetch Error:", error);
      throw new Error("Unable to fetch data. Please check your connection or the API.");
    }
  }

  // Display posts on the page
  function displayPosts(posts) {
    postsContainer.innerHTML = ""; // Clear previous results
    posts.slice(0, 10).forEach(post => {
      const div = document.createElement("div");
      div.className = "post";
      div.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.body}</p>
      `;
      postsContainer.appendChild(div);
    });
  }

  // Display todos on the page
  function displayTodos(todos) {
    todosContainer.innerHTML = ""; // Clear previous results
    todos.slice(0, 10).forEach(todo => {
      const div = document.createElement("div");
      div.className = `todo ${todo.completed ? "completed" : ""}`;
      div.textContent = todo.title;
      todosContainer.appendChild(div);
    });
  }

  // Display user-friendly error messages in UI
  function showError(container, message) {
    container.innerHTML = `<p style="color: red; font-weight: bold;"> ${message}</p>`;
  }

  // Event listeners for buttons
  function initEventListeners() {
    document.getElementById("fetchPostsBtn").addEventListener("click", async () => {
      try {
        const posts = await fetchData(POSTS_API);
        displayPosts(posts);
      } catch (error) {
        showError(postsContainer, error.message);
      }
    });

    document.getElementById("fetchTodosBtn").addEventListener("click", async () => {
      try {
        const todos = await fetchData(TODOS_API);
        displayTodos(todos);
      } catch (error) {
        showError(todosContainer, error.message);
      }
    });
  }

  // Initialize app
  function init() {
    initEventListeners();
  }

  // Expose public methods (Revealing Module Pattern)
  return {
    init,
    fetchData,
  };
})();

// Initialize app when script loads
App.init();
