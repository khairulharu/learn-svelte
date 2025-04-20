import { mount } from "svelte"
import GlobalCounterApp from "./lib/GlobalCounterApp.svelte"

const app = mount(GlobalCounterApp, {
     target: document.getElementById("app")
})

export default app