function on_document_load() {
    let curr_scheme = localStorage.getItem("jtc-scheme") || "jtc-scheme-rose-quartz";
    document.documentElement.classList.add(curr_scheme);
    const scheme_dropdown = document.getElementById('color-scheme');
    scheme_dropdown.value = curr_scheme;
    scheme_dropdown.addEventListener("input", (event) => {
        let curr_scheme = localStorage.getItem("jtc-scheme") || "jtc-scheme-rose-quartz";
        let val = event.currentTarget.value
        console.log(curr_scheme)
        if (curr_scheme === val) {
            return;
        }
        document.documentElement.classList.replace(curr_scheme, val);
        localStorage.setItem("jtc-scheme", val);
        console.log(val)
    });
    let curr_theme = localStorage.getItem("jtc-theme") || "theme-dark";
    document.documentElement.classList.add(curr_theme);
    const theme_checkbox = document.getElementById('theme');
    theme_checkbox.checked = (curr_theme === "theme-light");
    theme_checkbox.addEventListener('change', (event) => {
        if (event.currentTarget.checked) {
            document.documentElement.classList.remove("theme-dark");
            document.documentElement.classList.add("theme-light");
            localStorage.setItem("jtc-theme", "theme-light");
        } else {
            document.documentElement.classList.remove("theme-light");
            document.documentElement.classList.add("theme-dark");
            localStorage.setItem("jtc-theme", "theme-dark");
        }
    })
    let curr_font = localStorage.getItem('accessible-font') || 0;
    if (curr_font) document.documentElement.classList.add("font-dyslexia");
    const font_checkbox = document.getElementById('accessible-font');
    font_checkbox.checked = (curr_font === "dyslexia");
    font_checkbox.addEventListener('change', (event) => {
        if (event.currentTarget.checked) {
            document.documentElement.classList.add("font-dyslexia");
            localStorage.setItem("accessible-font", "dyslexia");
        } else {
            document.documentElement.classList.remove("font-dyslexia");
            localStorage.removeItem("accessible-font");
        }
    })
    let curr_acc_colors = localStorage.getItem('accessible-colors') || 0;
    if (curr_acc_colors) document.documentElement.classList.add("accessible-colors");
    const acc_colors_checkbox = document.getElementById('accessible-colors');
    acc_colors_checkbox.checked = (curr_acc_colors === "on");
    acc_colors_checkbox.addEventListener('change', (event) => {
        if (event.currentTarget.checked) {
            document.documentElement.classList.add("accessible-colors");
            localStorage.setItem("accessible-colors", "on");
        } else {
            document.documentElement.classList.remove("accessible-colors");
            localStorage.removeItem("accessible-colors");
        }
    })
}
window.addEventListener("load", on_document_load);