
document.querySelector('button').addEventListener('click', function() {
    fetch("https://api.adviceslip.com/advice")
    .then(response => {
        return response.json();
    })
    .then(data => {
        document.querySelector('.advice-id').innerHTML = data.slip.id;
        document.querySelector('.advice-text').innerHTML = `"${data.slip.advice}"`;
    })
})