import type { EnumStatus } from '@/types/task.types'

export interface ITask {
	$id: string
	theme: string
	$createdAt: string
	user: {
		name: string;
	};
	comment: {
		content: string;
	}[]
	status: EnumStatus
}

export interface IColumn {
	id: EnumStatus
	name: string
	items: ITask[]
}