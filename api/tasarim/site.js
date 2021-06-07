$(document).ready(function() {

  $("a[data-toggle='tooltip']").tooltip();
  $("[data-toggle='tooltip']").tooltip();
  $("i[data-toggle='tooltip']").tooltip();
  $("i[data-toggle='popover']").popover();
});
function formSubmit(form)
{

    var submit = $("input[type=submit]",form);;
    var oldButtonValue = submit.html()
    submit.html("Processing <i class='fa fa-spinner fa-spin'></i>");
    submit.attr("disabled", "true");
    $.ajax({
      type: 'POST',
        url: form.attr("action"),
        data: form.serialize(),
        dataType: 'json',
        success: function(data)
        {
         console.log(data)
          if(data.success)
          {
            if(data.goURL){ 
            window.location.href = data.goURL;
            } 

            if(data.reload){

               location.reload();

            }
            if(data.message) {
               
            $('.message').hide();
            $('.message').html("<div class='alert alert-success'>"+data.message+"</div>");
            $('.message').fadeIn();
            submit.html(oldButtonValue);
            submit.removeAttr("disabled")
            form[0].reset();

            } 

            if(data.show) {
               
               $(form).slideUp();
               $('#'+data.show).slideDown();


            }     
           }
         else {
            submit.html(oldButtonValue);
            submit.removeAttr("disabled")
            $('.message').hide();
            $('.message').html("<div class='alert alert-danger'>"+data.message+"</div>");
            $('.message').fadeIn();
         }
        }
  });
    return false;
}

$("#scrollTo").click(function() {
    var to = $(this).data("scroll-to");
    $('html, body').animate({
        scrollTop: $("#"+to).offset().top
    }, 1500);
});

$("#gateway").on("click", function() {
    var gateway = $(this).data("gateway");
    $('.'+gateway).toggle("slow", function() {


    });

});

$('[data-toggle="option"]').on('click', function(e) {

  e.preventDefault();
  var option = $(this).data('option');
  var current = $('#'+option).val()

  console.log(current);

  if(current === "0") {

  var option = $(this).data('option');

  $(this).attr("class", "btn btn-danger pull-right btn-sm");
  $(this).html("Disable <i class='fa fa-times'></i>");

  $('#'+option).val(1);

  } else {

   

  $(this).attr("class", "btn btn-success pull-right btn-sm");
  $(this).html("Enable <i class='fa fa-check'></i>");

  $('#'+option).val(0);

  }

  $.ajax({
      type: 'POST',
        url: '/dashboard/settings/fraud',
        data: $('#settings').serialize(),
        dataType: 'json',
        success: function(data)
        {




        }


        });

});

$(".subaccount-radio input").live("change", function(event)
  {
    parent = $(this).closest("td");

    if($(this).attr("checked") != "checked")
    {
      $(parent).removeClass("success");
      $(parent).addClass("danger");
    }
    else
    {
      $(parent).removeClass("danger");
      $(parent).addClass("success");
    }
  });

  $("a[data-toggle='popover']").popover(
  {
    container: "body",
    trigger: "hover"
  });

  $("a[data-toggle='popover']").on("mouseout", function(e)
  {
    $(this).popover("hide");
  });
    $("i[data-toggle='popover']").popover(
  {
    container: "body",
    trigger: "hover"
  });

  $("i[data-toggle='popover']").on("mouseout", function(e)
  {
    $(this).popover("hide");
  });

  $("#checkAll").on("click", function() {

   if($("input[name='requisites[]']").attr("checked") == "checked") {

    $("input[name='requisites[]']").prop('checked', false);
    $("input[name='requisites[]']").parent().parent().removeClass("success");
    $("input[name='requisites[]']").parent().parent().addClass("danger");
    $(this).text("(Check All)");

  } else {

   $("input[name='requisites[]']").prop('checked', true);
   $("input[name='requisites[]']").parent().parent().removeClass("danger");
   $("input[name='requisites[]']").parent().parent().addClass("success");
   $(this).text("(Uncheck All)");
  

  }

  });