import React, { Component } from 'react';
import '../assets/css/FormularioImagen.css';

class FormularioImagen extends Component {

    constructor(props) {
        super(props);
        this.fileInput = React.createRef();
      }

    render() {
        return (
            <div className="col-md-6">
                <div className="card border-rounded border-dark shadow">
                    <div className="card-header encabezado-formulario text-center">
                        <h5>Ingrese una imagen valida</h5>
                </div>
                    <div className="card-body">
                        <div className="input-group">
                            <form className="custom-file" action="" method="">
                                <input type="file" className="custom-file-input" id="inputGroupFile01" aria-describedby="inputGroupFileAddon01"/>
                                <label className="custom-file-label" for="inputGroupFile01">Enviar</label>
                                <button className="btn btn-purple btn mt-2" href="#0">Enviar</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FormularioImagen;