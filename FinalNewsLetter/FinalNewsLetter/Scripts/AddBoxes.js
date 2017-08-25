//Trent's code for dropbox change
//Achivment Box
$(document).ready(function () {

    $('#achviTemplate').on('change', function () {
        var skin = $(this).val();
        var skinSelection = '';


        if (skin == '1') {
            skinSelection = 'LightGrayAchivments';
        }
        else if (skin == '2') {
            skinSelection = 'DarkGrayAchivments';
        }
        else if (skin == '3') {
            skinSelection = 'LightGreenAchivments';
        }
        else if (skin == '4') {
            skinSelection = 'DarkGreenAchivments';
        }

        var newsBox = $('<br/> <div class="' + skinSelection + ' padding"contenteditable="true" >Replace this text with your Content</div>').addClass("achviClass");

        $('#addAchvi').on('click', function () {
            $('#AchivBoxes').append(newsBox);

        });

    });



}); //ready

//Event Box
$(document).ready(function () {

    $('#eventTemplate').on('change', function () {
        var skinEve = $(this).val();
        var skinSelectionEve = '';


        if (skinEve == '5') {
            skinSelectionEve = 'LightGrayEvents';
        }
        else if (skinEve == '6') {
            skinSelectionEve = 'DarkGrayEvents';
        }
        else if (skinEve == '7') {
            skinSelectionEve = 'LightGreenEvents';
        }
        else if (skinEve == '8') {
            skinSelectionEve = 'DarkGreenEvents';
        }

        var newsBoxEve = $('<br/> <div class="' + skinSelectionEve + ' padding" contenteditable="true">Replace this text with your Content</div>').addClass("eveClass");

        $('#addEvent').on('click', function () {
            $('#EveBox').append(newsBoxEve);

        });

    });



}); //ready