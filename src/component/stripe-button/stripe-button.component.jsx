import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100 
    const publishableKey = 'pk_test_M0udjQH9soH0eddvOoxoktNB00UmdH6bOG'
    const onToken = token => {
        console.log(token)
        alert('payment successful')
    }

    return (
        <StripeCheckout 
            label="Pay Now"
            name="CRWN Clothing"
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $ ${price}`} 
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton