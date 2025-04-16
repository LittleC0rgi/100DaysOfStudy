class PayWithPayPal {
  pay(amount) {
    console.log(`Paid ${amount} using PayPal`);
  }
}

class PayWithCard {
  pay(amount) {
    console.log(`Paid ${amount} using credit card`);
  }
}

class PayWithCrypto {
  pay(amount) {
    console.log(`Paid ${amount} using Bitcoin`);
  }
}

const strategies = {
  paypal: PayWithPayPal,
  card: PayWithPayPal,
  crypto: PayWithPayPal,
};

function getPaymentStrategy(methodName: "paypal" | "card" | "crypto") {
  return new strategies[methodName]();
  throw new Error("Don't have strategy");
}

// function getPaymentStrategy(methodName) {
//   if (methodName === "paypal") return new PayWithPayPal();
//   if (methodName === "card") return new PayWithCard();
//   if (methodName === "crypto") return new PayWithCrypto();
//   throw new Error("Don't have strategy");
// }

const payment = getPaymentStrategy("crypto");
payment.pay(250);
