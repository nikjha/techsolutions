import Razorpay from 'razorpay';
import { PrismaClient } from '@prisma/client';
import { RAZORPAY_KEY_ID, RAZORPAY_SECRET } from '../config';

const prisma = new PrismaClient();
const razorpay = new Razorpay({
  key_id: RAZORPAY_KEY_ID,
  key_secret: RAZORPAY_SECRET,
});

export class PaymentService {
  static async createOrder(amount: number, currency: string = 'USD') {
    const order = await razorpay.orders.create({
      amount: amount * 100, // Convert to smallest currency unit
      currency,
    });
    return order;
  }

  static async processPartialPayment(subscriptionId: string, amount: number) {
    const subscription = await prisma.subscription.findUnique({
      where: { id: subscriptionId },
      include: { plan: true },
    });

    if (!subscription) {
      throw new Error('Subscription not found');
    }

    const minimumAmount = subscription.plan.price * 0.2; // 20% of plan price
    if (amount < minimumAmount) {
      throw new Error('Amount is less than minimum required payment');
    }

    await prisma.subscription.update({
      where: { id: subscriptionId },
      data: {
        amountPaid: amount,
        paymentType: 'PARTIAL',
        status: 'ACTIVE',
      },
    });

    return subscription;
  }
}