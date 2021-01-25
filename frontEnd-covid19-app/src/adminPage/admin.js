// All Table search script
function FilterkeyWord_all_table() {
    // Count td if you want to search on all table instead of specific columnco,
    console.log("hereeee")
    var count = $('.table').children('tbody').children('tr:first-child').children('td').length;
    // Declare variables
    var input, filter, table, tr, td, i;
    input = document.getElementById("search_input_all");
    var input_value = document.getElementById("search_input_all").value;
    filter = input.value.toLowerCase();
    if (input_value != '') {
        table = document.getElementById("table-id");
        tr = table.getElementsByTagName("tr");
        // Loop through all table rows, and hide those who don't match the search query
        for (i = 1; i < tr.length; i++) {
            var flag = 0;
            for (let j = 0; j < count; j++) {
                td = tr[i].getElementsByTagName("td")[j];
                if (td) {

                    if (td.innerHTML.toLowerCase().indexOf(filter) > -1) {
                        flag = 1;
                    } else {
                        //DO NOTHING
                    }
                }
            }
            if (flag == 1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    } else {
        //RESET TABLE
        $('#maxRows').trigger('change');
    }
}