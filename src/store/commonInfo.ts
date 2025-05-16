import { defineStore } from 'pinia'

export const useCommonInfo = defineStore('commonInfo', {
  state: () => ({ menuCollapse:  true}),
  actions: {
    switchMenuCollapse() {      
      this.menuCollapse = !this.menuCollapse
    }
  }
})
