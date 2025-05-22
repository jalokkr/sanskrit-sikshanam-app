class PaymentService {
  static async initiatePayment(courseId, amount) {
    try {
      const response = await fetch("http://localhost:3001/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ courseId, amount }),
      });

      const result = await response.json();

      if (result.success && result.paymentUrl) {
        return { success: true, paymentUrl: result.paymentUrl };
      } else {
        throw new Error("Order creation failed.");
      }
    } catch (error) {
      console.error("Cashfree Order Error:", error);
      throw error;
    }
  }
}

export default PaymentService;
