<script setup lang="ts">
import { useMutation } from "@tanstack/vue-query";
import { defineProps } from "vue";
import { COLLECTION_COMMENTS, COLLECTION_TASKS, COLLECTION_USERS, DB_ID } from "~/app.constants";
import type { ITask } from "~/types/task.types";
import { useForm } from "vee-validate";
import { UiInput } from "#components";

const isOpenForm = ref(false);

interface ITaskFormState extends Pick<ITask, "theme"> {
  user: {
    name: string;
  };
  comment: {
    content: string;
  };
  status: string;
}

const props = defineProps({
  status: {
    type: String,
    default: "",
  },
  refetch: {
    type: Function,
  },
});
const { handleSubmit, defineField, handleReset } = useForm<ITaskFormState>({
  initialValues: {
    status: props.status,
    theme: "",
    user: {
      name: "",
    },
    comment: {
      content: "",
    },
  },
});
const [theme, themeAttrs] = defineField("theme");
const [name, nameAttrs] = defineField("user.name");
const [comment, commentAttrs] = defineField("comment.content");

const { mutate, isPending } = useMutation({
  mutationKey: ['create a new deal'],
  mutationFn: async (values: ITaskFormState) => {
    
    const user = await DB.createDocument(DB_ID, COLLECTION_USERS, ID.unique(), {
      name: values.user.name,
    })    
    const comment = await DB.createDocument(DB_ID, COLLECTION_COMMENTS, ID.unique(), {
      content: values.comment.content,
    })   
    return DB.createDocument(DB_ID, COLLECTION_TASKS, ID.unique(), {
      theme: values.theme,
      status: values.status,
      user: user.$id,
      comment: [comment.$id],
    })
  },
  onSuccess() {
    props.refetch && props.refetch()
    handleReset()
  },
  
   
})
const onSubmit = handleSubmit((values) => {
  mutate(values);
});
</script>

<template>
  <div class="create_btn">
    <button class="btn" @click="isOpenForm = !isOpenForm">
      <Icon
        v-if="isOpenForm"
        name="radix-icons:arrow-up"
        class=""
        size="20"
      />
      <Icon
        v-else
        name="radix-icons:plus"
        title="Create new task"
        size="20"
      />
    </button>
  </div>
  <form v-if="isOpenForm" @submit="onSubmit" class="form">
    <UiInput
      placeholder="Theme"
      v-model="theme"
      v-bind="themeAttrs"
      type="text"
      class="input"
    />
    <UiInput
      placeholder="Name"
      v-model="name"
      v-bind="nameAttrs"
      type="text"
      class="input"
    />
    <UiInput
      placeholder="Comments"
      v-model="comment"
      v-bind="commentAttrs"
      type="text"
      class="input"
    />
    <button class="btn" :disabled="isPending">
      {{ isPending ? "loading..." : "create" }}
    </button>
  </form>
</template>

<style scoped>
.create_btn {
  display: flex;
  justify-content: center;
}
.btn {
  margin: 0px;
  padding: 0px;
  background: none;
  border: none;
  color: #ffffff2f;
  align: right;
}
.btn:hover {
  border-color: #f9a0f9c4;
  color: #f9a0f9c4;
}
.input {
  border: 1px solid #f9a0f955;
  border-radius: 5px;
  padding: 0.5rem;
  background: #382239a5;
  color: #f0f8ff;
  font-size: 1rem;
  font-family: lato;
  width: 100%;
  margin-bottom: 0.2rem;
  outline: none;
  
}
input::placeholder {
  color: #f9a0f95d;
}
.input:focus {
  outline: none;
  border-color: #ff66fc7b;
}
.form {
  animation: show 0.3s ease-in-out;
  display: flex;
  flex-direction: column;  
}

</style>
