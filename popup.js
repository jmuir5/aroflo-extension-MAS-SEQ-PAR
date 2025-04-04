import suburbTable from "./suburbTable.js"
import techLocations from "./techTable.js"
import sendBookingText from "./sendBookingText.js"
//import {importData, techLocations} from "./bulkimport.js"
let importBtn = document.getElementById("importBtn")
var emailSmsBtn = document.getElementById("emailSmsBtn")
var emailBtn = document.getElementById("emailBtn")
var smsBtn = document.getElementById("smsClientBtn")
//var smsBtn1 = document.getElementById("smsBtn1")
var invoiceBtn = document.getElementById("invoiceBtn")
var invoiceBtn2 = document.getElementById("invoiceBtn2")
var invoiceBtn3 = document.getElementById("invoiceBtn3")
//var bulkImportBtn = document.getElementById("bulkImportBtn")
//var bulkTextArea = document.getElementById("bulkTextArea")
//var bulkInfoText = document.getElementById("bulkInfoText")
var resetFlagsBtn = document.getElementById("resetBtn2")
//button.addEventListener("click", test)
var textArea = document.getElementById("textArea")
var infoText = document.getElementById("infoText")
var buyPriceBox = document.getElementById("buyPriceBox")
var mielePriceBox = document.getElementById("mielePriceBox")
var fieldPriceBox = document.getElementById("fieldPriceBox")
var suburbBox = document.getElementById("suburbBox")
var suburbSearchBtn = document.getElementById("suburbSearchBtn")
var postcodeBox = document.getElementById("postcodeBox")
var postcodeSearchBtn = document.getElementById("postcodeSearchBtn")
var techBox = document.getElementById("techBox")

var massArchiveBtn = document.getElementById("massArchiveBtn")
var massArchiveResetBtn = document.getElementById("massArchiveResetBtn")


var input = []
var dict = {
    "Clothes Dryers": "258",
    "Cooktops": "-1",
    "Dishwashers": "260",
    "Fridges": "261",
    "Microwaves": "262",
    "Ovens": "623",
    "Range Hoods": "268",
    "Washing Machines": "265",
    "Other": "271",
    "": "271"
}

textArea.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault()
        document.getElementById("importBtn").click()
    }
})

function test() {
    var string = textArea.value
    input = string.split("\n")
    infoText.value = "text parsed, ready to fill client"
    console.log(input);

}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

importBtn.addEventListener("click", async () => {
    let inputtag = document.querySelector("#textArea").value.split("\n");

    let headerFlag = true
    let inputTag2 = document.querySelector("#textArea").value.split("\n");

    for (let index = 0; index < inputTag2.length; index++) {
        const element = inputTag2[index];
        if(headerFlag&&!element.includes('*')) {
            inputTag2.splice(0,1)
            index--
        
        }
        else{
            if(element.includes('*')){
                headerFlag=false
            } 
            
            if(element.includes('\t')){
                inputTag2[index] = element.split("\t")[1]
            } 
            
        }
        
    }
      
    
    console.log("trying")
    console.log(inputtag)
    console.log(inputTag2)

    if (inputTag2.length>3){ 
        console.log("size>3")
        inputTag2.splice(3,0, "")
        inputtag = inputTag2
    }
    

    console.log(inputtag)

    //phone number validation
    if (inputtag[4].startsWith("+61")) {
        inputtag[4] = inputtag[4].replace('+61', '0');
    }
    if (inputtag[4].startsWith("61")) {
        inputtag[4] = inputtag[4].replace('61', '0');
    }
    
    while (inputtag[4].includes(" ")) {
        inputtag[4] = inputtag[4].replace(' ', '');
    }
    if (!inputtag[4].startsWith("0") && inputtag[4].length==9) {
        inputtag[4] = "0"+inputtag[4];
    }
    if (!/^[0-9]+$/.test(inputtag[4])) {
        document.querySelector("#textArea").value = "something is wrong with the phone number: Not a Number"
        console.log(inputtag[4])
        return
    }
    if (inputtag[4].length != 10) {
        document.querySelector("#textArea").value = "something is wrong with the phone number: wrong length"
        console.log(inputtag[4])
        return
    }

    inputtag =  inputtag.map(s => s.trim());
    //inputtag = trimmedInput
    chrome.storage.sync.set({ inputtag: inputtag });

    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    window.close()

    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: importData,
        args: [techLocations, -1]
    });



});

