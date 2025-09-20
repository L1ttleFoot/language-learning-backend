import {Router} from 'express';

import word from './word';

const router = Router();

router.use('/word', word);

export default router;
