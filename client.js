var stripe = Stripe('pk_test_SEefk7oSewAGHQnpJ537MuCs00wY78nkET');
var elememts = stripe.elements();
var cardElement = elements.create('card');
cardElement.mount('#card-element');

var cardholderName = document.getElementById('cardholder-name');
var cardButton = document.getElementById('card-button');

cardButton.addEventListener('click', function(ev){
    stripe.createPaymentMethod('card', cardElement, {
        billing_details: {name: cardholderName.value}
    }).then(function(result){
        if(result.error){
            //show error in the payment form
        }
    })
})