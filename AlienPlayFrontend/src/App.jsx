import "./App.css";
import Particles from "./components/Particles";

function App() {
  const handleClick = async (action) => {
    try {
      const response = await fetch("/api/sendVote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ action: action }),
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
      <div className="App">
        <div className="ParticlesWrapper">
          <Particles />
        </div>
        <button onClick={() => handleClick("spare")}>Spare humanity</button>
        <button onClick={() => handleClick("destroy")}>Destroy humanity</button>
      </div>
    </div>
  );
}

export default App;
