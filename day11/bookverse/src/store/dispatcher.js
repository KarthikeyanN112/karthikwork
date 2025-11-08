class Dispatcher extends EventTarget {
  dispatch(action) {
    this.dispatchEvent(new CustomEvent("action", { detail: action }));
  }
}

export default new Dispatcher();
