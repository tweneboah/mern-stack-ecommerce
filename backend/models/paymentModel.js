import mongoose from 'mongoose';

const paymentSchema = new mongoose.Schema({
  user: {
    type: String,
    required: true,
  },
  order: {
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
  bank: {
    type: String,
    required: true,
  },
  lastFourDigitOfYourAccount: {
    type: String,
    required: true,
  },
});

const Payment = mongoose.model('Payment', paymentSchema);
//This will be called at webohook
export { Payment };
