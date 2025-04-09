<script setup lang="ts">
import { ref } from "vue";
import { useBoardQuery } from "@/components/board/useBoardQuery";
import { useMutation } from "@tanstack/vue-query";
import { type IColumn, type ITask } from "~/components/board/board.types";
import { COLLECTION_TASKS, DB_ID } from "~/app.constants";
import dayjs from "dayjs";
import { BoardCreateTask } from "#components";
import type { EnumStatus } from "~/types/task.types";
import { useTaskDrawerStore } from '~/stores/task-drawer-store'
const store = useTaskDrawerStore()
const dragTask = ref<ITask | null>(null);
const sourceColumn = ref<IColumn | null>(null);
const { data, refetch } = useBoardQuery();
type TypeMutationVariables = {
  docID: string
  status: EnumStatus
 }
const {mutate} = useMutation({
  mutationKey: ["move task"],
  mutationFn: ({ docID, status }: TypeMutationVariables) => 
    DB.updateDocument(DB_ID, COLLECTION_TASKS, docID, { status }),
      onSuccess: () => {
        refetch()      
  },
})
function handleDragStart(task: ITask, column: IColumn) {
  dragTask.value = task
  sourceColumn.value = column
 }
function handleDragOver(event: DragEvent) {
  event.preventDefault()
}
function handleDrop(targetColumn: IColumn) {
  if (dragTask.value && sourceColumn.value) {
    mutate({
      docID: dragTask.value.$id,
      status: targetColumn.id as EnumStatus,
    })
  }
}
const isDrawerOpen = ref(false);
</script>
<template>
  <div class="grid">
    <div v-for="column in data" :key="column.id"    >
      <div class="title">
        <span class="text">{{ column.name }}          
        </span> 
        <BoardCreateTask :refetch="refetch" :status="column.id" />      
      </div>      
      <div class="board"
       @dragover="handleDragOver"
       @drop="() => handleDrop(column)">        
        <UiTask
          class="task"
          draggable="true"
          v-for="task in column.items"
          :key="task.$id"
          @dragstart="() => handleDragStart(task, column)"
          @click= "() => { store.set(task); isDrawerOpen = true }"
        >
          <UiTaskTheme class="theme">{{ task.theme }}</UiTaskTheme>
          <div class="field-comments">
            <UiTaskComments
              class="comments"
              v-for="(comment, index) in task.comment"
              :key="index"
              >{{ comment.content }}</UiTaskComments
          >
          </div>
          <UiTaskName class="name">{{ task.user.name }}</UiTaskName>
          <UiTaskDate class="date">{{
            dayjs(task.$createdAt).format("DD MMMM YYYY")
          }}</UiTaskDate>
        </UiTask>
      </div>
    </div>
  </div>
  <DrawerTask v-model:isVisible="isDrawerOpen" />
</template>

<style scoped>
.field-comments {
  max-height: 70px;
  overflow-y: auto;
}
.field-comments::-webkit-scrollbar {
  width: 8px;
  background: transparent;
}
.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  flex-direction: row;
  border-radius: 8px;
  flex: 1;
  gap: 20px;
  padding-inline: 20px;
  width: 100%;
}
.date {
  font-size: 0.8rem;
  color: #d4e1ec;
  font-style: italic;
  
}

.text {
  color: #f0f8ff;
  padding: 10px;
  background: #382239a5;
  border-radius: 8px;
  margin: 0;
  border: 0.1px solid transparent;
  border-color: #f9a0f955;
  width: 100%;
  display: flex;
}
.task {
  border: 1px solid #f0f8ff00;
  padding: 10px;
  border-radius: 6px;
  background: #382239a5;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  gap: 0.8rem;
  margin: 0;
  margin-block: 1rem;
  flex: 1;
  min-height: 191px;
}
.task:hover {
  border: 1px solid #f9a0f9c4;
}
.task-redact {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.theme {
  font-size: 1.3rem;
  color: #f0f8ff;
  font-family: lato;
}
.comments {
  font-size: 1.15rem;
  color: #d4e1ec;
  font-size: 1rem;
  padding: 0.2rem;
  font-family: lato;
}
.name {
  font-style: italic;
  color: #f0f8ff;
  text-align: right;
  margin-top: auto;
}
.redact {
  cursor: pointer;
  color: #f9a0f955;
  transition: color 0.2s ease;
}
.redact:hover {
  color: #f9a0f9;
}
.active-icon {
  color: #f9a0f9;
}

.board {
  min-height: 100px;
  display: block;
}

  
</style>
