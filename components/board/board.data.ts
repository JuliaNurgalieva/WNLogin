import { EnumStatus } from '@/types/task.types'
import type { IColumn } from './board.types'

export const BOARD_DATA: IColumn[] = [{
    id: EnumStatus.todo,
    name: 'TODO',
    items: []
},
{
    id: EnumStatus.progress,
    name: 'PROGRESS',
    items: [] 
},
{
    id: EnumStatus['in-qa'],
    name: 'IN QA',
    items: [] 
},
{
    id: EnumStatus.done,
    name: 'DONE',
    items: []  
}
]
