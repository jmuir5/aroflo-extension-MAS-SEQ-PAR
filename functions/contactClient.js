//import SendTextFunction from "./sendText.js"

export default async function ContactClient(flag) {
    const { default: SendTextFunction } = await import(
        chrome.runtime.getURL("/functions/sendText.js")
    );
    const { default: SendEmailFunction } = await import(
        chrome.runtime.getURL("/functions/sendEmail.js")
    );
    if(document.getElementsByClassName("schedule-item-date").length<1){
        alert("It looks like this job as not been scheuled. Please check the information in the email is correct.")
    }

    if (flag==0||flag==2){
        console.log("sending text")
        var textTag = "1232"
        if( document.getElementsByClassName("afDataTable__cell--non-numeric afDataTable__sub-header padding-top--2")[1].innerText.includes("Warranty")){
            textTag = "1546"
        }
        var branch = document.getElementsByClassName("afDataTable__cell--non-numeric ownerEditMode")[0].innerText
        var method = ""
        if(document.getElementsByTagName("select")[2].value=="Online Booking"){
            method = "online "
        }

        let smsButton = document.getElementsByClassName("btnSendSMS afBtn af-info afIconBtn afBtn--small")[0]//.click()

        try {
            await SendTextFunction(textTag, smsButton, async ()=>{
                
            })
            
        } catch (error) {
            console.log(error)
        }
        if(document.getElementById("locationLink").children.length>2){
            console.log("location set")
            let smsButton2 = document.getElementsByClassName("btnSendSMS afBtn af-info afIconBtn afBtn--small")[1]
            try{
                await SendTextFunction(textTag, smsButton2, async ()=>{
                })
            }
            catch (error) {
                console.log(error)
            }
        }

    }
    if (flag==0||flag==1){//email code
        console.log("emailing client")

        
        let emailTag = "1430"

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

        let emailButton = document.getElementById("customiseLayout")

        try {
            await SendEmailFunction(emailTag, emailButton, ()=>{})
        } catch (error) {
            console.log(error)
        }
    }
    await new Promise(r => setTimeout(r, 1000));
    document.getElementsByClassName("afBtn afBtn--small afBtn__fill af-primary btnRefreshNotes headerItemSpacing")[0].click()
}

//export default ContactClient;


