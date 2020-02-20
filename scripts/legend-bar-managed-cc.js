$(function () {
    var bar='';
    bar += '<div class="card-header" id="headingOne">';
    bar += '<h2 class="mb-0">';
    bar += '<button class="btn btn-link col-12 collapsedTrigger text-light font-weight-bold" type="button">';
    bar += 'Legend';
    bar += '</button>';
    bar += '</h2>';
    bar += '</div>';
    bar += '<div class="collapsedContainer" style="display: none;" aria-labelledby="headingOne">';
    bar += '<div class="card-body bg-light">';
    bar += '<nav aria-label="breadcrumb">';
    bar += '<ol class="breadcrumb">';
    bar += '<li class="breadcrumb-item text-dark">Managed Content & Creative Package</li>';
    bar += '<li class="breadcrumb-item text-primary">Legend</li>';
    bar += '</ol>';
    bar += '</nav>';
    bar += '<ul>';
    bar += '<li><span class="text-primary font-weight-bold">Blue</span> Cards = Available for this Package</li>';
    bar += '<li><span class="text-success font-weight-bold">Green</span> Cards =Available for this Package</li>';
    bar += '<li><span class="text-warning font-weight-bold">Yellow</span> Cards =Available for this Package</li>';
    bar += '<li><span class="text-muted font-weight-bold">Grey</span> Cards = Available for this Package</li>';
    bar += '</ul>';
    bar += '</div><!--End card card-body-->';
    bar += '</div><!--Collapsed Container-->';
    
    $("#legend").html(bar);
 
    var id = getValueByName("id");
    $("#" + id).addClass("active");
});

function getValueByName(name) {
    var url = document.getElementById('legend-bar').getAttribute('src');
    var param = new Array();
    if (url.indexOf("?") != -1) {
        var source = url.split("?")[1];
        items = source.split("&");
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            var parameters = item.split("=");
            if (parameters[0] == "id") {
                return parameters[1];
            }
        }
    }
}