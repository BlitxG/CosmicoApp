window.addEventListener('load', () => {
    const sounds = document.querySelectorAll('.sound');
    const pads = document.querySelectorAll('.pads div');
    const visual = document.querySelector('visual')
    const colors = [
        "#60d394",
        "#d36060",
        "#c060d3",
        "#d3d160",
        "#6860d3",
        "#00ffdd"
    ];
    
    console.log(sounds[0]);

    // Sound code
    pads.forEach((pad, index) => {
        pad.addEventListener('click', function() {
            sounds[index].currentTime = 0;
            sounds[index].play();

            createBubbles(index)
        });
    });


    // BUBBLE MAKER 
    const createBubbles = (index) => {
        const bubble = document.createElement('div');
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[index];
        buuble.style.animation = 'jump 1s ease';
        buuble.addEventListener('animationend', function() {
            visual.removeChild(this);
        })
    }
});


