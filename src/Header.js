import React from "react";
import './header.css';

const header = () => {
    return (
        <header>
            <div className="login">
                <div className="lgnButton">
                    <button><strong>LF</strong></button>
                </div>
                <h4><strong>lucas.f@vough.com | Vough</strong></h4>
            </div>
        </header>
    )
}

export default header;