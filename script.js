function changeTab(event, divId) {
    let sections = document.getElementsByClassName("page-section")
    for (let section of sections) {
        section.style.display = "none"
    }

    let buttons = document.getElementsByClassName("tab-button")

    for (let button of buttons) {
        button.classList.remove("active")
    }

    document.getElementById(divId).style.display = "block"
    event.target.classList.add("active")
}
