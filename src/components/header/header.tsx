import React from 'react';
import { Link } from 'react-router-dom';

import "./header.scss";

export const Header: React.FC = () => {
    return (
        <div className="header">
            <div></div>
            <ul>
                <li>
                    <Link to="/">Star Wars</Link>
                </li>
                <li>
                    <Link to="/cep">Cep</Link>
                </li>
                <li>
                    <Link to="/pokemon">Pokemon</Link>
                </li>
                <li>
                    <Link to="/nasa">Nasa</Link>
                </li>
                <li>
                    <Link to="/time">time</Link>
                </li>
            </ul>
        </div>
    )
}


