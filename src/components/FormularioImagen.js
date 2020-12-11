import React, { Component } from "react";
import "../assets/css/FormularioImagen.css";

class FormularioImagen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textoLabel: "Seleccione un archivo",
    };
  }

  cambiarLabel = (event) =>{
    this.setState({ textoLabel: event.target.files[0].name });
  }

  render() {
    return (
      <div className="col-md-6 mt-2">
        <div className="card border-rounded border-dark shadow">
          <div className="card-header encabezado-formulario text-center">
            <h5>Ingrese una imagen valida</h5>
          </div>
          <div className="card-body">
            <div className="input-group">
              <div className="custom-file">
                <input
                  type="file"
                  className="custom-file-input"
                  id="inputGroupFile01"
                  onChange={this.cambiarLabel}
                  aria-describedby="inputGroupFileAddon01"
                  accept="image/*"
                />
                <label className="custom-file-label" htmlFor="inputGroupFile01">
                  {this.state.textoLabel}
                </label>
              </div>
              <div className="input-group-append">
                <button
                  className="btn btn-purple btn"
                  href="#0"
                  id="inputGroupFileAddon02"
                >
                  Enviar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FormularioImagen;
