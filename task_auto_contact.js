//import sendBookingText from "./sendBookingText"
//Automatically contact client after importing email
window.addEventListener('load', async() => {
    chrome.storage.sync.get("ContactTag", async ({ ContactTag }) => {
        console.log("contact flag = "+ContactTag)
        if(ContactTag==1){
            chrome.storage.sync.set({ ContactTag: 0 })
            ContactClient(0)
        }
    })
})


async function ContactClient(flag) {
    if (flag==0||flag==2){
        var branch = document.getElementsByClassName("af-truncate--text")[0].innerText
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
            default: "error"
        }
        
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
        document.getElementById("message_value").value= document.getElementById("message_value").value.replaceAll('*branch*', branch)
        document.getElementById("message_value").value= document.getElementById("message_value").value.replaceAll('*method*', method)
        document.getElementById("message_value").value= document.getElementById("message_value").value.replaceAll('*branch number*', branchNumber)

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
            document.getElementById("message_value").value= document.getElementById("message_value").value.replaceAll('*branch*', branch.replace("MAS > ", ""))
            document.getElementById("message_value").value= document.getElementById("message_value").value.replaceAll('*branch number*', branchNumber)

            document.getElementById("btnSendSMSmessage").click()
            document.getElementById("btnSendSMSmessage").parentElement.parentElement.parentElement.getElementsByClassName("ui-icon ui-icon-closethick")[0].click()
        }


    }
    if (flag==0||flag==1){//email code
        chrome.storage.sync.get("emailTag", async ({ emailTag }) => {
            var time = document.getElementsByClassName("schedule-item-date")[0].innerText
            var branch = document.getElementsByClassName("af-truncate--text")[0].innerText
            var source = "Online Booking"
            var branchIndex = 1
            if (branch == "Master Appliance Service") branchIndex = 2
            if (document.getElementsByTagName("Select")[branchIndex]) source = document.getElementsByTagName("Select")[branchIndex].children[document.getElementsByTagName("Select")[branchIndex].selectedIndex].value
            if (time.includes("8:30 AM")) time = "AM"
            else if (time.includes("12:30 PM")) time = "PM"
            else time = "Any"
            emailTag = "1051"


            switch (true) {
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
            }




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
            while (!document.getElementsByClassName("emlSendResult")[0]) {
                await new Promise(r => setTimeout(r, 10));
                console.log("waiting for send")
            }
            document.getElementsByClassName("ui-button-text")[2].click()
            location.reload()
        });
    }
}