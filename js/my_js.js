$(document).ready(function(){

	// HEADER SUB MENU BLOCK SHOW FUNCTION
	var menu_game_list_i = $('.menu_first_line i'), /* open sub menu i */
		menu_game_list = $('.menu_game_list'),  /* sub menu list block */
		header_main_menu = $('.header_main_menu'); /* need it to find out main menu width and set it to sub menu*/

		function setSubMenuWidth () {
			var W = header_main_menu.css('width');
			menu_game_list.css('width', W);
		};

		setSubMenuWidth();

		menu_game_list_i.on('click', function(){

			menu_game_list.slideToggle(200);
			if(menu_game_list_i.hasClass('fa-angle-down')) {
				menu_game_list_i.removeClass('fa fa-angle-down');
				menu_game_list_i.addClass('fa fa-angle-up');
			}else{
				menu_game_list_i.removeClass('fa fa-angle-up');
				menu_game_list_i.addClass('fa fa-angle-down');
			}

		});

















});
