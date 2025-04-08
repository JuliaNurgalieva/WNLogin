<script lang="ts" setup>
import dayjs from 'dayjs'
import type { ITask } from '~/types/task.types'
import { useComments } from './useComments'
import { useCreateComment } from './useCreateComment'

const { data, refetch, isLoading } = useComments()
const { commentRef, writeComment } = useCreateComment({ refetch })

const task = data as unknown as ITask
</script>

<template>
	
	<UiSkeleton v-if="isLoading" />
	<div v-else-if="task">
		<div
			v-for="comment in task?.comment"
			:key="comment.$id"		>
			<Icon name="radix-icons:chat-bubble" class="icon" />
			<div class="comment">
				<div class="date">
					{{ dayjs(comment.$createdAt).format('DD MMMM YYYY') }}
				</div>
				<p>{{ comment.content }}</p>
			</div>
        <div class="delete-redact">
            <Icon name="heroicons-solid:pencil" class="redact" @click="" />
            <Icon name="heroicons-solid:trash" class="delete" @click="" />            
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