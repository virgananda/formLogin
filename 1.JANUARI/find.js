//method to get detail personal data based on id
function find(id){
    //get data from localstorage and store to contaclist array
    //we must to use JSON.parse, because data as string, we need convert to array
    contactList = JSON.parse(localStorage.getItem('listItem')) ?? []

    contactList.forEach(function (value){
        if(value.id == id){
           document.getElementById('id').value = value.id
           document.getElementById('AIRCRAFT').value = value.AIRCRAFT
           document.getElementById('EXERCISE').value = value.EXERCISE
           document.getElementById('PROGRAM').value = value.PROGRAM
           document.getElementById('JT_OPS').value = value.JT_OPS
           document.getElementById('JT_HAR').value = value.JT_HAR
           document.getElementById('LANDING').value = value.LANDING
           document.getElementById('STATUS_UPLOAD').value = value.STATUS_UPLOAD
        }
    })
}