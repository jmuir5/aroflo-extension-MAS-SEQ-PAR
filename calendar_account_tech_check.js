let approvedTechnicians = ["Eduardo", "Doug", "Luiz", "Vini", "Otavio", "Sam", "Leo", "Pavel", "Mark", "Arpan", "Ron", "Tony"]
let approvedTechRegex = new RegExp( approvedTechnicians.join( "|" ), "i");

window.addEventListener('load', async() => {
    var dismissed = false
    while(true){
        while(!document.getElementsByClassName("afTextfield__display--small schTaskType").length>0){
            dismissed = false
            await new Promise(r => setTimeout(r, 1000))
        }
        if(!dismissed){
            let taskType = document.getElementsByClassName("afTextfield__display--small schTaskType")[0].innerHTML
            let accountRegex = new RegExp( "account", "i");
            if(accountRegex.test(taskType)){   
                var scheduledTechs = document.getElementsByClassName("schedResource afDataTable__row--non-hover")
                if(scheduledTechs.length==0){
                    await new Promise(r => setTimeout(r, 1000));
                    console.log("no techs detected")
                    continue
                }
                for(let index = 0; index< scheduledTechs.length; index++){
                    var tech = scheduledTechs[index]
                    console.log(tech)
                    var deleted = tech.getAttribute("deleted");
                    console.log(deleted)
                    if(
                        !deleted==1 && !approvedTechRegex.test(tech.childNodes[1].innerText)
                    ){
                        if (confirm(tech.childNodes[1].innerText + " is not approved for real estate jobs, are you sure you want to book this technician for this job?")) {
                            dismissed=true
                            break
                        } else {
                            alert("The following techs are approved for Real Estate and Account jobs: \n" + approvedTechnicians.join(", "))
                            tech.childNodes[9].children[0].click()
                            console.log("alt path")                        
                        }
                        
                        
                    }
                }
            }
        }

        await new Promise(r => setTimeout(r, 1000))
    }
})