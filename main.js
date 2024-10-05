  document.addEventListener('DOMContentLoaded', function() {

    function updateBackground() {
        const elements = document.querySelectorAll('.about ul div p');
        elements.forEach(function(element) {
            const parentDiv = element.parentElement; 
                const number = parseFloat(element.textContent);

                
                if (!isNaN(number)) {
                    const gradient = `conic-gradient(#A6BBCC ${number}%,rgb(255 255 255 / 0%) ${number}%)`;
                    parentDiv.style.background = gradient;
                } 
         
        });
    }
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                updateBackground(); 
            }
        });
    });


    const targets = document.querySelectorAll('.about ul div');
    targets.forEach(function(target) {
        observer.observe(target, {
            attributes: true 
        });
    });
    updateBackground();
 
   
});
