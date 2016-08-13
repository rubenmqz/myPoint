$(".article-content").on("click", ".like", function(){
    var self = this;
    var articleId = $(this).data("articleId");
    apiClientLikes.like(articleId,1, function(response){
        $(self).removeClass("like").addClass("liked");
        console.log("like", articleId);
    }, function(response){
        console.error("Error while liking article", response);
    });
});

$(".article-content").on("click", ".liked", function(){
    var self = this;
    var articleId = $(this).data("articleId");
    apiClientLikes.unlike(articleId,1, function(response){
        $(self).removeClass("liked").addClass("like");
        console.log("unlike", articleId);
    }, function(response){
        console.error("Error while unliking article", response);
    });
    //$(self).blur();//avoid button being focused after click
});