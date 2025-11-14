// foodexpress-async-demo - index.js
// Demonstrates Callbacks, Promises, and Async/Await together.

// =========================
// 1. FETCH ORDER (CALLBACKS)
// =========================
function fetchOrder(orderId, callback) {
  console.log("\nFetching order...");

  setTimeout(() => {
    const mockDB = {
      101: { id: 101, item: "Pizza", amount: 250 },
      102: { id: 102, item: "Burger", amount: 180 },
    };

    const order = mockDB[orderId];

    if (!order) {
      callback("Order not found!", null);  // error-first callback
    } else {
      callback(null, order);
    }
  }, 1000);
}

// =========================
// 2. PROCESS PAYMENT (PROMISES)
// =========================
function processPayment(order) {
  console.log("Processing payment...");

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Toggle this flag to simulate success / failure
      const paymentSuccess = true;  // set to false to test rejection

      if (!paymentSuccess) {
        reject(new Error("Payment failed!"));
      } else {
        resolve({
          status: "Payment Successful",
          orderId: order.id,
          amount: order.amount
        });
      }
    }, 1000);
  });
}

// =========================
// 3. GENERATE INVOICE (ASYNC/AWAIT)
// =========================
async function generateInvoice(paymentDetails) {
  console.log("Generating invoice...");

  // simulate async work
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        invoiceId: Math.floor(Math.random() * 10000),
        orderId: paymentDetails.orderId,
        amount: paymentDetails.amount,
        message: "Invoice generated successfully"
      });
    }, 1000);
  });
}

// =========================
// MAIN FLOW
// =========================
function main() {
  // 1) Fetch order using callbacks (demonstrates older Node-style APIs)
  fetchOrder(101, (err, order) => {
    if (err) {
      return console.error("Error fetching order:", err);
    }

    console.log("Order fetched:", order);

    // 2) Process payment (Promises)
    processPayment(order)
      .then(paymentResult => {
        console.log("Payment Result:", paymentResult);

        // 3) Generate invoice (Async/Await)
        return generateInvoice(paymentResult);
      })
      .then(invoice => {
        console.log("Invoice Generated:", invoice);
      })
      .catch(err => {
        console.error("Error during processing:", err.message || err);
      });
  });
}

// Run main
main();
