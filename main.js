var button_items = document.querySelectorAll('.tab-items .item button');
var tab_contents = document.querySelector('.tab-contents');
var line = document.querySelector('.line');
var pos = 0;

function setting(index,value) {
    button_items.forEach((value,index)=>{
        value.style.border = '0px';
        value.style.opacity = '0.6';
    });
    value.style.opacity = '1.0';
    tab_contents.querySelector('.active').classList.remove('active');
    tab_contents.querySelectorAll('.content')[index].classList.add('active');
    line.style.width = value.offsetWidth + 'px';
    line.style.left = value.offsetLeft + 'px';
    pos = index;
}
setting(pos,button_items[0]);

button_items.forEach(function(value,index){
    value.addEventListener('click',()=>{
        setting(index,value);
    });
});

document.addEventListener('keydown', function(event) {
    if(event.keyCode == 37) {
        if(pos > 0) {
            setting(--pos,button_items[pos]);
        }
    }
    else if(event.keyCode == 39) {
        if(pos < button_items.length-1) {
            setting(++pos,button_items[pos]);
        }
    }
});