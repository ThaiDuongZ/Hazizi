document.addEventListener("DOMContentLoaded",function() {
	var trangthai="duoi30";
	var menu = document.querySelector('.header');
	window.addEventListener("scroll",function(){
		var x = window.pageYOffset;
		if(x > 30){
			if(trangthai == "duoi30")
			{
				trangthai="tren30";
				menu.classList.add('menutora');
			}
		}
		else if(x <= 300){
			if(trangthai=="tren30")
            {
			    menu.classList.remove('menutora');
			    trangthai="duoi30";
            }
		}
	
	})
})
