const dictionary = new Dictionary
const ui = new UI

const search = document.querySelector('#search');



search.addEventListener('click', (e) => {
        dictionary.getmeaning()
        .then(data => {
            console.log(data)
            ui.paintUI(data)
        })
        .catch(err => err)
        // ui.clearText()
        e.preventDefault()
})








const sound = document.querySelector('.play').addEventListener('click', () => ui.playSound())
