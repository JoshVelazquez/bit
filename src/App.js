import './assets/css/App.css';
import Navbar from './components/Navbar';
import FormularioImagen from './components/FormularioImagen';

function App() {
  return (
    <div>
      <Navbar />
      <div className="container mt-3">
        <div className="row">
            <FormularioImagen />
        </div>
      </div>
    </div>
  );
}

export default App;
