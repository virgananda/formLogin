//method to save data into localstorage
function save() {
    //get data from localstorage and store to contaclist array
    //we must to use JSON.parse, because data as string, we need convert to array
    contactList = JSON.parse(localStorage.getItem('listItem')) ?? []

    //get last array to get last id
    //and store it into variable id
    var id
    contactList.length != 0 ? contactList.findLast((item) => id = item.id) : id = 0

    if (document.getElementById('id').value) {

        //edit contactlist array based on value
        contactList.forEach(value => {
            if (document.getElementById('id').value == value.id) {
                value.AIRCRAFT = document.getElementById('AIRCRAFT').value,
                    value.EXERCISE = document.getElementById('EXERCISE').value,
                    value.PROGRAM = document.getElementById('PROGRAM').value,
                    value.JT_OPS = document.getElementById('JT_OPS').value,
                    value.JT_HAR = document.getElementById('JT_HAR').value,
                    value.LANDING = document.getElementById('LANDING').value,
                    value.STATUS_UPLOAD = document.getElementById('STATUS_UPLOAD').value
            }
        })

        //remove hidden input
        document.getElementById('id').value = ''

    } else {

        //save
        //get data from form
        var item = {
            id: id + 1,
            AIRCRAFT: document.getElementById('AIRCRAFT').value,
            EXERCISE: document.getElementById('EXERCISE').value,
            PROGRAM: document.getElementById('PROGRAM').value,
            JT_OPS: document.getElementById('JT_OPS').value,
            JT_HAR: document.getElementById('JT_HAR').value,
            LANDING: document.getElementById('LANDING').value,
            STATUS_UPLOAD: document.getElementById('STATUS_UPLOAD').value
        }

        //add item data to array contactlist
        contactList.push(item)
    }

    // save array into localstorage
    localStorage.setItem('listItem', JSON.stringify(contactList))


    //update table list
    allData()

    //remove form data
    // document.getElementById('form').reset()

}