//ron no cooktop or oven rangehoods
//mark no oven

window.addEventListener("load", async()=>{
    var dismissed = false
    while(true&&!dismissed){
        var assetName = document.getElementById("assetName")
        var scheduledTechs = document.getElementsByClassName("schedResource afDataTable__row--non-hover")
        var tonyFilteredAppliances = ["fridges", "fridge", "freezer"]
        var ronsFilteredAppliances = ["cooktop", "oven", "stove", "rangehood"]
        var marksFilteredAppliances = ["oven"]
        var pavFilteredAppliances = ["microwave", "micro"]
        var andrewFilteredAppliances = ["fridges", "fridge", "freezer", "cooktop", "gas"]
        var mattFilteredAppliances = ["steam oven", "steam",  "cooktop", "gas", "fridges", "fridge", "freezer"]
        var WAFilteredBrands = ["samsung"]
        var philFilteredAppliances = ["microwave", "micro", "oven", "gas", "samsung"]//pavFilteredAppliances // microwaves
        //var trigger = false
        var allFilteredAppliances = ronsFilteredAppliances.concat(tonyFilteredAppliances, marksFilteredAppliances, pavFilteredAppliances)
        
        var tonyRegex = new RegExp( tonyFilteredAppliances.join( "|" ), "i");
        var ronRegex = new RegExp( ronsFilteredAppliances.join( "|" ), "i");
        var markRegex = new RegExp( marksFilteredAppliances.join( "|" ), "i");
        var pavRegex = new RegExp( pavFilteredAppliances.join( "|" ), "i");
        var maxRegex = new RegExp( allFilteredAppliances.join( "|" ), "i");
        var philRegex = new RegExp( philFilteredAppliances.join( "|" ), "i");
        var andrewRegex = new RegExp( andrewFilteredAppliances.join( "|" ), "i");
        var mattRegex = new RegExp( mattFilteredAppliances.join( "|" ), "i");
        var waRegex = new RegExp( WAFilteredBrands.join( "|" ), "i");
        
        
        //checking technicians
        if(scheduledTechs.length==0){
            await new Promise(r => setTimeout(r, 1000));
            console.log("no techs detected")
            continue
        }
        if(!assetName){
            await new Promise(r => setTimeout(r, 1000));
            console.log("asset text box not detected")
            continue
        }
        if(!tonyRegex.test(assetName.value)&&assetName.value.length>0){
            console.log("no fridge detected")
            for(let index = 0; index< scheduledTechs.length; index++){
                var tech = scheduledTechs[index]
                console.log(tech)
                var deleted = tech.getAttribute("deleted");
                console.log(deleted)
                if(
                    !deleted==1 && tech.childNodes[1].innerText.includes("Tony")
                ){
                    console.log("bad tech detected")
                    if(window.location == "https://office.aroflo.com/ims/Site/Calendar/index.cfm?viewfullcalendar=1&tid=IMS.CAL"){
                        if (confirm(tech.childNodes[1].innerText + " is only able to repair fridges, are you sure you want to make this booking?")) {
                            dismissed=true
                            break
                        } else {
                            console.log("calendar: confirm answer: no")
                            alert("This booking will now be closed.")
                            document.getElementsByClassName("ui-dialog-titlebar-close ui-corner-all")[1].click()
                        }  
                        
                    }
                    else{                    
                        if (confirm(tech.childNodes[1].innerText + " is only able to repair fridges, are you sure you want to make this booking?")) {
                            dismissed=true
                            break
                        } else {
                            tech.childNodes[9].children[0].click()
                            console.log("alt path")                        
                        }
                    }
                }
            }
        }

        if(!maxRegex.test(assetName.value)){
            await new Promise(r => setTimeout(r, 1000));
            console.log("no problematic appliances detected")
            continue
        }
        

        if(tonyRegex.test(assetName.value)){
            console.log("fridge detected")
            let branch = document.getElementsByClassName("af-truncate--text")[0].innerText
            if (branch == "Alpha Appliance Repair"|| branch == "Master Appliance Service"){
                for(let index = 0; index< scheduledTechs.length; index++){
                    var tech = scheduledTechs[index]
                    console.log(tech)
                    var deleted = tech.getAttribute("deleted");
                    console.log(deleted)
                    if(
                        !deleted==1 && !(
                            tech.childNodes[1].innerText.includes("Tony") ||
                            tech.childNodes[1].innerText.includes("Carlos")
                        )
                    ){
                        console.log("bad tech detected")
                        if(window.location == "https://office.aroflo.com/ims/Site/Calendar/index.cfm?viewfullcalendar=1&tid=IMS.CAL"){
                            if (confirm(tech.childNodes[1].innerText + " is unable to repair fridges. \nAre you sure you want to make this booking?")) {
                                dismissed=true
                                break
                            } else {
                                console.log("calendar: confirm answer: no")
                                alert("This booking will now be closed.")
                                document.getElementsByClassName("ui-dialog-titlebar-close ui-corner-all")[1].click()
                            }  
                            
                        }
                        else{                    
                            if (confirm(tech.childNodes[1].innerText + " is unable to repair fridges. \nAre you sure you want to make this booking?")) {
                                dismissed=true
                                break
                            } else {
                                tech.childNodes[9].children[0].click()
                                console.log("alt path")                        
                            }
                        }
                    }
                }
            }
        }
        if(ronRegex.test(assetName.value)){
            console.log("ron filterd appliance detected")
            for(let index = 0; index< scheduledTechs.length; index++){
                var tech = scheduledTechs[index]
                console.log(tech)
                var deleted = tech.getAttribute("deleted");
                console.log(deleted)
                if(
                    !deleted==1 && tech.childNodes[1].innerText.includes("Ron")
                ){
                    console.log("bad tech detected")
                    if(window.location == "https://office.aroflo.com/ims/Site/Calendar/index.cfm?viewfullcalendar=1&tid=IMS.CAL"){
                        if (confirm(tech.childNodes[1].innerText + " is unable to repair the selected appliance. \nAre you sure you want to make this booking?")) {
                            dismissed=true
                            break
                        } else {
                            console.log("calendar: confirm answer: no")
                            alert("This booking will now be closed.")
                            document.getElementsByClassName("ui-dialog-titlebar-close ui-corner-all")[1].click()
                        }  
                        
                    }
                    else{                    
                        if (confirm(tech.childNodes[1].innerText + " is unable to repair the selected appliance. \nAre you sure you want to make this booking?")) {
                            dismissed=true
                            break
                        } else {
                            tech.childNodes[9].children[0].click()
                            console.log("alt path")                        
                        }
                    }
                }
            }
        }
        if(markRegex.test(assetName.value)){
            console.log("mark filterd appliance detected")
            for(let index = 0; index< scheduledTechs.length; index++){
                var tech = scheduledTechs[index]
                console.log(tech)
                var deleted = tech.getAttribute("deleted");
                console.log(deleted)
                if(
                    !deleted==1 && tech.childNodes[1].innerText.includes("Mark")
                ){
                    console.log("bad tech detected")
                    if(window.location == "https://office.aroflo.com/ims/Site/Calendar/index.cfm?viewfullcalendar=1&tid=IMS.CAL"){
                        if (confirm(tech.childNodes[1].innerText + " is unable to repair the selected appliance. \nAre you sure you want to make this booking?")) {
                            dismissed=true
                            break
                        } else {
                            console.log("calendar: confirm answer: no")
                            alert("This booking will now be closed.")
                            document.getElementsByClassName("ui-dialog-titlebar-close ui-corner-all")[1].click()
                        }  
                        
                    }
                    else{                    
                        if (confirm(tech.childNodes[1].innerText + " is unable to repair the selected appliance. \nAre you sure you want to make this booking?")) {
                            dismissed=true
                            break
                        } else {
                            tech.childNodes[9].children[0].click()
                            console.log("alt path")                        
                        }
                    }
                }
            }
        }
        if(pavRegex.test(assetName.value)){
            console.log("pav filterd appliance detected")
            for(let index = 0; index< scheduledTechs.length; index++){
                var tech = scheduledTechs[index]
                console.log(tech)
                var deleted = tech.getAttribute("deleted");
                console.log(deleted)
                if(
                    !deleted==1 && tech.childNodes[1].innerText.includes("Pavel")
                ){
                    console.log("bad tech detected")
                    if(window.location == "https://office.aroflo.com/ims/Site/Calendar/index.cfm?viewfullcalendar=1&tid=IMS.CAL"){
                        if (confirm(tech.childNodes[1].innerText + " is unable to repair the selected appliance. \nAre you sure you want to make this booking?")) {
                            dismissed=true
                            break
                        } else {
                            console.log("calendar: confirm answer: no")
                            alert("This booking will now be closed.")
                            document.getElementsByClassName("ui-dialog-titlebar-close ui-corner-all")[1].click()
                        }  
                        
                    }
                    else{                    
                        if (confirm(tech.childNodes[1].innerText + " is unable to repair the selected appliance. \nAre you sure you want to make this booking?")) {
                            dismissed=true
                            break
                        } else {
                            tech.childNodes[9].children[0].click()
                            console.log("alt path")                        
                        }
                    }
                }
            }
        }

        if(philRegex.test(assetName.value)){
            console.log("phil filterd appliance detected")
            for(let index = 0; index< scheduledTechs.length; index++){
                var tech = scheduledTechs[index]
                console.log(tech)
                var deleted = tech.getAttribute("deleted");
                console.log(deleted)
                if(
                    !deleted==1 && tech.childNodes[1].innerText.includes("Phill")
                ){
                    console.log("bad tech detected")
                    if(window.location == "https://office.aroflo.com/ims/Site/Calendar/index.cfm?viewfullcalendar=1&tid=IMS.CAL"){
                        if (confirm(tech.childNodes[1].innerText + " is unable to repair samsung appliances, microwaves or GAS ovens. \nAre you sure you want to make this booking?")) {
                            dismissed=true
                            break
                        } else {
                            console.log("calendar: confirm answer: no")
                            alert("This booking will now be closed.")
                            document.getElementsByClassName("ui-dialog-titlebar-close ui-corner-all")[1].click()
                        }  
                        
                    }
                    else{                    
                        if (confirm(tech.childNodes[1].innerText + " is unable to repair samsung appliances, microwaves or GAS ovens. \nAre you sure you want to make this booking?")) {
                            dismissed=true
                            break
                        } else {
                            tech.childNodes[9].children[0].click()
                            console.log("alt path")                        
                        }
                    }
                }
            }
        }
        if(andrewRegex.test(assetName.value)){
            console.log("andrew filterd appliance detected")
            for(let index = 0; index< scheduledTechs.length; index++){
                var tech = scheduledTechs[index]
                console.log(tech)
                var deleted = tech.getAttribute("deleted");
                console.log(deleted)
                if(
                    !deleted==1 && (
                        tech.childNodes[1].innerText.includes("Andrew")
                    )
                ){
                    console.log("bad tech detected")
                    if(window.location == "https://office.aroflo.com/ims/Site/Calendar/index.cfm?viewfullcalendar=1&tid=IMS.CAL"){
                        if (confirm(tech.childNodes[1].innerText + " is unable to repair fridges or GAS cooktops. \nAre you sure you want to make this booking?")) {
                            dismissed=true
                            break
                        } else {
                            console.log("calendar: confirm answer: no")
                            alert("This booking will now be closed.")
                            document.getElementsByClassName("ui-dialog-titlebar-close ui-corner-all")[1].click()
                        }  
                        
                    }
                    else{                    
                        if (confirm(tech.childNodes[1].innerText + " is unable to repair fridges or GAS cooktops. \nAre you sure you want to make this booking?")) {
                            dismissed=true
                            break
                        } else {
                            tech.childNodes[9].children[0].click()
                            console.log("alt path")                        
                        }
                    }
                }
            }
        }

        if(mattRegex.test(assetName.value)){
            console.log("matt filterd appliance detected")
            for(let index = 0; index< scheduledTechs.length; index++){
                var tech = scheduledTechs[index]
                console.log(tech)
                var deleted = tech.getAttribute("deleted");
                console.log(deleted)
                if(
                    !deleted==1 && (
                        tech.childNodes[1].innerText.includes("Matt")
                    )
                ){
                    console.log("bad tech detected")
                    if(window.location == "https://office.aroflo.com/ims/Site/Calendar/index.cfm?viewfullcalendar=1&tid=IMS.CAL"){
                        if (confirm(tech.childNodes[1].innerText + " is unable to steam ovens, GAS cooktops or INTEGRATED fridges. \nAre you sure you want to make this booking?")) {
                            dismissed=true
                            break
                        } else {
                            console.log("calendar: confirm answer: no")
                            alert("This booking will now be closed.")
                            document.getElementsByClassName("ui-dialog-titlebar-close ui-corner-all")[1].click()
                        }  
                        
                    }
                    else{                    
                        if (confirm(tech.childNodes[1].innerText + " is unable to repair steam ovens or GAS cooktops. \nAre you sure you want to make this booking?")) {
                            dismissed=true
                            break
                        } else {
                            tech.childNodes[9].children[0].click()
                            console.log("alt path")                        
                        }
                    }
                }
            }
        }

        if(waRegex.test(assetName.value)){
            console.log("wa filterd appliance detected")
            var branch = document.getElementById("ownerOrgName")
            if(
                branch.value == "Premium Appliance Repair"
            ){
                console.log("bad branch detected")
                if(window.location == "https://office.aroflo.com/ims/Site/Calendar/index.cfm?viewfullcalendar=1&tid=IMS.CAL"){
                    if (confirm(tech.childNodes[1].innerText + " is unable to repair the selected appliance. \nNo TEchs in WA repair samsung appliances. \nAre you sure you want to make this booking?")) {
                        dismissed=true
                        break
                    } else {
                        console.log("calendar: confirm answer: no")
                        alert("This booking will now be closed.")
                        document.getElementsByClassName("ui-dialog-titlebar-close ui-corner-all")[1].click()
                    }  
                    
                }
                else{                    
                    if (confirm(tech.childNodes[1].innerText + " is unable to repair the selected appliance. \nNo TEchs in WA repair samsung appliances. \nAre you sure you want to make this booking?")) {
                        dismissed=true
                        break
                    } else {
                        document.querySelectorAll("[id='btnAdvSearch']")[3].click()
                        document.getElementById("btnSelectNone").click()
                        console.log("alt path")                        
                    }
                }
            }
        }

        console.log("loop finished")

        await new Promise(r => setTimeout(r, 1000))
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

let applianceCheckFunc = async function(filteredAppliances, assetName, techName) {
    var filteredRegex = new RegExp(filteredAppliances.join( "|" ), "i");
    if(filteredRegex.test(assetName)){
        console.log("andrew filterd appliance detected")
        for(let index = 0; index< scheduledTechs.length; index++){
            var tech = scheduledTechs[index]
            console.log(tech)
            var deleted = tech.getAttribute("deleted");
            console.log(deleted)
            if(
                !deleted==1 && tech.childNodes[1].innerText.includes(techName)
            ){
                console.log("bad tech detected")
                if(window.location == "https://office.aroflo.com/ims/Site/Calendar/index.cfm?viewfullcalendar=1&tid=IMS.CAL"){
                    if (confirm(tech.childNodes[1].innerText + " is unable to repair the selected appliance. \nAre you sure you want to make this booking?")) {
                        dismissed=true
                        break
                    } else {
                        console.log("calendar: confirm answer: no")
                        alert("This booking will now be closed.")
                        document.getElementsByClassName("ui-dialog-titlebar-close ui-corner-all")[1].click()
                    }  
                    
                }
                else{                    
                    if (confirm(tech.childNodes[1].innerText + " is unable to repair the selected appliance. \nAre you sure you want to make this booking?")) {
                        dismissed=true
                        break
                    } else {
                        tech.childNodes[9].children[0].click()
                        console.log("alt path")                        
                    }
                }
            }
        }
    }
    
}