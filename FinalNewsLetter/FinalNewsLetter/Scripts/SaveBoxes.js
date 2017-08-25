$(document).ready(function () {

    $('#btnSaveEvents').click(function () {

        $('#eventTemplate').hide();
        $("#addEvent").hide();

        $('.eveClass').attr('contentEditable', 'false');

    });

    $('#btnSaveAchiv').click(function () {

        $('#achviTemplate').hide();
        $('#addAchvi').hide();

        $('.achviClass').attr('contentEditable', 'false');
    });
});
