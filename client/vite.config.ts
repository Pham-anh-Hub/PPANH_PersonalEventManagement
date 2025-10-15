  import { defineConfig } from 'vite';
  import react from '@vitejs/plugin-react';
  import tailwindcss from '@tailwindcss/vite'
  export default defineConfig({
    plugins: [react(), tailwindcss()],
    build: {
      outDir: 'dist', // chắc chắn trùng với thư mục output của Vercel
    },
  });
