import { defineConfig } from "vite"


// export default {
//     server: {
//       port: 3005
//     }
//   }

export default defineConfig({
  root: 'src',
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    assetsDir: 'assets'
  },
  server: {
         port: 3005
      }
})