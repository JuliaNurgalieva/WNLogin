import { useMutation } from '@tanstack/vue-query'
import { DB_ID, COLLECTION_COMMENTS } from '~/app.constants'
export function useUpdateComment({ refetch }: { refetch: () => void }) {
    const { mutate: updateComment } = useMutation({
      mutationKey: ['update comment'],
      mutationFn: ({ id, content }: { id: string, content: string }) =>
        DB.updateDocument(DB_ID, COLLECTION_COMMENTS, id, { content }),
      onSuccess: () => {
        refetch()
      },
    })
  
    return { updateComment }
  }