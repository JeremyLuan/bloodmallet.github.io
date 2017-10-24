Highcharts.chart('druid_feral_patchwerk', 
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
                162069,
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
                0,
                0
            ],
            name: "970"
        },
        {
            color: "#00E676",
            data: [
                0,
                11485,
                9294,
                9127,
                9426,
                10754,
                9874,
                9572,
                10790,
                10908,
                7990,
                9838,
                7344,
                9507,
                10207,
                8869,
                9058,
                10971,
                8055,
                4809,
                8163,
                9406,
                7391,
                8242,
                8611,
                0,
                8745,
                10255,
                7207,
                7859,
                9229,
                7761,
                6963,
                0,
                5202,
                0,
                7378,
                5325,
                3362,
                3529,
                2412,
                2953,
                3846,
                2620,
                1519,
                1896,
                3028,
                2324,
                1783,
                2251
            ],
            name: "940"
        },
        {
            color: "#db843d",
            data: [
                0,
                10585,
                7814,
                8472,
                8632,
                8765,
                7399,
                7804,
                10112,
                9760,
                7431,
                7756,
                7713,
                7465,
                7491,
                8970,
                6922,
                7727,
                6932,
                2726,
                7447,
                7251,
                6863,
                6278,
                8987,
                5416,
                8597,
                7071,
                5704,
                8178,
                5894,
                5313,
                5216,
                0,
                5130,
                0,
                7518,
                3179,
                3745,
                3022,
                1427,
                2489,
                1274,
                2930,
                3198,
                1740,
                2010,
                1851,
                223,
                2643
            ],
            name: "930"
        },
        {
            color: "#4198af",
            data: [
                0,
                10209,
                4452,
                6821,
                8600,
                6412,
                9509,
                7902,
                8457,
                9122,
                9516,
                7377,
                9382,
                6406,
                6940,
                7093,
                7702,
                9143,
                7028,
                4608,
                7546,
                8881,
                6505,
                7626,
                7350,
                7459,
                8213,
                8559,
                6258,
                6779,
                6535,
                5703,
                5026,
                0,
                6319,
                0,
                6604,
                4078,
                4359,
                4101,
                1565,
                2474,
                3504,
                2448,
                2150,
                1941,
                1300,
                2920,
                1376,
                1840
            ],
            name: "920"
        },
        {
            color: "#71588f",
            data: [
                0,
                9922,
                6370,
                8513,
                6908,
                8410,
                6086,
                7311,
                7943,
                8082,
                7418,
                7255,
                5866,
                7573,
                6869,
                5426,
                6861,
                8589,
                7721,
                3518,
                5018,
                7602,
                8560,
                5404,
                6917,
                6479,
                6186,
                5637,
                5366,
                7014,
                7327,
                3894,
                5637,
                0,
                4118,
                0,
                7128,
                3821,
                2497,
                2585,
                1803,
                3227,
                2401,
                3465,
                1510,
                2858,
                2742,
                1799,
                1201,
                477
            ],
            name: "910"
        },
        {
            color: "#89a54e",
            data: [
                0,
                95878,
                5035,
                7904,
                6399,
                6200,
                6023,
                5376,
                7605,
                6982,
                5798,
                5645,
                7106,
                7236,
                4712,
                7401,
                6338,
                5457,
                6517,
                2518,
                6614,
                5731,
                4035,
                5489,
                5160,
                6693,
                5583,
                7370,
                5871,
                5442,
                3215,
                5347,
                4159,
                7682,
                5701,
                6238,
                5914,
                2269,
                3166,
                3302,
                2696,
                2424,
                3760,
                2591,
                2519,
                919,
                1172,
                1981,
                0,
                2731
            ],
            name: "900"
        },
        {
            color: "#aa4643",
            data: [
                0,
                0,
                4482,
                4467,
                7747,
                84987,
                5272,
                6586,
                75178,
                6325,
                80613,
                5947,
                5196,
                4235,
                7783,
                6444,
                5800,
                6706,
                5226,
                3251,
                5397,
                7003,
                5640,
                5045,
                7292,
                76593,
                6346,
                4018,
                4506,
                5763,
                6271,
                3811,
                65814,
                6157,
                61520,
                5827,
                6135,
                2508,
                2596,
                1721,
                2964,
                1233,
                1831,
                1708,
                2722,
                2735,
                2511,
                3606,
                1863,
                974
            ],
            name: "890"
        },
        {
            color: "#4572a7",
            data: [
                0,
                0,
                97253,
                86520,
                79023,
                0,
                78118,
                75601,
                0,
                68887,
                0,
                74914,
                74132,
                73560,
                71727,
                71394,
                72100,
                65073,
                72183,
                89949,
                66642,
                60467,
                65857,
                66225,
                58590,
                0,
                58376,
                58600,
                65968,
                55591,
                57619,
                61933,
                0,
                76687,
                0,
                71861,
                37918,
                44963,
                42819,
                40186,
                44069,
                39333,
                37224,
                36246,
                35022,
                35535,
                33792,
                31400,
                39521,
                31966
            ],
            name: "880"
        }
    ],
    subtitle: {
        text: "UTC 2017-10-06 22:17 SimC build: <a href=\"https://github.com/simulationcraft/simc/commit/f56318add3194854f56df2323c0aef8bdea201eb\" target=\"blank\">f56318a</a>"
    },
    title: {
        text: "Druid - Feral - Patchwerk"
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
            "Specter of Betrayal",
            "Convergence of Fates",
            "Eye of Command",
            "Chaos Talisman",
            "Cradle of Anguish",
            "Stat Stick (Versatility)",
            "PVP Badge of Conquest",
            "Vial of Ceaseless Toxins",
            "Nightblooming Frond",
            "Engine of Eradication",
            "Bloodthirsty Instinct",
            "Stat Stick (Crit)",
            "Stat Stick (Haste)",
            "Entwined Elemental Foci",
            "Stat Stick (Mastery)",
            "Memento of Angerboda",
            "Six-Feather Fan",
            "Thrice-Accursed Compass",
            "Unstable Arcanocrystal",
            "Chrono Shard",
            "Tirathon's Betrayal",
            "Nightmare Egg Shell",
            "Gift of Radiance",
            "Arcanogolem Digit",
            "Astral Alchemist Stone",
            "Void Stalker's Contract",
            "Bloodstained Handkerchief",
            "PVP Insignia of Conquest",
            "Tempered Egg of Serpentrix",
            "Splinters of Agronax",
            "Horn of Valor",
            "Umbral Moonglaives",
            "Darkmoon Deck: Dominion",
            "Infernal Cinders",
            "Infernal Alchemist Stone",
            "Draught of Souls",
            "The Devilsaur's Bite",
            "Faulty Countermeasure",
            "Spontaneous Appendages",
            "Nature's Call",
            "Spiked Counterweight",
            "Terrorbound Nexus",
            "Toe Knee's Promise",
            "Mark of Dargrul",
            "Giant Ornamental Pearl",
            "Ravaged Seed Pod",
            "Tiny Oozeling in a Jar",
            "Ley Spark",
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
                    text: "mean at 95794",
                    verticalAlign: "bottom",
                    x: 10,
                    y: -25
                },
                value: 95794.8,
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