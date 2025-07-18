//enquirey buttons, cancel buttons, assign button
window.addEventListener('load', async() => {
    console.log("quick notes loaded")
    
    //archive part 2 execution
    console.log("checking flag")
    chrome.storage.sync.get("archiveFlag", async ({ archiveFlag }) => {
        chrome.storage.sync.get("autoArchiveTag", async ({ autoArchiveTag }) => {

            if(archiveFlag>0){
                console.log("flag good")

                chrome.storage.sync.set({ archiveFlag: archiveFlag-1})
                document.getElementById("archive_btn").click()
            }
        })
    })


    
    while(!document.getElementsByClassName("afNoteWidget__header margin-top--2")[0]||!document.getElementsByClassName("pageViewTask__signature")[0]){
        await new Promise(r => setTimeout(r, 10));
    }
    const noteBar = document.getElementsByClassName("afNoteWidget__header margin-top--2")[0]
    //common cust enquirey buttons buttons
    var quickNotesDiv = document.createElement('DIV')
    var quickActionsDiv = document.createElement('DIV')


    var templateButton = document.createElement('BUTTON')
    templateButton.type="button"
    templateButton.classList = "afBtn afBtn--small afBtn__fill af-primary margin-right--1 headerItemSpacing"
    
    var feesChargesButton = templateButton.cloneNode()
    feesChargesButton.appendChild(document.createTextNode("Fees & Charges"))
    feesChargesButton.id = "feesChargesButton"


    var custEtaButton = templateButton.cloneNode()
    custEtaButton.appendChild(document.createTextNode("ETA"))
    custEtaButton.id="custEtaButton"
    
    var custCompButton = templateButton.cloneNode()
    custCompButton.appendChild(document.createTextNode("Complaints"))
    custCompButton.id="custCompButton"

    var custReschedButton = templateButton.cloneNode()
    custReschedButton.appendChild(document.createTextNode("Rescheduling"))
    custReschedButton.id="custReschedButton"

    var emailBouncedButton = templateButton.cloneNode()
    emailBouncedButton.appendChild(document.createTextNode("Email Bounced"))
    emailBouncedButton.id="emailBouncedButton"

    var allPtsRcvdButton = templateButton.cloneNode()
    allPtsRcvdButton.appendChild(document.createTextNode("Notify Parts received"))
    allPtsRcvdButton.id="allPtsRcvdButton"

    var emailDSSPartsButton = templateButton.cloneNode()
    emailDSSPartsButton.appendChild(document.createTextNode("PP enquirey DSS"))
    emailDSSPartsButton.id="emailDSSPartsButton"
    
    
    //confContainerDiv.after(custContainerDiv)
    noteBar.children[0].after(quickActionsDiv)
    noteBar.children[0].after(quickNotesDiv)

    quickNotesDiv.appendChild(document.createTextNode("Quick Notes: "))
    quickNotesDiv.appendChild(custEtaButton)
    quickNotesDiv.appendChild(feesChargesButton)
    quickNotesDiv.appendChild(custCompButton)
    quickNotesDiv.appendChild(custReschedButton)
    quickActionsDiv.appendChild(document.createTextNode("Quick actions: "))

    quickActionsDiv.appendChild(emailBouncedButton)
    quickActionsDiv.appendChild(allPtsRcvdButton)
    quickActionsDiv.appendChild(emailDSSPartsButton)

    // fit parts job type only//if(document.getElementsByClassName("afDataTable__cell--non-numeric afDataTable__sub-header padding-top--2")[1].innerText.includes("Fit Parts")){}
    
    var custFunction = function(text){
        document.getElementById("btnAddNoteText").click()
        document.getElementById("thisnote").value = text
        
        //document.getElementById("btnAddNote").click()
    }

    var partsFunction = async function(){
        if (confirm("Have you read all the notes on the job?") == true) {
            if (confirm("Has a date been selected?") == true) {
                let tennanted = document.getElementsByClassName("afDataTable__cell--non-numeric")[23].innerHTML.includes("btnSendSMS afBtn af-info afIconBtn afBtn--small")
                var clientTextID = "1397"
                if(tennanted) clientTextID = "1402"
                var tennantTextID = "1397"

                
                //client sms
                document.getElementById("btnSendSms-0").click()
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
                    
                    if(document.getElementById(clientTextID)){
                        document.getElementById(clientTextID).click()
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
        
                document.getElementById("btnSendSMSmessage").click()
                document.getElementsByClassName("ui-dialog-titlebar-close ui-corner-all")[0].click()
                while(document.getElementById("ui-dialog-title-1")){
                    await new Promise(r => setTimeout(r, 10));
                    console.log("waiting for sms dialogue to close")
                }

                if(tennanted){
                    //TENNANT SMS
                    document.getElementById("btnSendSms-1").click()
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
                        
                        if(document.getElementById(tennantTextID)){
                            document.getElementById(tennantTextID).click()
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
            
                    document.getElementById("btnSendSMSmessage").click()
                    document.getElementsByClassName("ui-dialog-titlebar-close ui-corner-all")[0].click()
                    while(document.getElementById("ui-dialog-title-1")){
                        await new Promise(r => setTimeout(r, 10));
                        console.log("waiting for sms dialogue to close")
                    }
                }

                document.getElementById("customiseLayout").click()
        
                while (!document.getElementById("TrackEmailYesNo")) {
                    await new Promise(r => setTimeout(r, 10));
                    console.log("waiting for category close")
                }
        
                document.getElementById("TrackEmailYesNo").click()
                document.getElementById("btnSearchEmailTemplates").click()
        
                var table =document.getElementsByClassName("ui-jqgrid-btable")
        
                while(true){
                    while (!document.getElementsByClassName("jqgfirstrow")[0]) {
                        await new Promise(r => setTimeout(r, 10));
                        console.log("waiting for templates to load")
                    }
                    if(document.getElementById("1398")){
                        document.getElementById("1398").click()
                        document.getElementById("btnSelect").click()
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
        
                while (!document.getElementById("ToSubject").value.includes("Tentative")) {
                    await new Promise(r => setTimeout(r, 10));
                    console.log("waiting for load")
                }
        
                await new Promise(r => setTimeout(r, 500));
                if(document.getElementById("TrackEmailYesNo").checked)document.getElementById("TrackEmailYesNo").click()
                if(document.getElementById("RequestReadReceipt").checked)document.getElementById("RequestReadReceipt").click()
                if(!document.getElementById("allowReplyImports").checked)document.getElementById("allowReplyImports").click()
                if(document.getElementById("trackDeliveryStatus").checked)document.getElementById("trackDeliveryStatus").click()
                console.log("done2")
                while (document.getElementsByClassName("afToast__text")[0].innerHTML!='Email successfully sent to recipient') {
                    await new Promise(r => setTimeout(r, 10));
                    console.log("waiting for send")
                }
                //document.getElementsByClassName("ui-button-text")[2].click()
                
        
                document.getElementById("update_btn").click()
            } 
        }
          
        //document.getElementById("update_btn").click()
    }

    var emailBouncedFunction = async function(){
        if(confirm("Send customer email bounced text?")){
            var templateId = "1432"
            document.getElementById("btnSendSms-0").click()
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
                    else document.getElementsByClassName("af-pg-button")[2].click()
                    
                }
                await new Promise(r => setTimeout(r, 10))
            }
            while (document.getElementById("message_value").value.length<100) {
                await new Promise(r => setTimeout(r, 10));
                console.log("waiting for sms template to load")
            }
            document.getElementById("btnSendSMSmessage").click()
            document.getElementsByClassName("ui-dialog-titlebar-close ui-corner-all")[0].click()
            while(document.getElementById("ui-dialog-title-1")){
                await new Promise(r => setTimeout(r, 10));
                console.log("waiting for sms dialogue to close")
            }
            await new Promise(r => setTimeout(r, 1000));
            document.getElementsByClassName("afBtn afBtn--small afBtn__fill af-primary btnRefreshNotes headerItemSpacing")[0].click()
        }
    }

    var partEnqDSSFunction = async function(){
        var emailTemplateID = "1360"
        document.getElementById("customiseLayout").click()
        while (!document.getElementById("TrackEmailYesNo")) {
            await new Promise(r => setTimeout(r, 10));
            console.log("waiting for email to open")
        }

        document.getElementById("btnSearchEmailTemplates").click()

        var table = document.getElementsByClassName("ui-jqgrid-btable")

        while(true){
            while (!document.getElementsByClassName("jqgfirstrow")[0]) {
                await new Promise(r => setTimeout(r, 10));
                console.log("waiting for templates to load")
            }
            if(document.getElementById(emailTemplateID)){
                document.getElementById(emailTemplateID).click()
                document.getElementById("btnSelect").click()
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

        while (!document.getElementById("ToSubject").value.includes("Inquiry")) {
            await new Promise(r => setTimeout(r, 10));
            console.log("waiting for load")
        }

        await new Promise(r => setTimeout(r, 500));
        document.getElementById("ToArea").value = "trade@dougsmithspares.com.au"
        if(document.getElementById("TrackEmailYesNo").checked)document.getElementById("TrackEmailYesNo").click()
        if(document.getElementById("RequestReadReceipt").checked)document.getElementById("RequestReadReceipt").click()
        if(!document.getElementById("allowReplyImports").checked)document.getElementById("allowReplyImports").click()
        if(document.getElementById("trackDeliveryStatus").checked)document.getElementById("trackDeliveryStatus").click()
        console.log("done2")

        document.getElementsByClassName("afBtn afBtn__fill af-primary afBtn--small afBtn--text-icon ui-button-text-icon-secondary")[1].dispatchEvent(new MouseEvent('mouseover', { 'bubbles': true }));
        document.getElementsByClassName("afBtnMenu__menuItem")[15].click()

        while (!document.getElementsByClassName("jqgfirstrow")[0]) {
            await new Promise(r => setTimeout(r, 10));
            console.log("waiting for task documents to load")
        }
        var headRow = document.getElementsByClassName("jqgfirstrow")[0]
        while (headRow.parentElement.children.length<2) {
            await new Promise(r => setTimeout(r, 10));
            console.log("waiting for task documents to load")
        }
        for (let index = 0; index < headRow.parentElement.children.length; index++) {
            headRow.parentElement.children[index].click()
        } 

        document.getElementsByClassName("ui-dialog-titlebar-close ui-corner-all")[1].click()




        while (document.getElementsByClassName("afToast__text")[0].innerHTML!='Email successfully sent to recipient') {
            await new Promise(r => setTimeout(r, 10));
            console.log("waiting for send")
        }
        //document.getElementsByClassName("ui-button-text")[2].click()
        

        //document.getElementById("update_btn").click()
    }


    custEtaButton.addEventListener("click", function(){custFunction("cust called for part ETA, email sent to supplier/forwarded to spare parts/forwarded to technician/cust was informed of"+
        " expected delivery date")})
    feesChargesButton.addEventListener("click", function(){custFunction("Fees & Charges explained to customer for non warranty issues")})
    custCompButton.addEventListener("click", function(){custFunction("cust called to complain, customer had valid problems/rambled incoherently/had their expectations adjusted/should be "+
        "relegated to the mental asylum")})
    custReschedButton.addEventListener("click", function(){custFunction("cust called to reschedule from XXX to XXX. Reason: XXX")})
    
    emailBouncedButton.addEventListener("click", function(){emailBouncedFunction()})

    allPtsRcvdButton.addEventListener("click", function(){partsFunction()})

    emailDSSPartsButton.addEventListener("click", function(){partEnqDSSFunction()})


    console.log("note buttons loaded")


    //Extra Buttons
    const extraButtonSpace = document.getElementsByClassName("pageViewTask__signature")[0]

    //postponement button
    var postponeLabel = document.createElement('div')
    postponeLabel.appendChild(document.createTextNode("Postpone job"))
    var postponeButton = document.createElement('BUTTON')
    postponeButton.appendChild(document.createTextNode("Postpone Job"))
    postponeButton.type="button"
    postponeButton.id="postponeButton"
    postponeButton.classList = "afBtn afBtn__fill af-success padding-x--6"
    

    var postponeContainerDiv = document.createElement('DIV')
    if(document.getElementsByClassName("schedule-item").length>0)extraButtonSpace.appendChild(postponeContainerDiv)
   

    postponeContainerDiv.appendChild(postponeLabel)
    postponeContainerDiv.appendChild(postponeButton)
    postponeButton.addEventListener("click", async function(){
        document.getElementById("btnAddNoteText").click()
        document.getElementById("thisnote").value = "Job postponed per customers request. customer to call and reschedule when ready."
        document.getElementById("selectedTaskSubstatus").value = '605'

        document.getElementById("btnAddNote").click()
        var jobNumber = document.getElementsByClassName("afDataTable__cell--non-numeric afDataTable__sub-header")[3].textContent.split(' ')
        jobNumber = jobNumber[jobNumber.length-1]
        chrome.storage.sync.set({ CancelTag: jobNumber})
        document.getElementById("schedule-item-1").click()
        while(true){
            
            chrome.storage.sync.get("CancelTag", async ({ CancelTag }) => {jobNumber=CancelTag})
            if(jobNumber==0){
                document.getElementById("update_btn").click()
                break
            }
            await new Promise(r => setTimeout(r, 10));
            
        }
    
    })



    //cancellation buttons
    var cancelContainerDiv = document.createElement('DIV')
    var cancelEmailButton = document.createElement('BUTTON')
    var cancelPhoneButton = document.createElement('BUTTON')
    var cancelMessageButton = document.createElement('BUTTON')
    var cancelSilentlyButton = document.createElement('BUTTON')

    var cancelLabel = document.createElement('div')

    cancelEmailButton.appendChild(document.createTextNode("Email"))
    cancelPhoneButton.appendChild(document.createTextNode("Phone"))
    cancelMessageButton.appendChild(document.createTextNode("Message"))
    cancelSilentlyButton.appendChild(document.createTextNode("Silentely"))

    cancelLabel.appendChild(document.createTextNode("Quick Cancel and archive via:  "))

    cancelEmailButton.type="button"
    cancelPhoneButton.type="button"
    cancelMessageButton.type="button"
    cancelSilentlyButton.type="button"


    cancelEmailButton.id="cancelEmailButton"
    cancelPhoneButton.id="cancelPhoneButton"
    cancelMessageButton.id="cancelMessageButton"
    cancelSilentlyButton.id="cancelSilentleyButton"


    cancelEmailButton.classList = "afBtn afBtn__fill af-warn editNoteDelete margin-right--1 headerItemSpacing"
    cancelPhoneButton.classList = "afBtn afBtn__fill af-warn editNoteDelete margin-right--1 headerItemSpacing"
    cancelMessageButton.classList = "afBtn afBtn__fill af-warn editNoteDelete margin-right--1 headerItemSpacing"
    cancelSilentlyButton.classList = "afBtn afBtn__fill af-warn editNoteDelete margin-right--1 headerItemSpacing"

    
    if(document.getElementsByClassName("schedule-item").length>0) extraButtonSpace.appendChild(cancelContainerDiv)
    cancelContainerDiv.appendChild(cancelLabel)
    cancelContainerDiv.appendChild(cancelEmailButton)
    cancelContainerDiv.appendChild(cancelPhoneButton)
    cancelContainerDiv.appendChild(cancelMessageButton)
    cancelContainerDiv.appendChild(cancelSilentlyButton)

    
    

    var cancelFunction = async function(text){
        const cancelText = "Job cancelled via "
        if(confirm("Are you sure you want to cancel and archive this job?")){
            document.getElementById("btnAddNoteText").click()
            document.getElementById("thisnote").value = cancelText+text
            document.getElementById("btnAddNote").click()
            var jobNumber = document.getElementsByClassName("afDataTable__cell--non-numeric afDataTable__sub-header")[3].textContent.split(' ')
            jobNumber = jobNumber[jobNumber.length-1]
            chrome.storage.sync.set({ CancelTag: jobNumber})
            document.getElementById("schedule-item-1").click()
            while(true){
                
                chrome.storage.sync.get("CancelTag", async ({ CancelTag }) => {jobNumber=CancelTag})
                if(jobNumber==0){
                    console.log("archiving job")
                    chrome.storage.sync.set({ archiveFlag: 1})
                
                    const checkboxes = document.getElementsByClassName("afDataTable__row--hover trCompliance af-warn lTR")
                    for(let i=0;i<checkboxes.length;i++){
                        checkboxes[i].children[9].children[0].children[0].click()
                    }
                    document.getElementById("selectedTaskStatus").value=3
                    //send text
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
                        if(document.getElementById("1353")){
                            document.getElementById("1353").click()
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
                    document.getElementById("message_value").value= document.getElementById("message_value").value.replaceAll('*branch*', branch.replace("MAS > ", ""))
                    document.getElementById("message_value").value= document.getElementById("message_value").value.replaceAll('*branch number*', branchNumber)

                    document.getElementById("btnSendSMSmessage").click()
                    document.getElementById("btnSendSMSmessage").parentElement.parentElement.parentElement.getElementsByClassName("ui-icon ui-icon-closethick")[0].click()
                    
                    //email code
                    document.getElementById("customiseLayout").click()

                    while (!document.getElementById("TrackEmailYesNo")) {
                        await new Promise(r => setTimeout(r, 10));
                        console.log("waiting for category close")
                    }
                    let emailTag = "1425"
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

                    while (!document.getElementById("ToSubject").value.includes("Job Cancelled")) {
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


                    document.getElementById("update_btn").click()
                    break
                }
                await new Promise(r => setTimeout(r, 10));
                
            }
        }


    }

    var cancelSilentleyFunction = async function(){
        const cancelText = "Job cancelled Silently, no message was sent to the customer."
        if(confirm("Are you sure you want to cancel and archive this job silently? no message will be sent to the customer?")){
            document.getElementById("btnAddNoteText").click()
            document.getElementById("thisnote").value = cancelText
            document.getElementById("btnAddNote").click()
            var jobNumber = document.getElementsByClassName("afDataTable__cell--non-numeric afDataTable__sub-header")[3].textContent.split(' ')
            jobNumber = jobNumber[jobNumber.length-1]
            chrome.storage.sync.set({ CancelTag: jobNumber})
            document.getElementById("schedule-item-1").click()
            while(true){
                
                chrome.storage.sync.get("CancelTag", async ({ CancelTag }) => {jobNumber=CancelTag})
                if(jobNumber==0){
                    console.log("archiving job")
                    chrome.storage.sync.set({ archiveFlag: 1})
                
                    const checkboxes = document.getElementsByClassName("afDataTable__row--hover trCompliance af-warn lTR")
                    for(let i=0;i<checkboxes.length;i++){
                        checkboxes[i].children[9].children[0].children[0].click()
                    }
                    document.getElementById("selectedTaskStatus").value=3
                    
                    document.getElementById("update_btn").click()
                    break
                }
                await new Promise(r => setTimeout(r, 10));
                
            }
        }


    }

    cancelEmailButton.addEventListener("click", function(){cancelFunction("Email")})
    cancelPhoneButton.addEventListener("click", function(){cancelFunction("phone")})
    cancelMessageButton.addEventListener("click", function(){cancelFunction("message")})
    cancelSilentlyButton.addEventListener("click", function(){cancelSilentleyFunction()})

    console.log("cancel buttons loaded")


    //assign button
    var assignLabel = document.createElement('div')
    assignLabel.appendChild(document.createTextNode("Assign technicians to job:"))
    var assignButton = document.createElement('BUTTON')
    assignButton.appendChild(document.createTextNode("Assign"))
    assignButton.type="button"
    assignButton.id="assignButton"
    assignButton.classList = "afBtn afBtn__fill af-success padding-x--6"
    
    var assignContainerDiv = document.createElement('DIV')
    extraButtonSpace.appendChild(assignContainerDiv)
   

    cancelContainerDiv.appendChild(assignLabel)
    cancelContainerDiv.appendChild(assignButton)

    assignButton.addEventListener("click", async function(event){
        var techlist = []
        var selectedTechs = document.getElementsByClassName("afControl__display")[0].children[0].children
        
        if(document.getElementById("assignedUsersArea")){
            if(document.getElementById("assignedUsersArea").children.length>0){
                var l1=document.getElementById("assignedUsersArea").children.length
                offset=0
                for(let i = 0; i < l1; i+=2){
                    if(document.getElementById("assignedUsersArea").children[0].children[0].children[0].innerText=='Premium Appliance Repair'||
                        document.getElementById("assignedUsersArea").children[0].children[0].children[0].innerText=='Master Appliance Service'||
                        document.getElementById("assignedUsersArea").children[0].children[0].children[0].innerText=='SEQ Appliance Repair')break
                
                    var thisItem = document.getElementById("assignedUsersArea").children[0+offset].children[0].children
                    thisItem[thisItem.length-1].click()
                    offset++
                    
                }
            }
        }

        for(let i = 0; i < selectedTechs.length; i++){
            techlist+= selectedTechs[i].children[0].children[1].innerText.slice(0, -1)
        }
        console.log(techlist)

        document.getElementById("btnAssignResources").click()
        while(document.getElementsByClassName("ui-jqgrid-btable")[0].children[0].children.length<=1){
            await new Promise(r => setTimeout(r, 10));
            console.log("waiting for asign to load")
        }
        var assignList = document.getElementsByClassName("ui-jqgrid-btable")[0].children[0].children
        var counter = 0
        for(let i = 0; i < assignList.length; i++){
            if(counter==techlist.length)break
            if(techlist.includes(assignList[i].children[3].innerText)){
                assignList[i].click()
                counter+=1
            }
        }
        document.getElementById("btnSelect").click()
        document.getElementsByName("update_btn")[0].click()
    })

    console.log("assign buttons loaded")

    
    //archive button
    var archiveLabel = document.createElement('div')
    archiveLabel.appendChild(document.createTextNode("Fast Archive"))
    var archiveButton = document.createElement('BUTTON')
    archiveButton.appendChild(document.createTextNode("Archive Job"))
    archiveButton.type="button"
    archiveButton.id="archiveButton"
    archiveButton.classList = "afBtn afBtn__fill af-success padding-x--6"
    

    var archiveContainerDiv = document.createElement('DIV')
    if(!(document.getElementById("archive_btn")||document.getElementsByClassName("afBanner af-warn")[0].innerText == "Archived"||document.getElementsByClassName("schedule-item").length>0))extraButtonSpace.appendChild(archiveContainerDiv)
   

    archiveContainerDiv.appendChild(archiveLabel)
    archiveContainerDiv.appendChild(archiveButton)
    archiveButton.addEventListener("click", async function(){
        if(confirm("Are you sure you want to archive this job?")){
            console.log("archiving job")
            chrome.storage.sync.set({ archiveFlag: 1})
        
            const checkboxes = document.getElementsByClassName("afDataTable__row--hover trCompliance af-warn lTR")
            for(let i=0;i<checkboxes.length;i++){
                checkboxes[i].children[9].children[0].children[0].click()
            }
            document.getElementById("selectedTaskStatus").value=3
            document.getElementById("update_btn").click()
        }
    
    })
    console.log("archive buttons loaded")
})


async function schedConfirm(){ //legacy
    window.removeEventListener("visibilitychange", (event) => {
        if (document.visibilityState == "visible" && fired == false) {
            fired = true
            schedConfirm()
        } 
      })
    if (confirm("Was a date selected?") == true) {
        document.getElementById("btnSendSms-0").click()
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
            
            if(document.getElementById("1397")){
                document.getElementById("1397").click()
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

        document.getElementById("btnSendSMSmessage").click()
        document.getElementById("customiseLayout").click()

        while (!document.getElementById("TrackEmailYesNo")) {
            await new Promise(r => setTimeout(r, 10));
            console.log("waiting for category close")
        }

        document.getElementById("TrackEmailYesNo").click()
        document.getElementById("btnSearchEmailTemplates").click()

        var table =document.getElementsByClassName("ui-jqgrid-btable")

        while(true){
            while (!document.getElementsByClassName("jqgfirstrow")[0]) {
                await new Promise(r => setTimeout(r, 10));
                console.log("waiting for templates to load")
            }
            if(document.getElementById("1398")){
                document.getElementById("1398").click()
                document.getElementById("btnSelect").click()
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

        while (!document.getElementById("ToSubject").value.includes("Tentative")) {
            await new Promise(r => setTimeout(r, 10));
            console.log("waiting for load")
        }

        await new Promise(r => setTimeout(r, 500));
        if(document.getElementById("TrackEmailYesNo").checked)document.getElementById("TrackEmailYesNo").click()
        if(document.getElementById("RequestReadReceipt").checked)document.getElementById("RequestReadReceipt").click()
        if(!document.getElementById("allowReplyImports").checked)document.getElementById("allowReplyImports").click()
        if(document.getElementById("trackDeliveryStatus").checked)document.getElementById("trackDeliveryStatus").click()
        console.log("done2")
        while (document.getElementsByClassName("afToast__text")[0].innerHTML!='Email successfully sent to recipient') {
            await new Promise(r => setTimeout(r, 10));
            console.log("waiting for send")
        }
        //document.getElementsByClassName("ui-button-text")[2].click()
        

        document.getElementById("update_btn").click()
    } 
}


function partsFunctionLegacy(){
    if (confirm("Have you read all the notes on the job?") == true) {
        document.getElementById("btnAddNoteText").click()
        var currentTech = document.getElementsByClassName("afDataTable__cell--non-numeric")[25].innerText
        var suffix = "put in techs box"
        var sendTechs = ["John Sleap","Otavio Palharini","Gee Cruz","Tulio Pereira","Vini Moura"]
        if(sendTechs.includes(currentTech)){
            suffix = "sent to tech"
        }
        document.getElementById("thisnote").value = "Parts received, "+suffix
        if(document.getElementsByClassName("compNewActionOrder")[0].parentElement.innerText=='Parts Received - Ready to be scheduled'){
            document.getElementsByClassName("compNewActionOrder")[0].parentElement.parentElement.children[7].children[0].children[0].click()
        }
        if(document.getElementsByClassName("compNewActionOrder")[1].parentElement.innerText=='Parts scheduled with Client to be fitted'){
            document.getElementsByClassName("compNewActionOrder")[1].parentElement.parentElement.children[7].children[0].children[0].click()
        }
        document.getElementById("selectedTaskSubstatus").value = 352
        chrome.storage.sync.set({ PartsTag: currentTech})
        

        window.open(document.getElementsByClassName("afBtn afBtn--small af-info all-schedules")[0].href)
        var fired = false
        document.addEventListener("visibilitychange", (event) => {
            if (document.visibilityState == "visible" && fired == false) {
                fired = true
                schedConfirm()
            } 
          });
        //window.addEventListener("focus", schedConfirm)

    }
      
    //document.getElementById("update_btn").click()
}