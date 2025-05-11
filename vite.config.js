import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    svelte(),
    tailwindcss(),
  ],
  build: {
    rollupOptions: {
      input: {
        index: 'index.html',
        hello: 'hello.html',
        counter: 'counter.html',
        say_hello: 'say-hello.html',
        global_counter: 'global-counter.html',
        auto_counter: 'auto-counter.html',
        user: 'user.html',
        todo: 'todo.html',
        article: 'article.html',
        time: 'time.html',
        box: 'box.html',
        student: 'student.html' 
      }
    }
  }
})
