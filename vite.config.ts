import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {quasar, transformAssetUrls} from '@quasar/vite-plugin'
import AutoImport from 'unplugin-auto-import/vite'
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src')
        },
    },
    plugins: [
        vue({
            template: {transformAssetUrls}
        }),
        AutoImport({
            presetOverriding: true,
            imports: [
                'vue',
                '@vueuse/core',
            ],
        }),
        quasar({
            sassVariables: 'src/quasar-variables.sass'
        })
    ]
})