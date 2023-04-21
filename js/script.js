let cep= document.getElementById("CEP");
let resposta = document.getElementsByTagName("span")
let info = document.getElementById("info");

cep.addEventListener("input", function(e){
    cep.value=cep.value.replace(/\D/g,'')
    if(cep.value.length === 8){
        let cep=e.target.value
        const script = document.createElement('script')
        script.src= 'https://viacep.com.br/ws/'+cep+'/json/?callback=popularForm';
        document.body.appendChild(script)
    }
    else if (cep.value.length <8){
        taping()
    } else{
        cep.value = cep.value.slice(0,8)
    }
})

function taping(){
    info.classList.remove('infoView')
}

function popularForm(r){
    if(r == "erro"){
        alert("É permitido apenas numero e no máximo 8.")
    }
    info.classList.add('infoView')
    resposta[0].innerText=r.logradouro
    resposta[1].innerText=r.bairro
    resposta[2].innerText=r.localidade
    resposta[3].innerText=r.uf
    resposta[4].innerText=r.ddd

}