function importData(techLocations, index23) {
    console.log("started successfully")
    console.log(techLocations)

    var searchPostcode2 = async function (postcode) {
        while (techBox.childNodes.length > 0) { techBox.childNodes[0].remove() }
        var listOfTechs = []
        for (const tech in techLocations) {
            if (techLocations[tech].includes(postcode)) listOfTechs.push(tech)
        }
        if (listOfTechs.length == 0) alert("postcode " + postcode + " not assigned to any technicians, may be out of area")
    }

    function simulateMouseClick(targetNode) {
        function triggerMouseEvent(targetNode, eventType) {
            var clickEvent = document.createEvent('MouseEvents');
            clickEvent.initEvent(eventType, true, true);
            targetNode.dispatchEvent(clickEvent);
        }
        ["mouseover", "mousedown", "mouseup", "click"].forEach(function(eventType) { 
            triggerMouseEvent(targetNode, eventType);
        });
    }


    var dict = {
        "Clothes Dryers": "258",
        "Cooktops": "-1",
        "Dishwashers": "260",
        "Fridges": "261",
        "Microwaves": "262",
        "Ovens": "263",
        "Range Hoods": "268",
        "Washing Machines": "265",
        "Other": "271",
        "": "271"
    }
    chrome.storage.sync.get("inputtag", async ({ inputtag }) => {
        console.log("index = "+index23)
        console.log(inputtag)
        if (index23 != -1) {
            inputtag = inputtag[index23]
        }
        console.log(inputtag)
        var e = new KeyboardEvent('keyup', { 'key': 'a', 'code': 'KeyA' })
        var f = new KeyboardEvent('keypress', { 'key': 'a', 'code': 'KeyA' })
        var g = new KeyboardEvent('keydown', { 'key': 'a', 'code': 'KeyA' })
        function massActivate(element) {
            element.focus()
            //element.change()
            element.dispatchEvent(g)
            element.dispatchEvent(f)
            element.dispatchEvent(e)
        }
        if (!document.getElementById("boxUseCalendarViews")) {
            console.log("you are on the create page")
        }
        inputtag[0] = inputtag[0].toLowerCase().trim()
        inputtag[0] = inputtag[0].charAt(0).toUpperCase() + inputtag[0].slice(1);
        inputtag[1] = inputtag[1].toLowerCase().trim()
        inputtag[1] = inputtag[1].charAt(0).toUpperCase() + inputtag[1].slice(1);
        //set description
        document.getElementById("tdDefault").click()
        var description = ""
        for (let i = 12; i < inputtag.length; i++) {
            if(inputtag[i]) description += "\<p\>" + inputtag[i] + "\<\/p\>"
        }
        console.log(description.trim())
        document.getElementById("description").value = description
        await new Promise(r => setTimeout(r, 10));
        document.getElementById("tdRich").click()
        document.getElementById("tdRich").checked = true

        //open client, set client, wait
        document.querySelectorAll("[id='btnAdvSearch']")[1].click()
        document.getElementById("btnAdd").click()
        while (!document.getElementById("Name")) {
            await new Promise(r => setTimeout(r, 10));
            console.log("waiting for name")
        }
        console.log("create user")
        document.getElementById("Name").value = inputtag[0] + " " + inputtag[1]
        document.getElementById("ShortName").value = inputtag[1].slice(0, 6)
        document.getElementById("givennames").value = inputtag[0]
        document.getElementById("surname").value = inputtag[1]
        if(inputtag[4].startsWith("04")){
            document.getElementById("mobile").value = inputtag[4]
        }
        else{
            document.getElementById("phone").value = inputtag[4]
        }
        document.getElementById("Email").value = inputtag[2]
        searchPostcode2(inputtag[7])
        await new Promise(r => setTimeout(r, 300));
        document.getElementById("address2").focus()
        document.getElementById("address2").value = inputtag[5] + " " + inputtag[6]
        document.getElementById("address2").dispatchEvent(e)
        // todo delete
        var clicked = false
        var postcode = inputtag[7]
        var latitudeClone = null
        var longitudeClone = null
        var mapViewBtnClone = null
        
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
        //todo end delete
        while (document.getElementById("Name")) {
            await new Promise(r => setTimeout(r, 10));
            console.log("waiting for name")
            if (document.getElementsByClassName("pac-item googleplacesItem").length == 1 && document.getElementById("suburb").value == "" && clicked == false) {
                document.getElementsByClassName("pac-item googleplacesItem")[0].click()
                clicked = true
            }
        }
        while (document.getElementById("dialog_search_clients")) {
            await new Promise(r => setTimeout(r, 10));
            console.log("waiting for names to close")
            if (document.getElementById("globalsearch_value")) {
                if (document.getElementById("globalsearch_value").value == "") {
                    document.getElementById("globalsearch_value").value = inputtag[0] + " " + inputtag[1]
                    document.getElementById("globalsearch_value").dispatchEvent(e)
                }
            }
        }

        //set reported by contact 
        document.querySelectorAll("[id='btnAdvSearch']")[5].click()
        while (!document.getElementsByClassName("jqgfirstrow")[0].parentElement.children[1]) {
            await new Promise(r => setTimeout(r, 10));
            console.log("waiting for contacts to load")
        }
        document.getElementsByClassName("jqgfirstrow")[0].parentElement.children[1].click()
        document.getElementById("btnSelect").click()
        while (document.getElementById("btnAdd")) {
            await new Promise(r => setTimeout(r, 10));
            console.log("waiting for contacts to close fully")
        }

        //open asset, set asset
        document.querySelectorAll("[id='btnAdvSearch']")[3].click()
        document.getElementById("btnAdd").click()
        console.log("creating asset")
        while (!document.getElementById("categoryName")) {
            await new Promise(r => setTimeout(r, 10));
            console.log("waiting for category name")
        }
        if (inputtag[9] == "Other") {
            document.querySelectorAll("[id='assetName']")[1].value = inputtag[8] + " " + inputtag[9]
        } else {
            document.querySelectorAll("[id='assetName']")[1].value = inputtag[8] + " " + inputtag[9].slice(0, inputtag[9].length - 1)
        }
        if (inputtag[9] == "Cooktops") {
            document.getElementById("categoryName").value = inputtag[9].slice(0, 7)
            document.getElementById("categoryName").focus()
            await new Promise(r => setTimeout(r, 300));
            document.getElementById("categoryName").dispatchEvent(e)

        }
        else {
            document.querySelectorAll("[id='btnAdvSearch']")[8].click()
            while (!document.getElementById("265")) {
                await new Promise(r => setTimeout(r, 10));
                console.log("waiting for category name")
            }
            document.getElementById(dict[inputtag[9]]).click()
            //console.log(document.querySelectorAll("[id='btnSelect']"))
            document.querySelectorAll("[id='btnSelect']")[1].click()
        }
        while (document.getElementById("categoryName")) {
            if (inputtag[9] != "Cooktops") {
                document.getElementsByClassName("afBtn--small afBtn__fill af-success")[0].click()
                break
            }
            await new Promise(r => setTimeout(r, 10));

            console.log("waiting for category close")
        }
        
        while (document.getElementById("dialog_search_assets")) {
            await new Promise(r => setTimeout(r, 10));
            console.log("waiting for asset search dialogue to close")
            if (document.getElementById("gs_asset")) {
                if (document.getElementById("gs_asset").value == "") {
                    document.getElementById("gs_asset").value = inputtag[8] + " " + inputtag[9]
                    document.getElementById("gs_asset").dispatchEvent(e)
                }
            }
        }

        //redundant?
        while (document.getElementById("categoryName")) {
            console.log("waiting for asset to close")
            await new Promise(r => setTimeout(r, 10));

        }

        //todo: delete as redundant
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

        
        //set internet, sleep then set time
        if (document.getElementById("_Cust299")) document.getElementById("_Cust299").value = "Online Booking"
        if (document.getElementById("_Cust300")) document.getElementById("_Cust300").value = "Online Booking"
        if (document.getElementById("_Cust301")) document.getElementById("_Cust301").value = "Online Booking"
        if (document.getElementById("_Cust319")) document.getElementById("_Cust319").value = "Online Booking"

        document.getElementById("addrequest__submit").addEventListener("click", function(){chrome.storage.sync.set({ ContactTag: 1 });} )
        //opentask in new tab
        if (document.getElementsByClassName("afBtnGroup").length > 0) {
            document.getElementById("btnDoneScheduleDetails").addEventListener("click", async () => {
                //var link = "https://office.aroflo.com"+document.getElementsByClassName("afBtn afBtn__fill afBtn--small af-primary btnViewDetails")[0].getAttribute("href")
                chrome.storage.sync.set({ createTag: 1 });
                //window.open(link, '_blank')})
                document.getElementsByClassName("afBtn afBtn__fill afBtn--small af-primary btnViewDetails")[1].click()
            })
        }
        else {
            if (!document.getElementById("boxUseCalendarViews")) {
                switch(inputtag[11]){
                    case "AM":
                        document.getElementById("amButton").style.background='#FFFF00'
                        break
                    case "PM":
                        document.getElementById("pmButton").style.background='#FFFF00'
                        break
                    default:
                        document.getElementById("anyButton").style.background='#FFFF00'

                }
                document.getElementById("btnShowCal_1_0").click()
                var node = document.querySelector('[title="'+inputtag[10]+'"]');
                if(node){node.parentElement.classList.add("ui-state-highlight")} 

                document.getElementById("mapButton").click()
                //document.getElementsByClassName("btnAddUsers")[0].click()
                
                /*if(document.getElementsByClassName("af-truncate--text")[0].innerText!="Alpha Appliance Repair"){
                    var listOfTechs = []
                    for (const tech in techLocations) {
                        if (techLocations[tech].includes(postcode)) listOfTechs.push(tech)
                    }
                    console.log(listOfTechs)
                    
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
                        
                        //end map popup code block
                    }
                }*/
                while (document.getElementsByClassName("schedStartTime vd_required vd_time  afTextfield__input afTextfield__input--small ui-timepicker-input").length == 0) {
                    await new Promise(r => setTimeout(r, 10));
                    console.log("waiting for technician entry")
                }
                document.getElementsByClassName("ui-dialog-titlebar-close ui-corner-all")[0].click()
                if(document.getElementsByClassName("ui-dialog ui-widget ui-widget-content ui-corner-all ui-draggable ui-resizable").length>0){
                    var mapBox = document.getElementsByClassName("ui-dialog ui-widget ui-widget-content ui-corner-all ui-draggable ui-resizable")[document.getElementsByClassName("ui-dialog ui-widget ui-widget-content ui-corner-all ui-draggable ui-resizable").length-1]
                    if(mapBox.children[0].children[0].innerHTML == 'Map')mapBox.children[0].children[1].click()
                }
            }
            while (document.getElementById("btnSelect")) {
                await new Promise(r => setTimeout(r, 10));
            }
            var sundayLabel = document.getElementsByClassName("ui-datepicker-week-end")[0]
            simulateMouseClick(sundayLabel)
            schedLoop:
            while (true) {
                try{
                    while (document.getElementsByClassName("schedStartTime vd_required vd_time  afTextfield__input afTextfield__input--small ui-timepicker-input").length == 0 || !document.getElementsByClassName("schedNote afTextfield__input afTextfield__input--small vd_length")[0].value == "") {
                        await new Promise(r => setTimeout(r, 10));
                        console.log("sleeping")
                        if (document.getElementsByClassName("afBtn afBtn__fill af-primary fc-button-today ui") && !document.getElementById("ui-dialog-title-dlgSchedDetails")) return
                    }
                    if (document.getElementsByClassName("schedNote afTextfield__input afTextfield__input--small vd_length")[0].value == "") {
                        switch (inputtag[11]) {
                            case "AM":
                                document.getElementById("amButton").click()
                                break
                            case "PM":
                                document.getElementById("pmButton").click()
                                break
                            default:
                                document.getElementsByClassName("schedNote afTextfield__input afTextfield__input--small vd_length")[0].value = "unconfirmed"
                                break
                        }
                        //await new Promise(r => setTimeout(r, 10));
                    }
                }
                catch(error){
                    await new Promise(r => setTimeout(r, 10));
                    console.log("failed to click button")
                }
            }
        }
    });
}

