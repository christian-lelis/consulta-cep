function randomCEP(){
    
    function cepBuilder(){
    ceps='';
        for(i=0;i<9;i++){
            if(i==5){
                ceps+='-'
            }
            else if(i==6){
                ceps += Math.floor(Math.random()*9)
            }
            else
            ceps += Math.floor(Math.random()*10)
        }
        return ceps
    }
    const numCeps = 99
    let cepContainer= document.getElementById("pop-cep")
    const delay = 200;

    function colorGen(){
        const letters= "0123456789ABCDEF"
        let colorHex="#"
        for(i=0;i<6;i++){
            colorHex+= letters[Math.floor(Math.random() * 16)];
        }
        return colorHex
    }
    function cepGen(){
        const cepElement = document.createElement("div")
        cepElement.className = "pop-cep"
        cepElement.innerHTML=cepBuilder()
        cepElement.style.color = colorGen();
        cepElement.style.fontWeight= 800
        cepElement.style.top = Math.floor(Math.random()*window.innerHeight)+"px"
        cepElement.style.left = Math.floor(Math.random()*window.innerWidth)+"px"
        cepElement.style.opacity = 0
        cepElement.style.transform = 'scale(.2)'
        cepElement.classList.add("anime")
        cepContainer.appendChild(cepElement)

        setTimeout(()=>{
            cepElement.style.opacity = .6
            cepElement.style.transform = 'scale(1)'
        },100)
        setTimeout(() => {
            cepElement.style.opacity = 0;
            cepElement.classList.remove("anime")
            setTimeout(() => {
                cepContainer.removeChild(cepElement)
            }, 4000)
        }, 3500)
    }
    function animateCEPs(){
        if(cepContainer.childElementCount < numCeps){
            cepGen()
        }
        setTimeout(animateCEPs,delay)
    }
    animateCEPs()
}

randomCEP()