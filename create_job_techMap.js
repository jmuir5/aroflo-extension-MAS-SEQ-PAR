
window.addEventListener("load", async()=>{
    var onClickSet = false
    var clicked = false
    var postcode = ""
    var latitudeClone = null
    var longitudeClone = null
    var mapViewBtnClone = null
    
    const src = chrome.runtime.getURL("./techTable.js");
    const techLocationsFile = await import(src);
    const techLocations = techLocationsFile.default
    console.log(techLocations)
        
    
    var showMapFunc = async function(){
        document.getElementsByClassName("btnAddUsers")[0].click()
        var listOfTechs = []
        for (const tech in techLocations) {
            if (techLocations[tech].includes(postcode)) listOfTechs.push(tech)
        }
        console.log(listOfTechs)
        if (document.getElementsByClassName("afCard").length == 5) {
            //console.log(document.getElementsByClassName("afCard")[4].childNodes[1].textContent)
            while (document.getElementsByClassName("afCard").length>4) {
                if(document.getElementsByClassName("afCard")[4].childNodes[1].textContent == "Saving ..."){
                    await new Promise(r => setTimeout(r, 10));
                    console.log(":p")
                }
                break
            }

            //console.log(document.getElementsByClassName("afCard")[4].childNodes[1].textContent)
            
        }
        var tables = document.getElementsByClassName("ui-jqgrid-btable")

        while (tables[tables.length-1].children[0].children.length <= 1) {
            await new Promise(r => setTimeout(r, 10));
            console.log("waiting for asign to load")
        }
        var table = tables[tables.length-1].children[0].children
        if (listOfTechs.length == 1) {
            console.log("one techs found")
            for (let i = 0; i < table.length; i++) {

                if (listOfTechs.includes(table[i].children[4].innerText)) {
                    table[i].click()
                    table[i].parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.children[0].children[1].click()


                    break
                }
            }
        } else if (listOfTechs.length > 1) {
            console.log("multiple techs found")
            var index = 1
            console.log(table.length > listOfTechs.length + 1)
            console.log(table.length)
            console.log(listOfTechs.length + 1)
            var done = false
            var mapSkip = false
            while (true) {
                if(table.length==2 || index>=table.length){
                    break
                }
                else if (listOfTechs.includes(table[index].children[4].innerText)) {
                    index += 1
                } else {
                    table[index].remove()
                }
                

            }
            if(table.length == 2){
                console.log("trimmed down to 1 in area")

                table[1].click()
                table[1].parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.children[0].children[1].click()
                mapSkip = true
            }

            if(!mapSkip){
                //map popup code block
                var loc = document.getElementById("tblIMSMain")
                loc.appendChild(latitudeClone)
                loc.appendChild(longitudeClone)
                loc.appendChild(mapViewBtnClone)
                mapViewBtnClone.click()
                var mapBox = document.getElementsByClassName("ui-dialog ui-widget ui-widget-content ui-corner-all ui-draggable ui-resizable")[document.getElementsByClassName("ui-dialog ui-widget ui-widget-content ui-corner-all ui-draggable ui-resizable").length-1]
                mapBox.style.height = '660px'
                mapBox.style.width = '620px'
                mapBox.children[0].children[0].innerText = 'Map'
                mapBox.children[1].children[0].children[0].children[0].children[0].remove()
                var mapArea = mapBox.children[1].children[0].children[0].children[0].children[0].children[0].children[0]
                mapArea.style.height = '600px'
                mapArea.style.width = '600px'

                var techTableBox = table[0].parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement
                var initX = techTableBox.style.left
                var initY = techTableBox.style.top
                mapBox.style.top = techTableBox.style.top
                techTableBox.style.left = String(parseInt(initX)-(parseInt(techTableBox.style.width)/2))+'px'
                mapBox.style.left = String(parseInt(initX)+(parseInt(techTableBox.style.width)/2))+'px'
                while(true){
                    try{
                        var mapButtons = mapBox.children[1].children[0].children[0].children[0].children[0].children[0].children[0].children[0].children[0].children[2]
                        var minusButton = mapButtons.children[12]
                        break
                    }
                    catch(error){
                        await new Promise(r => setTimeout(r, 10));
                        console.log("failed to set map buttons")
                    }
                }
                document.getElementsByClassName("gm-style-iw-a")[0].remove()
                while(true){
                    try{
                        minusButton = minusButton.children[0].children[2].children[0].children[2]
                        break
                    }
                    catch (error){
                        console.log("minus button has no children, reseting minus button")
                        await new Promise(r => setTimeout(r, 10));
                        minusButton = mapButtons.children[12]
                    }
                }

                for(i=0;i<10;i++)minusButton.click()//mapButtons[13].children[0].children[2].children[0].children[2].click()

                loc.removeChild(latitudeClone)
                loc.removeChild(longitudeClone)
                loc.removeChild(mapViewBtnClone)
            }
            
            //end map popup code block
        }
        else { 
            console.log("no techs found") 
            //map popup code block
            var loc = document.getElementById("tblIMSMain")
            loc.appendChild(latitudeClone)
            loc.appendChild(longitudeClone)
            loc.appendChild(mapViewBtnClone)
            mapViewBtnClone.click()
            var mapBox = document.getElementsByClassName("ui-dialog ui-widget ui-widget-content ui-corner-all ui-draggable ui-resizable")[document.getElementsByClassName("ui-dialog ui-widget ui-widget-content ui-corner-all ui-draggable ui-resizable").length-1]
            mapBox.style.height = '660px'
            mapBox.style.width = '620px'
            mapBox.children[0].children[0].innerText = 'Map'
            mapBox.children[1].children[0].children[0].children[0].children[0].remove()
            var mapArea = mapBox.children[1].children[0].children[0].children[0].children[0].children[0].children[0]
            mapArea.style.height = '600px'
            mapArea.style.width = '600px'

            var techTableBox = table[0].parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement
            var initX = techTableBox.style.left
            var initY = techTableBox.style.top
            mapBox.style.top = techTableBox.style.top
            techTableBox.style.left = String(parseInt(initX)-(parseInt(techTableBox.style.width)/2))+'px'
            mapBox.style.left = String(parseInt(initX)+(parseInt(techTableBox.style.width)/2))+'px'
            while(true){
                try{
                    var mapButtons = mapBox.children[1].children[0].children[0].children[0].children[0].children[0].children[0].children[0].children[0].children[2]
                    var minusButton = mapButtons.children[12]
                    document.getElementsByClassName("gm-style-iw-a")[0].remove()
                    break
                }
                catch(error){
                    await new Promise(r => setTimeout(r, 10));
                    console.log("failed to set map buttons")
                }
            }
            
            
            while(true){
                try{
                    minusButton = minusButton.children[0].children[2].children[0].children[2]
                    break
                }
                catch (error){
                    console.log("minus button has no children, reseting minus button")
                    await new Promise(r => setTimeout(r, 10));
                    minusButton = mapButtons.children[12]
                }
            }
            

            for(i=0;i<10;i++)minusButton.click()//mapButtons[13].children[0].children[2].children[0].children[2].click()

            loc.removeChild(latitudeClone)
            loc.removeChild(longitudeClone)
            loc.removeChild(mapViewBtnClone)
            
            //end map popup code block
        }
    }
    
    var buttonBlock = null
    while (document.getElementsByClassName("schedule__btnGroup").length<1) {
        await new Promise(r => setTimeout(r, 10));
        console.log("waiting for button group")
    }
    buttonBlock = document.getElementsByClassName("schedule__btnGroup")[0]

    

    var mapButton = document.createElement('BUTTON')
    var mapText = document.createTextNode("Auto select tech")
    mapButton.appendChild(mapText)
    mapButton.type="button"
    mapButton.id="mapButton"
    mapButton.disabled = "true"
    mapButton.addEventListener("click", function(){showMapFunc()})


    buttonBlock.prepend(mapButton)


    while(true){
        if(document.getElementById("Name")&&!onClickSet){
            onClickSet = true
            mapButton.disabled = false
            document.getElementById("btnOptSaveOrganisation").addEventListener("click", async () => {
                postcode = document.getElementById("postcode").value
                latitudeClone =document.getElementById("gpslat").cloneNode(true)
                longitudeClone =document.getElementById("gpslong").cloneNode(true)
                var buttons = document.getElementsByClassName("afBtn afBtn__fill afBtn--small af-primary")
                for(i=0;i<buttons.length;i++){
                    if(buttons[i].innerHTML=='View on Map'){
                        mapViewBtnClone = buttons[i].cloneNode(true)
                    }
                }
            })
        }
        else if(!document.getElementById("Name")&&onClickSet){
            onClickSet = false
        }
        else{
            await new Promise(r => setTimeout(r, 1000));
        }
    }





})