var emailSmsPasser = async function(flag){
    chrome.storage.sync.set({ emailTag: "1051" });

    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    window.close()
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: ContactClient,
        args: [flag]
    });
}
emailSmsBtn.addEventListener("click", function(){emailSmsPasser(0)})
emailBtn.addEventListener("click", function(){emailSmsPasser(1)})
smsBtn.addEventListener("click", function(){emailSmsPasser(2)})


//export default importData;

async function ContactClient(flag) {
    if (flag==0||flag==2){
        var branch = document.getElementsByClassName("afDataTable__cell--non-numeric ownerEditMode")[0].innerText
        var branchNumber = ""
        var from = ""
        switch(branch){
            case "MAS > Master Appliance Service":
                branchNumber = "(02) 8445 4000"
                from = "MasterAppli"
                break
            case "MAS > Premium Appliance Repair": 
                branchNumber = "1300 614 730"
                from = "PremiumAppl"
                break
            case "MAS > SEQ Appliance Repair": 
                branchNumber = "(07) 3096 0580"
                from = "SEQApplianc"
                break
            case "MAS > Alpha Appliance Repair":
                branchNumber = "(02) 9420 2622"
                from = "AlphaApplia"
            default: "error"
        }
        /*var branch = document.getElementsByClassName("af-truncate--text")[0].innerText
        var branchNumber = ""
        switch(branch){
            case "Master Appliance Service":
                branchNumber = "(02) 8445 4000"
                break
            case "Premium Appliance Repair": 
                branchNumber = "1300 614 730"
                break
            case "SEQ Appliance Repair": 
                branchNumber = "(07) 3096 0580"
                break
            case "Alpha Appliance Repair": 
                branchNumber = "(02) 9420 2622"
                break
            default: "error"
        }*/
        var method = ""
        if(document.getElementsByTagName("select")[2].value=="Online Booking"){
            method = "online "
        }
        document.getElementsByClassName("btnSendSMS afBtn af-info afIconBtn afBtn--small")[0].click()
        while (!document.getElementById("btnEmailTemplate")) {
            await new Promise(r => setTimeout(r, 10));
            console.log("waiting for sms template button")
        }
        document.getElementById("btnEmailTemplate").click()
        
        var table =document.getElementsByClassName("ui-jqgrid-btable")
        while(true){
            while (!document.getElementsByClassName("jqgfirstrow")[0]) {
                await new Promise(r => setTimeout(r, 10));
                console.log("waiting for templates to load")
            }
            if(document.getElementById("1232")){
                document.getElementById("1232").click()
                document.getElementById("btnSelect").click()
                break
            }
            else {
                if(document.getElementById("1233")){
                    document.getElementById("1233").click()
                    document.getElementById("btnSelect").click()
                    return
                }
                else document.getElementsByClassName("af-pg-button")[2].click()
                
            }

            await new Promise(r => setTimeout(r, 10))
        }
        while (document.getElementById("message_value").value.length<100) {
            await new Promise(r => setTimeout(r, 10));
            console.log("waiting for sms template to load")
        }
        document.getElementById("message_value").value= document.getElementById("message_value").value.replaceAll('*method*', method)
        document.getElementById("from_value").value= from


        document.getElementById("btnSendSMSmessage").click()
        document.getElementById("btnSendSMSmessage").parentElement.parentElement.parentElement.getElementsByClassName("ui-icon ui-icon-closethick")[0].click()
        if(document.getElementById("locationLink").children.length>1){
            document.getElementsByClassName("btnSendSMS afBtn af-info afIconBtn afBtn--small")[1].click()
            while (!document.getElementById("btnEmailTemplate")) {
                await new Promise(r => setTimeout(r, 10));
                console.log("waiting for sms template button")
            }
            document.getElementById("btnEmailTemplate").click()
            
            var table =document.getElementsByClassName("ui-jqgrid-btable")
            while(true){
                while (!document.getElementsByClassName("jqgfirstrow")[0]) {
                    await new Promise(r => setTimeout(r, 10));
                    console.log("waiting for templates to load")
                }
                if(document.getElementById("1292")){
                    document.getElementById("1292").click()
                    document.getElementById("btnSelect").click()
                    break
                }
                else {
                    if(document.getElementById("1233")){
                        document.getElementById("1233").click()
                        document.getElementById("btnSelect").click()
                        return
                    }
                    else document.getElementsByClassName("af-pg-button")[2].click()
                    
                }

                await new Promise(r => setTimeout(r, 10))
            }
            while (document.getElementById("message_value").value.length<100) {
                await new Promise(r => setTimeout(r, 10));
                console.log("waiting for sms template to load")
            }
            document.getElementById("from_value").value= from

            document.getElementById("btnSendSMSmessage").click()
            document.getElementById("btnSendSMSmessage").parentElement.parentElement.parentElement.getElementsByClassName("ui-icon ui-icon-closethick")[0].click()
        }

    }
    if (flag==0||flag==1){//email code
        console.log("emailing client")

        chrome.storage.sync.get("emailTag", async ({ emailTag }) => {
            emailTag = "1430"

            var time = document.getElementsByClassName("schedule-item-date")[0].innerText
            var branch = document.getElementsByClassName("af-truncate--text")[0].innerText
            var source = "Online Booking"
            var branchIndex = 1
            if (branch == "Master Appliance Service") branchIndex = 2
            if (document.getElementsByTagName("Select")[branchIndex]) source = document.getElementsByTagName("Select")[branchIndex].children[document.getElementsByTagName("Select")[branchIndex].selectedIndex].value
            /*if (time.includes("8:30 AM")||time.includes("7:30 AM")) time = "AM"
            else if (time.includes("12:30 PM")) time = "PM"
            else time = "Any"*/
            var alphaEarlyStarters = ["David Miles", "Dylan Miles", "Corey Roberts", "Ron Richards", "Luiz Santana", "Douglas Herbert"]
            if( document.getElementsByClassName("afDataTable__cell--non-numeric afDataTable__sub-header padding-top--2")[1].innerText == "Warranty - Internal"){
                emailTag = "1386"
            }


            /*switch (true) {
                case ((branch == "Master Appliance Service") && (document.getElementsByClassName("schedule-item-date")[0].parentElement.innerHTML.includes("John Sleap"))):
                    emailTag = "1054"
                    break;
                case ((branch == "Master Appliance Service") && (document.getElementsByClassName("schedule-item-date")[0].parentElement.innerHTML.includes("Gee Cruz"))&& ((time == "AM"))):
                    emailTag = "1206"
                    break;
                case ((branch == "Master Appliance Service") && (document.getElementsByClassName("schedule-item-date")[0].parentElement.innerHTML.includes("Gee Cruz"))&& ((time == "Any"))):
                    emailTag = "1207"
                    break;
                    
                case ((branch == "Master Appliance Service") && (time == "AM") && source == "Online Booking"):
                    emailTag = "1037"
                    break;
                case ((branch == "Master Appliance Service") && (time == "AM") && source != "Online Booking"):
                    emailTag = "1186"
                    break;
                case ((branch == "Master Appliance Service") && (time == "PM" && source == "Online Booking")):
                    emailTag = "1038"
                    break;
                case ((branch == "Master Appliance Service") && (time == "PM" && source != "Online Booking")):
                    emailTag = "1187"
                    break;
                case ((branch == "Master Appliance Service") && (time == "Any")):
                    emailTag = "1036"
                    break;
                case ((branch == "Premium Appliance Repair") && (time == "AM" && source == "Online Booking")):
                    emailTag = "1043"
                    break;
                case ((branch == "Premium Appliance Repair") && (time == "AM" && source != "Online Booking")):
                    emailTag = "1188"
                    break;
                case ((branch == "Premium Appliance Repair") && (time == "PM" && source == "Online Booking")):
                    emailTag = "1044"
                    break;
                case ((branch == "Premium Appliance Repair") && (time == "PM" && source != "Online Booking")):
                    emailTag = "1189"
                    break;
                case ((branch == "Premium Appliance Repair") && (time == "Any")):
                    emailTag = "1042"
                    break;
                case ((branch == "SEQ Appliance Repair") && (time == "AM" && source == "Online Booking")):
                    emailTag = "1040"
                    break;
                case ((branch == "SEQ Appliance Repair") && (time == "AM" && source != "Online Booking")):
                    emailTag = "1190"
                    break;
                case ((branch == "SEQ Appliance Repair") && (time == "PM" && source == "Online Booking")):
                    emailTag = "1041"
                    break;
                case ((branch == "SEQ Appliance Repair") && (time == "PM" && source != "Online Booking")):
                    emailTag = "1191"
                    break;
                case ((branch == "SEQ Appliance Repair") && (time == "Any")):
                    emailTag = "1039"
                    break;
                case ((branch == "Alpha Appliance Repair") && (time == "AM") && alphaEarlyStarters.some(item=>document.getElementsByClassName("schedule-item-date")[0].parentElement.innerHTML.includes(item))):
                    emailTag = "1394"
                    break;
                case ((branch == "Alpha Appliance Repair") && (time == "AM")):
                    emailTag = "1237"
                    break;
                case ((branch == "Alpha Appliance Repair") && (time == "PM")):
                    emailTag = "1238"
                    break;
                case ((branch == "Alpha Appliance Repair") && (time == "Any")):
                    emailTag = "1236"
                    break;
            }*/




            document.getElementById("customiseLayout").click()

            while (!document.getElementById("TrackEmailYesNo")) {
                await new Promise(r => setTimeout(r, 10));
                console.log("waiting for category close")
            }
            //if(emailTag=="1036"||emailTag=="1037"||emailTag=="1038")document.getElementById("forwardRepliesTo").value = "Master Appliance Service <service@masterappliances.com.au>"

            document.getElementById("TrackEmailYesNo").click()
            document.getElementById("btnSearchEmailTemplates").click()

            var table =document.getElementsByClassName("ui-jqgrid-btable")

            while(true){
                while (!document.getElementsByClassName("jqgfirstrow")[0]) {
                    await new Promise(r => setTimeout(r, 10));
                    console.log("waiting for templates to load")
                }
                if(document.getElementById(emailTag)){
                    document.getElementById(emailTag).click()
                    document.getElementById("btnSelect").click()
                    if (emailTag == "1051") return
                    break
                }
                else {
                    if(document.getElementById("1051")){
                        document.getElementById("1051").click()
                        document.getElementById("btnSelect").click()
                        return
                    }
                    else document.getElementsByClassName("af-pg-button")[2].click()
                    
                }

                await new Promise(r => setTimeout(r, 10))
            }

            while (!document.getElementById("ToSubject").value.includes("Service Booking")) {
                await new Promise(r => setTimeout(r, 10));
                console.log("waiting for load")
            }

            await new Promise(r => setTimeout(r, 500));
            if(document.getElementById("TrackEmailYesNo").checked)document.getElementById("TrackEmailYesNo").click()
            if(document.getElementById("RequestReadReceipt").checked)document.getElementById("RequestReadReceipt").click()
            if(!document.getElementById("allowReplyImports").checked)document.getElementById("allowReplyImports").click()
            if(document.getElementById("trackDeliveryStatus").checked)document.getElementById("trackDeliveryStatus").click()
            await new Promise(r => setTimeout(r, 10));
            console.log("done2")
            while (document.getElementsByClassName("afToast__text")[0].innerHTML!='Email successfully sent to recipient') {
                await new Promise(r => setTimeout(r, 10));
                console.log("waiting for send")
            }
            //document.getElementsByClassName("ui-button-text")[2].click()
            chrome.storage.sync.get("createTag", async ({ createTag }) => {
                console.log(createTag)
                if (createTag > 0) {
                    var newtag = createTag - 1
                    chrome.storage.sync.set({ createTag: newtag });
                    window.close()
                }
                else {
                    window.location = "https://office.aroflo.com/ims/Site/Service/workrequest/index.cfm?new=1&tid=IMS.CRT.TSK"
                }
            })
        });
    }
}




