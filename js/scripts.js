$(document).ready(function(){
  $('input').iCheck({
    checkboxClass: 'icheckbox_futurico',
    increaseArea: '20%' // optional
  });
    $('#nav-click').click(function(){
        $('aside').toggle();
        $('div.content').toggleClass('cc');
    });
});
