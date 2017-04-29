var popupSearch = document.querySelector(".search");
var popupForm = document.querySelector(".search-form");


popupSearch.addEventListener("click", function(a){
	a.preventDefault();
	popupForm.classList.toggle("show");
});







/*
popupSearch.classList.toggle(".clicked");
popupForm.classList.remove('modal__popup--active');
popup.classList.add('modal__popup--nonactive');
popup.classList.add('modal__popup--noanimation');


var search=document.querySelector(".search-btn"),formbody=document.querySelector(".form");
search.addEventListener("click",function(a){a.preventDefault(),formbody.classList.toggle("form-show")});









/*$('#arrival-date').prop('readonly', true);
$('#exit-date').prop('readonly', true);

$('.minus').on('click',function(event) {
    event.preventDefault();
    current = +$(this).siblings('input').val();
    input = $(this).siblings('input');
    $(input).val(current - 1);

    if (current < 1) {
      $(input).val(current);
    }
});

$('.plus').on('click',function(event) {
    event.preventDefault();
    current = +$(this).siblings('input').val();
    input = $(this).siblings('input');
    $(input).val(current + 1);
});

$('.date-input').datepick({
    yearRange: 'c-0:c+5'
});*/