<script lang="ts" setup>
import { defineProps } from 'vue'

const props = defineProps({
	labelText: {
		type: String,
		default: '',
	},
})
</script>   
<template>
<div class="drawer-task">		
		<label v-if="labelText" class="label">{{
			labelText
		}}</label>		
		<div class="text-base"><slot /></div>
	</div>
</template>
<style scoped>
.label {           
  margin-bottom: 0.125rem; 
  display: block;        
  font-size: 0.75rem;     
  line-height: 1rem; 
  font-family: Lato-Italic;      
}
.text-base {
  font-size: 1.3rem;        
  font-style: Italic;   
  color: #f0f8ff;      
  margin: 0;   
  margin-left: 4px;
}
</style>