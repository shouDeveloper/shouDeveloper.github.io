(function(){
	 var canvas = document.getElementById('school');
    var ctx = canvas.getContext('2d');

    ctx.strokeStyle = '#fff';

    function step(points, distance,lineWidth) {
		ctx.lineWidth =lineWidth;
        ctx.beginPath();
        var stepped = 0;
        for (let i = 0; i < points.length - 1 && stepped < distance; i++) {
            let cur = points[i];
            let next = points[i + 1];
            let len = Math.sqrt(Math.pow(cur[0] - next[0], 2) + Math.pow(cur[1] - next[1], 2));
            if (len <= distance - stepped) {
                ctx.moveTo(...cur);
                ctx.lineTo(...next);
                stepped += len;
            } else {
                ctx.moveTo(...cur);
                let deltaX = Math.abs(cur[0] - next[0]) * (distance - stepped) / len;
                let deltaY = Math.abs(cur[1] - next[1]) * (distance - stepped) / len;
                let toX = cur[0];
                let toY = cur[1];
                if (next[0] > cur[0]) {
                    toX += deltaX;
                } else {
                    toX -= deltaX;
                }
                if (next[1] > cur[1]) {
                    toY += deltaY;
                } else {
                    toY -= deltaY;
                }
                ctx.lineTo(toX, toY);
                stepped = distance;
            }
        }
        ctx.stroke();
    }
	const level=270.5;
    const points = [
        [0, level],
        [150, level],
        [150, level-220],
        [220, level-230],
		[220,level],
		[250,level],
		[250,level-230],
		[320,level-220],
		[320,level],
		[400,level],
		[400,level-10],
		[405,level-10],
		[405,level-60],
		[435,level-60],
		[435,level-10],
		[400,level-10],
		[400,level],
		[440,level],
		[580,level],
		[580,level-5],
		[580,level-5],
		[600,level-5],
		[600,level-10],
		[530,level-10],
		[530,level-15],
		[685,level-15],
		[685,level-115],
		[535,level-115],
		[535,level-15]
    ];
	const points2 = [
		[0, level],
        [170, level],
        [170, level-250],
        [230, level-260],
		[230,level],
		[240,level],
		[240,level-260],
		[300,level-250],
		[300,level],
		[400,level],
		[400,level-70],
		[440,level-70],
		[440,level],
		[580,level],
		[580,level-5],
		[600,level-5],
		[600,level-10],
		[530,level-10],
		[530,level-120],
		[690,level-120],
		[690,level-10],
		[620,level-10],
		[620,level-5],
		[640,level-5],
		[640,level],
		[990,level]
	]
	var reserverPoints2=points2.reverse();
    const startTime = Date.now();
    const speed = 900;
	const speed2 =1000;
    function draw() {
        ctx.clearRect(0, 0, 990, 300);
        const duration = Date.now() - startTime;
        const distance = (duration / 1000) * speed;
        const distance2 = (duration / 1000) * speed2;
        step(points, distance,1);
		step(reserverPoints2, distance2,1.5);
        requestAnimationFrame(draw);
	}
    draw();
})();