const facts = document.querySelector('.facts');
const button = document.querySelector('.button');

button.addEventListener("click", getFacts);

function getFacts(){
    fetch("https://catfact.ninja/fact?max_length=140")
    .then(res => res.json())
    .then(data => { 
        facts.innerHTML = data.fact;
        

    })
    
}
getFacts();


