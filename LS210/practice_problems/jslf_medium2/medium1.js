function processOrder(price, quantity, discount, serviceCharge, tax) {
  if (!quantity && quantity != 0) {
    quantity = 1;
  }

  if (!discount && discount != 0) {
    discount = 0;
  }

  if (!serviceCharge && serviceCharge != 0 ) {
    serviceCharge = 0.1;
  }

  if (!tax && tax != 0) {
    tax = 0.15;
  }

  return (price * quantity) * (1 - discount) * (1 + serviceCharge) * (1 + tax);
}

console.log(processOrder(100, 2, 0.1, 0, 0));      // 126.5