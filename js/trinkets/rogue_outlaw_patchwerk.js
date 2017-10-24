Highcharts.chart('rogue_outlaw_patchwerk', 
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
                0,
                157474,
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
                0,
                0
            ],
            name: "970"
        },
        {
            color: "#00E676",
            data: [
                6181,
                0,
                10536,
                8911,
                10347,
                9668,
                7488,
                8325,
                9705,
                8209,
                10723,
                8346,
                6435,
                7710,
                7275,
                8480,
                9751,
                8141,
                6987,
                6656,
                4500,
                8913,
                9402,
                8500,
                9740,
                9746,
                7931,
                8790,
                0,
                6585,
                4987,
                6782,
                6099,
                7796,
                0,
                0,
                4483,
                3968,
                6008,
                4994,
                3207,
                8284,
                4329,
                3258,
                3279,
                308,
                1518,
                2421,
                2379,
                733
            ],
            name: "940"
        },
        {
            color: "#db843d",
            data: [
                7381,
                0,
                11189,
                8324,
                13036,
                8826,
                9156,
                7663,
                9675,
                7382,
                9380,
                6928,
                8833,
                6655,
                8630,
                8897,
                6839,
                7696,
                8151,
                8551,
                3037,
                8183,
                9487,
                10577,
                7656,
                8092,
                7179,
                7843,
                7609,
                6692,
                5270,
                8910,
                7616,
                5780,
                0,
                0,
                4977,
                5356,
                3515,
                1319,
                4006,
                6941,
                601,
                3346,
                4615,
                1788,
                2725,
                2172,
                2357,
                2731
            ],
            name: "930"
        },
        {
            color: "#4198af",
            data: [
                6331,
                0,
                11124,
                11041,
                8361,
                8641,
                7084,
                8899,
                9418,
                7408,
                8520,
                8602,
                7382,
                8381,
                8946,
                5364,
                9754,
                8053,
                6830,
                7238,
                3408,
                7888,
                6044,
                6971,
                8058,
                7797,
                5607,
                6850,
                4430,
                6257,
                6609,
                5641,
                5794,
                6133,
                0,
                0,
                5070,
                649,
                3077,
                2860,
                2884,
                5870,
                2203,
                1752,
                2611,
                1897,
                2877,
                1024,
                2478,
                1975
            ],
            name: "920"
        },
        {
            color: "#71588f",
            data: [
                5367,
                0,
                9062,
                5493,
                8840,
                7007,
                6587,
                5281,
                8632,
                8633,
                7041,
                5735,
                5868,
                6666,
                6031,
                5908,
                3992,
                4019,
                6525,
                5209,
                2317,
                4412,
                6907,
                6613,
                6389,
                7261,
                6412,
                6904,
                5530,
                3957,
                5909,
                4965,
                6570,
                4152,
                0,
                0,
                1780,
                3731,
                4559,
                2903,
                5430,
                6353,
                2946,
                1347,
                1230,
                868,
                3455,
                3253,
                1487,
                1843
            ],
            name: "910"
        },
        {
            color: "#89a54e",
            data: [
                5250,
                0,
                8234,
                6900,
                92211,
                5049,
                6747,
                8291,
                7861,
                5359,
                7492,
                7642,
                5616,
                5565,
                4738,
                6732,
                5738,
                8020,
                8040,
                5929,
                3450,
                5663,
                6268,
                6410,
                5942,
                3472,
                4792,
                5788,
                7867,
                4827,
                4355,
                4308,
                4250,
                3496,
                5497,
                5098,
                4439,
                2121,
                3223,
                3946,
                2553,
                5994,
                950,
                2620,
                3074,
                0,
                2446,
                1529,
                2761,
                1188
            ],
            name: "900"
        },
        {
            color: "#aa4643",
            data: [
                4789,
                0,
                7136,
                6076,
                0,
                91275,
                5765,
                4303,
                75976,
                5532,
                6553,
                4169,
                5502,
                5285,
                5790,
                5438,
                74286,
                3388,
                3209,
                6565,
                2142,
                4832,
                6929,
                5475,
                6180,
                7703,
                67892,
                6092,
                73802,
                6201,
                4388,
                4674,
                7184,
                61620,
                4196,
                5885,
                3499,
                3466,
                2340,
                1303,
                2622,
                6612,
                2802,
                1041,
                2652,
                2314,
                613,
                1016,
                1456,
                642
            ],
            name: "890"
        },
        {
            color: "#4572a7",
            data: [
                146370,
                0,
                78520,
                86095,
                0,
                0,
                84187,
                80477,
                0,
                78250,
                67654,
                73917,
                71951,
                71213,
                69796,
                70153,
                0,
                70809,
                70331,
                68618,
                89779,
                66894,
                61032,
                60585,
                57887,
                57423,
                0,
                57176,
                0,
                62631,
                65550,
                61142,
                56543,
                0,
                71285,
                68520,
                46592,
                49313,
                44875,
                46750,
                40108,
                19100,
                44692,
                42274,
                37675,
                46938,
                35516,
                35399,
                31806,
                27790
            ],
            name: "880"
        }
    ],
    subtitle: {
        text: "UTC 2017-10-06 22:17 SimC build: <a href=\"https://github.com/simulationcraft/simc/commit/f56318add3194854f56df2323c0aef8bdea201eb\" target=\"blank\">f56318a</a>"
    },
    title: {
        text: "Rogue - Outlaw - Patchwerk"
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
            "Convergence of Fates",
            "Kil'jaeden's Burning Wish",
            "Nightblooming Frond",
            "Chaos Talisman",
            "Specter of Betrayal",
            "Cradle of Anguish",
            "Bloodthirsty Instinct",
            "Eye of Command",
            "Vial of Ceaseless Toxins",
            "Stat Stick (Haste)",
            "Six-Feather Fan",
            "Stat Stick (Versatility)",
            "PVP Badge of Conquest",
            "Chrono Shard",
            "Entwined Elemental Foci",
            "Nightmare Egg Shell",
            "Engine of Eradication",
            "Thrice-Accursed Compass",
            "Memento of Angerboda",
            "Stat Stick (Crit)",
            "Unstable Arcanocrystal",
            "Stat Stick (Mastery)",
            "Tirathon's Betrayal",
            "Arcanogolem Digit",
            "Bloodstained Handkerchief",
            "Tempered Egg of Serpentrix",
            "Infernal Cinders",
            "Void Stalker's Contract",
            "Astral Alchemist Stone",
            "PVP Insignia of Conquest",
            "Horn of Valor",
            "Gift of Radiance",
            "Splinters of Agronax",
            "Umbral Moonglaives",
            "Darkmoon Deck: Dominion",
            "Infernal Alchemist Stone",
            "The Devilsaur's Bite",
            "Toe Knee's Promise",
            "Faulty Countermeasure",
            "Spiked Counterweight",
            "Spontaneous Appendages",
            "Draught of Souls",
            "Nature's Call",
            "Ravaged Seed Pod",
            "Terrorbound Nexus",
            "Ley Spark",
            "Mark of Dargrul",
            "Giant Ornamental Pearl",
            "Tiny Oozeling in a Jar",
            "Windscar Whetstone"
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
                    text: "mean at 96693",
                    verticalAlign: "bottom",
                    x: 10,
                    y: -25
                },
                value: 96693.94,
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