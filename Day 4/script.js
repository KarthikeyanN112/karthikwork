<<<<<<< HEAD
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
=======
// here we weill fetch REST API using JavaScript Fetch API
// Fetch API is used to make network requests similar to XMLHttpRequest (XHR)
// but it is more powerful and flexible
// Restful API demo using Fetch API + Async Await

// GET/users : Retrieve data from a server
//POST/users : Send data to a server to create a new resource
//PUT/users/:id : Update an existing resource on the server
//DELETE/users/:id : Remove a resource from the server

const userList = document.getElementById("user-list");
const loadUsersBtn = document.getElementById("loadUsers");
const addUserBtn = document.getElementById("addUser");

const API_URL = "https://jsonplaceholder.typicode.com/users";

// Creating specific function for each operations
// Fetch Users - GET request
async function fetchUsers() {
    try {   
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const users = await response.json();
        displayUsers(users);
    } catch (error) {
        console.error("Error fetching users:", error);
    }
}

// Display Users
function displayUsers(users) {
    userList.innerHTML = ""; // Clear existing user list
    users.forEach(user => {
        const userItem = document.createElement("div");
        userItem.className = "user-item";
        userItem.innerHTML = `
            <h3>${user.name}</h3>
            <p>Email: ${user.email}</p>
            <button onclick="editUser(${user.id})">Edit</button>
            <button onclick="deleteUser(${user.id})">Delete</button>
        `;
        userList.appendChild(userItem);
    });
}
// Add User - POST request
async function addUser() {
    // here we are adding static user data for demo purpose
    const newUser = {
        name: "New User",
        email: "newuser@example.com"
    };
    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newUser)
            // stringify is used to convert JavaScript object to JSON string, 
            // so that it can be sent in the request body
        });
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const createdUser = await response.json();
        displayUsers([createdUser]);
    } catch (error) {
        console.error("Error adding user:", error);
    }
}
// Edit User - PUT request
async function editUser(userId) {
    const updatedUser = {
        name: "Updated User",
        email: "updateduser@example.com"
    };
    try {
        const response = await fetch(`${API_URL}/${userId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedUser)
        });
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const result = await response.json();
        console.log("User updated successfully:", result);
        fetchUsers(); // Refresh user list
    } catch (error) {
        console.error("Error updating user:", error);
    }
}
// Delete User - DELETE request
async function deleteUser(userId) {
    try {
        const response = await fetch(`${API_URL}/${userId}`, {
            method: "DELETE"
        });
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        console.log("User deleted successfully");
        fetchUsers(); // Refresh user list
    } catch (error) {
        console.error("Error deleting user:", error);
    }
}
// Event Listeners : for buttons
loadUsersBtn.addEventListener("click", fetchUsers);
addUserBtn.addEventListener("click", addUser);
>>>>>>> ba25c09 (initial commit)
