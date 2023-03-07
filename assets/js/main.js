// Плавное появление меню через всплывающую вкладку//
$(document).ready(function(){
	$('.header-navbar__btn').on('click', function () {
		$(this).toggleClass('-active');
    $('.header-navbar__list').stop(true, true).slideToggle(500);
	});
});

//Плавное появление через прозрачнось//
// $(document).ready(function(){
// 	$('.header-navbar__btn').on('click', function () {
// 		$(this).toggleClass('-active');
//     $('.header-navbar__list').fadeToggle(500);
// 	});
// });

//просто появление блока нажатием//
// $(document).ready(function(){
// 	$('.header-navbar__btn').on('click', function () {
// 		$(this).toggleClass('-active');
//     $('.header-navbar__list').toggleClass('-active');
// 	});
// });