//approve invoices 
invoiceBtn.addEventListener("click", async () => {
    console.log("ping");
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    window.close()
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: processInvoices,
    });


});

function processInvoices() {
    var jobNumbers = document.getElementsByClassName("invRefNo")
    var cells = document.getElementsByClassName("afDataTable__cell--numeric")
    var amountOwing = []
    var invoiceTag = 1
    for (let i = 0; i < cells.length; i++) {
        if (i % 6 == 5 && i != 5) amountOwing.push(cells[i])
    }
    chrome.storage.sync.set({ invoiceTag: invoiceTag });
    var num = 0
    for (let i = 0; i < amountOwing.length; i++) {
        if (amountOwing[i].innerText.includes("$0.00")){
            num+=1
            window.open(jobNumbers[i].href, '_blank')
        }
    }

}



//process invoices 
invoiceBtn2.addEventListener("click", async () => {

    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    window.close()
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: processInvoices2,
    });


});

function processInvoices2() {
    var checkbox = document.getElementsByClassName("afCheckbox__input markProcessedChk")
    var cells = document.getElementsByClassName("afDataTable__cell--numeric")
    var amountOwing = []
    for (let i = 0; i < cells.length; i++) {
        if (i % 6 == 5 && i != 5) amountOwing.push(cells[i])
    }
    for (let i = 0; i < amountOwing.length; i++) {
        if (amountOwing[i].innerText.includes("$0.00")) checkbox[i].click()
    }
    document.getElementById("updatepending").click()
}

