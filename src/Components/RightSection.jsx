import React from 'react';
import Product1 from '../Images/CartProductsImages/product1.jpg';
import Product2 from '../Images/CartProductsImages/product2.jpg';
const RightSection = () => {
    return (
        <div className='col-3' id='rightSection'>
            <div style={{ float: 'right' }}>
                <button className='rightSectionUpperIcon'><i className='fas fa-shopping-cart' /></button>
                <div id='rightSectionUpperLineDivision'></div>
                <button className='rightSectionUpperIcon'><i className='fas fa-truck' /></button>
            </div>
            <p id='productsSectionTitleText'>Your Cart</p>
            <div id='productsSection'>
                {/* Product 1 */}
                <div className='product'>
                    <div className='items ' id='item1'><img className="productImage" src={Product1} alt="productImage"/></div>
                    <div className='items ' id='item2'>
                        <p className='productName'>T-Shirt Summer Vibes</p>
                        <p className='productID'>#261311</p>
                    </div>
                    <div className='items ' id='item3'><p className='productPrice'>$89.99</p></div>
                </div>
                {/* Product 2 */}
                <div className='product'>
                    <div className='items ' id='item1'><img className="productImage" src={Product2} alt="productImage"/></div>
                    <div className='items ' id='item2'>
                        <p className='productName'>Basic Slim Fit T-Shirt</p>
                        <p className='productID'>#261312</p>
                    </div>
                    <div className='items ' id='item3'><p className='productPrice'>$99.99</p></div>
                </div>  
                {/* Product 3 */}
                <div className='product'>
                    <div className='items ' id='item1'><img className="productImage" src={Product2} alt="productImage"/></div>
                    <div className='items ' id='item2'>
                        <p className='productName'>Basic Slim Fit T-Shirt</p>
                        <p className='productID'>#261312</p>
                    </div>
                    <div className='items ' id='item3'><p className='productPrice'>$99.99</p></div>
                </div> 
                {/* Product 4 */}
                <div className='product'>
                    <div className='items ' id='item1'><img className="productImage" src={Product2} alt="productImage"/></div>
                    <div className='items ' id='item2'>
                        <p className='productName'>Basic Slim Fit T-Shirt</p>
                        <p className='productID'>#261312</p>
                    </div>
                    <div className='items ' id='item3'><p className='productPrice'>$99.99</p></div>
                </div> 
            </div>
            <div id='productsCalculation'>
                <p style={{position: 'relative',top: '50%', transform: 'translateY(-50%)'}}><span style={{color:'rgb(154 150 150)'}}>Calculated Cost</span> $389.96</p>
            </div>

            <div id='deliveryChargeBox'>
                <div className='items'>
                   <i className='fas fa-truck' id='deliveryTruckIcon'/>
                </div>
                <div className='items secondBlock'>
                   <p id='deliveryText'>You are $30.02 away from free shipping.</p>
                </div>
            </div>
        </div>
    )
}

export default RightSection;
