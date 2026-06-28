//Automatically contact client after importing email

window.addEventListener('load', async() => {
    let contactSrc = chrome.runtime.getURL("./functions/contactClient.js");
    let {default: ContactClient} = await import(contactSrc)
    chrome.storage.sync.get("ContactTag", async ({ ContactTag }) => {
        console.log("contact flag = "+ContactTag)
        if(ContactTag==1){
            chrome.storage.sync.set({ ContactTag: 0 })
            ContactClient(0)
        }
    })
})