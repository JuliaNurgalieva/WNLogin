import { useQuery } from "@tanstack/vue-query";
import { COLLECTION_TASKS, DB_ID,} from "~/app.constants";
import { BOARD_DATA } from "./board.data";
import type { ITask } from "./board.types";
export function useBoardQuery() {
    return useQuery({
        queryKey: ["tasks"],
        queryFn: async () => DB.listDocuments(DB_ID, COLLECTION_TASKS), 
        staleTime: 0,
        select(data) {
            const newBoard = [...BOARD_DATA].map(column => ({...column,
                items: [] as ITask[]
            }));
            const tasks = data.documents as unknown as ITask[]  
            for(const task of tasks) {
                const column = newBoard.find(col => col.id === task.status)
                if(column) {
                    column.items.push({
                        $id: task.$id,
                        theme: task.theme,
                        $createdAt: task.$createdAt,
                        comment: task.comment,                        
                        user: task.user,
                        status: task.status,
                    })
                }
            }
            return newBoard
        }
       
    })
}