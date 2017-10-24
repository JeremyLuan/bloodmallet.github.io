Highcharts.chart('warlock_demonology_patchwerk', 
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
                156531,
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
                7360,
                0,
                8534,
                7573,
                8797,
                7958,
                7910,
                6625,
                7669,
                7132,
                7729,
                9186,
                6565,
                7943,
                7710,
                7514,
                6601,
                7255,
                6548,
                5657,
                0,
                6868,
                5852,
                6521,
                0,
                7402,
                2398,
                7167,
                7427,
                2795,
                4085,
                6324,
                6092,
                5967,
                6199,
                5898,
                2781,
                0,
                7848,
                2453,
                4521,
                2582,
                2630,
                3465,
                4461,
                1898,
                1634,
                2148,
                1934,
                0
            ],
            name: "940"
        },
        {
            color: "#db843d",
            data: [
                5136,
                0,
                7289,
                7424,
                6253,
                8184,
                6919,
                7916,
                7550,
                7767,
                7429,
                7175,
                8326,
                5644,
                5556,
                8893,
                5720,
                6911,
                5919,
                7650,
                7966,
                5933,
                6594,
                3033,
                0,
                6547,
                5717,
                8739,
                2917,
                6630,
                3875,
                7509,
                6423,
                6243,
                4259,
                2626,
                3445,
                0,
                7716,
                3597,
                4456,
                5235,
                2710,
                4391,
                2482,
                3205,
                1914,
                3250,
                0,
                3393
            ],
            name: "930"
        },
        {
            color: "#4198af",
            data: [
                5623,
                0,
                4339,
                7609,
                8507,
                7409,
                8057,
                5995,
                7490,
                5533,
                5037,
                6005,
                7747,
                6206,
                5846,
                4809,
                7608,
                4173,
                5676,
                4210,
                4552,
                5206,
                5541,
                3989,
                0,
                4597,
                5449,
                4310,
                4549,
                3466,
                4010,
                4896,
                5686,
                5235,
                3875,
                4576,
                3585,
                0,
                4039,
                4621,
                2232,
                1959,
                3438,
                1383,
                1869,
                3956,
                3220,
                3841,
                3298,
                1390
            ],
            name: "920"
        },
        {
            color: "#71588f",
            data: [
                4293,
                0,
                7696,
                6847,
                4831,
                5594,
                5357,
                6977,
                4737,
                7358,
                5954,
                5693,
                4461,
                6246,
                4632,
                7336,
                4617,
                6830,
                5486,
                4436,
                6185,
                3482,
                4157,
                4118,
                0,
                6752,
                2935,
                6784,
                4489,
                4301,
                4903,
                5910,
                5647,
                7482,
                3194,
                2997,
                3525,
                0,
                3794,
                2809,
                4405,
                4244,
                4092,
                1686,
                2816,
                2246,
                2093,
                367,
                1230,
                1728
            ],
            name: "910"
        },
        {
            color: "#89a54e",
            data: [
                7273,
                0,
                5340,
                6306,
                6026,
                6586,
                5953,
                6071,
                5638,
                5724,
                5664,
                5478,
                3945,
                4749,
                5865,
                72527,
                5545,
                7432,
                4013,
                4648,
                6421,
                4909,
                3782,
                4374,
                5034,
                5286,
                3640,
                3922,
                3565,
                2767,
                1578,
                4103,
                4858,
                3196,
                3812,
                3927,
                3568,
                4799,
                4649,
                3153,
                3112,
                2199,
                1018,
                2536,
                2814,
                915,
                3224,
                2881,
                3089,
                220
            ],
            name: "900"
        },
        {
            color: "#aa4643",
            data: [
                3716,
                0,
                5718,
                90250,
                5866,
                5869,
                3970,
                5463,
                5535,
                5105,
                4785,
                4747,
                6128,
                6841,
                71520,
                0,
                5654,
                3033,
                4418,
                68533,
                68447,
                3271,
                5613,
                1966,
                4903,
                5332,
                3927,
                5033,
                57873,
                2118,
                2720,
                4972,
                4557,
                4074,
                3753,
                3470,
                2062,
                3194,
                4009,
                2330,
                3253,
                4111,
                3057,
                3185,
                2920,
                4461,
                3321,
                976,
                614,
                182
            ],
            name: "890"
        },
        {
            color: "#4572a7",
            data: [
                123832,
                0,
                105046,
                0,
                81233,
                79415,
                82399,
                76956,
                75400,
                74979,
                74221,
                71457,
                69659,
                68772,
                0,
                0,
                64285,
                64329,
                66650,
                0,
                0,
                62458,
                58928,
                60689,
                73249,
                47167,
                58754,
                46272,
                0,
                58065,
                58095,
                44760,
                44570,
                44965,
                50931,
                52379,
                55574,
                66259,
                40387,
                53460,
                49875,
                50606,
                47508,
                47563,
                41664,
                42223,
                40346,
                41385,
                39771,
                33280
            ],
            name: "880"
        }
    ],
    subtitle: {
        text: "UTC 2017-10-06 22:17 SimC build: <a href=\"https://github.com/simulationcraft/simc/commit/f56318add3194854f56df2323c0aef8bdea201eb\" target=\"blank\">f56318a</a>"
    },
    title: {
        text: "Warlock - Demonology - Patchwerk"
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
            "Unstable Arcanocrystal",
            "Kil'jaeden's Burning Wish",
            "Whispers in the Dark",
            "Charm of the Rising Tide",
            "Erratic Metronome",
            "Chrono Shard",
            "Stat Stick (Haste)",
            "Dreadstone of Endless Shadows",
            "Stat Stick (Mastery)",
            "Padawsen's Unlucky Charm",
            "Eyasu's Mulligan",
            "Stormsinger Fulmination Charge",
            "Stat Stick (Versatility)",
            "Stat Stick (Crit)",
            "Tarnished Sentinel Medallion",
            "Tome of Unraveling Sanity",
            "Infernal Writ",
            "PVP Badge of Dominance",
            "Obelisk of the Void",
            "Terror From Below",
            "Astral Alchemist Stone",
            "PVP Insignia of Dominance",
            "Horn of Valor",
            "Swarming Plaguehive",
            "Darkmoon Deck: Hellfire",
            "Reality Breacher",
            "Naraxas' Spiked Tongue",
            "Star Gate",
            "Spectral Thurible",
            "Fury of the Burning Sky",
            "Moonlit Prism",
            "Deteriorated Construct Core",
            "Bough of Corruption",
            "Twisting Wind",
            "Devilsaur Shock-Baton",
            "Oakheart's Gnarled Root",
            "Pharameres Forbidden Grimoire",
            "Infernal Alchemist Stone",
            "Portable Manacracker",
            "Toe Knee's Promise",
            "Icon of Rot",
            "Aran's Relaxing Ruby",
            "Caged Horror",
            "Corrupted Starlight",
            "Eye of Skovald",
            "Mrrgria's Favor",
            "Wriggling Sinew",
            "Elementium Bomb Squirrel Generator",
            "Unstable Horrorslime",
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
                    text: "mean at 90421",
                    verticalAlign: "bottom",
                    x: 10,
                    y: -25
                },
                value: 90421.16,
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