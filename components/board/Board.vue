<script setup lang="ts">
import { ref } from "vue";
import { useBoardQuery } from "@/components/board/useBoardQuery";
import { useMutation } from "@tanstack/vue-query";
import { type IColumn, type ITask } from "~/components/board/board.types";
import UiTaskTheme from "~/components/ui/task/TaskTheme.vue";
import UiTask from "~/components/ui/task/TaskTheme.vue";
import UiTaskName from "~/components/ui/task/TaskTheme.vue";
import UiTaskComments from "~/components/ui/task/TaskTheme.vue";
import { type IUser } from "~/types/task.types";
import {type IComment } from "~/types/task.types";
import dayjs from "dayjs";
import { BoardCreateTask } from "#components";
const dragTask = ref<ITask | null>(null);
const sourceColumn = ref<IColumn | null>(null);
const { data, refetch } = useBoardQuery();
</script>
<template>
  <div class="grid">
    <div v-for="column in data" :key="column.id">
      <div class="title">
        <span class="text">{{ column.name }}</span>
      </div>
      <div class="board">
        <BoardCreateTask :refetch="refetch" :status="column.id" />
        <UiTask
          class="task"
          draggable="true"
          v-for="task in column.items"
          :key="task.id"        >
          <UiTaskTheme class="theme">{{ task.theme }}</UiTaskTheme>
          <UiTaskComments class="comments" v-for="(comment, index) in task.comment" :key="index">{{comment.content}}</UiTaskComments>
          <UiTaskName class="name">{{task.user.name}}</UiTaskName>
        </UiTask>
      </div>
    </div>
  </div>
</template>

<style scoped>
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
  border: 1px solid #f0f8ff;
  padding: 10px;
  border-radius: 6px;
  background: #382239a5;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  gap: 0.8rem;
  margin: 0;
  border: 1px solid #f9a0f955;
  margin-block: 1rem;
  flex: 1;
}
.task:hover {
  border: 1px solid #f9a0f9c4;
}
.task-redact {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.theme,
.comments,
.name {
  background: none;
  resize: none;
  outline: none;
  overflow: hidden;
  border: none;
  border-color: #f9a0f955;
  color: #edf6fe;
  font-size: 1rem;
  font-family: lato;
  background: #cf85d313;
  border-radius: 6px;
}
.theme {
  font-size: 1.35rem;
  background: #cf85d313;
  border-radius: 6px;
  font-style: italic;
}
.comments {
  font-size: 1.15rem;  
}
.name {
  font-style: italic;
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
</style>
