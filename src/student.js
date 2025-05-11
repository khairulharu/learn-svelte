import { mount } from "svelte";
import Student from "./lib/Student.svelte";

const student = mount(Student, {
     target: document.getElementById("app")
})

export default student