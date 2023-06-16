import React from 'react';
import { Link } from 'react-router-dom';

const navbar = () => {
    return (
        <div>
            <nav className="navbar bg-body-tertiary">
                <div className="container justify-content-start">
                    <Link to={'/pemilik'} className="btn btn-sm btn-outline-success" type="button">Pemilik</Link>
                    <Link to={'/kos'} className="btn btn-sm btn-outline-success ms-3" type="button">Kos</Link>
                </div>
            </nav>
        </div>
    )
}

export default navbar
