//ron no cooktop or oven rangehoods
//mark no oven

window.addEventListener("load", async()=>{
    var onBunneys = document.getElementsByClassName("afHeader__business-unit-menu afBtn__fill")[0].innerText.includes("Bunneys")
    //console.log("on bunneys? "+onBunneys)

    var dismissed = false
    var assetName = document.getElementById("assetName")
    var scheduledTechs = document.getElementsByClassName("schedResource afDataTable__row--non-hover")
    var tonyFilteredAppliances = ["fridges", "fridge", "freezer"]
    var ronsFilteredAppliances = ["cooktop", "oven", "stove", "rangehood", "microwave", "micro"]
    var marksFilteredAppliances = ["cooktop","oven"]
    var adrianFilteredAppliances = ["cooktop","oven", "rangehood", "asko"]
    var pavFilteredAppliances = ["microwave", "micro"]
    var andrewFilteredAppliances = ["fridges", "fridge", "freezer", "cooktop", "gas"]
    var mattFilteredAppliances = ["steam oven", "steam",  "cooktop", "gas", "fridges", "fridge", "freezer"]
    var WAFilteredBrands = ["samsung"]
    var globalFilteredBrands = ["sirius","sirrius", "sirus", "kogan"]
    var philFilteredAppliances = ["microwave", "micro", "oven", "gas", "samsung", "lg dishwasher"]//pavFilteredAppliances // microwaves
    var stackedAppliances = ["washing machine", "washing", "machine", "dryer"]
    var dishdrawers = ["fisher and paykell dishwasher", "fisher and paykel dishwasher", "fisher and paykell dishdrawer", "fisher and paykel dishdrawer","fisher & paykell dishwasher", "fisher & paykel dishwasher", "fisher & paykell dishdrawer", "fisher & paykel dishdrawer"]
    var noDishdrawerTechs = ["Tony Maybanks", "Ashley Dyson", "Daniel Nigro", "Felipe Collor", "Luan Viana", "Ronald Jakacki", "Santosh Paudel"]
    //var trigger = false
    var allFilteredAppliances = ronsFilteredAppliances.concat(tonyFilteredAppliances, marksFilteredAppliances, pavFilteredAppliances)
    
    var tonyRegex = new RegExp( tonyFilteredAppliances.join( "|" ), "i");
    var ronRegex = new RegExp( ronsFilteredAppliances.join( "|" ), "i");
    var markRegex = new RegExp( marksFilteredAppliances.join( "|" ), "i");
    var adrianRegex = new RegExp( adrianFilteredAppliances.join( "|" ), "i");
    var pavRegex = new RegExp( pavFilteredAppliances.join( "|" ), "i");
    var maxRegex = new RegExp( allFilteredAppliances.join( "|" ), "i");
    var philRegex = new RegExp( philFilteredAppliances.join( "|" ), "i");
    var andrewRegex = new RegExp( andrewFilteredAppliances.join( "|" ), "i");
    var mattRegex = new RegExp( mattFilteredAppliances.join( "|" ), "i");
    var waRegex = new RegExp( WAFilteredBrands.join( "|" ), "i");
    var globalRegex = new RegExp( globalFilteredBrands.join( "|" ), "i");
    var stackedRegex = new RegExp( stackedAppliances.join( "|" ), "i");
    var dishdrawerRegex = new RegExp( dishdrawers.join( "|" ), "i");
    

    var areaNoticeDelivered = false
    var stackedDismissed = false
    mainLoop:
    while(true&&!onBunneys){
        //checking technicians
        if(scheduledTechs.length==0){
            await new Promise(r => setTimeout(r, 1000));
            console.log("no techs detected")
            assetName = document.getElementById("assetName")

            dismissed=false
            continue
        }
        if(!assetName){
            await new Promise(r => setTimeout(r, 1000));
            console.log("asset text box not detected")
            assetName = document.getElementById("assetName")
            dismissed=false
            continue
        }

        if(!dismissed){
            if(!tonyRegex.test(assetName.value)&&assetName.value.length>0){
                console.log("no fridge detected")
                for(let index = 0; index< scheduledTechs.length; index++){
                    var tech = scheduledTechs[index]
                    console.log(tech)
                    var deleted = tech.getAttribute("deleted");
                    console.log(deleted)
                    if(
                        !deleted==1 && tech.childNodes[1].innerText.includes("Tony Scalone")||
                        !deleted==1 && tech.childNodes[1].innerText.includes("Carlos")
                    ){
                        console.log("bad tech detected")
                        if(window.location == "https://office.aroflo.com/ims/Site/Calendar/index.cfm?viewfullcalendar=1&tid=IMS.CAL"){
                            if (confirm(tech.childNodes[1].innerText + " is only able to repair fridges, are you sure you want to make this booking?")) {
                                dismissed=true
                                continue
                            } else {
                                console.log("calendar: confirm answer: no")
                                alert("This booking will now be closed.")
                                document.getElementsByClassName("ui-dialog-titlebar-close ui-corner-all")[1].click()
                                assetName = null
                                continue mainLoop
                            }  
                            
                        }
                        else{                    
                            if (confirm(tech.childNodes[1].innerText + " is only able to repair fridges, are you sure you want to make this booking?")) {
                                dismissed=true
                                continue
                            } else {
                                tech.childNodes[9].children[0].click()
                                console.log("alt path")
                                continue                        
                            }
                        }
                    }
                }
            }

            /*if(!maxRegex.test(assetName.value)){
                await new Promise(r => setTimeout(r, 1000));
                console.log("no problematic appliances detected")
                continue
            }*/
            

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
                                tech.childNodes[1].innerText.includes("Tony Scalone") ||
                                tech.childNodes[1].innerText.includes("Carlos")||
                                tech.childNodes[1].innerText.includes("Peter")
                            )
                        ){
                            console.log("bad tech detected")
                            if(window.location == "https://office.aroflo.com/ims/Site/Calendar/index.cfm?viewfullcalendar=1&tid=IMS.CAL"){
                                if (confirm(tech.childNodes[1].innerText + " is unable to repair fridges. \nAre you sure you want to make this booking?")) {
                                    dismissed=true
                                    continue
                                } else {
                                    console.log("calendar: confirm answer: no")
                                    alert("This booking will now be closed.")
                                    document.getElementsByClassName("ui-dialog-titlebar-close ui-corner-all")[1].click()
                                    assetName = null
                                    continue mainLoop

                                }  
                                
                            }
                            else{                    
                                if (confirm(tech.childNodes[1].innerText + " is unable to repair fridges. \nAre you sure you want to make this booking?")) {
                                    dismissed=true
                                    continue
                                } else {
                                    tech.childNodes[9].children[0].click()
                                    console.log("alt path")
                                    continue                        
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
                                continue
                            } else {
                                console.log("calendar: confirm answer: no")
                                alert("This booking will now be closed.")
                                document.getElementsByClassName("ui-dialog-titlebar-close ui-corner-all")[1].click()
                                assetName = null
                                continue mainLoop
                            }  
                            
                        }
                        else{                    
                            if (confirm(tech.childNodes[1].innerText + " is unable to repair the selected appliance. \nAre you sure you want to make this booking?")) {
                                dismissed=true
                                continue
                            } else {
                                tech.childNodes[9].children[0].click()
                                console.log("alt path")
                                continue                        
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
                        !deleted==1 && (tech.childNodes[1].innerText.includes("Mark") && tech.childNodes[1].innerText.includes("Reardon"))
                    ){
                        console.log("bad tech detected")
                        if(window.location == "https://office.aroflo.com/ims/Site/Calendar/index.cfm?viewfullcalendar=1&tid=IMS.CAL"){
                            if (confirm(tech.childNodes[1].innerText + " is unable to repair the selected appliance. \nAre you sure you want to make this booking?")) {
                                dismissed=true
                                continue
                            } else {
                                console.log("calendar: confirm answer: no")
                                alert("This booking will now be closed.")
                                document.getElementsByClassName("ui-dialog-titlebar-close ui-corner-all")[1].click()
                                assetName = null
                                continue mainLoop
                            }  
                            
                        }
                        else{                    
                            if (confirm(tech.childNodes[1].innerText + " is unable to repair the selected appliance. \nAre you sure you want to make this booking?")) {
                                dismissed=true
                                continue
                            } else {
                                tech.childNodes[9].children[0].click()
                                console.log("alt path")
                                continue                        
                            }
                        }
                    }
                }
            }
            if(adrianRegex.test(assetName.value)){
                console.log("adrian filterd appliance detected")
                for(let index = 0; index< scheduledTechs.length; index++){
                    var tech = scheduledTechs[index]
                    console.log(tech)
                    var deleted = tech.getAttribute("deleted");
                    console.log(deleted)
                    if(
                        !deleted==1 && (tech.childNodes[1].innerText.includes("Adrian") && tech.childNodes[1].innerText.includes("Miszkurka"))
                    ){
                        console.log("bad tech detected")
                        if(window.location == "https://office.aroflo.com/ims/Site/Calendar/index.cfm?viewfullcalendar=1&tid=IMS.CAL"){
                            if (confirm(tech.childNodes[1].innerText + " is unable to repair the selected appliance. \nAre you sure you want to make this booking?")) {
                                dismissed=true
                                continue
                            } else {
                                console.log("calendar: confirm answer: no")
                                alert("This booking will now be closed.")
                                document.getElementsByClassName("ui-dialog-titlebar-close ui-corner-all")[1].click()
                                assetName = null
                                continue mainLoop
                            }  
                            
                        }
                        else{                    
                            if (confirm(tech.childNodes[1].innerText + " is unable to repair the selected appliance. \nAre you sure you want to make this booking?")) {
                                dismissed=true
                                continue
                            } else {
                                tech.childNodes[9].children[0].click()
                                console.log("alt path")
                                continue                        
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
                                continue
                            } else {
                                console.log("calendar: confirm answer: no")
                                alert("This booking will now be closed.")
                                document.getElementsByClassName("ui-dialog-titlebar-close ui-corner-all")[1].click()
                                assetName = null
                                continue mainLoop
                            }  
                            
                        }
                        else{                    
                            if (confirm(tech.childNodes[1].innerText + " is unable to repair the selected appliance. \nAre you sure you want to make this booking?")) {
                                dismissed=true
                                continue
                            } else {
                                tech.childNodes[9].children[0].click()
                                console.log("alt path")
                                continue                        
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
                            if (confirm(tech.childNodes[1].innerText + " is unable to repair samsung appliances, LG Dishwashers, microwaves or GAS ovens. \n"+
                                    "Are you sure you want to make this booking?")) {
                                dismissed=true
                                continue
                            } else {
                                console.log("calendar: confirm answer: no")
                                alert("This booking will now be closed.")
                                document.getElementsByClassName("ui-dialog-titlebar-close ui-corner-all")[1].click()
                                assetName = null
                                continue mainLoop
                            }  
                            
                        }
                        else{                    
                            if (confirm(tech.childNodes[1].innerText + " is unable to repair samsung appliances, LG Dishwashers, microwaves or GAS ovens. \n"+
                                    "Are you sure you want to make this booking?")) {
                                dismissed=true
                                continue
                            } else {
                                tech.childNodes[9].children[0].click()
                                console.log("alt path")
                                continue                        
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
                            if (confirm(tech.childNodes[1].innerText + " is unable to repair fridges or GAS appliances. \nAre you sure you want to make this booking?")) {
                                dismissed=true
                                continue
                            } else {
                                console.log("calendar: confirm answer: no")
                                alert("This booking will now be closed.")
                                document.getElementsByClassName("ui-dialog-titlebar-close ui-corner-all")[1].click()
                                assetName = null
                                continue mainLoop
                            }  
                            
                        }
                        else{                    
                            if (confirm(tech.childNodes[1].innerText + " is unable to repair fridges or GAS appliances. \nAre you sure you want to make this booking?")) {
                                dismissed=true
                                continue
                            } else {
                                tech.childNodes[9].children[0].click()
                                console.log("alt path")
                                continue                        
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
                            if (confirm(tech.childNodes[1].innerText + " is unable to steam ovens, GAS cooktops or fridges. \nAre you sure you want to make this booking?")) {
                                dismissed=true
                                continue
                            } else {
                                console.log("calendar: confirm answer: no")
                                alert("This booking will now be closed.")
                                document.getElementsByClassName("ui-dialog-titlebar-close ui-corner-all")[1].click()
                                assetName = null
                                continue mainLoop
                            }  
                            
                        }
                        else{                    
                            if (confirm(tech.childNodes[1].innerText + " is unable to repair steam ovens, GAS cooktops or fridges. \nAre you sure you want to make this booking?")) {
                                dismissed=true
                                continue
                            } else {
                                tech.childNodes[9].children[0].click()
                                console.log("alt path")
                                continue                        
                            }
                        }
                    }
                }
            }
            if(dishdrawerRegex.test(assetName.value)){
                console.log("dishdrawer detected")
                for(let index = 0; index< scheduledTechs.length; index++){
                    var tech = scheduledTechs[index]
                    console.log(tech)
                    var deleted = tech.getAttribute("deleted");
                    console.log(deleted)
                    for (techName in noDishdrawerTechs){
                        console.log("tech name: "+techName)
                        console.log("selected: "+tech.childNodes[1].innerText)
                        console.log("trigger?: "+tech.childNodes[1].innerText.includes(techName))
                        if(
                            !deleted==1 && (tech.childNodes[1].innerText.includes(noDishdrawerTechs[techName]))
                        ){
                            console.log("bad tech detected")
                            if(window.location == "https://office.aroflo.com/ims/Site/Calendar/index.cfm?viewfullcalendar=1&tid=IMS.CAL"){
                                if (confirm(tech.childNodes[1].innerText + " is unable to repair Dishdrawers. \nAre you sure you want to make this booking?")) {
                                    dismissed=true
                                    continue mainLoop
                                } else {
                                    console.log("calendar: confirm answer: no")
                                    alert("This booking will now be closed.")
                                    document.getElementsByClassName("ui-dialog-titlebar-close ui-corner-all")[1].click()
                                    assetName = null
                                    continue mainLoop
                                }  
                                
                            }
                            else{                    
                                if (confirm(tech.childNodes[1].innerText + " is unable to repair Dishdrawers. \nAre you sure you want to make this booking?")) {
                                    dismissed=true
                                    continue mainLoop
                                } else {
                                    tech.childNodes[9].children[0].click()
                                    console.log("alt path")
                                    continue mainLoop                      
                                }
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
                            continue
                        } else {
                            console.log("calendar: confirm answer: no")
                            alert("This booking will now be closed.")
                            document.getElementsByClassName("ui-dialog-titlebar-close ui-corner-all")[1].click()
                            assetName = null
                            continue mainLoop
                        }  
                        
                    }
                    else{                    
                        if (confirm(tech.childNodes[1].innerText + " is unable to repair the selected appliance. \nNo TEchs in WA repair samsung appliances. \nAre you sure you want to make this booking?")) {
                            dismissed=true
                            continue
                        } else {
                            document.querySelectorAll("[id='btnAdvSearch']")[3].click()
                            document.getElementById("btnSelectNone").click()
                            console.log("alt path")
                            continue                        
                        }
                    }
                }
            }

            if(globalRegex.test(assetName.value)){
                console.log("global filterd appliance detected")
                if(window.location == "https://office.aroflo.com/ims/Site/Calendar/index.cfm?viewfullcalendar=1&tid=IMS.CAL"){
                    if (confirm(tech.childNodes[1].innerText + " is unable to repair the selected appliance. \nWe do not reapir sirius or kogan appliances. \nAre you sure you want to make this booking?")) {
                        dismissed=true
                        continue
                    } else {
                        console.log("calendar: confirm answer: no")
                        alert("This booking will now be closed.")
                        document.getElementsByClassName("ui-dialog-titlebar-close ui-corner-all")[1].click()
                        assetName = null
                        continue mainLoop
                    }  
                    
                }
                else{                    
                    if (confirm(tech.childNodes[1].innerText + " is unable to repair the selected appliance. \nWe do not reapir sirius or kogan appliances. \nAre you sure you want to make this booking?")) {
                        dismissed=true
                        continue
                    } else {
                        document.querySelectorAll("[id='btnAdvSearch']")[3].click()
                        document.getElementById("btnSelectNone").click()
                        console.log("alt path")
                        continue                        
                    }
                }
                
            }
        }

        if(!stackedDismissed){
            if(stackedRegex.test(assetName.value)){
                console.log("stacked appliance detected")
                for(let index = 0; index< scheduledTechs.length; index++){
                    var tech = scheduledTechs[index]
                    console.log(tech.childNodes[1].innerText)
                    var deleted = tech.getAttribute("deleted");
                    //console.log(deleted)
                    if(
                        !deleted==1 && (
                            tech.childNodes[1].innerText.includes("Gee") ||
                            tech.childNodes[1].innerText.includes("Sam") 
                        )
                    ){
                        console.log("bad tech detected")
                        alert("STOP!\n If this appliance is stacked you need to book 2 technicians. please check with the customer before proceeding.")
                            stackedDismissed=true
                            continue
                    
                    }
                }
            }
        }


        
        /*if(!areaNoticeDelivered){
            for(let index = 0; index< scheduledTechs.length; index++){
                var tech = scheduledTechs[index]
                console.log(tech)
                var deleted = tech.getAttribute("deleted");
                console.log(deleted)
                if(
                    !deleted==1 && (
                        tech.childNodes[1].innerText.includes("Benji")||
                        tech.childNodes[1].innerText.includes("Luiz")||
                        tech.childNodes[1].innerText.includes("Gee")
                    )
                ){
                    console.log("area tech detected")
                    alert(tech.childNodes[1].innerText + "'s area changes frequently. Please confirm they are in the correct area on the day you have selected.")
                    areaNoticeDelivered = true
                }
            }
        }*/

        console.log("loop finished")

        await new Promise(r => setTimeout(r, 1000))
    }
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
                        continue
                    } else {
                        console.log("calendar: confirm answer: no")
                        alert("This booking will now be closed.")
                        document.getElementsByClassName("ui-dialog-titlebar-close ui-corner-all")[1].click()
                    }  
                    
                }
                else{                    
                    if (confirm(tech.childNodes[1].innerText + " is unable to repair the selected appliance. \nAre you sure you want to make this booking?")) {
                        dismissed=true
                        continue
                    } else {
                        tech.childNodes[9].children[0].click()
                        console.log("alt path")
                        continue                        
                    }
                }
            }
        }
    }
    
}