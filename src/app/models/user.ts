import {Roles} from './roles.enum'

export class User {
	id: number;
	email: string;
	password: string;
	firstName: string;
	lastName: string;
	role: Roles;
	token ?: string;
}
