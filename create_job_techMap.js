
window.addEventListener("load", async()=>{
    var onClickSet = false
    var clicked = false
    var postcode = ""
    var latitudeClone = null
    var longitudeClone = null
    var mapViewBtnClone = null
    
    let techSrc = chrome.runtime.getURL("./techTable.js");
    let techLocationsFile = await import(techSrc);
    let techLocations = techLocationsFile.default
    let suburbSrc = chrome.runtime.getURL("./suburbTable.js");
    let suburbTableFile = await import(suburbSrc);
    let suburbTable = suburbTableFile.default

    var tonyFilteredAppliances = ["fridges", "fridge", "freezer"]
    var tonyRegex = new RegExp( tonyFilteredAppliances.join( "|" ), "i");
    var otherStateTechs =  ["Phil", "Ozgur", "Matt"]

    
    var cleanupFunc = async function(calendarBox, mapBox, techTableBox){
        while (document.getElementsByClassName("schedResource afDataTable__row--non-hover").length==0) {
            await new Promise(r => setTimeout(r, 100));
            console.log("waiting for searchbox")
        }

        console.log(calendarBox)
        console.log(mapBox)
        console.log(techTableBox)

        try{
            var rect = document.getElementsByClassName("imsMultiSchedule__schedule")[0].getBoundingClientRect()
            calendarBox.style.top = Math.floor(rect.top)+window.scrollY + "px"
            calendarBox.style.left = Math.floor(rect.left)-parseInt(calendarBox.style.width)+"px"
        } catch(e){
            console.log("calendar failed")
        }
        try{
            mapBox.getElementsByClassName("ui-dialog-titlebar-close ui-corner-all")[0].click()
        } catch(e){
            console.log("map failed")
        }
        try{
            techTableBox.getElementsByClassName("ui-dialog-titlebar-close ui-corner-all")[0].click()
        } catch(e){
            console.log("tech table failed")
        }

    }
    
    var getPostcodeFromAddress = function(){
        const address = document.getElementById("wrname").value
        var addressArr = address.split(" ");
        var target = ""
        for(i=1; i<=addressArr.length; i++){
            target = (addressArr[addressArr.length-i] + " " + target).trim()
            console.log("trying: " + target)

            for (const pc in suburbTable) {
                if (suburbTable[pc].includes(target.toUpperCase())) {
                    postcode = pc
                    console.log("done - success")
                    return

                }
            }
        }
        console.log("done - fail")

    }

    var showCalendarFunc = async function(){
        //calendar
        document.getElementById("btnAssignResources").click()
        var calendarBox = document.getElementsByClassName("ui-dialog ui-widget ui-widget-content ui-corner-all ui-draggable ui-resizable")[document.getElementsByClassName("ui-dialog ui-widget ui-widget-content ui-corner-all ui-draggable ui-resizable").length-1]
        //calendarBox.getElementsByClassName("ui-dialog-title")[0].innerText = "Calendar"
        calendarBox.style.height = '660px'
        calendarBox.style.width = '620px'
        var calendarRoot = calendarBox.getElementsByClassName("afContainerImstree")[0].parentElement
        calendarBox.getElementsByClassName("afContainerImstree")[0].remove()
        var ifrm = document.createElement("iframe");
        ifrm.id = "calendarIframe"
        ifrm.setAttribute("src", "https://office.aroflo.com/ims/Site/Calendar/index.cfm?viewfullcalendar=1&tid=IMS.CAL");
        ifrm.style.width = "600px";
        ifrm.style.height = "600px";
        var rect = document.getElementsByClassName("imsMultiSchedule__schedule")[0].getBoundingClientRect()
        calendarBox.style.top = Math.floor(rect.top)+window.scrollY + "px"
        calendarBox.style.left = Math.floor(rect.left)-parseInt(calendarBox.style.width)+"px"

        calendarRoot.appendChild(ifrm);
        
        while (!ifrm.contentDocument.getElementById("searchBox")) {
            await new Promise(r => setTimeout(r, 10));
            console.log("waiting for searchbox")
        }
        calendarBox.getElementsByClassName("ui-dialog-title")[0].innerText = "Calendar"

        //ifrm.contentDocument.getElementsByClassName("afHeader--js afHeader aroflo-line ")[0].textContent = '';
        ifrm.contentDocument.getElementsByClassName("afBtnGroup")[4].style.display = 'none';
        ifrm.contentDocument.getElementsByClassName("afBtnGroup")[3].style.display = 'none';
        ifrm.contentDocument.getElementsByClassName("afBtnGroup")[2].style.display = 'none';
        ifrm.contentDocument.getElementsByClassName("afBtnGroup")[0].style.display = 'none';
        ifrm.contentDocument.getElementById("dlgcalgen").style.display = 'none';
        ifrm.contentDocument.getElementById("btnCalendarQuickAction").style.display = 'none';


        //READ ONLY OVERLAY
        const target = ifrm.contentDocument.getElementsByClassName("fc-view fc-view-basicDayByResource fc-grid")[0]
        const wrapper = document.createElement('div');
        const overlay = document.createElement('div');

        wrapper.style.position = 'relative';
        wrapper.style.display = 'inline-block';

        overlay.style.position = 'absolute';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.width = '100%';
        overlay.style.height = '100%';
        overlay.style.zIndex = '10'; 
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0)'; 
        overlay.innerText = 'Read only';
        
        target.parentNode.insertBefore(wrapper, target); 
        wrapper.appendChild(target);                    
        wrapper.appendChild(overlay);


        if(postcode==""){
            getPostcodeFromAddress()

            
        }
        if(!postcode==""){
            ifrm.contentDocument.getElementById("searchBox").value = postcode
            ifrm.contentDocument.getElementById("searchBtn").click()
        }

        //document.getElementsByClassName("afBtnGroup")[0].remove()
        //calendarBox.style.top = String(parseInt(initY)+660)+'px'
    }

    var mapFunc = async function(){
        if(!(mapViewBtnClone==null)){
            console.log("showing map")
            var loc = document.getElementById("tblIMSMain")
            loc.appendChild(latitudeClone)
            loc.appendChild(longitudeClone)
            loc.appendChild(mapViewBtnClone)
            mapViewBtnClone.click()
            var mapBox = document.getElementsByClassName("ui-dialog ui-widget ui-widget-content ui-corner-all ui-draggable ui-resizable")[document.getElementsByClassName("ui-dialog ui-widget ui-widget-content ui-corner-all ui-draggable ui-resizable").length-1]
            console.log(mapBox)
            mapBox.style.height = '660px'
            mapBox.style.width = '620px'
            mapBox.children[0].children[0].innerText = 'Map'
            mapBox.children[1].children[0].children[0].children[0].children[0].remove()
            var mapArea = mapBox.children[1].children[0].children[0].children[0].children[0].children[0].children[0]
            mapArea.style.height = '600px'
            mapArea.style.width = '600px'

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
                    minusButton = minusButton.children[0].children[1].children[1].children[5].children[0]
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


    }
    
    var showMapFunc = async function(){
        if(postcode==""){
            getPostcodeFromAddress()
        }
        if(postcode==""){
            alert("can not identify location.")
            return
            //getPostcodeFromAddress()
        }
        document.getElementsByClassName("btnAddUsers")[0].click()
        var listOfTechs = []
        for (const tech in techLocations) {
            if (techLocations[tech].includes(postcode)) listOfTechs.push(tech)
        }
        if(tonyRegex.test(document.getElementById("assetName").value)){
            if(listOfTechs.includes("Tony Scalone")&& listOfTechs.includes("Peter Traish")){
                listOfTechs = ["Tony Scalone", "Peter Traish"]
            }
            else if(listOfTechs.includes("Carlos Moreno")){
                listOfTechs = ["Carlos Moreno"]
            }
            else if(listOfTechs.includes("Tony Scalone")){
                listOfTechs = ["Tony Scalone"]
            }
            else if(listOfTechs.includes("Peter Traish")){
                listOfTechs = ["Peter Traish"]
            }
        }
        else{
            if(listOfTechs.includes("Tony Scalone")||listOfTechs.includes("Carlos Moreno")){
                listOfTechs =  listOfTechs.filter(item => item !== "Tony Scalone" && item !== "Carlos Moreno")
            }
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

                if (listOfTechs.includes(table[i].children[5].innerText+" "+table[i].children[6].innerText)) {
                    table[i].click()
                    table[i].parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.children[0].children[1].click()
                    break
                }
            }
        } else {
            if(listOfTechs.length == 0){
                console.log("no techs found") 
                alert("No Technicians found for this area")
            }
            else if (listOfTechs.length > 1){
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
                    else if (listOfTechs.includes(table[index].children[5].innerText+" "+table[index].children[6].innerText)) {
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

            }

            if(!mapSkip){
                mapFunc()
            }
            document.getElementById("calendarPopButton").click()
            var calendarBox = document.createElement('DIV')
            calendarBox.style.width = "0px"
            var mapBox = document.createElement('DIV')
            mapBox.style.width = "0px"
            var techTableBox = document.createElement('DIV')
            techTableBox.style.width = "0px"
            var boxes = document.getElementsByClassName("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix")
            for (let box of boxes){
                if (box.innerText.includes("Resources")) calendarBox = box.parentElement
                else if (box.innerText.includes("Map")) mapBox = box.parentElement
                else techTableBox = box.parentElement
            }

            var initX = techTableBox.style.left
            var initY = techTableBox.style.top
            var cbw = 0
            if(parseInt(calendarBox.style.width)>0)cbw = 600
            var totalWidth = cbw +  parseInt(mapBox.style.width)
            mapBox.style.top = techTableBox.style.top
            calendarBox.style.top = techTableBox.style.top
            
            calendarBox.style.left = String(parseInt(initX)-(totalWidth/2))+'px'
            techTableBox.style.left = String(parseInt(initX)-(totalWidth/2)+cbw)+'px'
            mapBox.style.left = String(parseInt(initX)-(totalWidth/2)+cbw+parseInt(techTableBox.style.width))+'px'

            cleanupFunc(calendarBox, mapBox, techTableBox)
        }
    }
    
    while (document.getElementsByClassName("schedule__btnGroup").length<1) {
        await new Promise(r => setTimeout(r, 10));
        console.log("waiting for button group")
    }
    var buttonBlock = document.getElementsByClassName("schedule__btnGroup")[0]

    

    var mapButton = document.createElement('BUTTON')
    var mapText = document.createTextNode("Auto select tech")
    mapButton.appendChild(mapText)
    mapButton.type="button"
    mapButton.id="mapButton"
    //mapButton.disabled = "true"
    mapButton.addEventListener("click", function(){showMapFunc()})

    var calendarPopButton = document.createElement('BUTTON')
    var calendarText = document.createTextNode("Pop calendar")
    calendarPopButton.appendChild(calendarText)
    calendarPopButton.type="button"
    calendarPopButton.id="calendarPopButton"
    calendarPopButton.addEventListener("click", function(){showCalendarFunc()})

    buttonBlock.prepend(calendarPopButton)
    buttonBlock.prepend(mapButton)


    while(true){
        //console.log("last loop?")
        if(document.getElementById("Name")&&!onClickSet){
            onClickSet = true
            //mapButton.disabled = false
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
        if(document.getElementById("SiteContact")&&!onClickSet){
            onClickSet = true
            mapButton.disabled = false
            document.getElementById("btnOptSaveLocation").addEventListener("click", async () => {
                postcode = document.getElementById("postcode").value
                //latitudeClone =document.getElementById("gpslat").cloneNode(true)
                //longitudeClone =document.getElementById("gpslong").cloneNode(true)
                //var buttons = document.getElementsByClassName("afBtn afBtn__fill afBtn--small af-primary")
                //for(i=0;i<buttons.length;i++){
                //    if(buttons[i].innerHTML=='View on Map'){
                //        buttons[i].click()
                //        mapViewBtnClone = buttons[i].cloneNode(true)
                        //mapViewBtnClone = structuredClone(buttons[i])//.cloneNode(true)
                //    }
                //}
            })
        }
        else if(!(document.getElementById("Name")||document.getElementById("SiteContact"))&&onClickSet){
            onClickSet = false
        }
        else{
            await new Promise(r => setTimeout(r, 1000));
        }
    }





})


