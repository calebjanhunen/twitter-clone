/***************************************/
/* Making text area automatially increase in height */
/***************************************/
const textArea = document.querySelector('.create-tweet-input');

textArea.addEventListener('input', () => {
    textArea.style.height = '';
    textArea.style.height = textArea.scrollHeight + 'px';
});
