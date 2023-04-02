function addtoexcel(){
    const scriptURL = 'https://script.google.com/macros/s/AKfycbxG1McTYWFoDdCiPOLxrUh0pu_Yn7p_Zc9cOWIPkaEaSp78OVqfchxxU0cqURIds6mG/exec';
    const form = document.forms['contactform'];
  
    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => console.log('Success!', form.reset(), alert("Message Sent. Thank You for reaching!")))
        .catch(error => console.error('Error!', error.message))
    })
  }