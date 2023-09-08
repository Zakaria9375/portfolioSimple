import { reactive } from 'vue'

export const store = reactive({
  collapsed: false,
})
setTimeout(() => {
  store.collapsed = true;
  console.log("collapsed is now true");
}, 20000);