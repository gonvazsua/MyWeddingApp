import Allergy from './allergy';

export class User {

	public _id 			: string;
	public email 		: string; 
	public password		: string;
	public name			: string;
	public lastname		: string;
	public isConfirmed	: boolean;
	public isActive		: boolean;
	public allergies	: Array<Allergy>;
	public lastLogin	: Date;
	public address		: string;
	public city			: string;
	public postalCode	: number;
	public companion	: string;

	constructor(){
		this._id = null;
		this.email = null;
		this.password = null;
		this.name = null;
		this.lastname = null;
		this.isConfirmed = null;
		this.isActive = null;
		this.allergies = null;
		this.lastLogin = null;
		this.address = null;
		this.city = null;
		this.postalCode = null;
		this.companion = null;
	}

}