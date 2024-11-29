import express from 'express';
import { PrismaClient } from '@prisma/client';
import authRoutes from './routes/auth';
import planRoutes from './routes/plans';
import projectRoutes from './routes/projects';
import subscriptionRoutes from './routes/subscriptions';
import commissionRoutes from './routes/commissions';
import { errorHandler } from './middleware/errorHandler';
import { authenticateToken } from './middleware/auth';

const prisma = new PrismaClient();
const app = express();

app.use(express.json());

// Public routes
app.use('/api/auth', authRoutes);

// Protected routes
app.use('/api/plans', authenticateToken, planRoutes);
app.use('/api/projects', authenticateToken, projectRoutes);
app.use('/api/subscriptions', authenticateToken, subscriptionRoutes);
app.use('/api/commissions', authenticateToken, commissionRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});