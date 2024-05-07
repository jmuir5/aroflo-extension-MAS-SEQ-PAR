window.addEventListener("load", async()=>{
    var branch = document.getElementById("imsBUNavigationBtn").innerText
    const nswMap = "https://www.google.com/maps/d/edit?mid=1p98laK_skx5TC_vrLVvkGUJNzGgBB7s&usp=sharing"
    const waMap = "https://www.google.com/maps/d/edit?mid=1fCOzq_4GQHeH-FRPfXLC7OjmWVJw81E&usp=sharing"
    const qldMap = "https://www.google.com/maps/d/edit?mid=1CHaIKj6r5rSRxXMRKHoGs2ks4bNDVMQ&usp=sharing"

    const showMapButton = document.createElement('BUTTON')

    showMapButton.id = 'showMapBtn'
    showMapButton.classList = "afBtn afBtn__fill af-primary"
    showMapButton.appendChild(document.createTextNode("View Tech Map"))

    var link = nswMap
    switch(branch){
        case "Premium Appliance Repair" : 
            link = waMap
            break
        case "SEQ Appliance Repair" : 
            link = qldMap
            break
    }

    showMapButton.addEventListener("click", function(){
        window.open(link, '_blank')

    })

    const headerBlock = document.getElementsByClassName("fc-header-right")[0]
    const spacer = document.getElementsByClassName("fc-header-right")[0].childNodes[1].cloneNode()
    headerBlock.insertBefore(spacer, headerBlock.childNodes[0])
    headerBlock.insertBefore(showMapButton, headerBlock.childNodes[0])


 
})


