//var songsListManager = require('./songs-list-manager');

var sendCommentButton = $('.new-comment-form button');
var inputs = $(".new-comment-form input, .new-comment-form textarea");

function setLoading(){ // before sending request
    $(inputs).attr("disabled", true); // disable all inputs
    // Change button text and disable it
    sendCommentButton.text("Enviando comentario...").attr("disabled", true);
}

function unsetLoading(){
    $(inputs).attr("disabled", false); // enable all inputs
    // Reset button text and enable it
    sendCommentButton.text("Enviar").attr("disabled", false);
}


// On send form clicking button or pressing enter
// Process data and send it to API
$('.new-comment-form').on("submit", function(){

    // Input validation
    for (var i = 0; i < inputs.length; i++) {
        var input = inputs[i];
        if (input.checkValidity() == false) {
            utils.showError(input.validationMessage, "#form-messages");
            input.focus();
            return false;
        }
    }

    //textarea 120 words max
    var commentTextarea = $("#comment");
    if (utils.countWords($(commentTextarea).val())>120) {    
        utils.showError("El comentario es demasiado largo (máximo 120 palabras).", "#form-messages");
        $(commentTextarea).focus();
        return false;
    }

    /*
    var audio_file_input = $("#audio_file")[0];
    var audio_file = null;
    if (audio_file_input.file != null) {
        audio_file = audio_file_input.file;
    }

    var cover_file_input = $("#cover_file")[0];
    var cover_file = null;
    if (cover_file_input.file) { // igual que  cover_file_input.file != null
        cover_file = cover_file_input.file;
    }*/
    var avatar = null;
    var datetime = null;
    //2016-07-26T01:19+02:00
    var d = new Date();
    datetime = d.getFullYear() + "-" + 
                utils.addZero(d.getMonth()+1) + "-" + 
                utils.addZero(d.getDate()) + "T" + 
                utils.addZero(d.getHours()) + ":" + 
                utils.addZero(d.getMinutes()) + ":" + 
                utils.addZero(d.getSeconds()) + "+" + 
                utils.addZero(Math.abs(d.getTimezoneOffset()/60)) + ":00";

    var articleId = $("#comments-content").data("articleId");

    // comment that will be sent
    var comment = {
        articleId: articleId,
        name: $("#name").val(), 
        surname: $("#surname").val(),
        email: $("#email").val(),
        avatar: avatar,
        comment: $("#comment").val(),
        datetime: datetime
    };

    setLoading(); // disable form

    //send to api
    apiClientComments.save(comment, function(response) {
        $(".new-comment-form")[0].reset();
        $("#form-messages").html("");
        commentsListManager.load(articleId);
        unsetLoading();
    }, function() {
        console.error("ERROR", arguments);
        unsetLoading();
    });

    return false;
});
