var commentsListManager = (function() {

	return {
		load: function(articleId) {

			apiClientComments.list(articleId, function(response) {
				$('.comments-list').html(''); //vaciamos la lista
				for (var i in response) {
					var comment = response[i];

					var avatar_url = comment.avatar_url || "";
					if (avatar_url == "") {
						avatar_url = 'assets/img/comment-autor-placeholder.png';
					}

					var html = '<div class="row">';
					html += '<article class="comment">';
					html += '<header>';
					html += '<img class="avatar" src="'+ avatar_url + '">';
					html += '<div class="commenter">Por <a title="Enviar e-mail" href="mailto:' + utils.escapeHTML(comment.name) + '">' + utils.escapeHTML(comment.name) + ' ' + utils.escapeHTML(comment.surname) + '</a> <i>(<time class="comment_date" datetime="' + comment.datetime + '">' + utils.simplifyDates(comment.datetime) + '</time>)</i>:</div>';
					html += '</header>';
					html += '<div class="comment_text">' + utils.crlf2br(utils.escapeHTML(comment.comment)) + '</div>';
					html += '</article>';
					html += '</div>';

					$('.comments-list').append(html);					
				}

				jQuery("time").timeago();

			}, function(response) {
				console.error("ERROR LISTING", response);
			});
		},

		showWhenVisible: function () {
			var self = this;
			var shown = false;
			if ($('#comments-content')[0]) {
				$(window).on('DOMContentLoaded load resize scroll', function () {
				    if (!shown) {
					    if (utils.isElementInViewport($('#comments-content')[0])) {
					        //if comments zone is visible, load the comments
					        self.load(1);
					        shown = true;
					    }
					}			    
				}); 
			}
		}
	}
})();			