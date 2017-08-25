$(document).ready(function () {
    $('#btnEvents').click(function () {
        $('#eventTemplate').show();
        $("#addEvent").show();

        $('.eveClass').attr('contentEditable', 'true');
    });

    $('#btnAchviments').click(function () {
        $('#achviTemplate').show();
        $('#addAchvi').show();

        $('.achviClass').attr('contentEditable', 'true');
    });
});

