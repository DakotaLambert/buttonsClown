import { ClowningHTML } from "./buttonsClown.js"

const mainContainer = document.getElementById("container")

export const renderHTML = () => {
    mainContainer.innerHTML = ClowningHTML()
}

renderHTML()