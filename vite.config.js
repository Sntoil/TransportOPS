import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // ปิดการสร้าง Source Map (ตัวการที่ชอบใช้ eval)
    sourcemap: false, 
    // เพิ่มขนาด Chunk เพื่อป้องกัน Error ไฟล์ใหญ่
    chunkSizeWarningLimit: 1600,
    rollupOptions: {
        output: {
            manualChunks(id) {
                if (id.includes('node_modules')) {
                    return 'vendor';
                }
            }
        }
    }
  }
})