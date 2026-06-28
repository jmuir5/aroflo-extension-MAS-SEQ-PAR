export default async function SendEmailFunction(templateId, emailButton, Modification=util.promise(()=>{})){
    emailButton.click()

    while (!document.getElementById("btnSearchEmailTemplates")) {
        await new Promise(r => setTimeout(r, 10));
        console.log("waiting for category close")
    }

    //document.getElementById("TrackEmailYesNo").click()
    //document.getElementById("btnSearchEmailTemplates").click()
    var templateName = ""
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
            templateName = document.getElementById(templateId).children[1].textContent
            document.getElementById(templateId).click()
            document.getElementById("btnSelect").click()
            if (templateId == "1051") return
            break
        }
        else {
            if(document.getElementById("1051")){
                document.getElementById("1051").click()
                document.getElementById("btnSelect").click()
                return
            }
            else templateWindow.getElementsByClassName("af-pg-button")[2].click()
            
        }

        await new Promise(r => setTimeout(r, 10))
    }
    while (document.getElementsByClassName("ui-dialog ui-widget ui-widget-content ui-corner-all ui-draggable ui-resizable").length>0) {
        await new Promise(r => setTimeout(r, 100));
        console.log("waiting for templates window to close")
    }
    while (!document.getElementById("btnSearchEmailTemplates").innerText == templateName) {
        await new Promise(r => setTimeout(r, 10));
        console.log("waiting for load")
    }

    await new Promise(r => setTimeout(r, 500));
    if(document.getElementById("TrackEmailYesNo").checked)document.getElementById("TrackEmailYesNo").click()
    if(document.getElementById("RequestReadReceipt").checked)document.getElementById("RequestReadReceipt").click()
    if(!document.getElementById("allowReplyImports").checked)document.getElementById("allowReplyImports").click()
    if(document.getElementById("trackDeliveryStatus").checked)document.getElementById("trackDeliveryStatus").click()
    await Modification()
    await new Promise(r => setTimeout(r, 10));
    console.log("done2")
    while (document.getElementsByClassName("afToast__text")[0].innerHTML!='Email successfully sent to recipient') {
        await new Promise(r => setTimeout(r, 10));
        console.log("waiting for send")
    }
    async () => {
        await new Promise(r => setTimeout(r, 1000));
        document.getElementsByClassName("afBtn afBtn--small afBtn__fill af-primary btnRefreshNotes headerItemSpacing")[0].click()
    }
}