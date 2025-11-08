import dispatcher from "./dispatcher";

let books = [];

const store = {
  getBooks: () => books,

  addChangeListener: (cb) => {
    dispatcher.addEventListener("change", cb);
  },

  removeChangeListener: (cb) => {
    dispatcher.removeEventListener("change", cb);
  },
};

dispatcher.addEventListener("action", (event) => {
  const action = event.detail;

  switch (action.type) {
    case "ADD_BOOK":
      books.push({ id: Date.now(), ...action.payload });
      dispatcher.dispatchEvent(new Event("change"));
      break;
    default:
      break;
  }
});

export default store;
