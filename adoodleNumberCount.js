function animateValue(id, start, end, duration) {
    let range = end - start;
    let current = start;
    let increment = end > start ? 1 : -1;
    let stepTime = Math.abs(Math.floor(duration / range));
    const obj = document.getElementById(id);
    let timer = setInterval(function() {
        current += increment;
        obj.textContent = current;
        if (current == end) {
            clearInterval(timer);
        }
    }, stepTime);
}

window.onload = function() {
    animateValue("brands", 0, 50, 2000);
    animateValue("investments", 0, 1000, 2000);
    animateValue("partnerships", 0, 1500, 2000);
};
