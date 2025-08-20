import "./App.css";

function App() {
  const handleClick = async () => {
    try {
      const response = await fetch("/api/hi", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      console.log("Button clicked - check your Go server console");
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={handleClick}>Click Me</button>
      </header>
    </div>
  );
}

export default App;
