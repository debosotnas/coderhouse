import './Header.css';

// function Header ({ titulo }) {
function Header (props) {
    return (
        <header>
            <h1>{props.titulo}</h1>
        </header>
    );
}

export default Header;
// export { Header };