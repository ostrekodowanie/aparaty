const options = {
    method: 'GET'
}

fetch('https://djangorestapidivide.herokuapp.com/users/api', options)
    .then(response => console.log(response))