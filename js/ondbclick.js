$(document).ready(function () {
    jQuery(function ($) {
        $('.timeline_rows').click(function () {
            return false;
        }).dblclick(function () {
            window.location = this.href;
            return false;
        });
    });
});