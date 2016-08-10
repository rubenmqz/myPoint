$(function() {
     var p = [0, 0], speed = 50, MoveMe = function () {
        var angle = Math.random() * 2 * Math.PI;
        var d = [
            speed * Math.cos(angle), 
            speed * Math.sin(angle)
        ];

        for (var i = 0; i < 2; i++)
           p[i] = (p[i] + d[i] > 100 || p[i] + d[i] < 0) ? p[i] - d[i] : p[i] + d[i];

        $('.stripe').animate({
            backgroundPositionX: p[0] + '%',
            backgroundPositionY: p[1] + '%'
        }, 2000, 'swing', MoveMe);
     };
    
     //MoveMe();
});