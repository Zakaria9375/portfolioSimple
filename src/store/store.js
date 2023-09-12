import { reactive, computed  } from 'vue'

export const store = reactive({
  collapsed: false,
})
export const storeGetters = {
  specialContainer: computed(() => {
    return store.collapsed ? 'myLConatiner' : 'mySConatiner';
  })
}
setTimeout(() => {
  store.collapsed = true;
  console.log("collapsed is now true");
}, 20000);