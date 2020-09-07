# Bookmarklets
Curation of Bookmarklets

Code to create Bookmarklets from http://www.dev-hq.net/posts/1--create-javascript-bookmarklet

Example:

`javascript:(function(){s=document.createElement('script');s.type='text/javascript';s.src='https://raw.github.com/davatron5000/fitWeird/master/fitWeird.js?v='+parseInt(Math.random()*99999999);document.body.appendChild(s);})();`

Non-Working Example:

`javascript:(function(){s=document.createElement('script');s.type='text/javascript';s.src='https://raw.githubusercontent.com/Ajhad1/Bookmarklets/master/ClickAllSpecifiedButtons.js?v='+parseInt(Math.random()*99999999);document.body.appendChild(s);})();`

Working Example:

`javascript:(function() {var url = '//www.sprymedia.co.uk/VisualEvent/VisualEvent_Loader.js';if( typeof VisualEvent!='undefined' ) {if ( VisualEvent.instance !== null ) {VisualEvent.close();}else {new VisualEvent();}}else {var n=document.createElement('script');n.setAttribute('language','JavaScript');n.setAttribute('src',url+'?rand='+new Date().getTime());document.body.appendChild(n);}})();`
