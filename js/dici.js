let url = 'https://dicio-api-ten.vercel.app/v2/';

let inputTxt = document.querySelector('#conteiner_inputtxt');
let btnTxt = document.querySelector('#conteiner_btn');
let resultados = document.querySelector('#conteiner_resultado');



btnTxt.addEventListener ('click', ()=> {

    let palavra = inputTxt.value;
    if (palavra === '') {
        resultados.innerHTML = `<h5 class="error1"> Por favor, insira alguma palavra no campo de busca ! :)</h5></p>`
    } else {

        fetch(`${url}${palavra}`)
        .then((resposta) => resposta.json())
        .then((data) => {
        console.log(data)

        resultados.innerHTML = 
        
        `
        <h3 id="conteiner_palavra"> ${palavra}
        <p id="conteiner_resultado" class="r1"><span>1º</span> ${data[0].meanings [0]} </p>
        <p id="conteiner_resultado" class="r1"><span>2º</span> ${data[0].meanings [1]} </p>
        <p id="conteiner_resultado" class="r1"><span>3º</span> ${data[0].meanings [2]} </p>
        <p id="conteiner_resultado" class="r1"><span>4º</span> ${data[0].meanings [3]} </p>
        </h3>
        `

         }).catch (() => {   
                resultados.innerHTML = `<h5 class="error"> Não possivel encontrar está palavra ! :(</h5>`
         })
    }

})


