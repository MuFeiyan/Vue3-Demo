import { defineStore } from 'pinia'
import { UserInfo } from '@/types/user'
export const useUserStore = defineStore('user', {
  state: () => ({
    token: '' as string,
    userInfo: { name: '' }
  }),
  actions: {
    setToken(newToken: string) {
      this.token = newToken
    },
    saveUserInfo(info: UserInfo) {
      this.userInfo = info
    },
    clearToken() {
      this.token = ''
    }
  },
  persist: true // 如果想自动持久化到 localStorage，需要额外配置（见下面讲解）
})
