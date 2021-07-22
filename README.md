# shortVanilla
short and simplified javascript functions which makes developing in Vanilla JS easier

## Methods
### Selecting elements using $() function

> **$('a')** // short for document.getElementsByTagName(); **returns all the a tag elements present in the document**

> **$('#wrapper')** // short for document.getElementsById(); **returns the element with id "wrapper"**

> **$('.header-wrapper')** // short for getElementsByClassName(); **returns all the tag containing the class=".header-wrapper"**

### Selecting elements using $$() function

> **$$('div#wrapper h2 a')** // short for querySelector(); **returns the first element matched by querySelector**

Pass 1 as second parameter to $$() function to get all the matching elements
> **$$('tr td',1)** // short for querySelectorAll(); **returns all the element matched by querySelectorAll**
