const themeMap = {
    dark: "light",
    light: "dark"
};
let current = 'light'
const bodyClass = document.body.classList;
bodyClass.add(current)

function toggleTheme(){
    const next = themeMap[current];
    bodyClass.replace(current, next);
    current = next;
}

document.getElementById('themeButton').onclick = toggleTheme;