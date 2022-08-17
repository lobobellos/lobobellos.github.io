import {resolve,dirname} from 'path'
import { defineConfig } from 'vite'
import { fileURLToPath } from 'url';

const _dirname = dirname(fileURLToPath(import.meta.url));

console.log(_dirname)

const root = resolve(_dirname,'src')
const outDir = resolve(_dirname,'dist')

// https://vitejs.dev/config/
export default defineConfig({
    root,
    build:{
        outDir,
        emptyOutDir:true,
        rollupOptions:{
            input:{
                main:resolve(root,'main','index.html'),
                contact:resolve(root,'contact','index.html'),
                first:resolve(root,'first','index.html'),
                sponsor:resolve(root,'sponsor','index.html'),
            }
        }
    }
})
