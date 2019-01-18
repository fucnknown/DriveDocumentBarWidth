// ==UserScript==
// @name         DriveDocumentBarWidth
// @namespace    http://tampermonkey.net/
// @version      0.8
// @description  try to take over the world!
// @author       fnowicky
// @require  http://ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js
// @match        https://drive.google.com/*
// @grant    GM_addStyle
// @run-at  document-end
// ==/UserScript==

/* globals jQuery, $ */

GM_addStyle ( `
.a-hrN2W-S-kl-Gd>.a-s-tb-kl-Gd-ig, .a-D-B-Lc-j{max-width:1500px;min-width:20px;}

` );

GM_addStyle ( `
.a-nEbBXb .a-hrN2W-S-kl-Gd>.a-s-tb-kl-Gd-ig, .a-nEbBXb .a-D-B-Lc-j{min-width:20px;  width: 256px }
` )

$(function(){
    document.getElementsByClassName("a-s-tb-sc-Ja-Q a-s-tb-sc-Ja-Q-Nm a-s-tb-Kg-Q a-s-tb-kl-Gd-ig")[0].style='';
});

;