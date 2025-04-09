import { useMutation } from '@tanstack/vue-query'
import { DB_ID, COLLECTION_COMMENTS } from '~/app.constants'
export function useDeleteComment ({ refetch }: { refetch: () => void }) {
  const { mutate: deleteComment, isPending } = useMutation({
    mutationKey: ['delete comment'],
    mutationFn: (commentId: string) =>
      DB.deleteDocument(DB_ID, COLLECTION_COMMENTS, commentId),
    onSuccess: () => {
      refetch()
    },
  })

  return { deleteComment, isPending }
}