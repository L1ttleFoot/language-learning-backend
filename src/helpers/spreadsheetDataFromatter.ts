export interface WordData {
	wordRussian: string;
	wordHebrew: string;
	wordHebrewVowel: string;
}

export const spreadsheetDataFromatter = (data: string[][] | undefined): WordData[] | string => {
	if (!data || data.length === 0) {
		return 'No data';
	}

	if (data.length % 2 !== 0) {
		return 'Invalid data: pairs are incomplete';
	}

	const result: WordData[] = [];

	for (let i = 0; i < data.length; i += 2) {
		const wordHebrew = data[i][0];
		const wordRussian = data[i + 1][0];
		const wordHebrewVowel = data[i][1];

		result.push({wordHebrew, wordRussian, wordHebrewVowel});
	}

	return result;
};