//reset flag
invoiceBtn3.addEventListener("click", async () => {
    var invoiceTag = 0
    chrome.storage.sync.set({ invoiceTag: invoiceTag });
    textArea.value = "invoice flag reset, invoices should be normal now"



});

buyPriceBox.addEventListener("change", async () => {
    var price = Number(buyPriceBox.value)
    mielePriceBox.value = price * 1.7

    if (price <= 10) {
        fieldPriceBox.value = price * 3 + 10
    }
    else if (price <= 20) {
        if (price * 3 < 30) fieldPriceBox.value = 40
        fieldPriceBox.value = price * 3
    }
    else if (price <= 35) {
        if (price * 2.5 < 50) fieldPriceBox.value = 50
        fieldPriceBox.value = price * 2.5
    }
    else if (price <= 50) {
        if (price * 2.25 < 78.75) fieldPriceBox.value = 78.75
        fieldPriceBox.value = price * 2.25
    }
    else if (price <= 100) {
        if (price * 2.1 < 105) fieldPriceBox.value = 105
        fieldPriceBox.value = price * 2.1
    }
    else if (price <= 250) {
        if (price * 2 < 200) fieldPriceBox.value = 200
        fieldPriceBox.value = price * 2
    }
    else if (price <= 750) {
        if (price * 1.75 < 437.5) fieldPriceBox.value = 437.5
        fieldPriceBox.value = price * 1.75
    }
    else {
        if (price * 1.5 < 1312.5) fieldPriceBox.value = 1312.5
        fieldPriceBox.value = price * 1.5
    }

})


