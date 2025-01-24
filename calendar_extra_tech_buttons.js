let highlightedLabel = "MasExtHl"

window.addEventListener("load", async()=>{
    const style = document.createElement('style')
    style.innerHTML = `
            .`+highlightedLabel+` {
                background: yellow;
            }
            `
    document.head.appendChild(style)
    

    while(true){
        while(document.getElementsByClassName("quickBar qbNoClose qb_firefox_fix").length==0){
            await new Promise(r => setTimeout(r, 10));
            //console.log("no bar present")
        }
        while(document.getElementById("nextAvailableButton")){
            await new Promise(r => setTimeout(r, 10));
            //console.log("jobs done")
        }
        
        try{
            let techQuickBar = document.getElementsByClassName("quickBar qbNoClose qb_firefox_fix")[0]
            var techName = String(techQuickBar.parentElement.title)
            var checkedState = techQuickBar.parentElement.classList.contains(highlightedLabel)

            const nextAvailableButton = document.createElement('BUTTON')

            nextAvailableButton.id = 'nextAvailableButton'
            nextAvailableButton.classList = "afBtn afBtn__fill af-primary afBtn--small qbNoClose handCursor nextAvail"
            nextAvailableButton.appendChild(document.createTextNode("->"))

            nextAvailableButton.addEventListener("click", function(){findNextAvailableFunc(techName)})

            const highlightTechButton = document.createElement('BUTTON')

            highlightTechButton.id = 'highlightTechButton'
            highlightTechButton.classList = "afBtn afBtn__fill af-primary afBtn--small qbNoClose handCursor highlight"
            
            let checkbox = document.createTextNode("☐")
            if(checkedState){
                checkbox.textContent = "☑"
            }

            highlightTechButton.appendChild(checkbox)
            highlightTechButton.addEventListener("click", function(){toggleHighlightFunc(techQuickBar.parentElement, checkbox)})
            
            techQuickBar.appendChild(nextAvailableButton)
            techQuickBar.appendChild(highlightTechButton)


            await new Promise(r => setTimeout(r, 100));
        } catch (error) {
            console.log(error)
            await new Promise(r => setTimeout(r, 10));

        }



    }
})

let findNextAvailableFunc = async function(techName){
    console.log("finding next available appointment for " + techName)
    var resetTrigger = true
    dayloop:
    while(true){
        document.getElementsByClassName("afBtn afBtn__fill af-primary fc-button-next ui")[0].click()
        while(!document.getElementById("dlgcalgenLastRefresh").innerText.includes("Last Refresh")||resetTrigger){
            await new Promise(r => setTimeout(r, 100));
            console.log("waiting for jobs to load, string = "+document.getElementById("dlgcalgenLastRefresh").innerText.includes("Last Refresh") + " trigger = "+ resetTrigger)
            if(document.getElementsByClassName("aagBox").length>0){
                resetTrigger = false
            }
        }

        resetTrigger = true

        var boxes = document.getElementsByClassName("aagBox")
        for(let i=0;i<boxes.length;i++){
            console.log(techName.replace(" ","."))
            console.log(boxes[i].children[3].classList)

            console.log(boxes[i].children[3].style.color)
            if(boxes[i].classList.contains(techName.replaceAll(" ","."))){
                console.log("box found")
                console.log(boxes[i].children[3].style.color)
                if(boxes[i].children[4].style.color=="blue"){
                    console.log("found next available appointment for " + techName)

                    return
                }
                else continue dayloop
            }
            else continue
        }
        console.log("no box found")
        return

    }
}

let toggleHighlightFunc = async function(node, checkbox){
    if(node.classList.contains(highlightedLabel)){
        node.classList.remove(highlightedLabel)
        checkbox.textContent = "☐"

    }
    else {
        node.classList.add(highlightedLabel)
        checkbox.textContent = "☑"
    }

}