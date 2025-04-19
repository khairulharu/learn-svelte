import { mount } from "svelte"
import GlobalCounterApp from "./GlobalCounterApp.svelte"

const app = mount(GlobalCounterApp, {
     target: document.getElementById("app")
})

export default app