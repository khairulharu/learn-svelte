import { mount } from "svelte"
import SayHello from "./lib/SayHello.svelte"

const sayHello = mount(SayHello, {
     target: document.getElementById("app")
})

export default sayHello