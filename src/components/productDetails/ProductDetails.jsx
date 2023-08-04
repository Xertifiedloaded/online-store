import React, { useContext } from 'react'
import { UserShopContext } from '../contextApi/shopContext'
import { Products, Products2 } from '../../utils/product';

const ProductDetails = () => {
    const { selectedProduct,cartItem,} = useContext(UserShopContext)
    const productId = selectedProduct || 0;
    const product = Products.find((p) => p.id === productId) || Products2.find((p) => p.id === productId);
    if (!product) {
        return null;
    }
    const cartItemAmount = cartItem[product.id];
    return (
        <>
            <div>
                <img src={product.image} alt="" />
            </div>
        </>
    )
}

export default ProductDetails