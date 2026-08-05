window.addEventListener("load", async()=>{
    while(true){
        while(document.getElementById("showMapBtn")){
            await new Promise(r => setTimeout(r, 100000));
            //console.log("nothing to do")
        }

    
        const nswNorthMap = "https://www.google.com/maps/d/viewer?mid=1p98laK_skx5TC_vrLVvkGUJNzGgBB7s&usp=sharing"
        const waMap = "https://www.google.com/maps/d/viewer?mid=1fCOzq_4GQHeH-FRPfXLC7OjmWVJw81E&usp=sharing"
        const qldMap = "https://www.google.com/maps/d/viewer?mid=1CHaIKj6r5rSRxXMRKHoGs2ks4bNDVMQ&usp=sharing"
        const nswSouthMap = "https://www.google.com/maps/d/viewer?mid=1MGPL27yi4PpaQXo5IdsVB1BNpq5BcAE&usp=sharing"
        const capitalMap = "https://www.google.com/maps/d/viewer?mid=1fuDhIrlakZKGi4WCqEReVAtnT8rX1uk&usp=sharing"
        
        var branch = document.getElementById("imsBUNavigationBtn").innerText

        const showMapButton = document.createElement('BUTTON')

        showMapButton.id = 'showMapBtn'
        showMapButton.classList = "afBtn afBtn__fill af-primary"
        

        let openMapFunction = async function(branch){
            //var branch = document.getElementById("imsBUNavigationBtn").innerText
            var link = nswNorthMap
            switch(true){
                case branch.includes("Premium Appliance Repair"): 
                    link = waMap
                    break
                case branch.includes("SEQ Appliance Repair"): 
                    link = qldMap
                    break
                case branch.includes("south"):
                    link = nswSouthMap
                    break
                case branch.includes("Capital Appliance Service"):
                    link = capitalMap
                    break
            }
            window.open(link, '_blank')
        }

        while(document.getElementsByClassName("fc-header-space").length<1){
            await new Promise(r => setTimeout(r, 10));
            //console.log("nothing to do")
        }
        const headerBlock = document.getElementsByClassName("fc-header-right")[0]
        const spacer = document.getElementsByClassName("fc-header-space")[0].cloneNode()
        if(branch.includes("Premium Appliance Repair")||branch.includes("SEQ Appliance Repair")||branch.includes("Capital Appliance Service")){
            showMapButton.appendChild(document.createTextNode("View Tech Map"))
            headerBlock.insertBefore(spacer.cloneNode(), headerBlock.childNodes[0])
            headerBlock.insertBefore(showMapButton, headerBlock.childNodes[0])
            showMapButton.addEventListener("click", function(){openMapFunction(branch)})
        }
        else{
            console.log(showMapButton)
            let mapButton2 = showMapButton.cloneNode()
            showMapButton.appendChild(document.createTextNode("View North Techs"))
            mapButton2.appendChild(document.createTextNode("View South Techs"))
            
            headerBlock.insertBefore(spacer.cloneNode(), headerBlock.childNodes[0])
            headerBlock.insertBefore(mapButton2, headerBlock.childNodes[0])
            mapButton2.addEventListener("click", function(){openMapFunction("south")})

            headerBlock.insertBefore(spacer.cloneNode(), headerBlock.childNodes[0])
            headerBlock.insertBefore(showMapButton, headerBlock.childNodes[0])
            showMapButton.addEventListener("click", function(){openMapFunction("")})
        }      
    } 
})


