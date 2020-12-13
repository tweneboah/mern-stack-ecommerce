// import expressAsyncHandler from 'express-async-handler';
// import crypto from 'crypto';

// //Paystack will this automatically
// const paystackWebhookController = expressAsyncHandler(async (req, res) => {
//   try {
//     let secret = process.env.paystackTestSecretKey;
//     // let hash = crypto
//     //   .createHmac('sha512', secret)
//     //   .update(JSON.stringify(req.body))
//     //   .digest('hex');

//     // if (hash == req.headers['x-paystack-signature']) {
//     //   //We have access to the event data at req.body
//     //   //Here we can check for an event type then triger the neccesaary cutom function
//     //   let webHookData = req.body;

//     //   //console.log(webHookData);
//     //   // if (webHookData.data.plan && webHookData.data.plan !== undefined) {
//     //   //   console.log(webHookData.data.plan);
//     //   // }else {

//     //   // }

//     //   // if (!webHookData.data.subscription && webHookData.data.plan) {
//     //   //   console.log(webHookData);
//     //   // } else {
//     //   // }
//     //   //Find the user and then you can update his records like this
//     //   // let paidUser = await User.findOne({
//     //   //   email: webHookData.data.customer.email,
//     //   // });
//     //   // let updatedPaidUser = await User.findByIdAndUpdate(
//     //   //   paidUser._id,
//     //   //   {
//     //   //     paidForVacation: true,
//     //   //     paymentDetails: webHookData,
//     //   //   },
//     //   //   { new: true }
//     //   // );
//     //   // console.log(updatedPaidUser);

//     //   console.log(webHookData.data.event);
//     // }
//     //Paystack requires us to send 200

//     // var hash = crypto
//     //   .createHmac('sha512', secret)
//     //   .update(JSON.stringify(req.body))
//     //   .digest('hex');
//     // if (hash == req.headers['x-paystack-signature']) {
//     //   // Retrieve the request's body
//     //   var event = req.body;
//     //   // Do something with event

//     // }

//     console.log(req.body);
//     res.sendStatus(200);
//   } catch (error) {
//     console.log(error.message);
//     console.log(error);
//   }
// });

// export { paystackWebhookController };

import expressAsyncHandler from 'express-async-handler';
import crypto from 'crypto';
import User from '../models/userModel';
import Order from '../models/orderModel';
import { Payment } from '../models/paymentModel';
//Paystack will this automatically
const paystackWebhookController = expressAsyncHandler(async (req, res) => {
  let secret = process.env.paystackTestSecretKey;
  let hash = crypto
    .createHmac('sha512', secret)
    .update(JSON.stringify(req.body))
    .digest('hex');

  if (hash == req.headers['x-paystack-signature']) {
    const webHookData = req.body;
    if (webHookData.event === 'charge.success') {
      const { amount, reference, currency, channel } = webHookData.data;
      const { last4, exp_year, bank } = webHookData.data.authorization;
      const { email } = webHookData.data.customer;
      if (
        webHookData.data.metadata &&
        webHookData.data.metadata.custom_fields
      ) {
        //Order Id
        const orderId = webHookData.data.metadata.custom_fields;
        const paid = await Order.findByIdAndUpdate(
          orderId,
          {
            isPaid: true,
          },
          { runValidators: true, new: true }
        );

        //Create payment

        const newPayment = await Payment.create({
          user: email,
          order: orderId,
          amountPaid: amount,
          paymentReference: reference,
          bank: bank,
          lastFourDigitOfYourAccount: last4,
        });
        console.log(newPayment);
      }
    }
  }
  //Paystack requires us to send 200
  res.sendStatus(200);
});

export { paystackWebhookController };
