import {Request, Response} from 'express';

import wordService from '../services/word.service';

class WordController {
	async getWord(_: Request, res: Response) {
		try {
			const word = await wordService.getWord();
			res.json(word);
		} catch (error) {
			res.status(500).json({error: `Failed to create discussion: ${(error as Error).message}`});
		}
	}
}

export default new WordController();
