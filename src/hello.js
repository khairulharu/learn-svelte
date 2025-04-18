import { mount } from "svelte";
import './app.css'
import Hello from "./lib/Hello.svelte";

const hello = mount(Hello, {
     target: document.getElementById('app'),
})

export default hello