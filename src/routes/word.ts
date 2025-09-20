import {Router} from 'express';

import wordController from '../controllers/word.controller';

const router = Router();

router.get('/', wordController.getWord);

export default router;
