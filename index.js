const cpy = document.querySelector('.copy');
const paste = document.querySelector('.paste');
const textArea = document.getElementById('beta');
const statusBox = document.querySelector('.status-box');


function showStatus(message) {
    statusBox.textContent = message;
    
   
    statusBox.style.visibility = 'visible';

   
    setTimeout(() => {
 
        statusBox.style.visibility = 'hidden';
        statusBox.textContent = '';
    }, 3000);
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
          
        });
});


paste.addEventListener('click', function() {
    navigator.clipboard.readText()
        .then(text => {
            textArea.value = text;
            showStatus('Pasted from clipboard!');
        })
        .catch(err => {
            showStatus('Failed to paste');
        
        });
});
