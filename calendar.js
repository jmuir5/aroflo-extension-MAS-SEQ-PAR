//calendar quick info 
window.addEventListener("load", async()=>{
    var jobs = []
    var columns = []

    var currentDay = ""
    var baseDayString = ""
    var currentTotal = 0
    
    
    while(true){
        //get positions, get jobs, sort jobs, count, display
        while(document.getElementById("aagBox")||document.getElementsByClassName("fc-event-inner fc-event-skin").length ==0||document.getElementsByTagName("h2")<5){//document.getElementsByClassName("walkme-icon-root-Launcher-39973 walkme-not-embed walkme-launcher-container walkme-launcher-container-id-39973").length==0){
            await new Promise(r => setTimeout(r, 10));
            //console.log("nothing to do")
        }
        var day =document.getElementsByTagName("h2")[4].childNodes[0].textContent.split(",")[0]//document.getElementsByClassName("walkme-icon-root-Launcher-39973 walkme-not-embed walkme-launcher-container walkme-launcher-container-id-39973")[0].parentElement.childNodes[0].textContent.split(",")[0]        
        if(day == "Friday"){
           
        }
        var frame = [[0,0,0,0,0,0,-1,-1],[0,0,0,0,0,0,-1,-1],[0,0,0,0,0,0,-1,-1],[0,0,0,0,0,0,-1,-1],[0,0,0,0,0,0,-1,-1],[0,0,0,0,0,0,-1,-1],[0,0,0,0,0,0,-1,-1],[0,0,0,0,0,0,-1,-1],[0,0,0,0,0,0,-1,-1],[0,0,0,0,0,0,-1,-1],[0,0,0,0,0,0,-1,-1],[0,0,0,0,0,0,-1,-1],[0,0,0,0,0,0,-1,-1],[0,0,0,0,0,0,-1,-1]]

        console.log(frame)
        var dict = [["Peter Traish", 4, 4, -1], ["Leo Oh", 4, 3, -1], ["Sandy Adhikari", 0, 0, -1], ["Eduardo Chiovato", 3, 3, -1], ["John Sleap", 10, 0, -1], 
                    ["Otavio Palharini", 4, 4, -1], ["Gee Cruz", 3, 3, -1], ["Tulio Pereira", 4, 4, -1], ["Vini Moura", 4, 4, -1], ["Ozgur Aytemur", 4, 4, -1], ["Phill Poustie", 4, 4, -1], 
                    ["Dart Carvalho", 0, 0, -1], ["Matt Gillard", 3, 3, -1] ]
        jobs = document.getElementsByClassName("fc-event-inner fc-event-skin")

        var ccol = 0
        var index0 = -1
        searchLoop:
        for (let i = 0; i < jobs.length; i++) {
            
            
            if(ccol!=jobs[i].getBoundingClientRect().x){
                

                index0 +=1
                ccol = jobs[i].getBoundingClientRect().x
                frame[index0][3]=jobs[i].parentNode.offsetTop
                frame[index0][4]=jobs[i].parentNode.offsetLeft


            }
            jobs[i].parentNode.style.top = jobs[i].parentNode.offsetTop + 75+"px"
            if(jobs[i].innerText.includes("Parts Received")){
                frame[index0][5]+=1
                
            }
            if(jobs[i].innerText.includes("8:30a")){
                frame[index0][0]+=1
                
            }
            else if(jobs[i].innerText.includes("12:30p")){
                frame[index0][1]+=1
                
            }
            else{
                for (let j = 0; j < jobs[i].childNodes.length; j++) {
                    console.log(jobs[i].childNodes[j].style.backgroundColor)
                    if(jobs[i].childNodes[j].style.backgroundColor == "rgb(255, 153, 0)" ){
                        if(jobs[i].childNodes[j].innerText.includes("@@@:")){
                            frame[index0][6] = parseInt(jobs[i].childNodes[j].innerText.split("@@@:")[1].split("/")[0])
                            frame[index0][7] = parseInt(jobs[i].childNodes[j].innerText.split("@@@:")[1].split("/")[1][0])
                        }
                        if(jobs[i].childNodes[j].innerText.includes("Holidays:")){
                            frame[index0][6] = 0
                            frame[index0][7] = 0
                        }
                        if(jobs[i].childNodes[j].innerText.includes("Day Off:")){
                            frame[index0][6] = 0
                            frame[index0][7] = 0
                        }
                        //jobs[i].parentNode.style.top = jobs[i].parentNode.offsetTop + 75+"px"
                        continue searchLoop
                    }
                    
                }
                
                frame[index0][2]+=1
                
                
            }
            //jobs[i].parentNode.style.top = jobs[i].parentNode.offsetTop + 75+"px"
            
            
            
        }
        console.log(frame)

        var techlist = document.getElementsByClassName("fc-resourceName fc-col-res ui-widget-header")
        if (techlist.length==0) {
            techlist = document.getElementsByClassName("fc- fc-col-res ui-widget-header")
        }
        var offset = 0 
        breakpoint:
        for (let i = 0; i < techlist.length/2; i++) {
            var indexAbs = -1
            var currentLowestAbs = 9999
            
            for (let j = 0; j < frame.length; j++) {
                //console.log("tech "+i+" distance from frame "+j)
                //console.log(Math.abs(techlist[i].offsetLeft - frame[j][4]))
                
                if(Math.abs(techlist[i].offsetLeft - frame[j][4])<currentLowestAbs&&Math.abs(techlist[i].offsetLeft - frame[j][4])>0){
                    currentLowestAbs = Math.abs(techlist[i].offsetLeft - frame[j][4])
                    indexAbs = i
                    if(currentLowestAbs<50){
                        //dict[i][3]= indexAbs
                        for (let k = 0; k < dict.length; k++) {
                            if(techlist[i].title==dict[k][0]){
                                dict[k][3] = indexAbs-offset;
                                //console.log("i think "+techlist[i].title+" corresponds to frame "+j+" and dict entry "+k)
                                continue breakpoint
                            }
                            
                            else if(techlist[i].childNodes[1].childNodes[1].title==dict[k][0]){
                                dict[k][3] = indexAbs-offset;
                                //console.log("i think "+techlist[i].childNodes[1].childNodes[1].title+" corresponds to frame "+j+" and dict entry "+k)
                                continue breakpoint
                            }
                            
                        }
                    
                    }
                }
                
                
            } 
            offset+=1
        }
        
        //console.log("test marker")
        //console.log(techlist)
        //console.log(frame)
        //console.log(dict)
        
        
        var bigBox = jobs[0].parentNode.parentNode
        var totalJobs = 0
        for (let i = 0; i < techlist.length/2; i++) {
            for (let j = 0; j < dict.length; j++) {
                if(i==dict[j][3]){

                    totalJobs += frame[i][0]

                    var container=document.createElement('div')
                    var amText = document.createElement("p")
                    var pmText = document.createElement("p")
                    var anyText = document.createElement("p")
                    var partsText = document.createElement("p")
                    var totalText = document.createElement("p")

                    var amJobs = dict[j][1]
                    if(frame[i][6]>=0) amJobs = frame[i][6]

                    var pmJobs = dict[j][2]
                    if(frame[i][7]>=0) pmJobs = frame[i][7]
                    

                    amText.innerText = "AM: "+frame[i][0]+"/"+amJobs
                    amText.style.marginTop = "0px"
                    amText.style.marginBottom = "0px"
                    if(frame[i][0]<amJobs)amText.style.color ="blue"
                    else if(frame[i][0]==amJobs)amText.style.color ="green"
                    else amText.style.color ="red"

                    pmText.innerText = "PM: "+frame[i][1]+"/"+pmJobs
                    pmText.style.marginTop = "0px"
                    pmText.style.marginBottom = "0px"
                    if(frame[i][1]<pmJobs)pmText.style.color ="blue"
                    else if(frame[i][1]==pmJobs)pmText.style.color ="green"
                    else pmText.style.color ="red"

                    anyText.innerText = "ANY: "+frame[i][2]
                    anyText.style.marginTop = "0px"
                    anyText.style.marginBottom = "0px"
                    anyText.style.color = "#DAA520"

                    var totalJobs = amJobs+pmJobs
                    
                    var partsPercent = (frame[i][5]/totalJobs)*100
                    
                    var partsTarget = 50
                    if(j==1) partsTarget = parseFloat(((4/7)*100).toFixed(2)) //leo
                    else if(j==4) partsTarget = (3/10)*100 //john

                    partsPercent = parseFloat(partsPercent.toFixed(2))
                    partsText.innerText = "Parts:\xa0"+partsPercent+"%"
                    partsText.style.marginTop = "0px"
                    partsText.style.marginBottom = "0px"
                    if (partsPercent==partsTarget)partsText.style.color ="green"
                    else if(partsPercent<partsTarget)partsText.style.color ="blue"
                    else partsText.style.color ="red"
                    console.log("percent = "+partsPercent.toString())
                    console.log("target = "+partsTarget.toString())

                    totalText.innerText= "TOTAL:"+(frame[i][0]+frame[i][1]+frame[i][2])+"/"+totalJobs
                    totalText.style.marginTop = "0px"
                    totalText.style.marginBottom = "0px"
                    if((frame[i][0]+frame[i][1]+frame[i][2])<(totalJobs))totalText.style.color ="blue"
                    else if((frame[i][0]+frame[i][1]+frame[i][2])==(totalJobs))totalText.style.color ="green"
                    else totalText.style.color ="red"

                    
                    container.style.position = "absolute"
                    container.style.top = frame[i][3]+"px"
                    container.style.left = frame[i][4]+"px"

                    container.id = "aagBox"
                    container.classList.add("aagBox")
                    container.classList.add(dict[j][0].replace(" ","."))

                    container.appendChild(amText)
                    container.appendChild(pmText)
                    container.appendChild(anyText)
                    container.appendChild(partsText)
                    container.appendChild(totalText)

                    if(!frame[i][3]==0)bigBox.appendChild(container)
                    
                    break
                }
            }
        }

        if(day!=currentDay){
            currentDay = day
            baseDayString = document.getElementsByTagName("h2")[4].childNodes[0].textContent
            currentTotal = 0
        } 
        if (currentTotal!= totalJobs){
            document.getElementsByTagName("h2")[4].childNodes[0].textContent =baseDayString+", Total: "+totalJobs.toString()
            currentTotal = totalJobs
        }
        
        
    }
})