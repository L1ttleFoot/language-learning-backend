import type {AuthClient, GoogleAuth} from 'google-auth-library';
import {google} from 'googleapis';

import {credentials} from '../credentials';

const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];

async function authenticate(): Promise<GoogleAuth<AuthClient>> {
	const auth = new google.auth.GoogleAuth({credentials, scopes: SCOPES});
	return (await auth.getClient()) as unknown as GoogleAuth<AuthClient>;
}

export default authenticate;
