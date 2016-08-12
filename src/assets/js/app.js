$(document).foundation();

//Updates time tags continously
jQuery("time").timeago();

//Retrieves comments count per article
commentsListManager.getCount();

//loads comments list when they appear in viewport
commentsListManager.showWhenVisible();