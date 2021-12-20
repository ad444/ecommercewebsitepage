import React from 'react';
import { Link } from 'react-router-dom';
const LeftSection = () => {
    return (
        <div className='col-5' id="leftSection">
            <p className="leftSectionText">Shipping and Payment</p>

            <Link to='/login'><button className="buttons">LOG IN</button></Link>
            <Link to='/signup'><button className="buttons">SIGN UP</button></Link>

            <p className='sectionText'>Shipping Information</p>
            <form>
                <input type='text' placeholder='Email'className='shippingDetailsBar'/>
                <input type='text' placeholder='Address'className='shippingDetailsBar'/>

                <input type='text' placeholder='First Name'className='shippingDetailsBar'/>
                <input type='text' placeholder='City'className='shippingDetailsBar'/>

                <input type='text' placeholder='Last Name'className='shippingDetailsBar'/>
                <input type='text' placeholder='Postal Code/Zip'className='shippingDetailsBar'/>

                <input type='text' placeholder='Phone Number'className='shippingDetailsBar'/>
                <select name="countries" className='shippingDetailsBar'>
                    <option value='Poland'>Poland</option>
                    <option value='India'>India</option>
                    <option value='USA'>USA</option>
                    <option value='England'>England</option>
                    <option value='Australia'>Australia</option>
                </select>
            </form>
        </div>
    );
}

export default LeftSection;
