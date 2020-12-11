import "./assets/css/App.css";
import Navbar from "./components/Navbar";
import FormularioImagen from "./components/FormularioImagen";
import FormularioDatos from "./components/FormularioDatos";

function App() {
  return (
    <div>
      <Navbar />
      <div className="container mt-3">
        <div className="row">
          <FormularioImagen />
          <FormularioDatos />
        </div>
      </div>
    </div>
  );
}

export default App;
