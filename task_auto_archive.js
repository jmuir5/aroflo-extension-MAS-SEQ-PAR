//tag control and excecution for invoices 
window.addEventListener('load', async() => {
    console.log("auto archve loaded")

    chrome.storage.sync.get("autoArchiveTag", async ({ autoArchiveTag }) => {
        console.log("autoArchive Flag = "+autoArchiveTag)

        if(autoArchiveTag==1){
            console.log("Archiving...")
            if(document.getElementById("archive_btn")){
                console.log("archive button present - archiving job...")

                document.getElementById("archive_btn").click()
            }
            else{
                console.log("archive button missing - archiving job...")

                const checkboxes = document.getElementsByClassName("afDataTable__row--hover trCompliance af-warn lTR")
                console.log(checkboxes)
                for(let i=0;i<checkboxes.length;i++){
                    console.log(checkboxes[i])
                    checkboxes[i].children[9].children[0].children[0].click()
                }
                document.getElementById("selectedTaskStatus").value=3
                console.log("Saving...")

                document.getElementById("update_btn").click()
            }
        }
    })

})