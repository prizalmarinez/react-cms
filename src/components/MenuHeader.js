import React from 'react';

const MenuHeader = () => {
    return (
        <div className="ui menu">
            <div className="header item">
                React CMS
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