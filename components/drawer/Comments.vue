<script lang="ts" setup>
import dayjs from 'dayjs'
import type { IComment, ITask } from '~/types/task.types'
import { useComments } from './useComments'
import { useCreateComment } from './useCreateComment'
import { useDeleteComment } from './useDeleteComment'
import { useUpdateComment } from './useUpdateComment'

const { data, refetch } = useComments()
const { commentRef, writeComment } = useCreateComment({ refetch })
const { deleteComment } = useDeleteComment({ refetch })
const { updateComment } = useUpdateComment({ refetch })
const task = data as unknown as ITask
const editCommentId = ref<string | null>(null)
const editContent = ref('')

function startEdit(comment: IComment) {
  if(!comment.$id) return
  editCommentId.value = comment.$id
  editContent.value = comment.content
}

function submitEdit(id: string) {
  if (!editContent.value.trim()) return
  updateComment({ id, content: editContent.value })
  editCommentId.value = null
  editContent.value = ''
}
</script>

<template>	
	
	<div class="task">
		<div
			v-for="comment in task?.comment"
			:key="comment.$id"		>
			<Icon name="radix-icons:chat-bubble" class="icon" />
			<div class="comment">
				<div class="date">
					{{ dayjs(comment.$createdAt).format('DD MMMM YYYY') }}
				</div>
        <UiInput
      v-if="editCommentId === comment.$id"
      v-model="editContent"
      @keyup.enter="submitEdit(comment.$id)"      
    />
				<p>{{ comment.content }}</p>
			</div>
        <div class="delete-redact">
            <Icon name="heroicons-solid:pencil" class="redact" @click="startEdit(comment)" />
            <Icon name="heroicons-solid:trash" class="delete" @click="() => comment.$id && deleteComment(comment.$id)" />            
        </div>
		</div>
	</div>
    <UiInput
		placeholder="Оставьте комментарий"
		v-model="commentRef"
		@keyup.enter="writeComment"
	/>
</template>
<style scoped>
.delete-redact {
    display: flex;
    gap: 1rem;
    justify-content: flex-end;
}
.redact {
  cursor: pointer;
  transition: color 0.2s;     
  color: #f0f8ff48;
}
.delete {   
  cursor: pointer;
  transition: color 0.2s;     
  color: #f0f8ff48;
}
.delete:hover,
.redact:hover {
  color: #f9a0f9c4;
}
p {
    margin: 0;
}
.date {
  font-size: 0.8rem;
  color: #f0f8ff;
  margin-bottom: 0.5rem;
  font-style: italic;
}
.comment {
  padding-inline: 1rem;  
  border-radius: 0.5rem; 
  color: #f0f8ff; 
}
.icon {
  color: #f0f8ff;
  font-size: 1.5rem;
  
}
input {
  border: none;  
  padding: 0.5rem;
  background: none; 
  font-size: 1rem;
  font-family: lato;
  width: 100%;  
  outline: none;
  margin-top: 1rem;
  color: #f0f8ff;
}
input::placeholder {
  color: #ffffff4c;
  font-size: 1rem;
  font-family: lato;
}
</style>