var searchPostcode = async function (postcode) {
    while (techBox.childNodes.length > 0) { techBox.childNodes[0].remove() }
    var listOfTechs = []
    for (const tech in techLocations) {
        if (techLocations[tech].includes(postcode)) listOfTechs.push(tech)
    }
    if (listOfTechs.length > 0) {
        for (let i = 0; i < listOfTechs.length; i++) {
            techBox.appendChild(document.createTextNode(listOfTechs[i] + " "))
        }
    } else techBox.appendChild(document.createTextNode("postcode " + postcode + " not assigned to any technicians, may be out of area"))

    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: highlightTechsFunc,
        args: [listOfTechs]
    });
}




var searchSuburb = async function (suburb) {
    while (techBox.childNodes.length > 0) { techBox.childNodes[0].remove() }
    for (const postcode in suburbTable) {
        console.log(suburb.toUpperCase())
        if (suburbTable[postcode].includes(suburb.toUpperCase())) {
            searchPostcode(postcode)
            console.log("found")
            console.log(postcode)
            return
        }
    }
    techBox.appendChild(document.createTextNode("Suburb not found, check spelling or suburb may be out of area"))
}

let highlightTechsFunc = async function(techList){
    if(window.location.href.indexOf("https://office.aroflo.com/ims/Site/Calendar/index.cfm")!=-1){
        let headerBar = document.getElementsByClassName("fc-head-col-resource fc-last")[1]
        for( i=0; i<headerBar.childElementCount; i++){
            headerBar.children[i].classList.remove("MasExtHl")

            for(j=0;j<techList.length;j++){
                if(headerBar.children[i].title.includes(techList[j])){
                    headerBar.children[i].classList.add("MasExtHl")
                }
            }
        }
    }
}

suburbSearchBtn.addEventListener("click", function () { searchSuburb(suburbBox.value) })
postcodeSearchBtn.addEventListener("click", function () { searchPostcode(postcodeBox.value) })
suburbBox.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault()
        suburbSearchBtn.click()
    }
})
postcodeBox.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault()
        postcodeSearchBtn.click()
    }
})
suburbSearchBtn.addEventListener("click", function () { searchSuburb(suburbBox.value) })
postcodeSearchBtn.addEventListener("click", function () { searchPostcode(postcodeBox.value) })



resetFlagsBtn.addEventListener("click", async () => {
    chrome.storage.sync.set({ bulkTag: -1 });
    chrome.storage.sync.set({ createTag: 0 });
    alert("bulk flags reset, job creation should be normal now")



});


function simulateMouseClick(targetNode) {
    function triggerMouseEvent(targetNode, eventType) {
        var clickEvent = document.createEvent('MouseEvents');
        clickEvent.initEvent(eventType, true, true);
        targetNode.dispatchEvent(clickEvent);
    }
    ["mouseover", "mousedown", "mouseup", "click"].forEach(function(eventType) { 
        triggerMouseEvent(targetNode, eventType);
    });
}


