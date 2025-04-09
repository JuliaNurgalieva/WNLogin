import { useMutation } from '@tanstack/vue-query'
import { useTaskDrawerStore } from '~/stores/task-drawer-store'
import { COLLECTION_COMMENTS, DB_ID } from '~/app.constants'
import type TaskComments from '../ui/task/TaskComments.vue'

export function useCreateComment({ refetch }: { refetch: () => void }) {
	const store = useTaskDrawerStore()
	const commentRef = ref<string>()

	const { mutate } = useMutation({
		mutationKey: ['add comments', commentRef.value],
		mutationFn: () =>
			DB.createDocument(DB_ID, COLLECTION_COMMENTS, ID.unique(), {
				content: commentRef.value,
				tasks: store.task?.$id,				
			}),
		
		onSuccess: () => {
			refetch()
			commentRef.value = ''
		},		
	})

	const writeComment = () => {
		if (!commentRef.value) return
		mutate()
	}

	return {
		writeComment,
		commentRef,
	}
}
