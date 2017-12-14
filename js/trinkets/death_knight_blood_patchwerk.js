Highcharts.chart('death_knight_blood_patchwerk', 
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
                    click: function (event) {                var chart = this.series.yAxis;                chart.removePlotLine('helperLine');                chart.addPlotLine({                    value: this.stackY,                    color: '#000',                    width: 2,                    id: 'helperLine',                    zIndex: 5,                    label: {                      text: this.series.name + ' ' + this.category + ': ' + Intl.NumberFormat().format(this.stackY),                      align: 'left',                      verticalAlign: 'bottom',                      rotation: 0,                      y: -5                    }                });              }
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
            color: "#fdbf6f",
            data: [
                16904,
                146517,
                144713,
                138202,
                20934,
                20146,
                20276,
                19383,
                0,
                16977,
                16308,
                16465,
                16368,
                0,
                109664,
                0,
                0,
                0,
                0,
                17994,
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
            name: "1000"
        },
        {
            color: "#cab2d6",
            data: [
                7261,
                0,
                0,
                0,
                8333,
                8358,
                8547,
                9166,
                10506,
                7522,
                7953,
                7435,
                7381,
                8112,
                0,
                9519,
                8228,
                7717,
                9648,
                8027,
                7607,
                3777,
                7333,
                7615,
                7048,
                6601,
                7781,
                8118,
                7515,
                7451,
                6998,
                7319,
                7119,
                8220,
                5599,
                7583,
                7481,
                7854,
                6526,
                6036,
                7588,
                6785,
                4573,
                5667,
                5383,
                4608,
                4818,
                4151,
                3579,
                4331,
                0,
                3053,
                3905,
                3717,
                2878,
                2754,
                3691,
                3552,
                3927,
                3077,
                2440
            ],
            name: "980"
        },
        {
            color: "#ff7f00",
            data: [
                140576,
                0,
                0,
                0,
                108649,
                8085,
                8216,
                7257,
                9727,
                6257,
                6575,
                6567,
                6305,
                7039,
                0,
                9129,
                7202,
                7695,
                8895,
                7248,
                7133,
                2794,
                6662,
                6207,
                7255,
                7221,
                6103,
                5636,
                6620,
                6074,
                7055,
                6406,
                6479,
                7348,
                5793,
                6869,
                6354,
                6549,
                5899,
                5526,
                6271,
                7163,
                5947,
                5748,
                5338,
                5125,
                5817,
                4768,
                3738,
                4084,
                0,
                2564,
                4015,
                3791,
                3732,
                3684,
                3041,
                4371,
                3152,
                3073,
                2916
            ],
            name: "970"
        },
        {
            color: "#fb9a99",
            data: [
                0,
                0,
                0,
                0,
                0,
                7751,
                7377,
                7262,
                7910,
                6447,
                5967,
                6455,
                6557,
                6937,
                0,
                7301,
                6753,
                6629,
                8084,
                6070,
                5851,
                3902,
                6619,
                6242,
                5951,
                6093,
                6294,
                6317,
                6107,
                6730,
                6008,
                6525,
                5270,
                6998,
                5125,
                6654,
                6203,
                6071,
                5912,
                5070,
                5899,
                5913,
                4825,
                4159,
                3656,
                3780,
                3939,
                3697,
                3730,
                3202,
                0,
                2398,
                3397,
                3037,
                3499,
                3161,
                2617,
                3269,
                3043,
                2603,
                2464
            ],
            name: "960"
        },
        {
            color: "#e31a1c",
            data: [
                0,
                0,
                0,
                0,
                0,
                6372,
                6253,
                6569,
                8486,
                5727,
                5756,
                5678,
                5688,
                5974,
                0,
                7679,
                5886,
                5499,
                6465,
                6031,
                5803,
                3270,
                5321,
                5477,
                6007,
                5464,
                5908,
                5758,
                5603,
                4915,
                5121,
                5706,
                5470,
                6175,
                4647,
                5453,
                6532,
                6182,
                5745,
                4099,
                5398,
                5574,
                4731,
                4323,
                4395,
                3839,
                3735,
                3874,
                3315,
                3556,
                0,
                3076,
                3541,
                3355,
                2656,
                2339,
                2991,
                3373,
                2931,
                2357,
                2502
            ],
            name: "950"
        },
        {
            color: "#b2df8a",
            data: [
                0,
                0,
                0,
                0,
                0,
                76013,
                74914,
                72226,
                6832,
                72291,
                72470,
                72268,
                72382,
                5958,
                0,
                6615,
                5982,
                5881,
                7076,
                60694,
                5427,
                3421,
                4816,
                5489,
                5110,
                5990,
                4941,
                4699,
                4969,
                5342,
                5671,
                5348,
                4595,
                5271,
                4511,
                5162,
                5008,
                4926,
                4129,
                4955,
                5302,
                5051,
                4149,
                3583,
                4066,
                4034,
                3653,
                3339,
                2898,
                3015,
                0,
                1565,
                2857,
                2881,
                3163,
                2690,
                2540,
                3040,
                2424,
                1711,
                2243
            ],
            name: "940"
        },
        {
            color: "#33a02c",
            data: [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                6411,
                0,
                0,
                0,
                0,
                5108,
                0,
                6125,
                5153,
                5300,
                5647,
                0,
                4658,
                3198,
                5295,
                4506,
                4676,
                4972,
                4944,
                4854,
                4796,
                5085,
                4296,
                4431,
                4613,
                5539,
                3686,
                4830,
                4342,
                4773,
                4504,
                3289,
                4136,
                4565,
                3990,
                4086,
                3320,
                3202,
                3449,
                2657,
                3316,
                3047,
                4549,
                2115,
                2604,
                1963,
                2023,
                2714,
                2453,
                2510,
                2652,
                2752,
                2017
            ],
            name: "930"
        },
        {
            color: "#a6cee3",
            data: [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                5843,
                0,
                0,
                0,
                0,
                4681,
                0,
                5113,
                4406,
                4423,
                5634,
                0,
                5004,
                2788,
                4164,
                4782,
                4656,
                3527,
                4538,
                4428,
                4744,
                3936,
                4025,
                4692,
                4225,
                4554,
                3495,
                4583,
                4599,
                3774,
                3821,
                4232,
                4542,
                4162,
                3875,
                3206,
                49739,
                3477,
                3334,
                3008,
                2535,
                2539,
                3497,
                2721,
                2396,
                3298,
                2530,
                40209,
                2485,
                36819,
                38520,
                1898,
                2106
            ],
            name: "920"
        },
        {
            color: "#1f78b4",
            data: [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                60596,
                0,
                0,
                0,
                0,
                70201,
                0,
                56621,
                64215,
                63457,
                54978,
                0,
                59647,
                77833,
                60007,
                59450,
                58342,
                58946,
                57692,
                58148,
                57199,
                56550,
                56693,
                54893,
                54479,
                47926,
                52491,
                44136,
                43921,
                44207,
                47005,
                50154,
                43753,
                43008,
                49104,
                47731,
                0,
                46750,
                45556,
                43827,
                43061,
                40072,
                55335,
                45488,
                39307,
                39514,
                38587,
                0,
                37306,
                0,
                0,
                34124,
                31962
            ],
            name: "910"
        }
    ],
    subtitle: {
        text: "UTC 2017-12-13 21:45 SimC build: <a href=\"https://github.com/simulationcraft/simc/commit/2143d84bc98dd1d780b61e851198f81cf756e317\" target=\"blank\">2143d84</a>",
        useHTML: true
    },
    title: {
        text: "Death_Knight - Blood - Patchwerk",
        useHTML: true
    },
    tooltip: {
        backgroundColor: "#eee",
        borderColor: "#bbb",
        formatter: function() {        var s = '<div style=\"background-color:#eee; padding:12px;\"><b>'+ this.x +'</b>';        var cumulative_amount = 0;        for (var i = this.points.length - 1 ; i >= 0 ; i--) {            cumulative_amount += this.points[i].y;            if (this.points[i].y !== 0){                s += '<br/><span style=\"color: ' + this.points[i].series.color + '; font-weight: bold;\">' + this.points[i].series.name +'</span>: ' + Intl.NumberFormat().format(cumulative_amount);            }        }        s += '</div>';        return s;      },
        headerFormat: "<b>{point.x}</b>",
        shared: true,
        style: {
            color: "black"
        }
    },
    xAxis: {
        categories: [
            "<a href=\"http://www.wowhead.com/item=144249\">Archimonde's Hatred Reborn</a>",
            "<a href=\"http://www.wowhead.com/item=154172\">Aman'Thul's Vision +20</a>",
            "<a href=\"http://www.wowhead.com/item=154172\">Aman'Thul's Vision +15</a>",
            "<a href=\"http://www.wowhead.com/item=154172\">Aman'Thul's Vision +10</a>",
            "<a href=\"http://www.wowhead.com/item=144259\">Kil'jaeden's Burning Wish</a>",
            "<a href=\"http://www.wowhead.com/item=154176\">Khaz'goroths Courage +20</a>",
            "<a href=\"http://www.wowhead.com/item=154176\">Khaz'goroths Courage +15</a>",
            "<a href=\"http://www.wowhead.com/item=154176\">Khaz'goroths Courage +10</a>",
            "<a href=\"http://www.wowhead.com/item=151190\">Specter of Betrayal</a>",
            "<a href=\"http://www.wowhead.com/item=154173\">Aggramar's Conviction +15</a>",
            "<a href=\"http://www.wowhead.com/item=154173\">Aggramar's Conviction +20</a>",
            "<a href=\"http://www.wowhead.com/item=154173\">Aggramar's Conviction +10</a>",
            "<a href=\"http://www.wowhead.com/item=154173\">Aggramar's Conviction</a>",
            "<a href=\"http://www.wowhead.com/item=142167\">Eye of Command</a>",
            "<a href=\"http://www.wowhead.com/item=154172\">Aman'Thul's Vision</a>",
            "<a href=\"http://www.wowhead.com/item=142159\">Bloodstained Handkerchief</a>",
            "<a href=\"http://www.wowhead.com/item=147010\">Cradle of Anguish</a>",
            "<a href=\"http://www.wowhead.com/item=137459\">Chaos Talisman</a>",
            "<a href=\"http://www.wowhead.com/item=139328\">Ursoc's Rending Paw</a>",
            "<a href=\"http://www.wowhead.com/item=154176\">Khaz'goroths Courage</a>",
            "<a href=\"http://www.wowhead.com/item=142508,bonus_id=603\">Stat Stick (Crit)</a>",
            "<a href=\"http://www.wowhead.com/item=141482\">Unstable Arcanocrystal</a>",
            "<a href=\"http://www.wowhead.com/item=133644\">Memento of Angerboda</a>",
            "<a href=\"http://www.wowhead.com/item=142508,bonus_id=604\">Stat Stick (Haste)</a>",
            "<a href=\"http://www.wowhead.com/item=141535\">Ettin Fingernail</a>",
            "<a href=\"http://www.wowhead.com/item=142508,bonus_id=607\">Stat Stick (Versatility)</a>",
            "<a href=\"http://www.wowhead.com/item=137419\">Chrono Shard</a>",
            "<a href=\"http://www.wowhead.com/item=144482\">Fel-Oiled Infernal Machine</a>",
            "<a href=\"http://www.wowhead.com/item=142508,bonus_id=605\">Stat Stick (Mastery)</a>",
            "<a href=\"http://www.wowhead.com/item=142669\">PVP Badge of Victory</a>",
            "<a href=\"http://www.wowhead.com/item=137312\">Nightmare Egg Shell</a>",
            "<a href=\"http://www.wowhead.com/item=133647\">Gift of Radiance</a>",
            "<a href=\"http://www.wowhead.com/item=139325\">Spontaneous Appendages</a>",
            "<a href=\"http://www.wowhead.com/item=147011\">Vial of Ceaseless Toxins</a>",
            "<a href=\"http://www.wowhead.com/item=137539\">Faulty Countermeasure</a>",
            "<a href=\"http://www.wowhead.com/item=140806\">Convergence of Fates</a>",
            "<a href=\"http://www.wowhead.com/item=151307\">Void Stalker's Contract</a>",
            "<a href=\"http://www.wowhead.com/item=140799\">Might of Krosus</a>",
            "<a href=\"http://www.wowhead.com/item=140796\">Entwined Elemental Foci</a>",
            "<a href=\"http://www.wowhead.com/item=142784\">PVP Insignia of Victory</a>",
            "<a href=\"http://www.wowhead.com/item=140808\">Draught of Souls</a>",
            "<a href=\"http://www.wowhead.com/item=140790\">Claw of the Crystalline Scorpid</a>",
            "<a href=\"http://www.wowhead.com/item=133642\">Horn of Valor</a>",
            "<a href=\"http://www.wowhead.com/item=137406\">Terrorbound Nexus</a>",
            "<a href=\"http://www.wowhead.com/item=151964\">Seeping Scourgewing</a>",
            "<a href=\"http://www.wowhead.com/item=142164\">Toe Knee's Promise</a>",
            "<a href=\"http://www.wowhead.com/item=147012\">Umbral Moonglaives</a>",
            "<a href=\"http://www.wowhead.com/item=137357\">Mark of Dargrul</a>",
            "<a href=\"http://www.wowhead.com/item=136715\">Spiked Counterweight</a>",
            "<a href=\"http://www.wowhead.com/item=147015\">Engine of Eradication</a>",
            "<a href=\"http://www.wowhead.com/item=151607\">Astral Alchemist Stone</a>",
            "<a href=\"http://www.wowhead.com/item=139334\">Nature's Call</a>",
            "<a href=\"http://www.wowhead.com/item=137439\">Tiny Oozeling in a Jar</a>",
            "<a href=\"http://www.wowhead.com/item=147009\">Infernal Cinders</a>",
            "<a href=\"http://www.wowhead.com/item=140034\">Impact Tremor</a>",
            "<a href=\"http://www.wowhead.com/item=152093\">Gorshalach's Legacy</a>",
            "<a href=\"http://www.wowhead.com/item=139320\">Ravaged Seed Pod</a>",
            "<a href=\"http://www.wowhead.com/item=151968\">Shadow-Singed Fang</a>",
            "<a href=\"http://www.wowhead.com/item=151963\">Forgefiend's Fabricator</a>",
            "<a href=\"http://www.wowhead.com/item=137369\">Giant Ornamental Pearl</a>",
            "<a href=\"http://www.wowhead.com/item=137486\">Windscar Whetstone</a>"
        ],
        labels: {
            useHTML: true
        }
    },
    yAxis: {
        labels: {
            enabled: false
        },
        min: 0,
        plotLines: [
            {
                color: "#0973DA",
                label: {
                    align: "left",
                    rotation: 0,
                    style: {
                        color: "#0973DA"
                    },
                    text: 'mean: ' + Intl.NumberFormat().format(93430),
                    verticalAlign: "bottom",
                    x: 10,
                    y: -23
                },
                value: 93430.27868852459,
                width: 2,
                zIndex: 2
            }
        ],
        stackLabels: {
            enabled: true,
            formatter: function() {          return Intl.NumberFormat().format(this.total);        },
            style: {
                textOutline: false
            }
        },
        title: {
            text: "\u0394 Damage per second"
        }
    }
});