<script setup>
import {computed, defineAsyncComponent, ref, watch} from "vue";
import Loading from "@/components/Loading.vue";
import Missing from "@/components/Missing.vue";
import {TwSelect,TwButton} from "vue3-tailwind-components";

const componentList = [
  {label:"One",value:'one.vue'},
  {label:"Two",value:'two.vue'},
  {label:"Three",value:'three.vue'},
]

const dynamicComponent = ref('')


function loadComponent(component) {
  return defineAsyncComponent({
    loader: () => import( /* @vite-ignore */component),
    loadingComponent:Loading,
    delay:2000,
    errorComponent: Missing,
    timeout: 3000
  })
}

const is_selected = computed(()=>{
  return dynamicComponent.value.length>0;
})

const component_with_path = computed(()=>{
  return './dynamic/'+dynamicComponent.value
})



</script>

<template>
 <h2 class="text-2xl">This is the static loader</h2>
  <p>It loads up a dynamic Vue component using defineAsyncComponent</p>
  <tw-select :items="componentList" v-model="dynamicComponent"></tw-select>
<component v-if="is_selected" :is="loadComponent(component_with_path)"></component>

</template>


