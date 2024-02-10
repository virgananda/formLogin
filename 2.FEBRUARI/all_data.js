//method to get all data
function allData() {

    table.innerHTML = ``
    //get data from localstorage and store to contaclist array
    //we must to use JSON.parse, because data as string, we need convert to array
    contactList = JSON.parse(localStorage.getItem('listItem')) ?? [];

    //looping data and show data in table
    contactList.forEach(function (value, i) {

        var table = document.getElementById('table')

        table.innerHTML += `
            <tr>
                <td>${i + 1}</td>
                <td>${value.AIRCRAFT}</td>
                <td>${value.EXERCISE}</td>
                <td>${value.PROGRAM}</td>
                <td>${value.JT_OPS}</td>
                <td>${value.JT_HAR}</td>
                <td>${value.LANDING}</td>
                <td id="statusUpload-${i + 1}">${value.STATUS_UPLOAD}</td>  
                <td>
                    <button class="btn btn-sm btn-success" onclick="find(${value.id})">
                        <i class="fa fa-edit"></i>
                    </button>
                </td>
                <td>
                    <button class="btn btn-sm btn-danger" onclick="removeData(${value.id})">
                        <i class="fa fa-trash"></i>
                    </button>
                </td>
                <td>
                    <form name="formUpload-" id="formUpload-${value.id}" action="https://script.google.com/macros/s/AKfycbyren902LFhra9PdEY1Dy8snNzf7Bk-UfI-CH54grv6UzfO_77zR6KdCOi07APcAuXeYg/exec" method="post">
                        <input value="${value.AIRCRAFT}" type="hidden" id="AIRCRAFT_" name="AIRCRAFT" required="harus diisi">
                        <input value="${value.EXERCISE}" type="hidden"" id="EXERCISE-" name="EXERCISE" required>
                        <input value="${value.PROGRAM}" type="hidden"" id="PROGRAM-" name="PROGRAM" required>
                        <input value="${value.JT_OPS}" type="hidden"" id="JT_OPS-" name="JT_OPS" required>
                        <input value="${value.JT_HAR}" type="hidden"" id="JT_HAR-" name="JT_HAR" required>
                        <input value="${value.LANDING} "type="hidden"" id="LANDING-" name="LANDING" required>
                        <input value="${value.STATUS_UPLOAD} "type="hidden"" id="STATUS_UPLOAD" name="STATUS_UPLOAD" required>
                            <button type ="hidden" class="btn btn-sm btn-info" name="formId()" onclick="kirim(${value.id})"</button> 
                            <i class="fa fa-upload"></i>
                            </button> 
                    </form>                   
                </td>
            </tr>`
    })
}




