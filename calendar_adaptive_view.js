window.addEventListener("load", async()=>{
    console.log("adaptive view primed")
    while(!document.getElementById("btnShowCalendarViewsLabel")){
        console.log("waiting for calendar selector")
        await new Promise(r => setTimeout(r, 10));
    }
    var currentView= document.getElementById("btnShowCalendarViewsLabel").innerText
    var currentBU = document.getElementById("imsBUNavigationBtn").innerText
    while(!document.getElementsByClassName("fc-head-col-resource fc-last")[1]){
        console.log("waiting for calendar selector")
        await new Promise(r => setTimeout(r, 10));
    }
    var innerBox = document.getElementsByClassName("fc-view fc-view-basicDayByResource fc-grid")[0]
    var calbox = document.getElementById("calBox")

    if(currentView=="maximal view"&&currentBU=="Alpha Appliance Repair"){
        console.log("adaptive view fired")
        innerBox.scrollLeft = innerBox.scrollWidth
        window.scrollTo(calbox.scrollWidth, 0)
    }
    else{
        innerBox.scrollLeft = 0
        window.scrollTo(0, 0)
    }
})
