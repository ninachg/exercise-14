
$(document).ready(function(){


        $(".menu2").children().hover(function(){
            $(this).toggle("menuitems");
            $("#container2").fadeToggle();
          //   $("#container2").animate({
          //      opacity: '0.2',
           //     height: '60%',
          //      width: '60%',},2000,function(){
            //        alert("The paragraph is now hidden");
         //   });
        })

        $(".container").click(function(){
            scrollTo(0, 5000)
        })
});
//*"this" means select the thing im clicking
    // $("#menuitem1").click(function(){
    //       $("#container1").html("<p>hello this is an html<br>paragraph element</p>");
    //   })

    // $("#menuitem2").click(function(){
    //     $("#container1").append("this is append");
    // })

    // $("#menuitem3").click(function(){
    //   $("#container1").text("this is text");
    // })

    //   $(".menu2").children().click(function(){
    //     console.log("click")
    //     $(this).toggleClass("menuitems")
    //     $(this).toggleClass("menuitems2")
    //     console.log("click")
    //     $("#container2").slideToggle(1000, "swing");
    //     $("#container2").fadeToggle();
    //     $("#container2").animate({
    //       opacity: '0.2',
    //       height: '60%',
    //       width: '60%',},2000,function(){
    //         alert("The paragraph is now hidden");
    //     });
    //     })
    //   $("#menuitem6").click(function(){
    //       scrollTo(0,5000)
    //   })

    //   $( ".menu3" ).children().draggable();


