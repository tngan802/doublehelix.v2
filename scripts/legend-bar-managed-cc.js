$(function () {
    var bar='';
    bar += '<div class="card-header" id="headingOne">';
    bar += '<h2 class="mb-0">';
    bar += '<button class="btn btn-link col-12 collapsedTrigger text-light font-weight-bold" type="button">';
    bar += 'General Information';
    bar += '</button>';
    bar += '</h2>';
    bar += '</div>';
    bar += '<div class="collapsedContainer" style="display: none;" aria-labelledby="headingOne">';
    bar += '<div class="card-body bg-light">';
    bar += '<nav aria-label="breadcrumb">';
    bar += '<ol class="breadcrumb">';
    bar += '<li class="breadcrumb-item text-dark">Managed Content & Creative Package</li>';
    bar += '<a class="breadcrumb-item text-primary" href="http://marketing.dealer.com/collateral/";>Link to Collateral</a></li>';
    bar += '</ol>';
    bar += '</nav>';
    bar += '<ul>';
    bar += '<p class="text-dark";>Here is some general information regarding Managed Content and Creative. The information in the tabs might not be up to date, so please double check with the Collateral link for the most up to date information.</p>';
    bar += '<li><span class="text-primary font-weight-bold">Blue</span> Cards = This Product is available for this Package</li>';
    bar += '<li><span class="text-success font-weight-bold">Green</span> Cards = This Product is available for this Package</li>';
    bar += '<li><span class="text-warning font-weight-bold">Yellow</span> Cards = This Product is available for this Package</li>';
    bar += '<li><span class="text-dark font-weight-bold">White</span> Cards = This Product is unavailable for this Package</li>';
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