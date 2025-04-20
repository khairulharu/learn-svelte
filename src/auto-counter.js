import { mount } from "svelte";
import AutoCounter from "./lib/AutoCounter.svelte";

const counter = mount(AutoCounter, {
     target: document.getElementById("app"),
})

export default counter