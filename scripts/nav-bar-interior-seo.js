$(function () {
    var bar='';
    bar += '<ul class="nav flex-column nav-pills pl-5 pt-5">';
    bar += '<span class="text-primary font-weight-bold">DoubleHelix</span>';
    bar += '<li class="nav-item inactive">';
    bar += '<a class="nav-link text-wrap" href="../dna-features.htm">DNA Features<span class="sr-only"></span></a>';
    bar += '</li>';

    bar += '<li class="nav-item inactive">';
    bar += '<a class="nav-link text-wrap" href="../cc-products.htm">CC Products<span class="sr-only"></span></a>';
    bar += '</li>';

    bar += '<li class="nav-item inactive dropdown">';
    bar += '<a class="nav-link text-wrap dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">';
    bar += 'Managed Content & Creative Package';
    bar += '</a>';
    bar += '<div class="dropdown-menu" aria-labelledby="navbarDropdown" style="height: 400px; overflow: scroll; top: -120px; left: 105%;">';
    bar += '<a class="dropdown-item" href="../managed-content-creative-package/acura.htm">Acura</a>';
    bar += '<a class="dropdown-item" href="../managed-content-creative-package/audi.htm">Audi</a>';
    bar += '<a class="dropdown-item" href="../managed-content-creative-package/bmw.htm">BMW</a>';
    bar += '<a class="dropdown-item" href="../managed-content-creative-package/cci.htm">CCI (Chrysler, Dodge, Jeep, Ram)</a>';
    bar += '<a class="dropdown-item" href="../managed-content-creative-package/fca.htm">FCA (Chrysler, Dodge, Jeep, Ram)</a>';
    bar += '<a class="dropdown-item" href="../managed-content-creative-package/ford.htm">Ford</a>';
    bar += '<a class="dropdown-item" href="../managed-content-creative-package/general-motors.htm">GM</a>';
    bar += '<a class="dropdown-item" href="../managed-content-creative-package/genesis.htm">Genesis</a>';
    bar += '<a class="dropdown-item" href="../managed-content-creative-package/honda.htm">Honda</a>';
    bar += '<a class="dropdown-item" href="../managed-content-creative-package/hyundai.htm">Hyundai</a>';
    bar += '<a class="dropdown-item" href="../managed-content-creative-package/infiniti.htm">Infiniti</a>';
    bar += '<a class="dropdown-item" href="../managed-content-creative-package/jaguar.htm">Jaguar</a>';
    bar += '<a class="dropdown-item" href="../managed-content-creative-package/kia.htm">Kia</a>';
    bar += '<a class="dropdown-item" href="../managed-content-creative-package/landrover.htm">Land Rover</a>';
    bar += '<a class="dropdown-item" href="../managed-content-creative-package/linoln.htm">Lincoln</a>';
    bar += '<a class="dropdown-item" href="../managed-content-creative-package/lexus.htm">Lexus</a>';
    bar += '<a class="dropdown-item" href="../managed-content-creative-package/mazda.htm">Mazda</a>';
    bar += '<a class="dropdown-item" href="../managed-content-creative-package/mercedes.htm">Mercedes</a>';
    bar += '<a class="dropdown-item" href="../managed-content-creative-package/mini.htm">Mini</a>';
    bar += '<a class="dropdown-item" href="../managed-content-creative-package/mitsubishi.htm">Mitsubishi</a>';
    bar += '<a class="dropdown-item" href="../managed-content-creative-package/nissan.htm">Nissan</a>';
    bar += '<a class="dropdown-item" href="../managed-content-creative-package/porsche.htm">Porsche</a>';
    bar += '<a class="dropdown-item" href="../managed-content-creative-package/subaru.htm">Subaru (OEM)</a>';
    bar += '<a class="dropdown-item" href="../managed-content-creative-package/sne.htm">Subaru (SNE)</a>';
    bar += '<a class="dropdown-item" href="../managed-content-creative-package/toyota.htm">Toyota</a>';
    bar += '<a class="dropdown-item" href="../managed-content-creative-package/toyota-gsm.htm">GS Marketing - Toyota (GSM)</a>';
    bar += '<!--<a class="dropdown-item" href="../managed-content-creative-package/trader.htm">Trader</a>-->';
    bar += '<a class="dropdown-item" href="../managed-content-creative-package/volkswagen.htm">Volkswagen</a>';
    bar += '<a class="dropdown-item" href="../managed-content-creative-package/volvo.htm">Volvo</a>';
    bar += '</div>';
    bar += '</li>';

    bar += '<li class="nav-item active dropdown">';
    bar += '<a class="nav-link text-wrap dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">';
    bar += 'Managed SEO Package';
    bar += '</a>';
    bar += '<div class="dropdown-menu" aria-labelledby="navbarDropdown" style="height: 400px; overflow: scroll; top: -120px; left: 105%;">';
    bar += '<a class="dropdown-item" href="../managed-seo-package/acura.htm">Acura</a>';
    bar += '<a class="dropdown-item" href="../managed-seo-package/audi.htm">Audi</a>';
    bar += '<a class="dropdown-item" href="../managed-seo-package/bmw.htm">BMW</a>';
    bar += '<a class="dropdown-item" href="../managed-seo-package/cci.htm">CCI (Chrysler, Dodge, Jeep, Ram)</a>';
    bar += '<a class="dropdown-item" href="../managed-seo-package/fca.htm">FCA (Chrysler, Dodge, Jeep, Ram)</a>';
    bar += '<a class="dropdown-item" href="../managed-seo-package/ford.htm">Ford</a>';
    bar += '<a class="dropdown-item" href="../managed-seo-package/general-motors.htm">GM</a>';
    bar += '<a class="dropdown-item" href="../managed-seo-package/genesis.htm">Genesis</a>';
    bar += '<a class="dropdown-item" href="../managed-seo-package/honda.htm">Honda</a>';
    bar += '<a class="dropdown-item" href="../managed-seo-package/hyundai.htm">Hyundai</a>';
    bar += '<a class="dropdown-item" href="../managed-seo-package/infiniti.htm">Infiniti</a>';
    bar += '<a class="dropdown-item" href="../managed-seo-package/jaguar.htm">Jaguar</a>';
    bar += '<a class="dropdown-item" href="../managed-seo-package/kia.htm">Kia</a>';
    bar += '<a class="dropdown-item" href="../managed-seo-package/landrover.htm">Land Rover</a>';
    bar += '<a class="dropdown-item" href="../managed-seo-package/linoln.htm">Lincoln</a>';
    bar += '<a class="dropdown-item" href="../managed-seo-package/lexus.htm">Lexus</a>';
    bar += '<a class="dropdown-item" href="../managed-seo-package/mazda.htm">Mazda</a>';
    bar += '<a class="dropdown-item" href="../managed-seo-package/mercedes.htm">Mercedes</a>';
    bar += '<a class="dropdown-item" href="../managed-seo-package/mini.htm">Mini</a>';
    bar += '<a class="dropdown-item" href="../managed-seo-package/mitsubishi.htm">Mitsubishi</a>';
    bar += '<a class="dropdown-item" href="../managed-seo-package/nissan.htm">Nissan</a>';
    bar += '<a class="dropdown-item" href="../managed-seo-package/porsche.htm">Porsche</a>';
    bar += '<a class="dropdown-item" href="../managed-seo-package/subaru.htm">Subaru (OEM)</a>';
    bar += '<a class="dropdown-item" href="../managed-seo-package/sne.htm">Subaru (SNE)</a>';
    bar += '<a class="dropdown-item" href="../managed-seo-package/toyota.htm">Toyota</a>';
    bar += '<a class="dropdown-item" href="../managed-seo-package/toyota-gsm.htm">GS Marketing - Toyota (GSM)</a>';
    bar += '<!--<a class="dropdown-item" href="../managed-seo-package/trader.htm">Trader</a>-->';
    bar += '<a class="dropdown-item" href="../managed-seo-package/volkswagen.htm">Volkswagen</a>';
    bar += '<a class="dropdown-item" href="../managed-seo-package/volvo.htm">Volvo</a>';
    bar += '</div>';
    bar += '</li>';

    bar += '<li class="nav-item inactive dropdown">';
    bar += '<a class="nav-link text-wrap dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">';
    bar += 'Managed Social Package';
    bar += '</a>';
    bar += '<div class="dropdown-menu" aria-labelledby="navbarDropdown" style="height: 400px; overflow: scroll; top: -120px; left: 105%;"> ';
    bar += '<a class="dropdown-item" href="../managed-social-package/acura.htm">Acura</a>';
    bar += '<a class="dropdown-item" href="../managed-social-package/audi.htm">Audi</a>';
    bar += '<a class="dropdown-item" href="../managed-social-package/bmw.htm">BMW</a>';
    bar += '<a class="dropdown-item" href="../managed-social-package/cci.htm">CCI (Chrysler, Dodge, Jeep, Ram)</a>';
    bar += '<a class="dropdown-item" href="../managed-social-package/fca.htm">FCA (Chrysler, Dodge, Jeep, Ram)</a>';
    bar += '<a class="dropdown-item" href="../managed-social-package/ford.htm">Ford</a>';
    bar += '<a class="dropdown-item" href="../managed-social-package/general-motors.htm">GM</a>';
    bar += '<a class="dropdown-item" href="../managed-social-package/genesis.htm">Genesis</a>';
    bar += '<a class="dropdown-item" href="../managed-social-package/honda.htm">Honda</a>';
    bar += '<a class="dropdown-item" href="../managed-social-package/hyundai.htm">Hyundai</a>';
    bar += '<a class="dropdown-item" href="../managed-social-package/infiniti.htm">Infiniti</a>';
    bar += '<a class="dropdown-item" href="../managed-social-package/jaguar.htm">Jaguar</a>';
    bar += '<a class="dropdown-item" href="../managed-social-package/kia.htm">Kia</a>';
    bar += '<a class="dropdown-item" href="../managed-social-package/landrover.htm">Land Rover</a>';
    bar += '<a class="dropdown-item" href="../managed-social-package/linoln.htm">Lincoln</a>';
    bar += '<a class="dropdown-item" href="../managed-social-package/lexus.htm">Lexus</a>';
    bar += '<a class="dropdown-item" href="../managed-social-package/mazda.htm">Mazda</a>';
    bar += '<a class="dropdown-item" href="../managed-social-package/mercedes.htm">Mercedes</a>';
    bar += '<a class="dropdown-item" href="../managed-social-package/mini.htm">Mini</a>';
    bar += '<a class="dropdown-item" href="../managed-social-package/mitsubishi.htm">Mitsubishi</a>';
    bar += '<a class="dropdown-item" href="../managed-social-package/nissan.htm">Nissan</a>';
    bar += '<a class="dropdown-item" href="../managed-social-package/porsche.htm">Porsche</a>';
    bar += '<a class="dropdown-item" href="../managed-social-package/subaru.htm">Subaru (OEM)</a>';
    bar += '<a class="dropdown-item" href="../managed-social-package/sne.htm">Subaru (SNE)</a>';
    bar += '<a class="dropdown-item" href="../managed-social-package/toyota.htm">Toyota</a>';
    bar += '<a class="dropdown-item" href="../managed-social-package/toyota-gsm.htm">GS Marketing - Toyota (GSM)</a>';
    bar += '<!--<a class="dropdown-item" href="../managed-social-package/trader.htm">Trader</a>-->';
    bar += '<a class="dropdown-item" href="../managed-social-package/volkswagen.htm">Volkswagen</a>';
    bar += '<a class="dropdown-item" href="../wmanaged-socialebsite-package/volvo.htm">Volvo</a>';
    bar += '</div>';
    bar += '</li>';

    bar += '<li class="nav-item inactive dropdown">';
    bar += '<a class="nav-link text-wrap dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Website Package</a>';
    bar += '<div class="dropdown-menu" aria-labelledby="navbarDropdown" style="height: 400px; overflow: scroll; top: -120px; left: 105%;">';
    bar += '<a class="dropdown-item" href="../website-package/acura.htm">Acura</a>';
    bar += '<a class="dropdown-item" href="../website-package/audi.htm">Audi</a>';
    bar += '<a class="dropdown-item" href="../website-package/bmw.htm">BMW</a>';
    bar += '<a class="dropdown-item" href="../website-package/cci.htm">CCI (Chrysler, Dodge, Jeep, Ram)</a>';
    bar += '<a class="dropdown-item" href="../website-package/fca.htm">FCA (Chrysler, Dodge, Jeep, Ram)</a>';
    bar += '<a class="dropdown-item" href="../website-package/ford.htm">Ford</a>';
    bar += '<a class="dropdown-item" href="../website-package/general-motors.htm">GM</a>';
    bar += '<a class="dropdown-item" href="../website-package/genesis.htm">Genesis</a>';
    bar += '<a class="dropdown-item" href="../website-package/honda.htm">Honda</a>';
    bar += '<a class="dropdown-item" href="../website-package/hyundai.htm">Hyundai</a>';
    bar += '<a class="dropdown-item" href="../website-package/infiniti.htm">Infiniti</a>';
    bar += '<a class="dropdown-item" href="../website-package/jaguar-land-rover.htm">Jaguar</a>';
    bar += '<a class="dropdown-item" href="../website-package/kia.htm">Kia</a>';
    bar += '<a class="dropdown-item" href="../website-package/linoln.htm">Lincoln</a>';
    bar += '<a class="dropdown-item" href="../website-package/lexus.htm">Lexus</a>';
    bar += '<a class="dropdown-item" href="../website-package/mazda.htm">Mazda</a>';
    bar += '<a class="dropdown-item" href="../website-package/mercedes.htm">Mercedes</a>';
    bar += '<a class="dropdown-item" href="../website-package/mini.htm">Mini</a>';
    bar += '<a class="dropdown-item" href="../website-package/mitsubishi.htm">Mitsubishi</a>';
    bar += '<a class="dropdown-item" href="../website-package/nissan.htm">Nissan</a>';
    bar += '<a class="dropdown-item" href="../website-package/porsche.htm">Porsche</a>';
    bar += '<a class="dropdown-item" href="../website-package/subaru.htm">Subaru (OEM)</a>';
    bar += '<a class="dropdown-item" href="../website-package/sne.htm">Subaru (SNE)</a>';
    bar += '<a class="dropdown-item" href="../website-package/toyota.htm">Toyota</a>';
    bar += '<a class="dropdown-item" href="../website-package/toyota-gsm.htm">GS Marketing - Toyota (GSM)</a>';
    bar += '<!--<a class="dropdown-item" href="../website-package/trader.htm">Trader</a>-->';
    bar += '<a class="dropdown-item" href="../website-package/volkswagen.htm">Volkswagen</a>';
    bar += '<a class="dropdown-item" href="../website-package/volvo.htm">Volvo</a>';
    bar += '</div>';
    bar += '</li>';

    bar += '<li class="nav-item inactive">';
    bar += '<a class="nav-link text-wrap" href="https://v9-docs.apps.dealer.com/#/" target="_blank">V9 Widget Documentation<span class="sr-only"></span></a>';
    bar += '</li>';

    bar += '<li class="nav-item inactive">';
    bar += '<a class="nav-link text-wrap" href="../about.htm">About<span class="sr-only"></span></a>';
    bar += '</li>';

    bar += '<li class="nav-item inactive">';
    bar += '<a class="nav-link text-wrap" href="mailto:tommy.ngan@coxautoinc.com">Contact<span class="sr-only"></span></a>';
    bar += '</li>';

    bar += '<div class="form container">';
    bar += '<form class="my-2 my-lg-0"><input class="form-control mr-sm-2" id="navInput" type="search" placeholder="Find a product.." aria-label="Search"></form>';
    bar += '</div>';
    
    bar += '</ul>';
    
    $("#navbarSupportedContent").html(bar);
 
    var id = getValueByName("id");
    $("#" + id).addClass("active");
});

function getValueByName(name) {
    var url = document.getElementById('nav-bar').getAttribute('src');
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