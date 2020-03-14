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
    bar += '</nav>';
    bar += '<p class="text-dark";>The five primary Customer Service roles are:</p>';
    bar += '<ul>'
    bar += '<li><span class="text-dark">PSS (Product Support Specialist)</li>';
    bar += '<li><span class="text-dark">Senior Support Analyst</li>';
    bar += '<li><span class="text-dark">Support Analyst</li>';
    bar += '<li><span class="text-dark">Senior Performance Consultant</li>';
    bar += '<li><span class="text-dark">Performance Consultant</li>';
    bar += '</ul>';
    bar += '<p class="text-dark";>Each role is given certain feature access in DNA; these are determined by the DNA Profile(s) it belongs to:</p>';
    bar += '<ul>'
    bar += '<li><span class="text-dark">ddc_account_manangers</li>';
    bar += '<li><span class="text-dark">ddc_da_team_12</li>';
    bar += '<li><span class="text-dark">ddc_development</li>';
    bar += '<li><span class="text-dark">ddc_managers</li>';
    bar += '<li><span class="text-dark">ddc_opperations_staff</li>';
    bar += '<li><span class="text-dark">ddc_production</li>';
    bar += '<li><span class="text-dark">ddc_sales</li>';
    bar += '<li><span class="text-dark">ddc_support</li>';
    bar += '<li><span class="text-dark">ddcaccount_managers</li>';
    bar += '<li><span class="text-dark">ddct_dna_developers</li>';
    bar += '<li><span class="text-dark">ddct_production_dev</li>';
    bar += '</ul>';
    bar += '<p class="text-dark";>Unfortunately, I dont know which profiles grant which permissions. Normally when someone changes roles, their permissions are copied to match one of the roles above; there isn&apos;s exactly any documentation.</p>';
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