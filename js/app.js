(function  ($) {

    var data = [{
        name : 'गरिबीको अन्त्य',
        fund : '2,04,40,32,17',
        y : 15.98
    }, {
        name : 'शून्य भोकमरि',
        fund : '60,74,10,69',
        y : 4.75,
    }, {
        name : 'स्वस्थ जीवन',
        fund : '32,72,71,52',
        y : 2.56,
    }, {
        name : 'गणस्तरिय शिक्षा',
        fund : '67,84,60,40',
        y : 5.30,
    }, {
        name : 'लैङ्गिक  समानता',
        fund : '1,99,01,79',
        y : 0.16,
    }, {
        name : 'दिगो सफा पानी तथा सरसफाइ सेवा',
        fund : '33,14,65,53',
        y : 2.59,
    }, {
        name : 'आधुिनक ऊजार्मा पहुँचु',
        fund : '69,32,44,09',
        y : 5.42,
    }, {
        name : 'समावेशी आथिर्क वृद्धि तथा मर्यादित काम',
        fund : '9,30,60,88',
        y : .73,
    }, {
        name : 'उद्योग, नवीन खोज र पूर्वाधार',
        fund : '1,59,34,96,67',
        y : 12.46,
    }, {
        name : 'असमानता न्यूनीकरण',
        fund : '3,46,47,54',
        y : .27,
    }, {
        name : 'दिगो शहर र वस्तीहरू',
        fund : '2,40,97,90,18',
        y : 18.84,
    }, {
        name : 'दिगो उपभोग तथा उत्पादन',
        fund : '9,43,49',
        y : .01,
    }, {
        name : 'जलवायु परिवतर्न अनुकुुलन',
        fund : '3,79,84,65',
        y : .30,
    }, {
        name : 'भूसतह स्रोतको उपयोग ',
        fund : '16,31,19,80',
        y : 1.28,
    }, {
        name : 'शान्तिपूर्ण, न्यायपूर्ण र सशक्त समाज',
        fund : '3,67,90,19,80',
        y : 28.76,
    }, {
        name : 'दिगो विकासका लागि साझेदारि',
        fund : '7,60,99,35',
        y : .59,
    }

    ];

    Handlebars.registerHelper("inc", function(value, options)
    {
        return parseInt(value) + 1;
    });


    var source   = $("#tbl-data").html();
    var template = Handlebars.compile(source);
    var context = {data : data};
    var html    = template(context);
    $(".text").html(html);


    /*charts*/
    Highcharts.chart('container', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Pie chart - budget 2074/2075'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.y:.1f}%</b> <br /> {point.fund}'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.y:.1f} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                }
            }
        },
        credits : {
            enabled : false
        },
        series: [{
            name: 'percentage',
            colorByPoint: true,
            data: data
        }]
    });



})(jQuery);