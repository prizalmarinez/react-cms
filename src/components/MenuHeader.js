import React from 'react';
import { Link } from "react-router-dom";

const MenuHeader = () => {
    return (
        <div className="ui top fixed menu">
            <div className="header item">
                <Link to="/"> React CMS</Link>
            </div>
            <div className="ui item">
                <Link to="/posts/new"> Add Post</Link>
            </div>
            <div className="right menu">
                <div className="item">
                    <a href="https://github.com/prizalmarinez?tab=repositories" target="_blank" rel="noopener noreferrer">
                        <i className="github icon"></i>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default MenuHeader;