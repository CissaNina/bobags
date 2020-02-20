let text = document.querySelector('.item_list--text')

function showInfo(){
    if (text.style.display === ''){
        text.style.display = 'flex'
        text.style.height = '20vh'
        text.style.opacity = '1'
        // text.style.transition = 'height 1s'
        text.style.transition = 'opacity 1s'
    }
    else {
        text.style.display = ''
        text.style.height = '0vh'
        // text.style.transition = 'height 1s'
        text.style.transition = 'opacity 0s'
        text.style.opacity = '0'
        
    }
}