import React, { useState } from "react";

class CounterDisplay extends React.PureComponent {
  render() {
    console.log("PureComponent rendered");
    return <h3>Counter: {this.props.count}</h3>;
  }
}

const PureComponentDemo = () => {
  const [count, setCount] = useState(0);
  const [dummy, setDummy] = useState(false);

  return (
    <div>
      <h2>Pure Component Demo</h2>
      <p><strong>React.PureComponent</strong> only re-renders when props/state change.</p>
      <CounterDisplay count={count} />
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setDummy(!dummy)}>Toggle Dummy State</button>
      <p>Open console to see render behavior.</p>
    </div>
  );
};

export default PureComponentDemo;
