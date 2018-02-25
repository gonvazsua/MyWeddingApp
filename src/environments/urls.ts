import { environment } from './environment';

export const urls = {

	login 		: environment.endpoint + '/authenticate',
	signup 		: environment.endpoint + '/signup',
	secret		: environment.endpoint + '/secret',
	allergy		: environment.endpoint + '/allergies',
	users		: environment.endpoint + '/users'

};