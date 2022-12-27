import { ClassNames } from '@emotion/react'
import { Card, CardContent } from '@mui/material'
import React from 'react'
import './CartProductItem.scss'

const CartProductListItemExtanded = ({ count, product }) => {
    return (
        <Card className="card-item">
            <CardContent className="content">
                <div className="name">{product.title}</div>
                <div className="price">
                    For one item - <strong>{product.price}</strong>
                </div>
                <img src={product.image}></img>
                <div className="count">
                    Count: <strong>{count}</strong>
                </div>
            </CardContent>
        </Card>
    )
}

export default CartProductListItemExtanded
