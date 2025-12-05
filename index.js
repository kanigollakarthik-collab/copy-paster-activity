const cpy = document.querySelector('.copy');
const paste = document.querySelector('.paste');
const textArea = document.getElementById('beta');
const statusBox = document.querySelector('.status-box');


function showStatus(message) {
    statusBox.textContent = message;
    
   
    statusBox.style.display = 'block';

   
    setTimeout(() => {
 
        statusBox.style.display = 'none';
        statusBox.textContent = '';
    }, 2000);
}


cpy.addEventListener('click', function() {
    const text = textArea.value;
    
    if (!text) {
        showStatus('Nothing to copy!');
        return;
    }

    navigator.clipboard.writeText(text)
        .then(() => {
            showStatus('Copied successfully!');
        })
        .catch(err => {
            showStatus('Failed to copy');
            console.error('Error:', err);
        });
});


paste.addEventListener('click', function() {
    navigator.clipboard.readText()
        .then(text => {
            textArea.value = text;
            showStatus('Pasted from clipboard!');
        })
        .catch(err => {
            showStatus('Permission denied or empty');
            console.error('Failed to read clipboard', err);
        });
});