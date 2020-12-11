import mongoose from 'mongoose';

const paymentSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  order: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Order',
  },
  paymentDetails: {
    acoountNumber: {
      type: String,
      required: true,
    },
    amountPaid: {
      type: String,
      required: true,
    },
    paymentReference: {
      type: String,
      required: true,
    },
  },
});

const Payment = mongoose.model('Payment', paymentSchema);
//This will be called at webohook
export { Payment };
