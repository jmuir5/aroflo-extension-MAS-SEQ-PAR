//cancel quick notes execution
window.addEventListener('load', async() => {
    chrome.storage.sync.get("CancelTag", async ({ CancelTag }) => {
        if(CancelTag>0){
            while(!document.getElementsByClassName("afTextfield__display--small schRefJobNo")[0]||!document.getElementsByClassName("afBtn afBtn__fill afBtn--small af-warn schedule__delete canDisable")[0]){
                await new Promise(r => setTimeout(r, 10));
                console.log("waiting for job number")
            }
            var text = document.getElementsByClassName("afTextfield__display--small schRefJobNo")[0].innerText.split(' ')
            console.log("got job number")
            console.log("cancel tag:"+CancelTag)
            console.log("job number:"+ text[text.length-1])
            if(CancelTag == text[text.length-1]){
                var cancelButtons = document.getElementsByClassName("afBtn afBtn__fill afBtn--small af-warn schedule__delete canDisable")
                for (let i = 0; i < cancelButtons.length; i++) {
                    cancelButtons[0].click()
                    await new Promise(r => setTimeout(r, 100));
                }
                document.getElementById("btnDoneScheduleDetails").click()
                while(document.getElementsByClassName("ui-dialog ui-widget ui-widget-content ui-corner-all ui-draggable ui-resizable").length>0){
                    await new Promise(r => setTimeout(r, 10));
                    console.log("waiting for job sheet close")
                }
                chrome.storage.sync.set({ CancelTag: 0})
                window.close();
                /*document.getElementsByClassName("afBtn afBtn__fill afBtn--small af-warn schedule__delete canDisable")[0].click()
                await new Promise(r => setTimeout(r, 100));
                document.getElementById("btnDoneScheduleDetails").click()
                chrome.storage.sync.set({ CancelTag: 0})
                window.close();
                //old code
                */
            }
        }
    })
    chrome.storage.sync.get("PartsTag", async ({ PartsTag }) => {
        if(PartsTag.length>0){
            while(!document.getElementsByClassName("afTextfield__display--small schRefJobNo")[0]||!document.getElementsByClassName("afBtn afBtn__fill afBtn--small af-warn schedule__delete canDisable")[0]){
                await new Promise(r => setTimeout(r, 10));
                console.log("waiting for job to open")
            }
            
            var firstAvailable = await getFirstAvailable(PartsTag)
            console.log("First Available: "+firstAvailable)
            document.getElementById("addResourceMenu_1_0").click()
            document.getElementsByClassName("afMenu__item")[0].children[0].click()
            var tables = document.getElementsByClassName("ui-jqgrid-btable")
            while (tables[0].children[0].children.length <= 1) {
                await new Promise(r => setTimeout(r, 10));
                console.log("waiting for table to load")
            }
            var table = tables[tables.length-1].children[0].children
            console.log(PartsTag.split(" "))
            for (let i = 0; i < table.length; i++) {
                console.log(table[i].children[4].innerText)
                if (PartsTag.split(" ").includes(table[i].children[4].innerText)) {
                    table[i].click()
                    table[i].parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.children[0].children[1].click()
                    break
                }
            }
            document.getElementById("btnShowCal_1_0").click()

            var node = document.querySelectorAll('[title="'+firstAvailable.split(" ")[0]+'"]')[6]
            if(node)node.parentElement.classList.add("ui-state-highlight")
            var index = getChildIndex(node.parentElement)


            chrome.storage.sync.set({ PartsTag: ""})

            var days = document.getElementsByClassName("imsMultiSchedule__schedule")[0].getElementsByTagName("td")
            console.log(index)
            dayloop:
            for (let i = 0; i < days.length; i++) {
                console.log("day: "+i)
                if(days[i].classList.contains("ui-datepicker-today")){
                    console.log("found today")
                    var flag = false
                    for (let j = 0; j < days.length-i; j++) {
                        if((i+j)%7==index) flag= true
                        if(flag==true){
                            if(!days[i+j].classList.contains("ui-datepicker-week-end")){
                                console.log("launching click")
                                simulateMouseClick(days[i+j].children[0])
                                break dayloop
                            }
                        }
                        console.log("found weekend")

                    }
                }
            }
            
            schedloop:
            while (true) {
                while (document.getElementsByClassName("schedStartTime vd_required vd_time  afTextfield__input afTextfield__input--small ui-timepicker-input").length == 0 || !document.getElementsByClassName("schedNote afTextfield__input afTextfield__input--small vd_length")[0].value == "") {
                    await new Promise(r => setTimeout(r, 10));
                    console.log("sleeping")
                    if (document.getElementsByClassName("afBtn afBtn__fill af-primary fc-button-today ui") && !document.getElementById("ui-dialog-title-dlgSchedDetails")) break schedloop
                }
                if (document.getElementsByClassName("schedNote afTextfield__input afTextfield__input--small vd_length")[0].value == "") {
                    switch (firstAvailable.split(" ")[1]) {
                        case "AM":
                            document.getElementById("amButton").click()
                            document.getElementById("amButton").style.background='#FFFF00'
                            document.getElementsByClassName("schedNote afTextfield__input afTextfield__input--small vd_length")[0].value = "un"+document.getElementsByClassName("schedNote afTextfield__input afTextfield__input--small vd_length")[0].value
                            break
                        case "PM":
                            document.getElementById("pmButton").click()
                            document.getElementById("pmButton").style.background='#FFFF00'
                            document.getElementsByClassName("schedNote afTextfield__input afTextfield__input--small vd_length")[0].value = "un"+document.getElementsByClassName("schedNote afTextfield__input afTextfield__input--small vd_length")[0].value
                            break
                        default:
                            document.getElementById("anyButton").click()
                            document.getElementById("anyButton").style.background='#FFFF00'
                            document.getElementsByClassName("schedNote afTextfield__input afTextfield__input--small vd_length")[0].value = "un"+document.getElementsByClassName("schedNote afTextfield__input afTextfield__input--small vd_length")[0].value
                    }
                }
            }
            window.close()
        }
    })

})

