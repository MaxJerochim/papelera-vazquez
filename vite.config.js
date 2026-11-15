import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Las páginas se cargan por separado (React.lazy), pero el CSS se mantiene
    // en un solo archivo para que los estilos se apliquen igual que antes.
    cssCodeSplit: false,
  },
})
