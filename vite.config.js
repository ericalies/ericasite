import {resolve} from 'path';
import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

const root = resolve(__dirname, 'src')
const outDir = resolve(__dirname, 'dist')

// https://vite.dev/config/
export default defineConfig({
    root,
    plugins: [react()], build: {
        outDir, emptyOutDir: true, rollupOptions: {
            input: {
                main: resolve(root, 'index.html'),
                about: resolve(root, 'about.html'),
                contact: resolve(root, 'contact.html'),
                humor: resolve(root, 'humor.html'),
                journalism: resolve(root, 'journalism.html')
            }
        }
    },
    assetsInclude: ['**/*.PNG'],
})
