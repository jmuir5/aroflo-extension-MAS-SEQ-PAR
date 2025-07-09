//quote confirmation buttons
window.addEventListener('load', async() => {
    //confirmation buttons
    while(!document.getElementsByClassName("afNoteWidget__header margin-top--2")[0]){
        await new Promise(r => setTimeout(r, 10));
    }
    const noteBar = document.getElementsByClassName("afNoteWidget__header margin-top--2")[0]
    var confContainerDiv = document.createElement('DIV')
    var confButton = document.createElement('BUTTON')
    confButton.appendChild(document.createTextNode("Quote confirmed"))
    confButton.type="button"
    confButton.id="confButton"
    confButton.classList = "afBtn afBtn--small afBtn__fill af-primary margin-right--1 headerItemSpacing"

    noteBar.children[0].after(confContainerDiv)
    confContainerDiv.appendChild(confButton)
    
    const confText = "quote confirmed via customer contact(phone/email)"
    var event = new Event('change', {
        bubbles: true,
        cancelable: true,
    });
      

    var confFunction = function(){
        document.getElementById("btnAddNoteText").click()
        document.getElementById("thisnote").value = confText
        document.getElementById("selectedQuoteStatus").value=2
        document.getElementById("selectedQuoteStatus").dispatchEvent(event)
        document.getElementById("selectedAcceptanceStatus").value = 2
        if(document.getElementById("savequote"))document.getElementById("savequote").click()
        if(document.getElementById("saveQuoteStatus"))document.getElementById("saveQuoteStatus").click()
    }

    confButton.addEventListener("click", function(){confFunction()})
})
    
