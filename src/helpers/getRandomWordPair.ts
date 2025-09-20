import {WordData} from './spreadsheetDataFromatter';

export const getRandomWordPair = (data: WordData[]) => {
	const randomIndex = Math.floor(Math.random() * data.length);
	return data[randomIndex];
};
