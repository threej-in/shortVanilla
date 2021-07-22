/**
 * @param {string} msg - Message to print on console
 */
function log(msg) {
    console.log(msg);
}
/**
 * captures id, class or tag in the document
 * @param {string} selector 
 * @return {object} object or reference to the element
 */
function $(selector){
    let regex = new RegExp(/^#/);
    if(regex.test(selector)){
        return document.getElementById(selector.slice(1));
    }
    regex = new RegExp(/^\./);
    if(regex.test(selector)){
        return document.getElementsByClassName(selector.slice(1));
    }
    return document.getElementsByTagName(selector);
}
/**
 * short form for Document Query selector
 * @param {string} selector 
 */
function $$(selector, all = 0){
    if(all === 0)
        return document.querySelector(selector);
    else
        return document.querySelectorAll(selector);
}
/**
 * Insert new spanor div element after an existing element
 * @param {string} newNode span|div
 * @param {Node} el reference to existing element
 * return reference to new element
 */
function insertAfter(newNode, el) {
    
    if(newNode === 'span'){
        var newNodeEl = document.createElement("span");
    }else{
        var newNodeEl = document.createElement("div");
    }
    
    return el.parentNode.insertBefore(newNodeEl, el.nextSibling);
}
/**
 * Checks if variable is set
 * @returns integer
 */
function isset(el) {
    return el === 'undefined' ? 0 : (el == null ? 0 : 1);
}
/**
 * 
 * @param {string} event - click, mouseover, mouseout, mousedown, mouseup, mousemove, keyup, keydown, focus, submit, blur, change, load, unload, resize
 * @param {*} element - 
 * @param {*} listener - 
 * @param {*} propagation 
 * @returns 
 */
function on(event, element, listener, propagation=false){
    return element.addEventListener(event,listener,propagation);
}
function off(event, element, listener){
    return element.removeEventListener(event,listener);
}
function simulateClick(id){
    document.getElementById(id).click();
}
function ajaxHandler(path, method='GET', formdata='', ajaxResultHandler){
    const ajax = new XMLHttpRequest();

    if(!ajax){
        log("unable to initiate ajax object!");
        ajaxResultHandler(-1, -1);
    }
    ajax.onreadystatechange = function(){
        if(this.readyState == 4){
            if(this.status == 200){
                //log(this.response)
                ajaxResultHandler(this.response, 0);
            }else{
                ajaxResultHandler(-1, this.status);
            }
        }
    }
    ajax.open(method, path);
    ajax.send(formdata);
    
}
function kformater($number){
    if(typeof($number)!== 'number'){
        return -1;
    }
    $formated_num = $number;
    let $format = [{v:1,s:''},{v:1E3,s:'K'},{v:1E6,s:'M'},{v:1E9,s:'B'},{v:1E12,s:'T'}];
    let $j=4;
    while(1){
      if($number>=$format[$j].v){
        $formated_num = ($number/$format[$j].v).toFixed(1)+$format[$j].s;
        break;
      }
      if($j<=0){break;}$j--;
    }
    return $formated_num;
}
function addRow(data, tableId, rowAttributes, position = 0){
    let newRow = '<tr '+rowAttributes+'>';
    data.forEach(el => {
        newRow += '<td>'+el+'</td>';
    });
    newRow += '</tr>';

    if(position!=0){
        $$('#'+tableId+'>tbody>tr',1)[(position-2)].outerHTML += newRow;
    }else{
        $('#'+tableId).innerHTML += newRow;
    }
}
function escapeHTML(str) {
    return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}
/**
 * 
 * @param {string} name - cookie name
 * @param {string} value - cookie value
 * @param {integer} expiryInDays - lifetime of cookie in days
 * @param {string} path - location
 */
function setCookie(name , value , expiryInDays=0, path='/') {
    var expire = new Date();
    expire.setTime(expire.getTime() + 3600000 * 24 *expiryInDays);
    if(expiryInDays == 0)
        document.cookie = `${name}=${value}; path=${path}`;
    else
        document.cookie = `${name}=${value}; expires=${expire.toGMTString()}; path=${path}`;
}
function parseUrlQuery(url){
    var query = [];
    url.substring(url.indexOf('?')+1).split('&').
        forEach(el=>{
            var split = el.split('=');
            query[split[0]] = split[1];
        });
    return query;
}
function changeCssProperty(tagname, property, value){
    $(tagname)[0].style.setProperty(property, value);
}