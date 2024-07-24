import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: [
            {find: '@', replacement: path.resolve(__dirname, 'src')},
            {find: '@assets', replacement: path.resolve(__dirname, 'src', 'assets')},
            {find: '@components', replacement: path.resolve(__dirname, 'src', 'component')},
            {find: '@styles', replacement: path.resolve(__dirname, 'src', 'style')},
            {find: '@svg', replacement: path.resolve(__dirname, 'src', 'svg')},

        ]
    }
})
