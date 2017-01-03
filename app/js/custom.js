//menu toggle

$(document).ready(function () {


    $('.toggle-mnu').on('click', function () {
        $('.toggle-mnu').toggleClass('on');
        if ($('.toggle-mnu').hasClass('on')) {

            $('.sidebar-dashboard').addClass('open');
            $('.main-private').addClass('canvas-left');

            /*$('.sidebar').css({
                'margin-left': '0'
            });*/
        } else {
            $('.sidebar-dashboard').removeClass('open');
            $('.main-private').removeClass('canvas-left');
            /*/$('.sidebar').css({
                'margin-left': '-300px'
            });*/
        }
    });


    //slider
    $("#slideTransfer").slider();
    $("#slideTransfer").on("slide", function (slideEvt) {
        $("#ex6SliderVal").text(slideEvt.value);
    });

    //tooltip
    $(function () {
  $('[data-toggle="tooltip"]').tooltip()
})
    
   //datepicker
      $(function () {
        $('#datetimepicker6').datetimepicker();
        $('#datetimepicker1').datetimepicker();
        $('#datetimepicker9').datetimepicker();
        $('#datetimepicker7').datetimepicker({
            useCurrent: false //Important! See issue #1075
        });
        $("#datetimepicker6").on("dp.change", function (e) {
            $('#datetimepicker7').data("DateTimePicker").minDate(e.date);
        });
        $("#datetimepicker7").on("dp.change", function (e) {
            $('#datetimepicker6').data("DateTimePicker").maxDate(e.date);
        });
    });
    
    $(document).on('change','.select-upload', function(e){
        var val = $(e.target).val();
        $('#'+ val).removeClass('hide').siblings('.form-upload').addClass('hide');
    });


});