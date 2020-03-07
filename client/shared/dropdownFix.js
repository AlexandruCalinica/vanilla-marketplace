// dropdown behaviour fix for the cart widget
export default function dropdownFix() {
  $('#dropdownMenu2').on('click', function (event) {
    $(this).parent().toggleClass('show');
    $('#dropdown-ul').toggleClass('show');
  });
  $('body').on('click', function (e) {
    if (!$('#dropdownMenu2').is(e.target) 
        && $('#dropdownMenu2').has(e.target).length === 0
        && $('.show').has(e.target).length === 0
    ) {
        $('#dropdownMenu2').removeClass('show');
        $('#dropdown-ul').removeClass('show');
    }
  });
}