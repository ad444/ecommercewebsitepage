import React, { useState } from 'react'
import paypalLogo from '../Images/PaymentMethodsLogos/paypal_logo.png';
import visaLogo from '../Images/PaymentMethodsLogos/visa_logo.png'
import masterCardLogo from '../Images/PaymentMethodsLogos/mastercard_logo.png'
import maestroLogo from '../Images/PaymentMethodsLogos/maestro_logo.png'
import idealLogo from '../Images/PaymentMethodsLogos/ideal_logo.png'
import discoverLogo from '../Images/PaymentMethodsLogos/discover_logo.png'
import dhlLogo from '../Images/DeliveryMethodsLogos/dhl_logo.svg' 
import dpdLogo from '../Images/DeliveryMethodsLogos/dpd_logo.jpg' 
import fedexLogo from '../Images/DeliveryMethodsLogos/fedex_logo.svg' 
import inpostLogo from '../Images/DeliveryMethodsLogos/inpost_logo.png' 
const MiddleSection = () => {
    const [paymentMethodActiveState, setPaymentMethodActiveState] = useState({
      paypal:'paymentMethod',
      visa:'paymentMethod',
      mastercard:'paymentMethod',
      maestro:'paymentMethod',
      discover:'paymentMethod',
      ideal:'paymentMethod'
    });

    const [deliveryMethodActiveState, setDeliveryMethodActiveState] = useState({
        dhl:'deliveryMethod',
        dpd:'deliveryMethod',
        fedex:'deliveryMethod',
        inpost:'deliveryMethod'
      });

    const changePaymentMethodActiveState = (e) =>{
          const element = e.target.name; 
          setPaymentMethodActiveState((prev)=>{
            prev.paypal='paymentMethod';
            prev.visa='paymentMethod';
            prev.mastercard='paymentMethod';
            prev.maestro='paymentMethod';
            prev.discover='paymentMethod';
            prev.ideal='paymentMethod';
            return {
                ...prev,
                [element]:'paymentMethod activePaymentMethod'
            }
          })
    }

    const changeDeliveryMethodActiveState = (e) =>{
        const element = e.target.name; 
        setDeliveryMethodActiveState((prev)=>{
          prev.dhl='deliveryMethod';
          prev.dpd='deliveryMethod';
          prev.fedex='deliveryMethod';
          prev.inpost='deliveryMethod';
          return {
              ...prev,
              [element]:'deliveryMethod activeDeliveryMethod'
          }
        })
  }

    return (
        <div className='col-4'>
            <div>
                <p className='sectionText middleSectionTitleText'>Payment Method</p>
                <button onFocus={changePaymentMethodActiveState} name="paypal" className={paymentMethodActiveState.paypal}><img src={paypalLogo} className='paymentMethodsImages' alt='paypal_logo'/></button>
                <button onFocus={changePaymentMethodActiveState} name="visa" className={paymentMethodActiveState.visa}><img src={visaLogo} className='paymentMethodsImages' alt='visa_logo'/></button>
                <button onFocus={changePaymentMethodActiveState} name="mastercard" className={paymentMethodActiveState.mastercard}><img src={masterCardLogo} className='paymentMethodsImages' alt='mastercard_logo'/></button>
                <button onFocus={changePaymentMethodActiveState} name="maestro" className={paymentMethodActiveState.maestro}><img src={maestroLogo} className='paymentMethodsImages' alt='maestro_logo'/></button>
                <button onFocus={changePaymentMethodActiveState} name="discover" className={paymentMethodActiveState.discover}><img src={discoverLogo} className='paymentMethodsImages' alt='discover_logo'/></button>
                <button onFocus={changePaymentMethodActiveState} name="ideal" className={paymentMethodActiveState.ideal}><img src={idealLogo} className='paymentMethodsImages' alt='ideal_logo'/></button>
            </div>
            <div>
                <p className='sectionText middleSectionDeliveryTitleText'>Delivery Method</p>
                <button onFocus={changeDeliveryMethodActiveState} name="dhl" className={deliveryMethodActiveState.dhl}><img src={dhlLogo} className='deliveryMethodsImages' alt='dhl_logo'/><span className='deliveryMethodCharge'>$20</span></button>
                <button onFocus={changeDeliveryMethodActiveState} name="dpd" className={deliveryMethodActiveState.dpd}><img src={dpdLogo} className='deliveryMethodsImages' alt='dpd_logo'/><span className='deliveryMethodCharge'>$12</span></button>
                <button onFocus={changeDeliveryMethodActiveState} name="fedex" className={deliveryMethodActiveState.fedex}><img src={fedexLogo} className='deliveryMethodsImages' alt='fedex_logo'/><span className='deliveryMethodCharge'>$15</span></button>
                <button onFocus={changeDeliveryMethodActiveState} name="inpost" className={deliveryMethodActiveState.inpost}><img src={inpostLogo} className='deliveryMethodsImages' alt='inpost_logo'/><span className='deliveryMethodCharge'>$10</span></button>
            </div>
        </div>
    )
}

export default MiddleSection;
