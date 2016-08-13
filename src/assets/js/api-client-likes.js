var apiClientLikes = (function () {
    
    return {
        like: function(articleId, userId, successCallback, errorCallback) {

            if (typeof(Storage) !== "undefined") { // Browser supports Web Storage
                localStorage.setItem("article-" + articleId, userId);
                successCallback();           
            } else {
                errorCallback();
            }
        },

        unlike: function(articleId, userId, successCallback, errorCallback) {
            if (typeof(Storage) !== "undefined") { // Browser supports Web Storage
                if (Number(localStorage.getItem("article-" + articleId))==userId) { //if same pair exists, delete it
                    localStorage.removeItem("article-" + articleId, userId);
                    successCallback();           
                } else {
                    errorCallback();
                }                
            } else {
                errorCallback();
            }
        },

        listByUser: function(userId, successCallback, errorCallback) {
            if (typeof(Storage) !== "undefined") { // Browser supports Web Storage
                var archive = {},
                    keys = Object.keys(localStorage),
                    i = keys.length;

                while ( i-- ) {
                    if (Number(localStorage.getItem( keys[i] )) == userId) { //only retrieve when value = userId
                        archive[ keys[i] ] = localStorage.getItem( keys[i] );
                    }
                }
                successCallback(archive);
            } else {
                errorCallback();
            }
        },

        getArticleLikes: function(articleId, successCallback, errorCallback) {
            //TODO
        }
    };

})();