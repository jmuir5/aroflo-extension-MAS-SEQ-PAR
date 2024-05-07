export default async function sendBookingText(document, index){
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

