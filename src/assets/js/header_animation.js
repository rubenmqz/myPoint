function MoveMe () {
    console.log("animando");
    $('.stripe').animate({
        backgroundPositionX: Math.random()*100 + '%',
        backgroundPositionY: Math.random()*100 + '%'
    }, 2000, 'swing', MoveMe);
}

MoveMe();