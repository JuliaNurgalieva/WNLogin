export interface IBaseField {
	$createdAt?: string
	$id?: string
}
export interface IUser extends IBaseField {
	name: string	
}
export interface IComment extends IBaseField {
	content: string
	
}
export enum EnumStatus {
	'todo' = 'todo',
	'progress' = 'progress',
	'in-qa' = 'in-qa',	
	'done' = 'done',    
}

export interface ITask extends IBaseField {
	comment: IComment[]
	user: IUser
	theme: string	
	status: EnumStatus
}
