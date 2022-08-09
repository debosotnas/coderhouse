import { Link, NavLink } from "react-router-dom";

export default function AboutPage () {

    return (
        <div className="page">
            <h1>About Us!</h1>
            {/* <div className="nav">
                <Link to={'/users'}>Show Users</Link>
                {' '}
                <NavLink 
                    to={'/'}
                    className={({isActive}) => isActive ? 'class-for-active-link' : undefined }
                >Home</NavLink>
                {' '}
                <NavLink 
                    to={'/about-us'}
                    className={({isActive}) => isActive ? 'class-for-active-link' : undefined }
                >About Us</NavLink>
            </div> */}
        </div>
    );
}