//code for adding am/pm/any buttons
window.addEventListener('load', async() => {
    var capitalFlag=0
    while(true){
        //code for adding am/pm/any buttons
        if (document.getElementsByClassName("imsMultiSchedule__settings afPageBox--contrast")[0]&&!document.getElementById("amButton")) {
            console.log("success time buttons")
            const schedBlock = document.getElementsByClassName("imsMultiSchedule__settings afPageBox--contrast")[0]
            var amButton = document.createElement('BUTTON')
            var pmButton = document.createElement('BUTTON')
            var anyButton = document.createElement('BUTTON')

            var amText = document.createTextNode("AM")
            var pmText = document.createTextNode("PM")
            var anyText = document.createTextNode("ANY")
        
            amButton.appendChild(amText)
            pmButton.appendChild(pmText)
            anyButton.appendChild(anyText)

            amButton.type="button"
            pmButton.type="button"
            anyButton.type="button"

            amButton.id="amButton"
            pmButton.id="pmButton"
            anyButton.id="anyButton"

            
            schedBlock.appendChild(document.createElement('BR'))
            schedBlock.appendChild(amButton)
            schedBlock.appendChild(pmButton)
            schedBlock.appendChild(anyButton)
            var branch = 0

            var setTimeFunc = async function(time){
                var branchTemplate = ""
                var start = ""
                var end = ""
                switch(time){
                    case "AM": 
                        start = "8:30am"
                        end = "12:30pm"
                        break
                    case "PM":
                        start = "12:30pm"
                        end = "5:30pm"
                        break
                    case "ANY":
                        start = "9:00am"
                        end = "5:00pm"
                        break
                }
                var status = "confirmed"
                var techlist = []
                var selectedTechs = document.getElementsByClassName("schedResources afDataTable afDataTable--compact")[0].children[0].children
                //unassign assigned techs
                if(document.getElementById("assignedUsersArea")){
                    if(document.getElementById("assignedUsersArea").children.length>0){
                        var l1=document.getElementById("assignedUsersArea").children.length
                        for(let i = 0; i < l1; i++){
                            document.getElementById("assignedUsersArea").children[0].children[0].children[1].click()
                        }
                    }
                }
                //set time for all technicians
                if(document.getElementsByClassName("schedResources afDataTable afDataTable--compact"))
                if(document.getElementById("_Cust299")) { //mas
                    branch = document.getElementById("_Cust299")
                    branchTemplate = "1342"
                }
                else if(document.getElementById("_Cust300")){ //premium
                    branch = document.getElementById("_Cust300")
                    branchTemplate = "1343"
                } 
                else if(document.getElementById("_Cust301")){ //seq
                    branch = document.getElementById("_Cust301")
                    branchTemplate = "1344"
                } 
                else if(document.getElementById("_Cust???")){ //bunnies todo
                    branch = document.getElementById("_Cust???")
                    branchTemplate = "1345"
                }
                for(let i = 0; i < selectedTechs.length; i++){
                    if(selectedTechs[i].getAttribute("deleted")==1)continue
                    techlist+= selectedTechs[i].children[1].children[0].innerText
                    selectedTechs[i].children[2].children[0].value=start
                    selectedTechs[i].children[3].children[0].value=end
                    if(branch){
                        if(branch.value == "Online Booking") status = "unconfirmed"
                    }
                    selectedTechs[i].children[4].children[0].value=status
                }
                //assign tech
                if(document.getElementById("btnAssignResources")){
                    document.getElementById("btnAssignResources").click()
                    while(document.getElementsByClassName("ui-jqgrid-btable")[0].children[0].children.length<=1){
                        await new Promise(r => setTimeout(r, 10));
                        console.log("waiting for asign to load")
                    }
                    var assignList = document.getElementsByClassName("ui-jqgrid-btable")[0].children[0].children
                    var counter = 0
                    console.log(assignList.length)
                    
                    
                    
                    for(let i = 0; i < assignList.length; i++){
                        if(counter==techlist.length)break
                        if(techlist.includes(assignList[i].children[3].innerText)){
                            assignList[i].click()
                            counter+=1
                        }
                    }
                    document.getElementById("btnSelect").click()
                }
                //set event reminder
                /*if(document.getElementById("addReminderMenu_1")){
                    var closeIndex = 0
                    if(branchTemplate == ""){
                        switch(document.getElementsByClassName("afHeader__business-unit-menu afBtn__fill")[0].innerText){
                            case "Master Appliance Service":
                                branchTemplate = "1342"
                                break
                            case "Premium Appliance Repair":
                                branchTemplate = "1343"
                                break
                            case "SEQ Appliance Repair":
                                branchTemplate = "1344"
                                break
                            case "Bunneys Appliances":
                                branchTemplate = "1345"
                                break
                                                
                        }
                        closeIndex = 1
                    }
                    var branchName = ""
                    switch(branchTemplate){
                        case "1342":
                            branchName = "MasterAppli"
                            break
                        case "1343":
                            branchName = "PremiumAppl"
                            break
                        case "1344":
                            branchName = "SeqApplianc"
                            break
                        case "1345":
                            branchName = "BunneysAppl"
                            break


                    }
                    console.log("started reminder settings")
                    document.getElementById("addReminderMenu_1").click()
                    await new Promise(r => setTimeout(r, 1500));
                    console.log("waiting for event mmessage dialogue to load")
                    if(document.getElementsByClassName("afEventSettingBox afPageBox afPageBox--border").length<5){
                        document.getElementsByClassName("btnAddEventSMS")[0].click()
                    }
                    
                    document.getElementsByClassName("optShowSentHistoryInTaskNotes afCheckbox__input")[0].click()
                    document.getElementsByClassName("from_customemail")[0].value = branchName
                    document.getElementsByClassName("minuteSelect")[0].value = 1440
                    for(let i = document.getElementsByClassName("rowTo").length; i<2;i++){
                        document.getElementsByClassName("btnAddTo")[0].click()
                    }
                    document.getElementsByClassName("selToId toid")[0].value = 4
                    document.getElementsByClassName("selToId toid")[1].value = 11
                    document.getElementsByClassName("afBtn afBtn__fill af-primary afBtn--small").btnAdvSearch.click()
                    while(true){
                        while (!document.getElementsByClassName("jqgfirstrow")[0]) {
                            await new Promise(r => setTimeout(r, 10));
                            console.log("waiting for templates to load")
                        }
                        if(document.getElementById(branchTemplate)){
                            document.getElementById(branchTemplate).click()
                            document.getElementById("btnSelect").click()
                            break
                        }
                        else {
                            if(document.getElementById("1233")){
                                alert("Failed to find correct template")
                                return
                            }
                            else document.getElementsByClassName("af-pg-button")[2].click()
                            
                        }
            
                        await new Promise(r => setTimeout(r, 10))
                    }


                    document.getElementsByClassName("afBtn afBtn__fill af-success btnSaveSettings")[0].click()
                    document.getElementsByClassName("ui-dialog-titlebar-close ui-corner-all")[closeIndex].click()
                    

                }*/

            }

            amButton.addEventListener("click", function(){setTimeFunc("AM")})
            pmButton.addEventListener("click", function(){setTimeFunc("PM")})
            anyButton.addEventListener("click", function(){setTimeFunc("ANY")})

        }
        if(document.getElementById("givennames")&&document.getElementById("surname")&&capitalFlag==0){
            console.log("success names")
            capitalFlag=1
            var fName = document.getElementById("givennames")
            var lName = document.getElementById("surname")
            
            fName.oninput=()=>{
                fName.value = fName.value.charAt(0).toUpperCase() + fName.value.slice(1);
            }

            lName.oninput=()=>{
                lName.value = lName.value.charAt(0).toUpperCase() + lName.value.slice(1);
            }

        }
        if(!document.getElementById("givennames")&&!document.getElementById("surname")&&capitalFlag==1){
            capitalFlag=0
        }
        
        await new Promise(r => setTimeout(r, 10));
        //console.log("sleeping2")
        
        
    }
  })