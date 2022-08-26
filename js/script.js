const textArea = document.querySelector('.create-tweet-input');

textArea.addEventListener('input', () => {
    textArea.style.height = 'auto';
    textArea.style.height = textArea.scrollHeight + 'px';
});
