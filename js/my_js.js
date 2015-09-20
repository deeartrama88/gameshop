$(document).ready(function(){

// HEADER SUB MENU BLOCK SHOW FUNCTION ----------------------------------------------------------------
	var menu_game_list_i = $('.menu_first_line i'), /* open sub menu i */
		menu_game_list = $('.menu_game_list'),  /* sub menu list block */
		header_main_menu = $('.header_main_menu'); /* need it to find out main menu width and set it to sub menu*/

		// set width of header sub menu
		function setSubMenuWidth () {
			var W = header_main_menu.css('width');
			menu_game_list.css('width', W);
		};
		// call this function
		setSubMenuWidth();
		// open and close sub menu
		menu_game_list_i.on('click', function(){
			var buffer = document.querySelector(".menu_game_list");
			if (buffer.style.display === 'none'){
				menu_game_list.slideDown(200);
				menu_game_list_i.removeClass('fa fa-angle-down');
				menu_game_list_i.addClass('fa fa-angle-up');
			}
			else {
				menu_game_list.slideUp(200);
				menu_game_list_i.removeClass('fa fa-angle-up');
				menu_game_list_i.addClass('fa fa-angle-down');
			}
		});

		// click out of sub menu
		$(document).mouseup(function (e) {
	    	if (menu_game_list.has(e.target).length === 0){
	        	menu_game_list.slideUp(200);
	    	};
	    	menu_game_list_i.removeClass('fa fa-angle-up');
			menu_game_list_i.addClass('fa fa-angle-down');
	    });
// ------------------------------------------------------------------------------------------------------



// SLIDER BLOCK SCRIPTS

// slider image width
$('.main_slider img').css('width', '100%');













});
