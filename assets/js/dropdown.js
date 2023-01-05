function dropdown(dropdown_id) {
    document.getElementById(dropdown_id).classList.toggle("show");
}

window.addEventListener("click", (event) => {
    if (!event.target.matches('.dropbtn') && !event.target.matches('.in-dropdown')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
        var btns = document.getElementsByClassName("dropbtn");
        for (i = 0; i < btns.length; i++) {
            var btn = btns[i];
            btn.classList.remove('active');
        }
    } else if (event.target.matches('.dropbtn')) {
        event.target.classList.toggle("active");
    }
})
