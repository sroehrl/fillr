/*
* LOREM IPSUM - generator
* (c)2019 neoan.us
* https://github.com/sroehrl/fillr
* */

(function(context, document, undefined){
    let loremText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sodales ut eu sem integer vitae. Vitae tortor condimentum lacinia quis vel eros donec ac odio. In massa tempor nec feugiat nisl. Tempor id eu nisl nunc mi ipsum faucibus vitae aliquet. Donec enim diam vulputate ut pharetra sit amet aliquam. Senectus et netus et malesuada fames ac. Turpis egestas integer eget aliquet nibh praesent tristique. Faucibus turpis in eu mi bibendum neque egestas congue. Integer malesuada nunc vel risus commodo viverra maecenas.' +
        'Quis vel eros donec ac odio tempor orci dapibus. In arcu cursus euismod quis. Aenean pharetra magna ac placerat. Mi eget mauris pharetra et ultrices. Malesuada nunc vel risus commodo viverra maecenas. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Nunc sed augue lacus viverra vitae congue eu consequat. Convallis tellus id interdum velit laoreet id donec. Sit amet luctus venenatis lectus magna. Condimentum mattis pellentesque id nibh tortor id aliquet lectus proin. Duis at consectetur lorem donec massa sapien. Feugiat pretium nibh ipsum consequat nisl vel pretium. Morbi tincidunt ornare massa eget egestas purus. Nibh tortor id aliquet lectus proin nibh nisl condimentum id. Aliquam ut porttitor leo a diam sollicitudin tempor id eu. Congue quisque egestas diam in arcu cursus euismod quis viverra. Neque convallis a cras semper auctor neque. Mi eget mauris pharetra et.' +
        'Tristique magna sit amet purus. Vel pretium lectus quam id leo in. Sodales ut eu sem integer vitae justo eget. Facilisis leo vel fringilla est ullamcorper eget nulla. Vivamus arcu felis bibendum ut. Tellus mauris a diam maecenas sed enim ut sem viverra. Venenatis a condimentum vitae sapien pellentesque habitant morbi. Diam maecenas sed enim ut. At erat pellentesque adipiscing commodo elit at imperdiet dui. Ac placerat vestibulum lectus mauris ultrices eros. Odio aenean sed adipiscing diam donec adipiscing tristique risus nec.Duis gravida dui quis purus tincidunt egestas. Cras lacinia, turpis eu ultricies mattis, neque purus finibus massa, vitae varius nulla erat id nisl. Vestibulum justo massa, tincidunt et mi at, ornare finibus tortor. Mauris metus orci, accumsan ac mi a, commodo malesuada purus. Suspendisse convallis convallis ex. Aenean rutrum, magna a dapibus fringilla, tortor lectus aliquet arcu, et ultricies diam arcu et quam. Quisque sodales, ' +
        'quam sit amet rhoncus vulputate, odio quam volutpat nisi, nec rhoncus nisi nisi quis est. Ut varius dolor ut eleifend lacinia. Nullam lobortis dapibus consequat. Nullam pretium nulla dolor, ut pretium nisl semper et. Praesent sollicitudin lacinia nulla sed eleifend.';

    function getLoremText(length){
        let sentences = loremText.split('.');
        let i, returnString = '', start = Math.floor(Math.random()*(sentences.length - length));
        for(i=0;i<length;i++){
            returnString += sentences[start+i]+'.';
        }
        return returnString;
    }

    const functions = ['loop', 'rows'];
    let xpath = "//*[text()[contains(.,'{{lorem') or contains(.,'\[\[lorem')] or contains(.,'\[\[LOREM')] or contains(.,'{{\[\[LOREM')]]";
    let matchingElements;

    function getLoremNodes(){
        return document.evaluate(xpath, document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
    }

    function next(){
        matchingElements = getLoremNodes();
        for(let i = 0;i<matchingElements.snapshotLength;i++){
            functions.forEach(fu => {
                let hit = finder(fu,matchingElements.snapshotItem(i));
                if(hit){
                    this[fu](matchingElements.snapshotItem(i),hit)
                }

            });
        }
    }
    function final(){
        matchingElements = getLoremNodes();
        let estimate;
        for(let i = 0;i<matchingElements.snapshotLength;i++){
            estimate = Math.round((matchingElements.snapshotItem(i).clientWidth/500));
            matchingElements.snapshotItem(i).innerText.replace(/({{lorem}}|\[\[lorem\]\])/g,(match)=>{
                matchingElements.snapshotItem(i).innerText = matchingElements.snapshotItem(i).innerText.replace(/({{lorem}}|\[\[lorem\]\])/,getLoremText(estimate))
            });
        }
    }

    this.loop = function(node, findings){
        Array.from(Array(Number(findings[1])-1)).map(() => node.parentNode.append(node.cloneNode(true)));
        next();
    };

    this.rows = function(node, findings){
        let copy = node.innerText;
        Array.from(Array(Number(findings[1])-1)).map(() => node.innerText += "\n"+copy);
        next();
    };

    function finder(func, node){
        let finder = new RegExp('\\.'+func+'\\((\\d)\\)');
        let hit = node.innerText.match(finder);
        if(hit){
            node.innerText = node.innerText.replace(finder,'');
        }
        return hit;
    }
    document.addEventListener('DOMContentLoaded', _ =>{
        next();
        final();
    }, false);

})(window, document);


