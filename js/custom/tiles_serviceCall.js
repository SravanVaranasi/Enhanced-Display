$(document).ready(function() {
    $.ajax({
        type: 'GET',
        url: 'json/tiles.json',
        dataType: 'json',
        contentType: 'text/html',
        success: function(resp) {
            var one = resp.TileMatrixProperties;
            var two = resp.Tiles;
            var counter = 0;
            $.each(two, function(i, v) {
                if (v.TileProperties.IsFeature == false && v.TileProperties.SponsorURL == null && v.TileProperties.Dimensions.Width == 1 && v.TileProperties.HomeTileStatus == true && v.SubCategory != null) {
                    var list = '<li id="minh-' + i + '" class="list-class"><p class="caption-tiles">' + v.Caption + '</p><img class="img-tiles" src=' + v.TileProperties.HomeURL + '/></li>';
                    $("#tiles-ul").append(list);
                    var settings = '<li id="pham-' + i + ' "class="settings-class"><img class="empty" src="../enhanced_display/images/mobile/check.png" data-check-box="../enhanced_display/images/mobile/empty.png"><p class="settings-caption">' + v.Caption + '</p><a href="#"><img id="stack" src="../enhanced_display/images/mobile/stack.png"></a></li>';
                    $("#settings-ul").append(settings);
                }
            });
        },
        error: function(req, status, err) {
            console.log("Something's wrong", status, err);
        }
    });
});
