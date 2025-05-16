<template>
  <div class="flex h-screen bg-[#f3f6fb]">
    <!-- Sidebar -->
    <div
      :class="[
        collapsed ? 'w-20' : 'w-64',
        'bg-[#305c8d] text-white transition-all duration-300 h-full'
      ]"
    >
      <div class="flex items-center justify-between px-4 py-4 h-16 border-b border-[#3e6a9e]">
        <span v-if="!collapsed" class="text-xl font-bold">Vue3</span>
        <button class="text-white" @click="toggleCollapse">
          <el-icon size="20">
            <Menu />
          </el-icon>
        </button>
      </div>
      <el-menu
        :default-active="activeMenu"
        class="el-menu-vertical-demo"
        background-color="#305c8d"
        text-color="#ffffff"
        active-text-color="#90caf9"
        :collapse="collapsed"
        router
      >
        <el-menu-item index="/home">
          <el-icon><House /></el-icon>
          <span>Home</span>
        </el-menu-item>
      </el-menu>
    </div>

    <!-- Main Content -->
    <div class="flex-1 flex flex-col">
      <!-- Header -->
      <header class="flex justify-between items-center px-6 py-4 bg-white shadow h-16">
        <div></div>
        <div class="flex gap-4 items-center">
          <div class="text-[#305c8d]">{{ userInfo.name }}</div>
          <el-button type="default" @click="logout">Logout</el-button>
        </div>
      </header>

      <!-- Content -->
      <main class="flex-1 p-6 overflow-auto">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { Menu, House, Document, DataAnalysis } from '@element-plus/icons-vue'
import { useCommonInfo } from '@/store/commonInfo'
import { useUserStore } from '@/store/user'
import router from '@/router'
const userStore = useUserStore()
const commonInfo = useCommonInfo()
const userInfo = ref({ name: '' })
const collapsed = computed(() => commonInfo.menuCollapse)
onMounted(() => {
  userInfo.value = userStore.userInfo
})
const toggleCollapse = () => {
  commonInfo.switchMenuCollapse()
}

const route = useRoute()
const activeMenu = ref(route.path)

const logout = () => {
  userStore.clearToken()
  router.push('/login')
}
</script>

<style scoped>
.el-menu {
  border-right: none;
}
</style>
