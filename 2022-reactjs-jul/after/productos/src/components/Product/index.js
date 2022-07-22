import './Product.css'

import Card from '../Card';

export default function Product() {

    const comprar = () => {
        console.log('estoy comprando');
    }

    return (
        <Card isProduct={true}>
            <div className="product-cmp row">
                <div className="col-3">
                    <img src="http://fpoimg.com/300x250?text=Preview" />
                </div>
                <div className="col content">
                    <h3>Este es el título del producto</h3>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fermentum ac est id malesuada. Nunc vestibulum enim est, sed sagittis sapien interdum ege
                    </p>
                    <button onClick={comprar}>Comprar</button>
                </div>
            </div>
        </Card>
    );
} 