import React, { Component } from 'react';
import '../assets/css/FormularioImagen.css';

class FormularioImagen extends Component {
    render() {
        return (
            <div className="col-md-6">
                <div className="card text-justify border-rounded border-dark">
                    <div className="card-header encabezado-formulario">
                        Ingrese una imagen valida
                </div>
                    <div className="card-body">
                        <form action="" method="" className="input-group">
                            <input type="file" className="custom-file-input" id="img"></input>
                            <label class="custom-file-label" for="img">Escoge tu archivo</label>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default FormularioImagen;