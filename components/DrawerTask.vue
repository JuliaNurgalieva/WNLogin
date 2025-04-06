<script lang="ts" setup>
import { defineProps, defineEmits } from "vue";
import { ref, onMounted, nextTick } from "vue";
import { useMutation } from '@tanstack/vue-query'
import { COLLECTION_TASKS, DB_ID } from '~/app.constants'
import { type IColumn, type ITask } from "~/components/board/board.types"
import { useForm } from "vee-validate";

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
  isVisible: Boolean,
  status: {
		type: String,
		default: '',
	},
	refetch: {
		type: Function,
	},
});

const { handleSubmit, defineField, handleReset } = useForm<ITaskFormState>({
	initialValues: {
		status: 'todo',
	},
})

const [theme, themeAttrs] = defineField('theme')
const [comments, commentsAttrs] = defineField('comment.content')
const [name, nameAttrs] = defineField('user.name')

const { mutate, isPending } = useMutation({
	mutationKey: ['create a new deal'],
	mutationFn: (data: ITaskFormState) =>
    DB.createDocument(DB_ID, COLLECTION_TASKS, ID.unique(), data),
	onSuccess() {
		props.refetch && props.refetch()
		handleReset()
	},
})
const onSubmit = handleSubmit((values: ITaskFormState) => {
	mutate(values)
})
const emit = defineEmits(["update:isVisible"]);
const closeDrawer = () => {
  emit("update:isVisible", false);
}
const textareaRef = ref<HTMLDivElement | null>(null);
const autoResize = () => {
  const textarea = textareaRef.value;
  if (!textarea) return;
  textarea.style.height = "auto";
  textarea.style.height = `${textarea.scrollHeight}px`;
};
onMounted(async () => {
  await nextTick();  
  autoResize(); 
});

</script>

<template>
  <transition name="slide">
    <aside class="drawer" v-if="isVisible " ref="drawerRef">
      <p>Create new task</p>
        <form class="form" @submit="onSubmit">
          <input 
          placeholder="Theme:" 
          v-model="theme"
			    v-bind="themeAttrs"
			    type="text"
			    class="input" 
          maxlength="36"/>
          <input 
          placeholder="Name:" 
          v-model="name"
			    v-bind="nameAttrs"
          type="text" 
          class="input" 
          maxlength="20"/>
          <input
            maxlength="400"
            v-model="comments"
			      v-bind="commentsAttrs"
            placeholder="Comments:"
            @input="autoResize"        
            class="input"
            type="text"
            ref="textareaRef"
          ></input>
          <Icon name="heroicons-solid:trash" class="delete" @click="closeDrawer" />
        </form>
      <Icon name="heroicons-solid:x" class="close-icon" @click="closeDrawer" />
    </aside>
  </transition>
</template>

<style scoped>
.delete {
  margin-left: auto;
  margin-block: 1rem;
  color: #f0f8ff;
  cursor: pointer;
}
.delete:hover {
  color: #f9a0f9c4;
}

button {
  border: 1px solid transparent;
  border-radius: 8px;  
  color: #f0f8ff;
  cursor: pointer;
  transition: background-color 0.3s, border-color 0.3s;
  background: none;  
  border-color: #f0f8ff;
  padding: 4px;  
  justify-content: end;
  margin-top:0.5rem;
  margin-left: auto;
  font-family: Lato-Regular;  
}
.drawer {  
  position: fixed;
  top: 0;
  right: 0;
  width: 350px;
  height: 100vh;
  background: #48324d;
  box-shadow: -2px 0 10px #00000033;
  z-index: 9999;  
}

.drawer.open {
  transform: translateX(0);
}

p {
  color: #f0f8ff;
  margin-block: 2rem;
  padding-left: 2rem;
  font-family: Lato-Italic;
  font-size: 1.5rem;
}
.input {
  width: 100%;
  min-width: 100%;
  padding: 8px;
  border: 2px solid #f9a0f99e;  
  color: white;
  font-size: 1rem;
  resize: none;
  overflow: hidden;
  min-height: 3rem;
  margin-top: 1rem;
  border-radius: 8px;
  background: none;
  font-family: Lato;
  box-shadow: -2px 0 10px #00000033;
}

.form { 
  display: flex;
  flex-direction: column; 
  margin: 1rem;
  height: 550px;
}
textarea::placeholder{
  font-size: 1rem;
  color: #f9a0f99e;
}
input::placeholder {
  color: #f9a0f99e;
}
.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
.slide-enter-to,
.slide-leave-from {
  transform: translateX(0);
  opacity: 1;
}
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
}
.close-icon {
  cursor: pointer;
  color: #f0f8ff;
  transition: color 0.2s;
  margin-left: 2rem;  
}
.close-icon:hover {
  color: #f9a0f9c4;
}
.input:focus {
  outline: none;
  border-color: #ff66aa;
}
button:hover {
  border-color: #f9a0f9c4;
  color: #f9a0f9c4;
}
</style>
