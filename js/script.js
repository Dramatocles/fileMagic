


// Create Namespace to hold Vars
const app = {};

window.document.addEventListener('DOMContentLoaded',function(){
    
    
    setInnitState();

    app.fileInput.addEventListener('change',function(){
            if (app.fileInput.files.length > 0){
                app.fileInputLabel.classList.remove('no-file');
                app.fileInputLabel.classList.add('has-file');
                app.form.removeEventListener('submit', preventSubmit);
            }else {
                app.fileInputLabel.classList.remove('has-file');
                app.fileInputLabel.classList.add('no-file');
                app.form.addEventListener('submit',preventSubmit());
            }

    });
});


function setInnitState(){
    app.fileInput = document.getElementById('file-selector');
    app.fileInputLabel = document.getElementById('file-label');
    app.form = document.querySelector('.upload-form');


    app.form.addEventListener('submit',preventSubmit);
    app.fileInputLabel.classList.add('no-file');
}

function preventSubmit(event){
    event.preventDefault();
    alert('Please Select a file.')
}