async function getFirstAvailable(technician){
    var sendTechs = ["John Sleap","Otavio Palharini","Gee Cruz","Tulio Pereira","Vini Moura"]
    document.getElementsByClassName("afBtn afBtn__fill af-primary fc-button-next ui")[0].click()
    if(sendTechs.includes(technician)){
        document.getElementsByClassName("afBtn afBtn__fill af-primary fc-button-next ui")[0].click()
    }
    dayloop:
    while(true){
        document.getElementsByClassName("afBtn afBtn__fill af-primary fc-button-next ui")[0].click()
        while(!document.getElementsByClassName("walkme-icon-image-div walkme-launcher-image-div")[0]){
            await new Promise(r => setTimeout(r, 10));
            console.log("waiting for job to open")
        }
        var boxes = document.getElementsByClassName("aagBox")
        var today = document.getElementsByTagName("h2")[4].innerText.split(",")[0]
        for(let i=0;i<boxes.length;i++){
            console.log(boxes[i].children[3].classList)

            console.log(boxes[i].children[3].style.color)
            if(boxes[i].classList.contains(technician.replace(" ","."))){
                console.log("box found")
                console.log(boxes[i].children[3].style.color)
                if(boxes[i].children[4].style.color=="blue"&&boxes[i].children[3].style.color=="blue"){
                    var indicator = 0
                    if(boxes[i].children[0].style.color=="blue")indicator+=1
                    if(boxes[i].children[1].style.color=="blue")indicator+=2
                    switch(indicator){
                        case 1:
                            indicator = "AM"
                            break
                        case 2:
                            indicator = "PM"
                            break
                        case 3:
                            indicator = "Any"
                            break
                    }
                    return today+" "+indicator
                
                }
                else continue dayloop
            }
            else continue
        }
        console.log("no box found")
        return today+" Any"

    }
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

function getChildIndex(node) {
    return Array.prototype.indexOf.call(node.parentNode.childNodes, node);
  }