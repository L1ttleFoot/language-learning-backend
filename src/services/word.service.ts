import {google} from 'googleapis';

import authenticate from '../config/google-auth';
import {getRandomWordPair} from '../helpers/getRandomWordPair';
import {WordData, spreadsheetDataFromatter} from '../helpers/spreadsheetDataFromatter';

class WordService {
	async getWord() {
		const auth = await authenticate();
		const sheets = google.sheets({version: 'v4', auth});
		const response = await sheets.spreadsheets.values.get({
			spreadsheetId: process.env.SPREADSHEET_ID,
			range: 'Лист2!A1:B245',
		});

		const formattedData = spreadsheetDataFromatter(
			response.data.values?.filter((item) => item.length),
		);

		const randomWord = getRandomWordPair(formattedData as WordData[]);

		return randomWord;
	}
}

export default new WordService();
