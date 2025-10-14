
//let suburbTable  = require("./suburbTable.js")
//let techLocations = require("./techTable.js")

window.addEventListener("load", async()=>{
    let techSrc = chrome.runtime.getURL("./techTable.js");
    let techLocationsFile = await import(techSrc);
    let techLocations = techLocationsFile.default
    let suburbSrc = chrome.runtime.getURL("./suburbTable.js");
    let suburbTableFile = await import(suburbSrc);
    let suburbTable = suburbTableFile.default

    //function declerations
    let scrollLeftFunct= async function() {
        while(!document.getElementsByClassName("fc-head-col-resource fc-last")[1]){
            console.log("waiting for calendar selector")
            await new Promise(r => setTimeout(r, 10));
        }
        var innerBox = document.getElementsByClassName("fc-view fc-view-basicDayByResource fc-grid")[0]
        innerBox.scrollLeft = 0
        window.scrollTo(0, 0)
    }
    
    let scrollRightFunct= async function() {
        while(!document.getElementsByClassName("fc-head-col-resource fc-last")[1]){
            console.log("waiting for calendar selector")
            await new Promise(r => setTimeout(r, 10));
        }
        var innerBox = document.getElementsByClassName("fc-view fc-view-basicDayByResource fc-grid")[0]
        var calbox = document.getElementById("calBox")
        innerBox.scrollLeft = innerBox.scrollWidth
        window.scrollTo(calbox.scrollWidth, 0)
    }

    let scrollToTarget= async function(target) {
        while(!document.getElementsByClassName("fc-head-col-resource fc-last")[1]){
            console.log("waiting for calendar selector")
            await new Promise(r => setTimeout(r, 10));
        }
        var innerBox = document.getElementsByClassName("fc-view fc-view-basicDayByResource fc-grid")[0]
        innerBox.scrollLeft = 0
        window.scrollTo(target, 0)
    }
    
    let clearHighlighting= async function() {
        let headerBar = document.getElementsByClassName("fc-head-col-resource fc-last")[1]
        for( i=0; i<headerBar.childElementCount; i++){
            headerBar.children[i].classList.remove("MasExtHl")
        }
    }
    
    let searchLocation = async function (target) {
        var listOfTechs = []
        for (const tech in techLocations) {
            if (techLocations[tech].includes(target)) listOfTechs.push(tech)
        }
        if (listOfTechs.length > 0) {
            highlightTechsFunc(listOfTechs)
        } else {
            for (const postcode in suburbTable) {
                if (suburbTable[postcode].includes(target.toUpperCase())) {
                    searchLocation(postcode)
                    return
                }
            }
            alert("Unable to match " + target + " with any technicians. check spelling or suburb may be out of area")
        }
    }
    
    let highlightTechsFunc = async function(techList){
        let headerBar = document.getElementsByClassName("fc-head-col-resource fc-last")[1]
        var snapTo = -1
        for( i=0; i<headerBar.childElementCount; i++){
            headerBar.children[i].classList.remove("MasExtHl")
    
            for(j=0;j<techList.length;j++){
                if(headerBar.children[i].title.includes(techList[j])){
                    headerBar.children[i].classList.add("MasExtHl")
                    if(snapTo == -1 && !(headerBar.children[i].innerText.includes("Tony Scalone")||headerBar.children[i].innerText.includes("Carlos Moreno"))){
                        snapTo = headerBar.children[i].offsetLeft
                        scrollToTarget(snapTo)
                    }
                }
            }
        }
    }

    //end functiopn declerations

    while(true){
        while(document.getElementById("searchToolbarBox")){
            await new Promise(r => setTimeout(r, 100000));
            //console.log("nothing to do")
        }
        
        //jump left, jump right, search box, search button, clear search

        let searchToolbarBox = document.createElement('DIV')
        
        let scrollLeftBtn = document.createElement('BUTTON')
        let scrollRightBtn = document.createElement('BUTTON')
        let searchBtn = document.createElement('BUTTON')
        let clearBtn = document.createElement('BUTTON')

        let searchBox = document.createElement('INPUT')

        scrollLeftBtn.id = 'scrollLeftBtn'
        scrollLeftBtn.classList = "afBtn afBtn__fill af-primary afBtn--small qbNoClose handCursor highlight"
        scrollLeftBtn.title = "Snap To Start Of Calendar"
        scrollLeftBtn.appendChild(document.createTextNode("|<-"))

        scrollRightBtn.id = 'scrollRightBtn'
        scrollRightBtn.classList = "afBtn afBtn__fill af-primary afBtn--small qbNoClose handCursor highlight"
        scrollRightBtn.title = "Snap To End Of Calendar"
        scrollRightBtn.appendChild(document.createTextNode("->|"))

        searchBtn.id = 'searchBtn'
        searchBtn.classList = "afBtn afBtn__fill af-primary afBtn--small qbNoClose handCursor highlight"
        searchBtn.title = "Search for Location"

        searchBtn.appendChild(document.createTextNode("🔍"))

        clearBtn.id = 'clearBtn'
        clearBtn.classList = "afBtn afBtn__fill af-primary afBtn--small qbNoClose handCursor highlight"
        clearBtn.title = "Clear Highlighting"

        clearBtn.appendChild(document.createTextNode("🧹"))

        searchBox.id = 'searchBox'
        searchBox.type = "text"
        searchBox.size = "20"
        searchBox.placeholder = "Search Locations..."
        searchBox.style = "padding:4px 7px; margin:0px 5px;"
        searchBox.setAttribute("name", "searchBox")

        searchToolbarBox.id = 'searchToolbarBox'
        searchToolbarBox.classList = "ui-widget ui-widget-content ui-widget-header ui-corner-tl"
        searchToolbarBox.style = "position:fixed; bottom: 0px; right: 210px; font-size:14px; font-weight:normal; padding:7px;z-index:999;"
        searchToolbarBox.appendChild(scrollLeftBtn)
        searchToolbarBox.appendChild(searchBox)
        searchToolbarBox.appendChild(searchBtn)
        searchToolbarBox.appendChild(clearBtn)
        searchToolbarBox.appendChild(scrollRightBtn)

        while(!document.getElementsByClassName("fc-head-col-resource fc-last")[1]){
            console.log("waiting for calendar selector")
            await new Promise(r => setTimeout(r, 10));
        }
        let innerBox = document.getElementsByClassName("fc-view fc-view-basicDayByResource fc-grid")[0]
        let calbox = document.getElementById("calBox")

        scrollLeftBtn.addEventListener("click", function(){scrollLeftFunct()})
        scrollRightBtn.addEventListener("click", function(){scrollRightFunct()})
        clearBtn.addEventListener("click", function(){clearHighlighting()})
        searchBtn.addEventListener("click", function(){searchLocation(searchBox.value)})
        searchBox.addEventListener("keypress", function (event) {
            if (event.key === "Enter") {
                event.preventDefault()
                searchBtn.click()
            }
        })

        document.body.appendChild(searchToolbarBox)
    }


 
})