async function sendBookingText1(index){
    console.log("Texting client - function")
    console.log(document)
    document.getElementsByClassName("btnSendSMS afBtn af-info afIconBtn afBtn--small")[index].click()
    while (!document.getElementById("btnEmailTemplate")) {
        await new Promise(r => setTimeout(r, 10));
        console.log("waiting for sms template button")
    }
    document.getElementById("btnEmailTemplate").click()
    
    var table =document.getElementsByClassName("ui-jqgrid-btable")
    while(true){
        while (!document.getElementsByClassName("jqgfirstrow")[0]) {
            await new Promise(r => setTimeout(r, 10));
            console.log("waiting for templates to load")
        }
        if(document.getElementById("1232")){
            document.getElementById("1232").click()
            document.getElementById("btnSelect").click()
            break
        }
        else {
            if(document.getElementById("1233")){
                document.getElementById("1233").click()
                document.getElementById("btnSelect").click()
                return
            }
            else document.getElementsByClassName("af-pg-button")[2].click()
            
        }

        await new Promise(r => setTimeout(r, 10))
    }
    while (document.getElementById("message_value").value.length<100) {
        await new Promise(r => setTimeout(r, 10));
        console.log("waiting for sms template to load")
    }
    document.getElementById("message_value").value= document.getElementById("message_value").value.replaceAll('*branch*', branch)
    document.getElementById("message_value").value= document.getElementById("message_value").value.replaceAll('*branch number*', branchNumber)

    document.getElementById("btnSendSMSmessage").click()
    document.getElementById("btnSendSMSmessage").parentElement.parentElement.parentElement.getElementsByClassName("ui-icon ui-icon-closethick")[0].click()
}

massArchiveBtn.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    window.close()
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: MassArchiveJobs,
    });


});

function MassArchiveJobs() {
    const targetUri = "https://office.aroflo.com/ims/Site/Service/managetasks/index.cfm?view=1"
    if (!window.location.href.includes(targetUri)){
        if(confirm("You are on the wrong page to use this function. would you like to go to the correct page now?")){
            window.location.href = targetUri+"&tid=IMS.STK.CUR"
        }

    }
    else{
        if(confirm("Archive all the jobs on this page? this can only be reversed manually. when you are done you need to reset the flag with the correct button or else you will archive all jobs you open.")){
            
            const taskList = document.getElementsByClassName("afDataTable__cell--non-numeric page-content-task-name")
            var autoArchiveTag = 1
            chrome.storage.sync.set({ autoArchiveTag: autoArchiveTag });
            for (let i = 1; i < Math.min(25, taskList.length); i++) {
                window.open(taskList[i].children[0].children[0].href, '_blank')
            }
            /*async function archiveReset() {
                window.removeEventListener("focus", archiveReset)
                alert("Jobs Archived. Ressetting flag and reloading...")
                chrome.storage.sync.set({ autoArchiveTag: 0 });
                window.location.reload()
                
            }
            window.addEventListener("focus", archiveReset)
            */
        }
        
    }

}





//reset flag
massArchiveResetBtn.addEventListener("click", async () => {
    const autoArchiveTag = 0
    chrome.storage.sync.set({ autoArchiveTag: autoArchiveTag });
    textArea.value = "auto archive flag reset, jobs should be normal now"
});

//legacy - bulk email importer
/*bulkImportBtn.addEventListener("click", async () => {
    const mainSplitString = "\n\t\n\t\t\t\n\t\n \n\t\n"
    const qldSplitString = "\n\t\n\t\t\t\n\t\n\t\n\t\n"
    var bulkInputs = bulkTextArea.value.split(mainSplitString)
    var bulk2 = bulkTextArea.value.split(qldSplitString)
    if (bulkInputs.length < bulk2.length) bulkInputs = bulk2
    //var bulkInputs = bulkTextArea.value.split(qldSplitString)//"\n\t\n\t\t\t\n\t\n \n\t\n")

    console.log(bulkInputs)
    bulkInputs.splice(bulkInputs.length - 1, 1)
    var failedInputs = []

    for (const entries in bulkInputs) {
        //console.log(entries)//.split("Service Booking\t \n\t"))
        bulkInputs[entries] = String(bulkInputs[entries].split("Service Booking\t \n\tFirst")[1])
        console.log(bulkInputs)
        bulkInputs[entries] = bulkInputs[entries].split("\n")
        console.log(bulkInputs[entries].length)

        if (bulkInputs[entries].length > 12) {
            var fullDesc = bulkInputs[entries][11]
            console.log("start: " + fullDesc)
            for (let i = 12; i < bulkInputs[entries].length; i++) {
                fullDesc += "\n" + bulkInputs[entries][i]
                console.log(bulkInputs[entries][i])
                console.log(fullDesc + " added")
            }
            bulkInputs[entries][11] = fullDesc
            console.log("end: " + fullDesc)
            bulkInputs[entries].splice(12, bulkInputs[entries].length - 11)
        }
        for (const line in bulkInputs[entries]) {
            bulkInputs[entries][line] = String(bulkInputs[entries][line].split("\t ")[1]).trim()
        }
        bulkInputs[entries].splice(3, 0, "spliced1234")

        if (bulkInputs[entries][4].startsWith("+61")) {
            bulkInputs[entries][4] = bulkInputs[entries][4].replace('+61', '0');
        }
        if (bulkInputs[entries][4].startsWith("61")) {
            bulkInputs[entries][4] = bulkInputs[entries][4].replace('61', '0');
        }
        while (bulkInputs[entries][4].includes(" ")) {
            bulkInputs[entries][4] = bulkInputs[entries][4].replace(' ', '');
        }
        if (!/^[0-9]+$/.test(bulkInputs[entries][4])) {
            var identifier = bulkInputs[entries][0] + bulkInputs[entries][1] + bulkInputs[entries][2]
            failedInputs.push([identifier, "NAN", entries])
            console.log(identifier)
            continue
        }
        if (bulkInputs[entries][4].length != 10) {
            var identifier = bulkInputs[entries][0] + bulkInputs[entries][1] + bulkInputs[entries][2]
            failedInputs.push([identifier, "Length", entries])
            console.log(identifier)
            continue
        }
    }
    //console.log(bulkInputs)
    var outputText = "all " + bulkInputs.length + " emails imported successfully"
    if (failedInputs.length > 0) {
        outputText = "the following emails failed to import:\n"
        for (let i = failedInputs.length - 1; i >= 0; i--) {
            outputText += failedInputs[i][0] + " Reason: " + failedInputs[i][1]
            bulkInputs.splice(failedInputs[i][2], 1)
        }
        outputText += "\nThe remaining " + bulkInputs.length + "  emails imported successfully"
    }
    chrome.storage.sync.set({ inputtag: bulkInputs });
    chrome.storage.sync.set({ bulkTag: bulkInputs.length - 1 });
    //chrome.storage.sync.set({ createTag: bulkInputs.length - 1 });
    alert(outputText)

    window.open("https://office.aroflo.com/ims/Site/Service/workrequest/index.cfm?new=1&tid=IMS.CRT.TSK", '_blank')

    //for (const entries in bulkInputs) {
        
    //}

});
*/

