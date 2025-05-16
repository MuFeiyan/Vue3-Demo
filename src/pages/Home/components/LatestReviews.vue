<template>
  <div class="p-6 space-y-6">
    <div
      v-for="review in reviews"
      :key="review.id"
      class="flex space-x-4 border-b pb-6 last:border-none"
    >
      <img
        :src="getImageUrl(review.avatar)"
        alt="avatar"
        class="w-14 h-14 rounded-full object-cover"
      />
      <div class="flex-1">
        <div class="flex items-center space-x-2">
          <h3 class="font-semibold text-gray-900">{{ review.name }}</h3>
          <div class="flex text-yellow-400">
            <i
              v-for="n in 5"
              :key="n"
              class="fas fa-star"
              :class="n > review.rating ? 'text-gray-300' : ''"
            ></i>
          </div>
          <span class="text-sm text-gray-500"
            >{{ review.time }} ago from
            <a :href="review.source.link" class="text-blue-500">{{ review.source.name }}</a></span
          >
        </div>
        <p class="text-gray-700 mt-1">{{ review.text }}</p>
        <div class="flex space-x-2 mt-3">
          <img
            v-for="(img, index) in review.images"
            :key="index"
            :src="getImageUrl(img)"
            class="w-16 h-16 rounded-md object-cover border"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Review {
  id: number
  name: string
  avatar: string
  rating: number
  time: string
  source: {
    name: string
    link: string
  }
  text: string
  images: string[]
}
const getImageUrl = (name: string) => {
  return new URL(`../../../assets/images/home/${name}`, import.meta.url).href
}
const reviews = ref<Review[]>([
  {
    id: 1,
    name: 'Deona Timmons',
    avatar: '1.jpg',
    rating: 5,
    time: '5 hours',
    source: { name: 'Yelp', link: '#' },
    text: 'I must once again praise Dr. Coleman for her outstanding advice and medical care... ',
    images: ['1_1.png']
  },
  {
    id: 2,
    name: 'Sheila Lee',
    avatar: '2.jpg',
    rating: 4,
    time: '2 days',
    source: { name: 'PatientPop', link: '#' },
    text: 'Dr. Coleman is the consummate professional. I have seen dermatologists in NYC ...',
    images: []
  },
  {
    id: 3,
    name: 'Sarah Doyle',
    avatar: '3.jpg',
    rating: 3,
    time: '5 days',
    source: { name: 'Facebook', link: '#' },
    text: 'Dr. Coleman clearly cares about her patients and spent time ...',
    images: []
  }
])
</script>
