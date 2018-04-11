// ==UserScript==
// @name         Smule downloader
// @version      0.1
// @description  try to take over the world!
// @author       You
// @grant        none
// @match        https://www.smule.com/*
// @require      http://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js
// ==/UserScript==


jQuery(window).load(function() {
    // main
    'use strict';
    construct_download_link();
});

function get_downloaded_object_name(obj_link) {
    var pieces = obj_link.split('.');
    var extension = pieces[pieces.length-1];
    // construct video downloaded name
    var music_name = jQuery("[class^='performanceTitleLink_']").text().replace(/\s/g, '');
    var singers = jQuery("[class^='performerHandlesContainer_']").text();
    var downloaded_name = music_name+'_'+singers+'.'+extension;
    return downloaded_name;
}

function construct_download_link() {
    // get the video element
    var video = jQuery('.vjs-tech')[0];
    // get the video downloaded name
    var downloaded_name = get_downloaded_object_name(video.src);
    // add some style to link download
    var style = "background-color:rgba(255,255,255,0.08);text-align:center;padding-top:14px;padding-bottom:14px;margin-top:21px";
    // link download
    var download_link = '<a class="smuleDownloader" style='+style+' href='+video.src+' download='+downloaded_name+'><div><span>Download</span></div></a>';
    // put all together
    jQuery("[class^='performanceInfoContainer_']").append(download_link);
    jQuery('.smuleDownloader').hover(function(){
        jQuery(this).css('background-color', 'rgb(255,255,255,0.20)');
    },function(){
        jQuery(this).css('background-color', 'rgb(255,255,255,0.08)');
    });
}