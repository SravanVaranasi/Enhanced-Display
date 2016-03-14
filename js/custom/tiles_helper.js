var sortArray = [];
$(document).ready(function() {
    // Create defalt state for all the pages
    $('#settings-page').css("display", "none");
    // Create click function to transition to settings-page
    $('#gear').on("click", function() {
        $('#tiles-page').fadeOut("slow", function() {
            $('#settings-page').fadeIn("slow");
        });
    });
    // Create click function to transition from empty to check
    $(document).on("click", ".empty", function() {
        var srcPath = $(this).attr('src'),
            listIdArray = $(this).parent().attr("id").split("-"),
            neededId = listIdArray[listIdArray.length - 1];

        $(this).attr('src', $(this).attr('data-check-box'));
        $(this).attr('data-check-box', srcPath);

        if (srcPath == "../enhanced_display/images/mobile/check.png") {
            var tileVanish = $('#tiles-ul').children("#minh-" + neededId).css("display", "none");
        }
        if (srcPath == "../enhanced_display/images/mobile/empty.png") {
            var tileReappear = $('#tiles-ul').children("#minh-" + neededId).css("display", "inline-block");
        }

    });
    // 
    $('#done-button').on("click", function() {
        $('#settings-page').fadeOut("slow", function() {
            $('#tiles-page').fadeIn("slow");
        });
    });
    // 
    $('#settings-ul').sortable({


        start: function(event, ui) {
            var numberOne = ui.item.index();
        },
        stop: function(event, ui) {
            var numberTwo = ui.item.index();
        },
        update: function(event, ui) {
            
            
            // var tilesChildId = tilesChildren.attr('id');
            console.log($('#pham')+ neededId);
            // console.log($(this).children().index());
            var settingsArray = $('#settings-ul').toArray();

            // // console.log(settingsArray);
            // for (var i = 0; i < tilesArray.length; i++) {
            //     if (tilesArray.index() == settingsArray.index()) {



            //     }
            // }
        }
    });
});
