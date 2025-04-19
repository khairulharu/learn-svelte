import { mount } from "svelte";
import CounterClicked from "./lib/CounterClicked.svelte";

const counter = mount(CounterClicked, {
     target: document.getElementById("app"),
})

export default counter