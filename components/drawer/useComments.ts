import { useQuery } from '@tanstack/vue-query'
import { COLLECTION_TASKS, DB_ID } from '~/app.constants'
import { useTaskDrawerStore } from '~/stores/task-drawer-store'
export function useComments() {
	const store = useTaskDrawerStore()
	const taskId = store.task?.$id || ''

	return useQuery({
		queryKey: ['task', taskId],
		queryFn: () => DB.getDocument(DB_ID, COLLECTION_TASKS, taskId),
	})
}
