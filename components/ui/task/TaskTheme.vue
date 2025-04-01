<script setup lang="ts">

const props = defineProps({
	class: {
		type: String,
		default: '',
	},
})
</script>

<template>
	<div :class="( props.class)" id="theme">
        	<slot />
	</div>
</template>
<style>

</style>