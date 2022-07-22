import Card from "../Card";

export default function Form () {
    return (
        <Card>
            <h2>Agregar producto</h2>
            <div className="row">
                <div className="col">
                    <label>Título del producto:</label>
                    <br />
                    <input className="form-control" type="text" />
                    <br />
                    <label>Precio:</label>
                    <br />
                    <input className="form-control" type="text" />
                    <br />
                    <label>Imagen:</label>
                    <br />
                    <input type="file" className="form-control" />
                </div>
                <div className="col">
                    <textarea className="form-control"></textarea>
                    <br />
                    <button className="btn btn-primary">Resetear</button>
                    <button className="btn btn-secondary">Guardar</button>
                </div>
            </div>
        </Card>
    );
}