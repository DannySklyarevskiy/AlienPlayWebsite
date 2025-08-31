import "./App.css";
import Particles from "./components/Particles";

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
    <div>
      <div>
        <Particles></Particles>
      </div>
      <div className="App">
        <header className="App-header">
          <button onClick={handleClick}>Spare humanity</button>
          <button onClick={handleClick}>Destroy humanity</button>
        </header>
      </div>
    </div>
  );
}

export default App;
