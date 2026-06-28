export default async function SendTextFunction(templateId, smsButton, textModification=util.promise(()=>{})){
    smsButton.click()
    while(document.getElementsByClassName("afBtn afIconBtn af-primary margin-right--2").length<2) {
        await new Promise(r => setTimeout(r, 10));
        console.log("waiting for sms template button")
    }
    let templateButton = document.getElementsByClassName("afBtn afIconBtn af-primary margin-right--2")[1]
    templateButton.click()
    //document.getElementById("btnEmailTemplate").click()
    
    var table =document.getElementsByClassName("ui-jqgrid-btable")
    mainloop:
    while(true){
        while (document.getElementsByClassName("ui-dialog ui-widget ui-widget-content ui-corner-all ui-draggable ui-resizable").length<1) {
            await new Promise(r => setTimeout(r, 100));
            console.log("waiting for templates window")
            document.getElementById("btnSearchEmailTemplates").click()
        }
        let templateWindow = document.getElementsByClassName("ui-dialog ui-widget ui-widget-content ui-corner-all ui-draggable ui-resizable")[0]
        while (!templateWindow.getElementsByClassName("jqgfirstrow")[0]) {
            await new Promise(r => setTimeout(r, 100));
            console.log("waiting for templates to load")
            if(document.getElementsByClassName("ui-dialog ui-widget ui-widget-content ui-corner-all ui-draggable ui-resizable").length<1) {
                continue mainloop
            }
            continue

        }
        
        if(document.getElementById(templateId)){
            document.getElementById(templateId).click()
            document.getElementById("btnSelect").click()
            break
        }
        else {
            if(document.getElementById("1233")){
                document.getElementById("1233").click()
                document.getElementById("btnSelect").click()
                return
            }
            else templateWindow.getElementsByClassName("af-pg-button")[2].click()
            
        }
        await new Promise(r => setTimeout(r, 10))
    }
    let textBox = document.getElementsByClassName("messagingBox__input")[1]
    while (textBox.value.length<10) {
        await new Promise(r => setTimeout(r, 10));
        console.log("waiting for sms template to load")
    }
    while (document.getElementsByClassName("afMessaging__header-from margin-left--1")[1].innerText.length<1) {
        await new Promise(r => setTimeout(r, 10));
        console.log("waiting for name to load")
    }
    document.getElementsByClassName("afMessaging__header-from margin-left--1")[1].innerText
    await textModification()
    templateButton.parentElement.getElementsByTagName("button")[1].click()
    document.getElementsByClassName("afIconBtn padding-top--1")[0].click()
    while(document.getElementsByClassName("afDrawer__container is-visible")[0]){
        await new Promise(r => setTimeout(r, 10));
        console.log("waiting for sms dialogue to close")
    }
    while (document.getElementsByClassName("ui-dialog ui-widget ui-widget-content ui-corner-all ui-draggable ui-resizable").length>0) {
        await new Promise(r => setTimeout(r, 100));
        console.log("waiting for templates window to close")
    }
    async () => {
        await new Promise(r => setTimeout(r, 1000));
        document.getElementsByClassName("afBtn afBtn--small afBtn__fill af-primary btnRefreshNotes headerItemSpacing")[0].click()
    }
}