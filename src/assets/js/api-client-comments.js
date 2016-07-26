var apiClientComments = (function () {
    
    return {
        save: function(comment, successCallback, errorCallback) {

            var formData = new FormData();
            formData.append("articleId", comment.articleId);
            formData.append("name", comment.name);
            formData.append("surname", comment.surname);
            formData.append("email", comment.email);
            formData.append("comment", comment.comment);
            if (comment.avatar)
                formData.append("avatar_url", comment.avatar);
            else
                formData.append("avatar_url", "");

            if (comment.datetime)
                formData.append("datetime", comment.datetime);
            else
                formData.append("datetime", "2016-07-25T17:00");

            $.ajax({
                url: "/api/comments/?_order=id",
                method: "post",
                data: formData,
                processData: false,
                contentType: false,
                success: successCallback,
                error: errorCallback
            });
        },

        delete: function(commentId, successCallback, errorCallback) {
            $.ajax({
                url: "/api/comments/" + commentId,
                method: "delete",
                success: successCallback,
                error: errorCallback
            });
        },

        list: function(articleId, successCallback, errorCallback) {
            //at the moment, articleId is ignored, since this backend (SparREST) doesn't support filtering results.
            //so we get all comment, no matter which article they belong to
            $.ajax({
                url: "/api/comments/",
                method: "get",
                success: successCallback,
                error: errorCallback
            });
        }
    };

})();