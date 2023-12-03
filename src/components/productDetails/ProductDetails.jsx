import React, { useContext } from 'react'
import { UserShopContext } from '../contextApi/shopContext'
import { Products, Products2 } from '../../utils/product';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
    const { id } = useParams()
    console.log(id)
    const { selectedProduct, cartItem, } = useContext(UserShopContext)
    const productId = selectedProduct || 0;
    const product = Products.find((p) => p.id === productId) || Products2.find((p) => p.id === productId);
    if (!product) {
        return null;
    }
    const cartItemAmount = cartItem[product.id];
    return (
        <>
            <div>
                <p>{product.name}</p>
                <p>{product.price}</p>
            </div>
        </>
    )
}

export default ProductDetails