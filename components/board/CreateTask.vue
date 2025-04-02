<script setup lang="ts">
import { useMutation } from '@tanstack/vue-query'
import { defineProps } from 'vue'
import { COLLECTION_TASKS, DB_ID } from '~/app.constants'
import type { ITask } from '~/types/task.types'
import { useForm } from "vee-validate";
const isOpenForm = ref(false)

interface ITaskFormState extends Pick<ITask, 'theme'> {
	user: {		
		name: string
    }
    comment: {
        content: string
    }
	status: string
}

const props = defineProps({
	status: {
		type: String,
		default: '',
	},
	refetch: {
		type: Function,
	},
})

const { handleSubmit, defineField, handleReset } = useForm<ITaskFormState>({
	initialValues: {
		status: props.status,
	},
})


const [theme, themeAttrs] = defineField('theme')
const [name, nameAttrs] = defineField('user.name')
const [comment, commentAttrs] = defineField('comment.content')

const { mutate, isPending } = useMutation({
	mutationKey: ['create a new deal'],
	mutationFn: (data: ITaskFormState) =>
		DB.createDocument(DB_ID, COLLECTION_TASKS, ID.unique(), data),
	onSuccess() {
		props.refetch && props.refetch()
		handleReset()
	},
})

const onSubmit = handleSubmit(values => {
	mutate(values)
})
</script>

<template>
	
	<form v-if="isOpenForm" @submit="onSubmit" class="form">
		<UiInput
			placeholder="Наименование"
			v-model="theme"
			v-bind="themeAttrs"
			type="text"
			class="input"
		/>
		<UiInput
			placeholder="Сумма"
			v-model="name"
			v-bind="nameAttrs"
			type="text"
			class="input"
		/>
		<UiInput
			placeholder="Комментарий"
			v-model="comment"
			v-bind="commentAttrs"
			type="text"
			class="input"
		/>
	

		<button class="btn" :disabled="isPending">
			{{ isPending ? 'Загрузка...' : 'Добавить' }}
		</button>
	</form>
</template>

<style scoped>
.input {
	@apply border-[#161c26] mb-2 placeholder:text-[#748092] focus:border-border transition-colors;
}

.btn {
	@apply text-xs border py-1 px-2 rounded border-[#161c26] hover:border-[#482c65] transition-colors text-[#aebed5] hover:text-white;
}

.form {
	@apply mb-3 block;
	animation: show 0.3s ease-in-out;
}

@keyframes show {
	from {
		@apply border-[#a252c83d];
		transform: translateY(-35px);
		opacity: 0.4;
	}

	90% {
		@apply border-[#a252c83d];
	}

	to {
		@apply border-transparent;
		transform: translateY(0);
		opacity: 1;
    }
}
</style>