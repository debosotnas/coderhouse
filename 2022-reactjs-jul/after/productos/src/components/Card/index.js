import './Card.css';

export default function Card (props) {



    return (
        <div className={`card-cmp ${ props.isProduct ? 'product-card' : ''}`}>
            { props.children }
        </div>
    );
}