import { useMutation } from '@tanstack/vue-query'
import { DB_ID, COLLECTION_TASKS } from '~/app.constants'

export function useDeleteTask({ refetch }: { refetch: () => void }) {
  const { mutate: deleteTask, isPending } = useMutation({
    mutationKey: ['delete task'],
    mutationFn: (id: string) =>
      DB.deleteDocument(DB_ID, COLLECTION_TASKS, id),
    onSuccess: () => {
      refetch()
    },
  })

  return { deleteTask, isPending }
}