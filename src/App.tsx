import { createSignal } from "solid-js";

function App() {
  const [count, setCount] = createSignal(0);

  return (
    <main>
      <h1 class="sr-only">Basic calculator</h1>
    </main>
  );
}

export default App;
