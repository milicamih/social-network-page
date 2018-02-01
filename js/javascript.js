$(document).ready(function() { 


    $('#click-acount').click(function() { //user acount dropdown menu
            $("i", this).toggleClass("fa-angle-up fa-angle-down"); 
     }); 



    $('#clickDots').click(function() { //edit, delite dropdown first user
            $('.dropdown-dots').slideToggle("fast"); 
     }); 

     $('#clickDots1').click(function() { //edit, delite dropdown second user
            $('.dropdown-dots1').slideToggle("fast"); 
     }); 

     var add = (function () { //likes
    var counter = 5;
    return function () {return counter += 1;}
})();

function myFunction(counter){
    document.getElementById("count-likes").innerHTML = add();
}
 

    // Configure/customize these variables.
    var showChar = 140;  // How many characters are shown by default
    var ellipsestext = "...";
    var moretext = "Read more...";
    var lesstext = "Read less";
    

    $('.more').each(function() {
        var content = $(this).html();
 
        if(content.length > showChar) {
 
            var c = content.substr(0, showChar);
            var h = content.substr(showChar, content.length - showChar);
 
            var html = c + '<span class="moreellipses">' + ellipsestext+ '&nbsp;</span><span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a href="" class="morelink">' + moretext + '</a></span>';
 
            $(this).html(html);
        }
 
    });
 
    $(".morelink").click(function(){
        if($(this).hasClass("less")) {
            $(this).removeClass("less");
            $(this).html(moretext);
        } else {
            $(this).addClass("less");
            $(this).html(lesstext);
        }
        $(this).parent().prev().toggle();
        $(this).prev().toggle();
        return false;
    });


});

  
 var clicks = 5; // likes counting filrst user
    function onClick() {
        clicks += 1;
        document.getElementById("clicks").innerHTML = clicks;
    };
 

 var clicks = 2; // likes counting second user
    function onClick1() {
        clicks += 1;
        document.getElementById("clicks1").innerHTML = clicks;
    };
 
 
 function prepareHTMLTemplate() {
        var usersView = "";
        userData.forEach(function(user) {
            usersView += createUserTemplate(user);
        })

        document.getElementById('add-coment-wraper').innerHTML = usersView;
    }

    function createUserTemplate(user) {

        var templateContent = 
                                "<div class='one-comment-wraper clearfix'><div class='flex-item'>" +
                                "<img class='profile-img border-radius pull-right' src='img/"+ user.name.toLowerCase() + ".png'>" +
                                "<p class='name'><b>"+ user.name + "</b></p>" +
                                "<p class='comment more'>"+ user.status + "</p>" +
                                "<p class='date-time'>"+ dateAndTime + "</p>" +
                               "</div>";
                             
                      
    
        return templateContent;
    }