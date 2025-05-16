<template>
  <div class="relative w-screen h-screen overflow-hidden">
    <!-- 背景图片 -->
    <div class="absolute inset-0 bg-cover bg-center login-bg" />
    <!-- 半透明遮罩层 -->
    <div class="absolute inset-0 bg-blue-200 bg-opacity-30 backdrop-blur-sm" />
    <!-- 登录表单 -->
    <div class="relative z-10 flex items-center justify-center h-full">
      <div class="bg-white bg-opacity-80 p-8 rounded-2xl shadow-xl w-80">
        <h2 class="text-2xl font-bold text-center text-blue-700 mb-6">Login</h2>
        <el-form ref="loginForm" :model="form" :rules="rules" label-width="0">
          <el-form-item prop="username">
            <el-input v-model="form.username" placeholder="admin" prefix-icon="el-icon-user" />
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              v-model="form.password"
              type="password"
              placeholder="admin"
              prefix-icon="el-icon-lock"
            />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" class="w-full" @click="submitForm"> Login </el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { ElMessage } from 'element-plus'
import { useUserStore } from '@/store/user'
import router from '@/router'
const userStore = useUserStore()
const form = reactive({
  username: 'admin',
  password: 'admin.'
})

const rules = {
  username: [
    { required: true, message: 'Please enter admin', trigger: 'blur' },
    { min: 3, max: 16, message: 'Username must be between 3 and 16 characters', trigger: 'blur' }
  ],
  password: [
    { required: true, message: 'Please enter admin', trigger: 'blur' },
    { min: 6, message: 'Password must be at least 6 characters', trigger: 'blur' }
  ]
}

const loginForm = ref(null)

const submitForm = () => {
  loginForm.value.validate((valid) => {
    if (valid) {
      ElMessage.success('Login successful!')
      userStore.setToken('admin')
      userStore.saveUserInfo({ name: form.username })
      router.push('/home')
    } else {
      ElMessage.error('Please correct the errors!')
    }
  })
}
</script>

<style scoped>
.login-bg {
  background-image: url('@/assets/images/login.avif');
}
</style>
