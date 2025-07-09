var earlyStarters = ["David Miles", "Dylan Miles", "Corey Roberts", "Ron Richards", "Luiz Santana", "Douglas Herbert", "Gee Cruz", "Matt Gillard", "Sandy Adhikari", "Benji Le Her", "John Sleap"]


//code for adding am/pm/any buttons
window.addEventListener('load', async() => {
    var capitalFlag=0
    console.log("success time buttons")

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
    amButton.classList.add("amButton")
    pmButton.classList.add("pmButton")
    anyButton.classList.add("anyButton")
    var setTimeFunc = async function(time, node){
        var branch = 0

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
        
        
        var selectedTechs = node.parentElement.getElementsByClassName("schedResources afDataTable afDataTable--compact")[0].children[0].children
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
            console.log("contains gee :"+earlyStarters.some(item=>techlist.includes(item)))//includes("Gee Cruz"))
            console.log("time :"+time)
            if(earlyStarters.some(item=>techlist.includes(item)) && time == "AM") selectedTechs[i].children[2].children[0].value="7:30am"
            
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

    }

    //amButton.addEventListener("click", function(){setTimeFunc("AM", )})
    //pmButton.addEventListener("click", function(){setTimeFunc("PM", 0)})
    //anyButton.addEventListener("click", function(){setTimeFunc("ANY", 0)})
    anyButton.disabled = true

    var indexCounter = 0
    while(true){
        //code for adding am/pm/any buttons
        //if (document.getElementsByClassName("imsMultiSchedule__settings afPageBox--contrast")[0]&&!document.getElementById("amButton")) {

        if (document.getElementsByClassName("imsMultiSchedule__settings afPageBox--contrast").length>0) {
            for(let i = 0; i<document.getElementsByClassName("imsMultiSchedule__settings afPageBox--contrast").length; i++){
                let schedBlock = document.getElementsByClassName("imsMultiSchedule__settings afPageBox--contrast")[i]
                if(schedBlock.getElementsByClassName("amButton").length==0){
                    
                    let thisIndex = Number(indexCounter)
                    schedBlock.appendChild(document.createElement('BR'))
                    schedBlock.appendChild(amButton.cloneNode(true)).addEventListener("click", function(){setTimeFunc("AM", schedBlock)})
                    schedBlock.appendChild(pmButton.cloneNode(true)).addEventListener("click", function(){setTimeFunc("PM", schedBlock)})
                    schedBlock.appendChild(anyButton.cloneNode(true)).addEventListener("click", function(){setTimeFunc("ANY", schedBlock)})
                    indexCounter++
        
                    
                }
            }

            

            //const schedBlock = document.getElementsByClassName("imsMultiSchedule__settings afPageBox--contrast")[0]

           
            

            

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