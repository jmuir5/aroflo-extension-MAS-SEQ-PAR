window.addEventListener("load", async()=>{


    
    var dismissed = false
    while(true&&!dismissed){
        var assetName = document.getElementById("assetName")
        var scheduledTechs = document.getElementsByClassName("schedResource afDataTable__row--non-hover")
        if(!assetName.value.includes("Fridge")){
            await new Promise(r => setTimeout(r, 1000));
            continue
        }
        console.log("fridge detected")
        if(scheduledTechs.length==0){
            await new Promise(r => setTimeout(r, 1000));
            continue
        }

        for(let index = 0; index< scheduledTechs.length; index++){
            var tech = scheduledTechs[index]
            console.log(tech)
            var deleted = tech.getAttribute("deleted");
            console.log(deleted)
            if(
                !deleted==1&&
                (tech.childNodes[1].innerText.includes("Vini")||
                tech.childNodes[1].innerText.includes("Otavio")||
                tech.childNodes[1].innerText.includes("Benji")||
                tech.childNodes[1].innerText.includes("Eduardo"))
            ){
                console.log("bad tech detected")

                if (confirm(tech.childNodes[1].innerText + " is unable to repair fridges, are you sure you want to make this booking?")) {
                    dismissed=true
                    break
                } else {
                    tech.childNodes[9].children[0].click()
                }

            }

        }
        console.log("loop finished")

        await new Promise(r => setTimeout(r, 1000));

        
        
    }
    /*
    console.log("extras loaded")
    const saveBtn = document.getElementById("btnAddRequest")

    

    
    const fridgeCheck = function(){
        console.log("function started")
        


        
        if(assetName.value.includes("Fridge")){
            console.log("fridge detected")

            for(let tech in scheduledTechs){
                if(
                    tech.childNodes[1].innerText.includes("Vini")||
                    tech.childNodes[1].innerText.includes("Otavio")||
                    tech.childNodes[1].innerText.includes("Benji")||
                    tech.childNodes[1].innerText.includes("Eduardo")
                ){
                    console.log("bad tech detected")

                    if (confirm("One or more technicians chosen are unable to repair fridges, are you sure you want to make this booking?")) {
                        //txt = "You pressed OK!";
                      } else {
                        
                      }
                    break
                }

            }
        }
    }

    saveBtn.addEventListener("click", fridgeCheck(assetName, scheduledTechs))
    console.log("event listener added")
*/

    
})