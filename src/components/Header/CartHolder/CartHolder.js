import React from 'react'

// icons from font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

library.add(faTimes);

export const CartHolder = () => {

    const iconClose = <FontAwesomeIcon icon={faTimes} size="2x" />;

    return (
        <div className="cart-Holder">
            <span onClick={() => {
                document.querySelector('.cart-Holder').classList.remove('cart-Holder-Open')
            }}>{iconClose}</span>
        </div>
    )
}
