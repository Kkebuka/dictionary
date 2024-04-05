class UI {
    constructor() {
        this.word = document.getElementById('new-word');
        this.audio = document.getElementById('audio');
        this.phonetic = document.getElementById('phonetic');
        this.definition1 = document.getElementById('definition');
        this.example = document.getElementById('example');
        this.link = document.getElementById('sound');
    }



    paintUI(dicWord) {
        
        let triall = dicWord
        // console.log(triall, 'check') 
        this.word.textContent = `Word: ${dicWord[0].word}`;
        
        this.audio.classList.add('fa-solid', 'fa-volume-high');
        console.log(triall, 'check')
        console.log(dicWord[0].phonetics)
        this.link.setAttribute('src', dicWord?.[0]?.phonetics?.[0]?.audio);
        
        this.phonetic.textContent = `Phonetic: ${dicWord[0].phonetic}`;

        let allDef = dicWord[0].meanings[0].definitions
           
        

        console.log(allDef)
        
        let output = '';
        allDef.forEach((def, index) => {
          
            if(!def.definition || !def.example) {
                // console.log('first')
                output += `<p>Meaning${index} : ${def.definition}</p>`;
                console.log(`${index} : ${def.example}`)
            } else{
                // console.log('second')
                output += `<p>${index} : ${def.definition}. Example: ${def.example}</p>`;
                console.log(`${index} : ${def.example}`)
            }
            
            

        })
        this.definition1.innerHTML = output
        
        console.log(this.link)
       
    }

    clearText() {
        document.querySelector('#search').value = ''
     }  

    playSound() {
        this.link.play();
     }

}

