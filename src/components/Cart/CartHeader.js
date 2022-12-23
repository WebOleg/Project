import React, { useState } from 'react'
import productsArray from 'utils/productsArray'
import './Pop-up.scss'
import CloseIcon from '@mui/icons-material/Close'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { Link } from 'react-router-dom'

const productsObject = productsArray.reduce(
    (object, product) => ({
        ...object,
        [product.id]: product,
    }),
    {}
)
console.log(productsArray)
console.log(productsObject)
const CartHeader = ({ productsInCart }) => {
    const [popUpShow, setPopUpShow] = useState(false)
    return (
        <div>
            <ShoppingCartIcon onClick={() => setPopUpShow(true)} />
            {popUpShow && (
                <div className="card-modal">
                    <div className="card-item">
                        <div className="link">
                            <Link
                                onClick={() => setPopUpShow(false)}
                                to={'/cart'}
                            >
                                <ShoppingCartIcon
                                    onClick={() => setPopUpShow(true)}
                                />
                            </Link>
                        </div>
                        <div className="close">
                            <CloseIcon onClick={() => setPopUpShow(false)} />
                        </div>
                        <h1>Cart</h1>
                        <div className="list">
                            {Object.keys(productsInCart).map((productId) => (
                                <div key={productId}>
                                    {productsObject[productId].title}:
                                    {productsInCart[productId]}
                                </div>
                            ))}
                        </div>
                        <div className="total">
                            Total:
                            {Object.keys(productsInCart).reduce(
                                (sum, id) =>
                                    sum +
                                    productsObject[id].price *
                                        productsInCart[id],
                                0
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default CartHeader
