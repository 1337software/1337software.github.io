/**
 * Auth: Daniel Engelschalk
 * Copyright by GitCom (www.gitcom.cloud)
 */

$("#changeType").click(function () {
    if (this.checked){
        $('#ipPortEnter').hide();
        $('#ipv4').prop('disabled', true);
        $('#port').prop('disabled', true);
        $('#domainEnter').show();
        $('#domain').prop('disabled', false);
    }else{
        $('#ipPortEnter').show();
        $('#ipv4').prop('disabled', false);
        $('#port').prop('disabled', false);
        $('#domainEnter').hide();
        $('#domain').prop('disabled', true);
    }
});
$("#whiteMode").click(function () {
    document.cookie = "darkmode= ; expires = Thu, 01 Jan 1970 00:00:00 GMT";
    window.location.href = window.location.href;
});
$("#darkMode").click(function () {
    document.cookie = "darkmode=darkmode; expires = Thu, 01 Jan 3021 00:00:00 GMT";
    window.location.href = window.location.href;
});