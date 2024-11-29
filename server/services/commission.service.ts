import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class CommissionService {
  static async calculateCommission(subscriptionId: string) {
    const subscription = await prisma.subscription.findUnique({
      where: { id: subscriptionId },
      include: { plan: true },
    });

    if (!subscription) {
      throw new Error('Subscription not found');
    }

    const commissionAmount = subscription.plan.price * 0.1; // 10% commission

    const commission = await prisma.commission.create({
      data: {
        partnerId: subscription.userId,
        subscriptionId,
        amount: commissionAmount,
        status: 'PENDING',
      },
    });

    return commission;
  }

  static async processCommission(commissionId: string) {
    const commission = await prisma.commission.update({
      where: { id: commissionId },
      data: { status: 'PAID' },
    });

    return commission;
  }
}