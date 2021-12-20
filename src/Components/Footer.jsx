import React from 'react'

const Footer = () => {
    return (
        <div id='footer'>
            <div className='row'>
                <div className='col-7' id="footerLeftSection">
                    <p id='footerBackArrow'>
                      <i className='fas fa-arrow-left'/><span>&nbsp;&nbsp;Back</span>
                    </p>
                </div>
                <div className='col-5' id='footerRightSection'>
                    <button className='buttons footerButtons'>CONTINUE SHOPPING</button>
                    <button className='buttons footerButtons'>PROCEED TO PAYMENT</button>
                </div>
            </div>
        </div>
    );
}

export default Footer;
