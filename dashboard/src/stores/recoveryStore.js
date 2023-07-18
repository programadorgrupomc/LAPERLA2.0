import { defineStore } from 'pinia'
import axios from 'axios'

export const useRecoveryStore = defineStore('recoveryStore', {
  actions: {
    async forgotPassword(email) {
      try {
        const response = await axios.post('https://api-perla.onrender.com/api/v1/forgot-password', {
          email
        })
        return response.data
      } catch (error) {
        throw new Error(error.response.data.message)
      }
    },
    async resetPassword(data) {
      try {
        const response = await axios.post(
          'https://api-perla.onrender.com/api/v1/reset-password',
          data
        )
        return response.data
      } catch (error) {
        throw new Error(error.response.data.message)
      }
    }
  }
})
