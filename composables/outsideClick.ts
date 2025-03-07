import { onMounted, onUnmounted } from "vue";

export default function outsideClick(targetRef: any, closeFunction: () => void) {
  const closeOnOutsideClick = (event: MouseEvent) => {
    if (targetRef.value && !targetRef.value.contains(event.target as Node)) {
      closeFunction();
    }
  };

  onMounted(() => {
    document.addEventListener("click", closeOnOutsideClick);
  });

  onUnmounted(() => {
    document.removeEventListener("click", closeOnOutsideClick);
  });
}