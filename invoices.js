//tag control and excecution for invoices 
window.addEventListener('load', async() => {
    chrome.storage.sync.get("invoiceTag", async ({ invoiceTag }) => {
        console.log("invoiceTag: "+invoiceTag)
        if(invoiceTag>0){
            var status = document.getElementById("selectedFinancialStatus")
            var balance = document.getElementById("BalanceDue")
            if((status.value=="0"||status.value=="1") && balance.innerText == "0.00"){
                status.value="2"
                document.getElementById("saveInvoiceBtn").click()
            }
            else {
                window.close();
            }
        }
    })

})