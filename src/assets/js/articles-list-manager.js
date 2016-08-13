var articlesListManager = (function() {

	return {
		markLiked: function(userId) {

			apiClientLikes.listByUser(userId, function(likes) {
				$("button.like").each(function() {
					var self = this;
					var articleId = $(this).data("articleId");
					if (likes["article-" + articleId]) {
						$(this).removeClass("like").addClass("liked");
					}
				});

			}, function(response) {
				console.error("Error retrieving like list", response);
			});
		}
	}
})();			