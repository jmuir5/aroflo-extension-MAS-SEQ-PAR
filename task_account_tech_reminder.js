window.addEventListener('load', async() => {
    let taskType = document.getElementsByClassName("afDataTable__cell--non-numeric afDataTable__sub-header padding-top--2")[1].innerText
    let accountRegex = new RegExp( "account", "i");
    if(accountRegex.test(taskType)){
        console.log("account job detected")
        let scheduleButton = document.getElementsByClassName("afBtn afBtn--small af-info all-schedules")[0]
        let scheduleCover = document.createElement("DIV")
        scheduleCover.style.position = "absolute"
        scheduleCover.style.height = "100%" 
        scheduleCover.style.width = "100%"
        scheduleCover.style.display = "block" 
        scheduleCover.style.zIndex = "999"

        scheduleButton.appendChild(scheduleCover)
        scheduleCover.addEventListener("click", function(){
            if(confirm("Real Estate and account customers require one of the following technicians: \n - Ed \n - Doug \n - Luiz \n - Vini \n - Otavio \n - Sam \n - Leo \n - Pav"+
                " \n - Mark \n - Arpan \n - Ron")){
                    scheduleButton.click()
                }
        })
    }

})