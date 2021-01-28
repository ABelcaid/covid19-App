
$(document).ready(function () {
    $('#bar').click(function () {
        $(this).toggleClass('open');
        $('#page-content-wrapper ,#sidebar-wrapper').toggleClass('toggled');
    });
});

let doctorSessiondName = localStorage.getItem('doctorName');
document.getElementById('docName').innerHTML = doctorSessiondName;


