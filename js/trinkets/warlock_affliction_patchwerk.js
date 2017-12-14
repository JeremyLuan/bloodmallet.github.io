Highcharts.chart('warlock_affliction_patchwerk', 
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
                326960,
                324676,
                315999,
                44572,
                44286,
                42844,
                268981,
                0,
                34583,
                0,
                31797,
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
                0,
                0
            ],
            name: "1000"
        },
        {
            color: "#cab2d6",
            data: [
                0,
                0,
                0,
                19737,
                19685,
                15086,
                0,
                8905,
                13890,
                15975,
                11546,
                14628,
                15105,
                13082,
                10923,
                17668,
                12062,
                14087,
                13451,
                14380,
                12521,
                11932,
                9048,
                15441,
                11657,
                10863,
                12809,
                11325,
                10067,
                10468,
                10558,
                10347,
                10245,
                9088,
                11759,
                6180,
                9193,
                8912,
                9983,
                11236,
                6154,
                7339,
                8066,
                10653,
                11636,
                11796,
                10816,
                9405,
                7747,
                6693,
                0,
                6642,
                5507,
                6788,
                6863,
                6607,
                7239,
                3599,
                2644,
                4003,
                2881
            ],
            name: "980"
        },
        {
            color: "#ff7f00",
            data: [
                0,
                0,
                0,
                19520,
                14754,
                17110,
                0,
                9573,
                186358,
                14650,
                11297,
                11914,
                9111,
                12845,
                13944,
                15015,
                16116,
                9896,
                9807,
                8117,
                13304,
                9495,
                14457,
                8880,
                10055,
                11866,
                11490,
                8902,
                12420,
                10805,
                10110,
                10845,
                9027,
                13300,
                5242,
                6764,
                9267,
                11903,
                7526,
                10953,
                8178,
                10209,
                6002,
                9703,
                10722,
                7861,
                9303,
                7562,
                6962,
                6484,
                0,
                5507,
                5443,
                2090,
                6653,
                6095,
                5367,
                6015,
                6975,
                2601,
                1880
            ],
            name: "970"
        },
        {
            color: "#fb9a99",
            data: [
                0,
                0,
                0,
                14774,
                17025,
                14976,
                0,
                9457,
                0,
                13344,
                11469,
                11672,
                16086,
                9404,
                12567,
                12525,
                7533,
                12489,
                8677,
                12256,
                9710,
                9987,
                8754,
                10008,
                10514,
                12190,
                8844,
                10962,
                9920,
                9966,
                9030,
                5780,
                10475,
                6350,
                10008,
                9333,
                5568,
                10530,
                6356,
                8764,
                7280,
                6173,
                7817,
                11251,
                6882,
                11172,
                11237,
                4628,
                5168,
                6032,
                0,
                5226,
                6282,
                6977,
                4914,
                5764,
                3975,
                4856,
                3645,
                929,
                3928
            ],
            name: "960"
        },
        {
            color: "#e31a1c",
            data: [
                0,
                0,
                0,
                15696,
                14151,
                12978,
                0,
                7723,
                0,
                10674,
                9405,
                10789,
                7800,
                9799,
                8601,
                12337,
                12030,
                8892,
                12609,
                11575,
                9969,
                13434,
                10680,
                11721,
                11771,
                9788,
                9909,
                11001,
                10015,
                8884,
                7496,
                7919,
                6842,
                6468,
                6597,
                9140,
                8039,
                9824,
                9559,
                11340,
                7272,
                7596,
                6990,
                8217,
                15186,
                7853,
                7581,
                7556,
                7884,
                5101,
                0,
                4358,
                6289,
                4285,
                4790,
                3796,
                3884,
                4423,
                4351,
                4692,
                1123
            ],
            name: "950"
        },
        {
            color: "#b2df8a",
            data: [
                0,
                0,
                0,
                193819,
                191072,
                183540,
                0,
                7529,
                0,
                9714,
                149215,
                8838,
                10253,
                9722,
                8367,
                12507,
                6799,
                9021,
                8474,
                9194,
                7892,
                6605,
                8883,
                6225,
                5776,
                9113,
                8227,
                7001,
                7572,
                8511,
                8553,
                4478,
                7358,
                8261,
                4344,
                6988,
                4966,
                8629,
                5634,
                7043,
                6896,
                5679,
                6552,
                8713,
                4989,
                8328,
                7031,
                4768,
                7409,
                4035,
                0,
                6039,
                4700,
                5082,
                5704,
                5280,
                4162,
                3741,
                2193,
                1601,
                3121
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
                8607,
                0,
                10917,
                0,
                10362,
                8184,
                8340,
                7524,
                11054,
                8784,
                8379,
                8775,
                8800,
                8765,
                8426,
                8009,
                8692,
                9123,
                10826,
                8473,
                8408,
                7676,
                7779,
                8834,
                7240,
                6511,
                8118,
                8763,
                7611,
                5915,
                7952,
                6696,
                5138,
                4499,
                8032,
                4408,
                6982,
                6798,
                7075,
                7834,
                5089,
                3231,
                7722,
                9955,
                3037,
                3349,
                3466,
                4818,
                3641,
                2867,
                2773,
                4669,
                4071,
                1778
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
                8290,
                0,
                157038,
                0,
                9228,
                8528,
                6426,
                8300,
                103332,
                9423,
                9101,
                6250,
                8545,
                6882,
                8638,
                6392,
                10326,
                6623,
                8011,
                6662,
                9491,
                109119,
                6740,
                102309,
                106349,
                4772,
                4164,
                6086,
                5117,
                3971,
                7256,
                3868,
                9190,
                4637,
                3703,
                6196,
                6635,
                5531,
                7678,
                6907,
                5210,
                5363,
                2183,
                5396,
                4899,
                5030,
                5796,
                3189,
                3524,
                3977,
                4200,
                240,
                643,
                3549
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
                187948,
                0,
                0,
                0,
                125029,
                116227,
                119388,
                117192,
                0,
                110104,
                110956,
                113918,
                108170,
                110475,
                109755,
                111921,
                106800,
                107807,
                99270,
                103744,
                100889,
                0,
                98212,
                0,
                0,
                93100,
                91420,
                93914,
                89836,
                92745,
                70622,
                85598,
                69089,
                86408,
                82118,
                84219,
                66382,
                66763,
                65613,
                66580,
                82576,
                80913,
                82911,
                99229,
                77369,
                74988,
                76967,
                73628,
                72392,
                71671,
                70534,
                67661,
                66375,
                52563
            ],
            name: "910"
        }
    ],
    subtitle: {
        text: "UTC 2017-12-13 21:45 SimC build: <a href=\"https://github.com/simulationcraft/simc/commit/2143d84bc98dd1d780b61e851198f81cf756e317\" target=\"blank\">2143d84</a>",
        useHTML: true
    },
    title: {
        text: "Warlock - Affliction - Patchwerk",
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
            "<a href=\"http://www.wowhead.com/item=154172\">Aman'Thul's Vision +20</a>",
            "<a href=\"http://www.wowhead.com/item=154172\">Aman'Thul's Vision +15</a>",
            "<a href=\"http://www.wowhead.com/item=154172\">Aman'Thul's Vision +10</a>",
            "<a href=\"http://www.wowhead.com/item=154177\">Norgannon's Prowess +20</a>",
            "<a href=\"http://www.wowhead.com/item=154177\">Norgannon's Prowess +15</a>",
            "<a href=\"http://www.wowhead.com/item=154177\">Norgannon's Prowess +10</a>",
            "<a href=\"http://www.wowhead.com/item=154172\">Aman'Thul's Vision</a>",
            "<a href=\"http://www.wowhead.com/item=141482\">Unstable Arcanocrystal</a>",
            "<a href=\"http://www.wowhead.com/item=144259\">Kil'jaeden's Burning Wish</a>",
            "<a href=\"http://www.wowhead.com/item=151955\">Acrid Catalyst Injector</a>",
            "<a href=\"http://www.wowhead.com/item=154177\">Norgannon's Prowess</a>",
            "<a href=\"http://www.wowhead.com/item=147017\">Tarnished Sentinel Medallion</a>",
            "<a href=\"http://www.wowhead.com/item=140809\">Whispers in the Dark</a>",
            "<a href=\"http://www.wowhead.com/item=142507,bonus_id=605\">Stat Stick (Mastery)</a>",
            "<a href=\"http://www.wowhead.com/item=144480\">Dreadstone of Endless Shadows</a>",
            "<a href=\"http://www.wowhead.com/item=151971\">Sheath of Asara</a>",
            "<a href=\"http://www.wowhead.com/item=141584\">Eyasu's Mulligan</a>",
            "<a href=\"http://www.wowhead.com/item=140792\">Erratic Metronome</a>",
            "<a href=\"http://www.wowhead.com/item=141536\">Padawsen's Unlucky Charm</a>",
            "<a href=\"http://www.wowhead.com/item=147002\">Charm of the Rising Tide</a>",
            "<a href=\"http://www.wowhead.com/item=142507,bonus_id=604\">Stat Stick (Haste)</a>",
            "<a href=\"http://www.wowhead.com/item=137367\">Stormsinger Fulmination Charge</a>",
            "<a href=\"http://www.wowhead.com/item=142507,bonus_id=603\">Stat Stick (Crit)</a>",
            "<a href=\"http://www.wowhead.com/item=137419\">Chrono Shard</a>",
            "<a href=\"http://www.wowhead.com/item=147016\">Terror From Below</a>",
            "<a href=\"http://www.wowhead.com/item=147019\">Tome of Unraveling Sanity</a>",
            "<a href=\"http://www.wowhead.com/item=137485\">Infernal Writ</a>",
            "<a href=\"http://www.wowhead.com/item=142507,bonus_id=607\">Stat Stick (Versatility)</a>",
            "<a href=\"http://www.wowhead.com/item=151962\">Prototype Personnel Decimator</a>",
            "<a href=\"http://www.wowhead.com/item=142779\">PVP Badge of Dominance</a>",
            "<a href=\"http://www.wowhead.com/item=151970\">Vitality Resonator</a>",
            "<a href=\"http://www.wowhead.com/item=151969\">Terminus Signaling Beacon</a>",
            "<a href=\"http://www.wowhead.com/item=137433\">Obelisk of the Void</a>",
            "<a href=\"http://www.wowhead.com/item=133642\">Horn of Valor</a>",
            "<a href=\"http://www.wowhead.com/item=137349\">Naraxas' Spiked Tongue</a>",
            "<a href=\"http://www.wowhead.com/item=142668\">PVP Insignia of Dominance</a>",
            "<a href=\"http://www.wowhead.com/item=140801\">Fury of the Burning Sky</a>",
            "<a href=\"http://www.wowhead.com/item=151310\">Reality Breacher</a>",
            "<a href=\"http://www.wowhead.com/item=147018\">Spectral Thurible</a>",
            "<a href=\"http://www.wowhead.com/item=140804\">Star Gate</a>",
            "<a href=\"http://www.wowhead.com/item=140030\">Devilsaur Shock-Baton</a>",
            "<a href=\"http://www.wowhead.com/item=137541\">Moonlit Prism</a>",
            "<a href=\"http://www.wowhead.com/item=140798\">Icon of Rot</a>",
            "<a href=\"http://www.wowhead.com/item=142165\">Deteriorated Construct Core</a>",
            "<a href=\"http://www.wowhead.com/item=139323\">Bough of Corruption</a>",
            "<a href=\"http://www.wowhead.com/item=139323\">Twisting Wind</a>",
            "<a href=\"http://www.wowhead.com/item=137398\">Portable Manacracker</a>",
            "<a href=\"http://www.wowhead.com/item=139321\">Swarming Plaguehive</a>",
            "<a href=\"http://www.wowhead.com/item=137306\">Oakheart's Gnarled Root</a>",
            "<a href=\"http://www.wowhead.com/item=142157\">Aran's Relaxing Ruby</a>",
            "<a href=\"http://www.wowhead.com/item=151607\">Astral Alchemist Stone</a>",
            "<a href=\"http://www.wowhead.com/item=136716\">Caged Horror</a>",
            "<a href=\"http://www.wowhead.com/item=140800\">Pharameres Forbidden Grimoire</a>",
            "<a href=\"http://www.wowhead.com/item=137301\">Corrupted Starlight</a>",
            "<a href=\"http://www.wowhead.com/item=142160\">Mrrgria's Favor</a>",
            "<a href=\"http://www.wowhead.com/item=142164\">Toe Knee's Promise</a>",
            "<a href=\"http://www.wowhead.com/item=133641\">Eye of Skovald</a>",
            "<a href=\"http://www.wowhead.com/item=139326\">Wriggling Sinew</a>",
            "<a href=\"http://www.wowhead.com/item=137446\">Elementium Bomb Squirrel Generator</a>",
            "<a href=\"http://www.wowhead.com/item=138224\">Unstable Horrorslime</a>",
            "<a href=\"http://www.wowhead.com/item=137329\">Figurehead of the Naglfar</a>"
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
                    text: 'mean: ' + Intl.NumberFormat().format(169078),
                    verticalAlign: "bottom",
                    x: 10,
                    y: -23
                },
                value: 169078.88524590165,
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