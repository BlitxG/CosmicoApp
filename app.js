window.addEventListener('load', () => {
    const sounds = document.querySelectorAll('.sound');
    const pads = document.querySelectorAll('.pads div');
    
    console.log(sounds[0]);

    // Sound code
    pads.forEach(pad =>{
        pad.addEventListener('click', function() {
            sounds[4]
        });
    });
});


