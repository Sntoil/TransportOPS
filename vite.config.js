import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // ✅ สำคัญ: ปิด sourcemap เพื่อไม่ให้เกิดโค้ด eval()
    sourcemap: false,
    
    // ตั้งค่า Chunk เพื่อลดขนาดไฟล์ (แก้ Error ไฟล์ใหญ่เกิน)
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