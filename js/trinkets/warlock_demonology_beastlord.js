Highcharts.chart('warlock_demonology_beastlord', 
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
                176533,
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
                17706,
                0,
                10610,
                10056,
                7686,
                18368,
                9831,
                11626,
                8805,
                10651,
                8468,
                10524,
                9277,
                4878,
                6534,
                13238,
                7529,
                6888,
                11954,
                9344,
                8268,
                8707,
                9915,
                6549,
                15299,
                7555,
                10445,
                8885,
                12256,
                2295,
                6517,
                8268,
                5732,
                2488,
                7686,
                0,
                9996,
                0,
                0,
                6318,
                2641,
                5528,
                3765,
                8085,
                2790,
                3634,
                2624,
                8268,
                742,
                5575
            ],
            name: "940"
        },
        {
            color: "#db843d",
            data: [
                11944,
                0,
                7210,
                6699,
                12382,
                4317,
                7618,
                7667,
                8061,
                11843,
                9622,
                6907,
                5295,
                6939,
                7126,
                2826,
                10917,
                14908,
                2548,
                3684,
                8505,
                8322,
                1754,
                5303,
                4762,
                4007,
                5806,
                7471,
                6884,
                6262,
                6012,
                6083,
                5055,
                5730,
                8186,
                1063,
                3075,
                0,
                0,
                2221,
                3872,
                3234,
                4427,
                4123,
                9794,
                2759,
                5638,
                1680,
                1468,
                0
            ],
            name: "930"
        },
        {
            color: "#4198af",
            data: [
                9774,
                0,
                7235,
                6696,
                2820,
                7677,
                9311,
                6513,
                11014,
                8283,
                9258,
                6166,
                9975,
                8525,
                11608,
                9958,
                6222,
                4740,
                9311,
                10603,
                7091,
                8803,
                7877,
                8444,
                7756,
                10531,
                7309,
                3481,
                3620,
                8071,
                5925,
                7380,
                4599,
                7670,
                3979,
                4920,
                6156,
                0,
                0,
                3860,
                7484,
                5495,
                1275,
                4756,
                4930,
                3039,
                4105,
                4165,
                0,
                1465
            ],
            name: "920"
        },
        {
            color: "#71588f",
            data: [
                19816,
                0,
                12379,
                3968,
                10381,
                9827,
                4649,
                7596,
                6654,
                10081,
                1288,
                6589,
                5131,
                6842,
                2035,
                7087,
                6944,
                10746,
                6412,
                4438,
                5157,
                9134,
                6111,
                7590,
                6782,
                5524,
                4436,
                5187,
                7824,
                3362,
                5060,
                2737,
                4239,
                8500,
                5430,
                4187,
                4098,
                0,
                0,
                6796,
                3122,
                2557,
                8307,
                3539,
                2513,
                2237,
                2262,
                2626,
                3439,
                3381
            ],
            name: "910"
        },
        {
            color: "#89a54e",
            data: [
                12516,
                0,
                4606,
                3486,
                4106,
                3662,
                9120,
                2218,
                8029,
                5480,
                9934,
                5353,
                9366,
                4723,
                7181,
                6414,
                4799,
                5572,
                3131,
                6144,
                4915,
                4644,
                7736,
                2101,
                8311,
                77229,
                4021,
                7231,
                6843,
                5306,
                1303,
                3798,
                5921,
                3964,
                0,
                10201,
                5130,
                1965,
                9964,
                4978,
                1271,
                3805,
                3092,
                0,
                9387,
                1765,
                0,
                0,
                381,
                0
            ],
            name: "900"
        },
        {
            color: "#aa4643",
            data: [
                145830,
                0,
                5426,
                6864,
                112663,
                7637,
                6587,
                11200,
                6660,
                9695,
                2935,
                8379,
                5267,
                7824,
                4834,
                3290,
                8108,
                5796,
                6115,
                3897,
                9037,
                7752,
                3266,
                5950,
                6838,
                0,
                6248,
                0,
                5520,
                5879,
                3713,
                70438,
                72039,
                0,
                5557,
                76151,
                0,
                9130,
                5760,
                2246,
                346,
                7390,
                520,
                1638,
                0,
                3586,
                2576,
                4917,
                2771,
                337
            ],
            name: "890"
        },
        {
            color: "#4572a7",
            data: [
                0,
                0,
                120895,
                128522,
                0,
                87458,
                90463,
                88588,
                84816,
                71948,
                85266,
                81572,
                80399,
                84329,
                82884,
                77974,
                74753,
                70585,
                77810,
                77425,
                69411,
                64286,
                74342,
                73004,
                55745,
                0,
                65694,
                70846,
                58435,
                69379,
                71178,
                0,
                0,
                68766,
                66217,
                0,
                67053,
                80082,
                71381,
                57337,
                61941,
                52204,
                57144,
                54744,
                43981,
                44732,
                46059,
                40596,
                44807,
                37734
            ],
            name: "880"
        }
    ],
    subtitle: {
        text: "UTC 2017-10-06 22:17 SimC build: <a href=\"https://github.com/simulationcraft/simc/commit/f56318add3194854f56df2323c0aef8bdea201eb\" target=\"blank\">f56318a</a>"
    },
    title: {
        text: "Warlock - Demonology - Beastlord"
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
            "Spectral Thurible",
            "Kil'jaeden's Burning Wish",
            "Whispers in the Dark",
            "Unstable Arcanocrystal",
            "Charm of the Rising Tide",
            "Icon of Rot",
            "Aran's Relaxing Ruby",
            "Chrono Shard",
            "Fury of the Burning Sky",
            "Star Gate",
            "Stat Stick (Haste)",
            "Dreadstone of Endless Shadows",
            "Eyasu's Mulligan",
            "Erratic Metronome",
            "Stat Stick (Mastery)",
            "Padawsen's Unlucky Charm",
            "Stormsinger Fulmination Charge",
            "Deteriorated Construct Core",
            "Stat Stick (Versatility)",
            "Stat Stick (Crit)",
            "Infernal Writ",
            "Reality Breacher",
            "Toe Knee's Promise",
            "PVP Badge of Dominance",
            "Bough of Corruption",
            "Tome of Unraveling Sanity",
            "Eye of Skovald",
            "PVP Insignia of Dominance",
            "Twisting Wind",
            "Obelisk of the Void",
            "Corrupted Starlight",
            "Terror From Below",
            "Tarnished Sentinel Medallion",
            "Horn of Valor",
            "Caged Horror",
            "Astral Alchemist Stone",
            "Moonlit Prism",
            "Darkmoon Deck: Hellfire",
            "Infernal Alchemist Stone",
            "Elementium Bomb Squirrel Generator",
            "Unstable Horrorslime",
            "Swarming Plaguehive",
            "Devilsaur Shock-Baton",
            "Oakheart's Gnarled Root",
            "Portable Manacracker",
            "Mrrgria's Favor",
            "Wriggling Sinew",
            "Pharameres Forbidden Grimoire",
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
                    text: "mean at 108814",
                    verticalAlign: "bottom",
                    x: 10,
                    y: -25
                },
                value: 108814.46,
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