import React from 'react';
import './Footer.css';

class Footer extends React.Component {

    render() {
        return (
            <footer>
                <div className='links'>
                    <a href='#' alt="">Link 1</a> |
                    <a href='#' alt="">Link 2</a> |
                    <a href='#' alt="">Link 3</a>
                </div>
                <div className='copy'>
                    Copyright © 2022
                </div>
            </footer>
        )
    }
    
}

export default Footer;