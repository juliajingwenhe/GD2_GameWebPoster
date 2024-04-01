document.getElementById('start-btn').addEventListener('click', function() {
    // Play the sound
    var audio = document.getElementById('start-clickSound');
    audio.play();

    transitionPage('home-page', 'intro-page',); 
});

document.getElementById('act1-btn').addEventListener('click', function() {
    var audio = document.getElementById('start-clickSound');
    audio.play();

    transitionPage('intro-page', 'act1-page');
});

function goToAct2A(choice) {
    console.log(choice); // Placeholder for choice handling
    // Here you would handle the choice and direct to different outcomes
    transitionPage('act1-page', 'act2-pageA'); // Example transition to Act 2
}

function goToA1(choice) {
    console.log(choice); 
    transitionPage('act2-pageA', 'choice-A1'); 
}

function goToB1(choice) {
    console.log(choice); 
    transitionPage('act2-pageA', 'choice-B1'); 
}  

document.getElementById('act3-btn1').addEventListener('click', function() {
    var audio = document.getElementById('start-clickSound');
    audio.play();

    transitionPage('choice-A1', 'act3-page');
});

document.getElementById('act3-btn2').addEventListener('click', function() {
    var audio = document.getElementById('start-clickSound');
    audio.play();

    transitionPage('choice-B1', 'act3-page');
});

document.getElementById('act3-btn3').addEventListener('click', function() {
    var audio = document.getElementById('start-clickSound');
    audio.play();

    transitionPage('choice-A2', 'act3-page');
});
document.getElementById('act3-btn4').addEventListener('click', function() {
    var audio = document.getElementById('start-clickSound');
    audio.play();

    transitionPage('choice-B2', 'act3-page');
});

function goToAct2B(choice) {
    console.log(choice); 
    transitionPage('act1-page', 'act2-pageB'); 
}

function goToA2(choice) {
    console.log(choice); 
    transitionPage('act2-pageB', 'choice-A2'); 
}

function goToB2(choice) {
    console.log(choice); 
    transitionPage('act2-pageB', 'choice-B2'); 
}

function goToA3(choice) {
    console.log(choice); 
    transitionPage('act3-page', 'choice-A3'); 
}

function goToB3(choice) {
    console.log(choice); 
    transitionPage('act3-page', 'choice-B3'); 
}

document.getElementById('act4-btn1').addEventListener('click', function() {
    var audio = document.getElementById('start-clickSound');
    audio.play();

    transitionPage('choice-A3', 'act4-page');

});

document.getElementById('act4-btn2').addEventListener('click', function() {
    var audio = document.getElementById('start-clickSound');
    audio.play();

    transitionPage('choice-B3', 'act4-page');
});

function goToA4(choice) {
    console.log(choice); 
    transitionPage('act4-page', 'choice-A4'); 
}

function goToB4(choice) {
    console.log(choice); 
    transitionPage('act4-page', 'choice-B4'); 
}

document.getElementById('epilogue1').addEventListener('click', function() {
    var audio = document.getElementById('start-clickSound');
    audio.play();

    transitionPage('choice-A4', 'epilogue-page');
});

document.getElementById('epilogue2').addEventListener('click', function() {
    var audio = document.getElementById('start-clickSound');
    audio.play();

    transitionPage('choice-B4', 'epilogue-page');
});

document.getElementById('restart-btn').addEventListener('click', function() {
    var audio = document.getElementById('start-clickSound');
    audio.play();

    transitionPage('epilogue-page', 'home-page');
});





function playClickSound() {
    var audio = document.getElementById('choice-clickSound');
    audio.play();
}
// Add this function to all button clicks
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', playClickSound);
});





function transitionPage(fromPage, toPage) {
    var outgoingPage = document.getElementById(fromPage);
    var incomingPage = document.getElementById(toPage);

    // Fade out the current page
    outgoingPage.style.opacity = '0';

    // Wait for the fade-out to finish
    setTimeout(function() {
        outgoingPage.classList.add('hidden');
        outgoingPage.classList.remove('active');

        // Prepare the next page for a fade-in by making it display without opacity transition
        incomingPage.classList.remove('hidden');
        incomingPage.style.transition = 'none';
        incomingPage.style.opacity = '0';

        setTimeout(function() {
            // Begin the fade-in
            incomingPage.style.transition = 'opacity 1s ease-in-out';
            incomingPage.style.opacity = '1';
            incomingPage.classList.add('active');
        }, 20); // A slight delay to ensure the transition resets
    }, 1000); // This duration should match the CSS transition duration
}


function toggleMusic() {
    var music = document.getElementById("background-music");
    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
}

console.log('Hello');