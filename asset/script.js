$('.button').click(function() {
    // Animate content
    $('.page').addClass('animate_content');
    $('.page-content').fadeOut(100).delay(2800).fadeIn();

    setTimeout(function() {
        $('.page').removeClass('animate_content');
    }, 3200);

    // Remove fadeIn class after 1500ms
    setTimeout(function() {
        $('.page').removeClass('fadeIn');
    }, 1100);
});


$('.button2').click(function() {
    // Animate content
    $('.page').addClass('animate_content');
    $('.page-content').fadeOut(100).delay(2800).fadeIn();

    setTimeout(function() {
        $('.page').removeClass('animate_content');
    }, 3200);

    // Remove fadeIn class after 1500ms
    setTimeout(function() {
        $('.page').removeClass('fadeIn');
    }, 1100);
});

$('.button3').click(function() {
    // Animate content
    $('.page').addClass('animate_content');
    $('.page-content').fadeOut(100).delay(2800).fadeIn();

    setTimeout(function() {
        $('.page').removeClass('animate_content');
    }, 3200);

    // Remove fadeIn class after 1500ms
    setTimeout(function() {
        $('.page').removeClass('fadeIn');
    }, 1100);
});

$('.back-to-home').click(function() {
    setTimeout(function() {
        $('.home').addClass('fadeIn');
    }, 1100);

    playMusic();
});


$('.go-to-page2').click(function() {
    setTimeout(function() {
        $('.page2').addClass('fadeIn');
    }, 1100);

    // Delay 4 seconds before starting runText()
    setTimeout(runText, 4000);
    playMusic();
});

$('.go-to-page3').click(function() {
    setTimeout(function() {
        $('.page3').addClass('fadeIn');
    }, 1100);
});  

$('.bounce2').click(function() {
    playMusic();
    playVoice();
})

var i = 0;
var txt = "im sorry if this took so long but thanks for staying talaga and thank you for always understanding me, right now po it's different na talaga and im gonna commit na, I'll stay by your side, I'll be your bestfriend, your lover, your companion, through ups and downs poo, I'll be there for youuu,           I Love You!";
var speed = 125;

function runText() {
    if (i < txt.length) {
        document.getElementById("dynamic-text").innerHTML += txt.charAt(i);
        i++;
        setTimeout(runText, speed);
    }
};

function playMusic() {
    var music = document.getElementById("music");
    return music.paused ? music.play() : music.pause();
};

function playVoice() {
    var voice = document.getElementById("voice");
    return voice.paused ? voice.play() : voice.paused();
};