//legacy - mass sms sender
/*smsBtn1.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    window.close()
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: sendTexts,
    });
});





async function sendTexts() {
    var when = "tommorow"
    if (document.getElementsByTagName("h2")[4].innerText.split(",")[0] == "Monday") when = "Monday"
    var branch = document.getElementsByClassName("af-truncate--text")[0].innerText
    var branchNumber = 0
    var jobNumbers = []
    var names = []
    var phoneNumbers = []
    var problems = []
    var status = []
    var index = 0
    var jobs = document.getElementsByClassName("fc-event-inner fc-event-skin")
    if (branch.includes("Master")) branchNumber = "8445 4000"
    if (branch.includes("Premium")) branchNumber = "1300 614 730"
    if (branch.includes("SEQ")) branchNumber = "3096 0580"
    console.log(jobs)
    for (let i = 0; i < jobs.length; i++) {
        var temp = jobs[i].title.split(" ")
        jobNumbers[index] = temp[0]
        phoneNumbers[index] = temp[1]
        names[index] = temp[2] + " " + temp[3]
        index += 1
        if (jobs[i].title.includes("unconfirmed")) {
            status[index] = 0
        }
        else status[index] = 1
    }

    console.log(jobNumbers)
    console.log(names)
    console.log(phoneNumbers)

    for (let i = 0; i < phoneNumbers.length; i++) {
        if (phoneNumbers[i].startsWith("+61")) {
            phoneNumbers[i] = phoneNumbers[i].replace('+61', '0');
        }
        if (phoneNumbers[i].startsWith("61")) {
            phoneNumbers[i] = phoneNumbers[i].replace('61', '0');
        }
        while (phoneNumbers[i].includes(" ")) {
            phoneNumbers[i] = phoneNumbers[i].replace(' ', '');
        }
        while (phoneNumbers[i].includes(",")) {
            phoneNumbers[i] = phoneNumbers[i].replace(',', '');
        }
        if (!/^[0-9]+$/.test(phoneNumbers[i])) {
            console.log(jobNumbers[i] + "failed: NaN")
            console.log(phoneNumbers[i])
            problems.push(jobNumbers[i])
            names.splice(i, 1)
            jobNumbers.splice(i, 1)
            phoneNumbers.splice(i, 1)
            i -= 1
            console.log()
            continue

        }
        if (phoneNumbers[i].length != 10) {
            console.log(jobNumbers[i] + "failed: wrong length")
            problems.push(jobNumbers[i])
            names.splice(i, 1)
            jobNumbers.splice(i, 1)
            phoneNumbers.splice(i, 1)
            i -= 1
            continue
        }

    }

    var container = document.createElement('div')
    var classList = container.classList
    classList.add("afBtn", "afBtn__fill", "af-primary", "afBtn--small", "btnSendSMS", "qbNoClose", "handCursor")
    jobs[0].parentElement.parentElement.appendChild(container)
    container.click()

    while (!document.getElementById("to_value")) {
        await new Promise(r => setTimeout(r, 10));
        console.log("waiting for message to send")
    }
    var phoneEntry = document.getElementById("to_value")
    var textEntry = document.getElementById("message_value")
    var sendBtn = document.getElementById("btnSendSMSmessage")

    for (let i = 0; i < jobNumbers.length; i++) {
        phoneEntry.value = phoneNumbers[i]
        //textEntry.value = "To " + names[i]+"\n"+branch+" JN "+jobNumbers[i]+ ". Pls call "+branchNumber+" to CONFIRM or CANCEL the time of your booking for "+when+". Do not reply via sms, thanks."
        textEntry.value = "To " + names[i] + ",\nThis is your reminder that you have a " + branch + " technician attending " + when + ". \nPls call " + branchNumber + " with ref: " + jobNumbers[i] + " to cancel if the service is no longer required. \nDo not reply via sms, thanks."
        sendBtn.click()
        while (!document.getElementsByClassName("btnAnchor btnOverlayOk ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only")[0]) {
            await new Promise(r => setTimeout(r, 10));
            console.log("waiting for message to send")
        }
        document.getElementsByClassName("btnAnchor btnOverlayOk ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only")[0].click()
    }
    //container.parentElement.remove(container)

    if (problems.length != 0) {
        var constructedMessage = "the following messages failed to send:\n"
        for (let i = 0; i < problems.length; i++) constructedMessage += problems[i] + "\n"
        constructedMessage += "all other messages sent correctly"
        textEntry.value = constructedMessage
        console.log(constructedMessage)
    } else {
        textEntry.value = "all confirmation messages sent correctly"
        console.log("all confirmation messages sent correctly")

    }
    sendBtn.remove()
}
*/