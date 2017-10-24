Highcharts.chart('hunter_marksmanship_beastlord', 
{
    chart: {
        type: "bar"
    },
    legend: {
        align: "right",
        backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
        borderColor: "#CCC",
        borderWidth: 1,
        floating: false,
        reversed: true,
        shadow: false,
        verticalAlign: "bottom",
        x: 0,
        y: 0
    },
    plotOptions: {
        bar: {
            dataLabels: {
                color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white',
                enabled: false
            },
            point: {
                events: {
                    click: function (event) {                var chart = this.series.yAxis;                chart.removePlotLine('helperLine');                chart.addPlotLine({                    value: this.stackY,                    color: '#000',                    width: 2,                    id: 'helperLine',                    zIndex: 5,                    label: {                      text: this.series.name + ' ' + this.category,                      align: 'left',                      verticalAlign: 'bottom',                      rotation: 0,                      y: -5                    }                });              }
                }
            },
            stacking: "normal"
        },
        series: {
            borderColor: "#151515",
            events: {
                legendItemClick: function() { return false; }
            }
        }
    },
    series: [
        {
            color: "#ffeb3b",
            data: [
                303108,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ],
            name: "970"
        },
        {
            color: "#00E676",
            data: [
                0,
                7419,
                23652,
                11728,
                14010,
                6111,
                12862,
                4811,
                8038,
                17249,
                14265,
                15212,
                2177,
                13996,
                11221,
                8945,
                8104,
                14573,
                13716,
                18870,
                7792,
                7696,
                8951,
                16383,
                11906,
                12304,
                7043,
                11552,
                0,
                15885,
                11893,
                8564,
                7730,
                8202,
                8318,
                10164,
                166,
                5594,
                0,
                10400,
                8064,
                9498,
                0,
                5785,
                9315,
                3870,
                4304,
                1985
            ],
            name: "940"
        },
        {
            color: "#db843d",
            data: [
                0,
                5448,
                17297,
                5206,
                11861,
                15725,
                11607,
                16401,
                20298,
                11324,
                9723,
                7762,
                17200,
                8943,
                5178,
                11618,
                16074,
                8660,
                16461,
                3350,
                13340,
                12219,
                6971,
                10002,
                11840,
                7149,
                7666,
                11479,
                11075,
                14640,
                6112,
                4055,
                11078,
                10032,
                14772,
                16194,
                18193,
                13786,
                0,
                1690,
                11183,
                4684,
                7746,
                10074,
                5819,
                5079,
                0,
                11355
            ],
            name: "930"
        },
        {
            color: "#4198af",
            data: [
                0,
                8287,
                17995,
                9618,
                9149,
                13835,
                11973,
                14641,
                6150,
                15822,
                10712,
                16101,
                6870,
                6339,
                13733,
                3500,
                14975,
                1231,
                8622,
                9026,
                6718,
                5,
                9322,
                16053,
                2403,
                9909,
                5753,
                6049,
                8306,
                6820,
                4783,
                9110,
                5561,
                7226,
                3078,
                3649,
                15502,
                0,
                0,
                6155,
                3030,
                10557,
                0,
                5266,
                6959,
                11227,
                2714,
                0
            ],
            name: "920"
        },
        {
            color: "#71588f",
            data: [
                0,
                10245,
                16475,
                15657,
                20454,
                10340,
                12010,
                4744,
                7907,
                5342,
                10946,
                9821,
                15701,
                8797,
                7936,
                9915,
                9543,
                14241,
                7961,
                12106,
                8262,
                16537,
                4737,
                7387,
                10993,
                7570,
                2930,
                4954,
                6833,
                7814,
                9425,
                7561,
                4858,
                6562,
                13221,
                2534,
                2418,
                13629,
                0,
                6958,
                6524,
                10780,
                3830,
                8430,
                11502,
                0,
                10144,
                7765
            ],
            name: "910"
        },
        {
            color: "#89a54e",
            data: [
                0,
                8489,
                13086,
                7950,
                7534,
                7864,
                5464,
                5636,
                9458,
                9917,
                9047,
                12240,
                6902,
                9600,
                3963,
                10987,
                10460,
                8731,
                113949,
                1661,
                0,
                7302,
                1560,
                8875,
                391,
                1471,
                0,
                6962,
                5987,
                6083,
                5672,
                5342,
                8472,
                6012,
                7828,
                8553,
                5075,
                0,
                10103,
                5552,
                7681,
                0,
                1867,
                3310,
                6854,
                6566,
                0,
                0
            ],
            name: "900"
        },
        {
            color: "#aa4643",
            data: [
                0,
                1401,
                181704,
                6635,
                8853,
                8603,
                8836,
                152503,
                6893,
                13848,
                13885,
                11691,
                2982,
                128056,
                130428,
                11967,
                5825,
                8870,
                0,
                12883,
                13002,
                3522,
                12789,
                2602,
                6078,
                14162,
                8685,
                97578,
                104161,
                3460,
                1606,
                12399,
                5092,
                4900,
                9464,
                7293,
                11617,
                4978,
                5542,
                3893,
                8335,
                4433,
                4608,
                2732,
                1558,
                5115,
                4577,
                0
            ],
            name: "890"
        },
        {
            color: "#4572a7",
            data: [
                0,
                241625,
                0,
                198827,
                162303,
                138160,
                137812,
                0,
                135377,
                119324,
                123467,
                109513,
                125628,
                0,
                0,
                113476,
                104166,
                108367,
                0,
                102639,
                115716,
                104660,
                102821,
                84701,
                99460,
                90169,
                110316,
                0,
                0,
                80466,
                95674,
                85352,
                89051,
                87619,
                71158,
                73285,
                66507,
                92114,
                97049,
                75563,
                64712,
                69105,
                92452,
                67472,
                53029,
                65322,
                57433,
                53083
            ],
            name: "880"
        }
    ],
    subtitle: {
        text: "UTC 2017-10-06 22:17 SimC build: <a href=\"https://github.com/simulationcraft/simc/commit/f56318add3194854f56df2323c0aef8bdea201eb\" target=\"blank\">f56318a</a>"
    },
    title: {
        text: "Hunter - Marksmanship - Beastlord"
    },
    tooltip: {
        backgroundColor: "#eee",
        borderColor: "#bbb",
        formatter: function() {        var s = '<b>'+ this.x +'</b>';        var cumulative_amount = 0;        for (var i = this.points.length - 1 ; i >= 0 ; i--) {            cumulative_amount += this.points[i].y;            if (this.points[i].y !== 0){                s += '<br/><span style=\"color: ' + this.points[i].series.color + '; font-weight: bold;\">' + this.points[i].series.name +'</span>: ' + cumulative_amount;            }        }        return s;      },
        headerFormat: "<b>{point.x}</b>",
        shared: true,
        style: {
            color: "black"
        }
    },
    xAxis: {
        categories: [
            "Kil'jaeden's Burning Wish",
            "Convergence of Fates",
            "Spectral Thurible",
            "Unstable Arcanocrystal",
            "Bloodthirsty Instinct",
            "Fury of the Burning Sky",
            "Aran's Relaxing Ruby",
            "Cradle of Anguish",
            "Stat Stick (Haste)",
            "Icon of Rot",
            "Chrono Shard",
            "Thrice-Accursed Compass",
            "Entwined Elemental Foci",
            "Tarnished Sentinel Medallion",
            "Engine of Eradication",
            "Stat Stick (Mastery)",
            "Deteriorated Construct Core",
            "Stormsinger Fulmination Charge",
            "Tome of Unraveling Sanity",
            "Stat Stick (Crit)",
            "Moonlit Prism",
            "Stat Stick (Versatility)",
            "Obelisk of the Void",
            "Twisting Wind",
            "Caged Horror",
            "PVP Badge of Conquest",
            "Toe Knee's Promise",
            "Terror From Below",
            "Astral Alchemist Stone",
            "Six-Feather Fan",
            "Corrupted Starlight",
            "PVP Insignia of Conquest",
            "Eye of Skovald",
            "Horn of Valor",
            "Void Stalker's Contract",
            "Tirathon's Betrayal",
            "Nightblooming Frond",
            "Unstable Horrorslime",
            "Infernal Alchemist Stone",
            "Elementium Bomb Squirrel Generator",
            "Tempered Egg of Serpentrix",
            "Splinters of Agronax",
            "Ley Spark",
            "Oakheart's Gnarled Root",
            "Arcanogolem Digit",
            "Mrrgria's Favor",
            "Naraxas' Spiked Tongue",
            "Figurehead of the Naglfar"
        ]
    },
    yAxis: {
        labels: {
            enabled: false
        },
        min: 0,
        plotLines: [
            {
                color: "#1E90FF",
                label: {
                    align: "left",
                    rotation: -90,
                    style: {
                        color: "#1E90FF"
                    },
                    text: "mean at 156170",
                    verticalAlign: "bottom",
                    x: 10,
                    y: -25
                },
                value: 156170.54166666666,
                width: 2,
                zIndex: 2
            }
        ],
        stackLabels: {
            enabled: false,
            formatter: function() {            /* I need to figure out how to get the mean value here,            ** to allow the percent diff to mean as label            ** console.log(this); */            return;          },
            style: {
                color: (Highcharts.theme && Highcharts.theme.textColor) || 'white',
                fontWeight: "bold"
            }
        },
        title: {
            text: "\u0394 Damage per second"
        }
    }
});