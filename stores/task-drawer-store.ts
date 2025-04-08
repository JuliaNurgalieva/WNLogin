import type { ITask } from "~/types/task.types";
const defaultValue: { task: ITask | null; isOpen: boolean } = {
    task: null,
    isOpen: false,
}
export const useTaskDrawerStore = defineStore('task-slide', {
    state: () => defaultValue,
    actions: {
        clear() {
            this.$patch(defaultValue)
        },
        set(task: ITask) {
            this.$patch({task, isOpen: true})
        },
        toggle() {
			this.isOpen = !this.isOpen
		},
    }
})