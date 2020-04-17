// ==UserScript==
// @name         LINE Dict Window size responsive support
// @namespace    dward2nd
// @version      2.0
// @description  try to take over the world!
// @author       dward2nd
// @match        https://dict.naver.com/linedict/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // add global style
    function addGlobalStyle(css) {
        var head, style;
        head = document.getElementsByTagName('head')[0];
        if (!head) { return; }
        style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = css;
        head.appendChild(style);
    }

    // click simulation
    function eventFire(el, etype){
        if (el.fireEvent) {
            el.fireEvent('on' + etype);
        } else {
            var evObj = document.createEvent('Events');
            evObj.initEvent(etype, true, false);
            el.dispatchEvent(evObj);
        }
    }

    // variable declaration
    let acInput = document.getElementById('ac_input');
    let aside = document.querySelector('#container .aside');
    let autocom = document.querySelector('.search .autocomplete');
    let bodyTag = document.querySelector('body');
    let btnFold = document.querySelector('#container .snb .btn_fold');
    let container = document.getElementById('container');
    let containerWrap = document.querySelector('#container .container_wrap');
    let content = document.getElementById('content');
    let footer = document.getElementById('footer');
    let header = document.getElementById('header');
    let headerWrap = document.querySelector('#header .header_wrap');
    let login = document.querySelector('#header .header_wrap .login');
    let logo = document.querySelector('#header .header_wrap .logo');
    let search = document.querySelector('#header .header_wrap .search');
    let srchSelect = document.querySelector('#header .search .srch_select');
    let srchWord = document.querySelector('#header .search .srch_word');
    let wrap = document.getElementById('wrap');

    // removes unwanted things
    containerWrap.removeChild(aside);
    headerWrap.removeChild(logo);
    headerWrap.removeChild(login);
    eventFire(btnFold, 'click');

    // configure some stuff
    acInput.style.width = '100%';
    autocom.style.left = '1px';
    autocom.style.top = '60px';
    autocom.style.width = '100%';
    bodyTag.style.overflowX = 'hidden';
    container.style.boxSizing = 'border-box';
    container.style.minWidth = '0';
    container.style.padding = '0';
    container.style.paddingTop = '103px';
    container.style.width = '100%';
    containerWrap.style.background = '#fff';
    containerWrap.style.border = '0';
    containerWrap.style.boxSizing = 'border-box';
    containerWrap.style.width = '100%';
    addGlobalStyle('#content { width: 100%; }');
    footer.style.paddingLeft = '0';
    footer.style.paddingRight = '0';
    // header.style.position = 'relative';
    headerWrap.style.height = 'initial';
    headerWrap.style.padding = '10px 20px';
    headerWrap.style.width = '100%';
    headerWrap.style.boxSizing = 'border-box';
    search.style.paddingTop = '0';
    srchSelect.style.height = 'initial';
    srchSelect.style.lineHeight = 'initial';
    srchSelect.style.marginBottom = '8px';
    srchWord.style.width = '100%';
    wrap.style.boxSizing = 'border-box';
    wrap.style.width = '100%';
    wrap.style.minWidth = '0';
})();
