var commentsListManager = (function() {

	return {
		load: function(articleId) {
			$('.comments-list').html('<p>Cargando comentarios. Un momento por favor.</p>'); //vaciamos la lista

			apiClientComments.list(articleId, function(response) {
				
				if (response.length>0) {
					$('.comments-list').html("");
					for (var i in response) {
						var comment = response[i];

						var avatar_url = comment.avatar_url || "";
						if (avatar_url == "") {
							avatar_url = 'assets/img/comment-autor-placeholder.png';
						}

						var html = '<div class="row">';
						html += '<div class="large-12 columns">';
						html += '<article class="comment">';
						html += '<header>';
						html += '<img class="avatar" src="'+ avatar_url + '">';
						html += '<div class="commenter">Por <a title="Enviar e-mail" href="mailto:' + utils.escapeHTML(comment.email) + '">' + utils.escapeHTML(comment.name) + ' ' + utils.escapeHTML(comment.surname) + '</a> <i>(<time class="comment_date" datetime="' + comment.datetime + '">' + utils.simplifyDates(comment.datetime) + '</time>)</i>:</div>';
						html += '</header>';
						html += '<div class="comment_text">' + utils.crlf2br(utils.escapeHTML(comment.comment)) + '</div>';
						html += '</article>';
						html += '</div>';
						html += '</div>';
						
						$('.comments-list').append(html);					
					}
				} else {
					$('.comments-list').html('<p>Aún no hay ningún comentario sobre este artículo. ¡Puedes ser el primero!</p>');
				}				

				jQuery("time").timeago();

			}, function(response) {
				$('.comments-list').html('No se han podido cargar los comentarios. Intenta recargar la página pasados unos instantes.');
				//console.error("ERROR LISTING", response);
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
		},

		getCount: function() {
			$(".comments-count").each(function() {
				var self = this;
				apiClientComments.length($(this).data("articleId"), function(count) {
					$(self).text("Comentarios: " + count);
				}, function(response) {
					$(self).text("Comentarios: --");
				});
			});
		}
	}
})();			