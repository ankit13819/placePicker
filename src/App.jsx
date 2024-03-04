import "./App.css";
import Places from "./components/Places";
import logoImg from "./assets/logo.png";
function App() {
  return (
    <>
      <header>
        <img src={logoImg} alt="Stylized globe" />
        <h1>PlacePicker</h1>
        <p>
          Create your personal collection of places you would like to visit or
          you have visited.
        </p>
      </header>
      <main>
        <Places
          title="I'd like to visit ..."
          fallbackText={"Select the places you would like to visit below."}
        />
      </main>
    </>
  );
}

export default App;
