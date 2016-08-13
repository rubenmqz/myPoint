$(document).foundation();

//Updates time tags continously
jQuery("time").timeago();

//Retrieves comments count per article
commentsListManager.getCount();

//Marks previously liked articles
articlesListManager.markLiked(1);

//loads comments list when they appear in viewport
commentsListManager.showWhenVisible();