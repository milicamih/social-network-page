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

  
function onClickLike(args) {
    var likeNumber = Number(args.parentElement.firstElementChild.innerHTML);
    args.parentElement.firstElementChild.innerHTML = ++likeNumber;
};
 
 
function createUserTemplate(messageText) {


    var templateContent =   "<div class='one-comment-wraper'>" +
                                "<div class='user-wraper'>" +
                                    "<img class='border-radius' src='img/current-user-img.png'>" +
                                    "<span class='coment-writer-name'><b>Rebeca</b></span>" +
                                "</div>" +    
                                "<p class='more'>"+ messageText + "</p>" +
                                "<p class='date-time pull-right font-size'>"+ new Date().toDateString() + "</p>" +
                            "</div>";
                            
                    

    return templateContent;
}

function onClickSendMessage(btnElement, idOfMessageContainer) {
    var container = document.getElementById(idOfMessageContainer);
    var input = btnElement.parentElement.parentElement.firstElementChild;

    container.innerHTML = container.innerHTML + createUserTemplate(input.value);
    input.value = "";

    onClickCountMessage(idOfMessageContainer)
    
}

function onClickCountMessage(idOfMessageContainer) {
    var messageRef = document.getElementById(idOfMessageContainer + "-msgCount");
    var messageNumber = Number(messageRef.innerHTML);
    messageRef.innerHTML = ++messageNumber;
};


