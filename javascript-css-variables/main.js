document.addEventListener("DOMContentLoaded", function(e){
    let controls = document.querySelectorAll(".controls input");
    function handleUpdate() {
        const suffix = this.dataset.sizing || "";
        document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    }
    controls.forEach(input => input.addEventListener('change', handleUpdate)); 
    controls.forEach(input => input.addEventListener('mousemove', handleUpdate));
});