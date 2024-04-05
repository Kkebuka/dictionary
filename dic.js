class Dictionary {
    constructor() {
    }

    async getmeaning() {
        this.word = document.querySelector('#word').value ;

        console.log(this.word)
        if(this.word !== ''){
            const responseData = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${this.word}`)

            const response = await responseData.json();
            return response;
        }else {
            alert('input a text')
        }
    }
}