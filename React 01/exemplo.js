document.body.onload = addElement()
function addElement(){
    const meuElemento = document.createElement("div")
    const textNode = document.createTextNode("Esse é o conteúdo da div")
   
    meuElemento.appendChild(textNode)
    document.body.insertBefore(meuElemento,mainContent )

}
