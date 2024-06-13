import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const usePaymentScheduleStore = defineStore('payment_schedule', () => {
  const paymentSchedule = ref([]);

  return {
    paymentSchedule
  }
})
