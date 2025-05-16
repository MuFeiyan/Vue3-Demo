<template>
  <div class="dashboard space-y-6 p-6 bg-[#f5f8fb]">
    <!-- Row 1 -->
    <div class="flex gap-6 flex-wrap">
      <div class="card w-[260px] bg-white rounded-xl p-6 shadow-md">
        <h3 class="text-lg font-semibold mb-4">Overall Rating</h3>
        <div class="chart h-52 rounded-md">
          <OverallRating />
        </div>
      </div>
      <div class="card flex-1 min-w-[200px] bg-white rounded-xl p-6 shadow-md">
        <h3 class="text-lg font-semibold mb-4">Public Reviews</h3>
        <div class="chart h-52 rounded-md">
          <PublicReviews />
        </div>
      </div>
      <div class="card w-[260px] bg-white rounded-xl p-6 shadow-md">
        <h3 class="text-lg font-semibold mb-4">Patient Sentiment</h3>
        <div class="chart h-52 rounded-md">
          <PatientSentiment />
        </div>
      </div>
    </div>

    <!-- Row 2 -->
    <div class="flex gap-6 flex-wrap">
      <div class="flex-1 h-[34rem] overflow-y-hidden bg-white rounded-xl p-6 shadow-md">
        <h3 class="text-lg font-semibold mb-4">Latest Reviews</h3>
        <div class="list rounded-md">
          <LatestReviews />
        </div>
      </div>
      <div class="flex-1">
        <div class="flex gap-6 flex-col">
          <div class="flex-1 flex gap-6">
            <div class="flex-1 bg-white rounded-xl p-6 shadow-md">
              <h3 class="text-lg font-semibold mb-4">Online Requests</h3>
              <OnlineRequests />
            </div>
            <div class="flex-1 bg-white rounded-xl p-6 shadow-md">
              <h3 class="text-lg font-semibold mb-4">Phone Loads</h3>
              <PhoneLoads />
            </div>
          </div>
          <div class="flex-1 flex gap-6 flex-wrap">
            <div class="flex-1 bg-white rounded-xl p-6 shadow-md">
              <h3 class="text-lg font-semibold mb-4">Website Traffic</h3>
              <WebsiteTraffic
                :progress="[
                  { value: 16000, color: '#3b82f6' }, // 蓝色
                  { value: 5000, color: '#10b981' }, // 绿色
                  { value: 4000, color: '#facc15' }, // 黄色
                  { value: 1751, color: '#f97316' } // 橙色
                ]"
              />
            </div>
            <div class="flex-1 bg-white rounded-xl p-6 shadow-md">
              <h3 class="text-lg font-semibold mb-4">Search Position</h3>
              <SearchPosition />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import OverallRating from './components/OverallRating.vue'
import PublicReviews from './components/PublicReviews.vue'
import PatientSentiment from './components/PatientSentiment.vue'
import LatestReviews from './components/LatestReviews.vue'
import OnlineRequests from './components/OnlineRequests.vue'
import PhoneLoads from './components/PhoneLoads.vue'
import WebsiteTraffic from './components/WebsiteTraffic.vue'
import SearchPosition from './components/SearchPosition.vue'
</script>
