
window.addEventListener('load', async() => {
    chrome.storage.sync.get("autoArchiveTag", async ({ autoArchiveTag }) => {
    console.log("autoArchive Flag = "+autoArchiveTag)
    
        const targetUri = "https://office.aroflo.com/ims/Site/Service/managetasks/index.cfm?view=1"
        
        if(window.location.href == targetUri) {
            if(autoArchiveTag>0){
                window.close()
            }
            else{
                window.location.href = document.referrer
            }
        }

    })

})
