import { Router, Response } from 'express';
import authMiddleware from '../middlewares/authMiddleware';
import { AuthenticatedRequest } from '../interfaces/authenticatedRequest';

const router = Router();

router.get('/', authMiddleware, (req: AuthenticatedRequest, res: Response) => {
	if (!req.user) {
		return res.status(401).json({ message: 'Unauthorized' });
	}
	res.json({ message: `Welcome to the dashboard, user ID: ${req.user._id}` });
});

export default router;
