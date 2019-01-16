document.addEventListener('DOMContentLoaded', function(e){
    let panels = document.querySelectorAll('.panel');
    panels.forEach(panel => panel.addEventListener("mouseover", activatePanel));
    panels.forEach(panel => panel.addEventListener("mouseout", deactivatePanel));

    function activatePanel() { 
        this.classList.add('open');
        this.classList.add('open-active');
     }
     function deactivatePanel() { 
        this.classList.remove('open');
        this.classList.remove('open-active');
     }
})