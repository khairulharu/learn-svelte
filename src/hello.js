import { mount } from "svelte"
import './app.css'
import HelloSvelte from "./lib/HelloSvelte.svelte"

const hello = mount(HelloSvelte, {
     target: document.getElementById('app'),
})

export default hello