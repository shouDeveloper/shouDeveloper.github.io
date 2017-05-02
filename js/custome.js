(function() {
    var btn = document.querySelector('.menu-toggle');
    var nav = document.querySelector('.navbar');
	var cover=document.querySelector(".cover-click");
	var show=false;
	var close=function(){
		nav.style.display="none";
		cover.style.display="none";
		show=false;
	}
    btn.addEventListener('click', function() {
        if (show) {
            close();
        } else {
			nav.style.display="block";
			cover.style.display="block";
			show=true;
			cover.addEventListener("click",close);
        }
    });
})();