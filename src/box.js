import { mount } from "svelte";
import Box from "./lib/Box.svelte";

const box = mount(Box, {
     target: document.getElementById("app")
})

export default box