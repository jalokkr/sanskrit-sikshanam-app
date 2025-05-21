class PaymentService {
  static async initiatePayment(courseId, amount) {
    try {
      const response = await fetch("https://your-backend.com/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ courseId, amount }),
      });

      const result = await response.json();

      if (result && result.id) {
        // Construct the Razorpay Checkout URL
        const paymentUrl = `https://your-backend.com/checkout.html?order_id=${result.id}&amount=${result.amount}`;
        return { success: true, paymentUrl };
      } else {
        throw new Error("Order creation failed.");
      }
    } catch (error) {
      console.error("Razorpay Order Error:", error);
      throw error;
    }
  }
}

export default PaymentService;
