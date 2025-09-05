(function () {
  try {
    // BigCommerce expone la data de checkout en window.__stencilData
    var checkoutData = window.__stencilData?.page?.checkout;

    if (!checkoutData || !checkoutData.order) {
      console.warn("🧪 TEST: No order data found in BigCommerce checkout data");
      return;
    }

    var orderId = checkoutData.order.orderId || "";
    var amount = checkoutData.order.orderAmount || 0;
    var currency = checkoutData.order.currency?.code || "USD";

    // 👉 Log de prueba en consola
    console.log("🧪 TEST: BigCommerce order data ✅", {
      orderId: orderId,
      amount: amount,
      currency: currency
    });

  } catch (err) {
    console.error("🧪 TEST: Script error", err);
  }
})();
