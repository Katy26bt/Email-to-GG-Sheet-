const scriptURL = 'https://script.google.com/macros/s/AKfycbyHrJhqML17Ao3F6jITFdxt5cFm18ICOyeUCGcCa8QJ2bZv4blsZecxYabQV2FQO19p/exec';
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById("msg");

  form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Thank You For Subscribing!"
        setTimeout(function(){
            msg.innerHTML = "";
        },5000);
        form.reset();
      })
      .catch(error => console.error('Error!', error.message))
  })