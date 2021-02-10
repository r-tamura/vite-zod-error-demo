import { createApp } from 'vue'
// TypeScript error? Run VSCode command
// TypeScript: Select TypeScript version - > Use Workspace Version
import App from './App.vue'
import * as z from "zod";
console.log(z.string().safeParse(""));
createApp(App).mount('#app')
