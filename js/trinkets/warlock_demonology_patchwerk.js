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
                312361,
                308467,
                298105,
                40071,
                39157,
                38324,
                255590,
                0,
                30448,
                28931,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
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
                14524,
                18462,
                16879,
                0,
                10429,
                12599,
                11626,
                15798,
                12164,
                13881,
                14216,
                13167,
                11420,
                12135,
                11943,
                13220,
                10865,
                11085,
                13377,
                14799,
                9799,
                11449,
                14386,
                10157,
                11949,
                10703,
                12203,
                11297,
                10079,
                10179,
                9456,
                11254,
                8927,
                6629,
                8659,
                12248,
                9338,
                10665,
                6782,
                8627,
                7851,
                7158,
                7964,
                9892,
                0,
                7723,
                5510,
                5204,
                8925,
                6099,
                4601,
                4427,
                5773,
                2610,
                3663,
                1704,
                3448,
                1063
            ],
            name: "980"
        },
        {
            color: "#ff7f00",
            data: [
                0,
                0,
                0,
                16991,
                15586,
                12741,
                0,
                8689,
                176637,
                11905,
                10650,
                9065,
                12265,
                10788,
                12977,
                11579,
                8910,
                9933,
                9714,
                11172,
                10807,
                9457,
                12171,
                11904,
                9526,
                10537,
                9680,
                7012,
                8838,
                6136,
                8642,
                7976,
                10201,
                10022,
                10029,
                10959,
                7496,
                3823,
                8107,
                6916,
                9795,
                7151,
                10372,
                6342,
                5098,
                4734,
                10487,
                0,
                2533,
                6643,
                5264,
                2996,
                5183,
                3943,
                2646,
                4031,
                6177,
                5470,
                2814,
                2627,
                2546
            ],
            name: "970"
        },
        {
            color: "#fb9a99",
            data: [
                0,
                0,
                0,
                13558,
                12556,
                15779,
                0,
                8964,
                0,
                13477,
                13850,
                13542,
                11023,
                11672,
                9782,
                9385,
                9643,
                11082,
                11195,
                11242,
                9824,
                7923,
                12528,
                9997,
                12813,
                8712,
                7980,
                9006,
                11366,
                9112,
                6889,
                7724,
                8313,
                7401,
                9998,
                10416,
                5312,
                9291,
                9308,
                4887,
                10053,
                6687,
                11118,
                4233,
                5511,
                5932,
                7369,
                0,
                6791,
                5020,
                2428,
                5474,
                5926,
                4372,
                5812,
                1999,
                4084,
                439,
                5972,
                3881,
                3589
            ],
            name: "960"
        },
        {
            color: "#e31a1c",
            data: [
                0,
                0,
                0,
                11759,
                14410,
                11675,
                0,
                8054,
                0,
                8470,
                12857,
                8390,
                11497,
                10132,
                11431,
                9108,
                11181,
                9735,
                10019,
                7059,
                9891,
                10855,
                9385,
                7166,
                9068,
                11889,
                9687,
                7681,
                8696,
                7443,
                10833,
                8270,
                4859,
                8272,
                9113,
                9909,
                6442,
                4941,
                8231,
                7279,
                8087,
                4522,
                7414,
                9383,
                7469,
                5367,
                5901,
                0,
                3705,
                4672,
                8395,
                3363,
                4119,
                3382,
                2490,
                3853,
                3183,
                5547,
                4349,
                1501,
                0
            ],
            name: "950"
        },
        {
            color: "#b2df8a",
            data: [
                0,
                0,
                0,
                173008,
                169420,
                163394,
                0,
                9497,
                0,
                138696,
                7220,
                11151,
                8852,
                8031,
                7379,
                9493,
                8714,
                9413,
                9199,
                11038,
                8391,
                6463,
                10881,
                8600,
                4999,
                8292,
                6803,
                5986,
                6103,
                6613,
                4721,
                7859,
                6922,
                6676,
                7145,
                7531,
                6807,
                6026,
                7703,
                5951,
                7967,
                7075,
                7784,
                2296,
                5714,
                5545,
                6450,
                0,
                5631,
                4046,
                3906,
                4748,
                3937,
                4914,
                4131,
                4970,
                3412,
                3136,
                449,
                1116,
                5281
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
                7852,
                0,
                0,
                10420,
                6674,
                7988,
                8711,
                11627,
                10220,
                6498,
                7348,
                5728,
                5361,
                8567,
                10297,
                9838,
                10523,
                10129,
                8160,
                9244,
                8989,
                9491,
                9895,
                5978,
                5225,
                7979,
                4152,
                7353,
                8040,
                3759,
                6750,
                6460,
                3938,
                6431,
                3210,
                6171,
                8080,
                3848,
                4757,
                7079,
                5214,
                4768,
                5470,
                2001,
                5644,
                7409,
                2057,
                5749,
                1869,
                3229,
                3105,
                7300,
                2922,
                356
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
                6389,
                0,
                0,
                8389,
                6347,
                7745,
                124424,
                4336,
                5566,
                6677,
                7486,
                8828,
                6374,
                9170,
                7813,
                95122,
                3282,
                4970,
                6611,
                102517,
                105027,
                6232,
                3262,
                4913,
                5987,
                4703,
                8638,
                5966,
                5497,
                90592,
                2466,
                7166,
                4712,
                5279,
                5820,
                7127,
                2980,
                3166,
                4894,
                5571,
                5887,
                2380,
                5492,
                4543,
                2403,
                1071,
                3599,
                1591,
                3233,
                3017,
                3228,
                602,
                847,
                1409
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
                175627,
                0,
                0,
                116603,
                125570,
                116226,
                0,
                113144,
                114929,
                117164,
                112211,
                106610,
                108539,
                103543,
                103398,
                0,
                101793,
                98316,
                89412,
                0,
                0,
                93366,
                96863,
                94550,
                93686,
                91654,
                86895,
                68203,
                67371,
                0,
                84082,
                65162,
                80891,
                64504,
                81124,
                63406,
                79894,
                78965,
                76601,
                60551,
                99485,
                74301,
                70242,
                75269,
                72180,
                71053,
                70591,
                69150,
                60266,
                59265,
                57644,
                55424,
                54219,
                45776
            ],
            name: "910"
        }
    ],
    subtitle: {
        text: "UTC 2017-12-13 21:45 SimC build: <a href=\"https://github.com/simulationcraft/simc/commit/2143d84bc98dd1d780b61e851198f81cf756e317\" target=\"blank\">2143d84</a>",
        useHTML: true
    },
    title: {
        text: "Warlock - Demonology - Patchwerk",
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
            "<a href=\"http://www.wowhead.com/item=154177\">Norgannon's Prowess</a>",
            "<a href=\"http://www.wowhead.com/item=140809\">Whispers in the Dark</a>",
            "<a href=\"http://www.wowhead.com/item=147002\">Charm of the Rising Tide</a>",
            "<a href=\"http://www.wowhead.com/item=140792\">Erratic Metronome</a>",
            "<a href=\"http://www.wowhead.com/item=151955\">Acrid Catalyst Injector</a>",
            "<a href=\"http://www.wowhead.com/item=142507,bonus_id=604\">Stat Stick (Haste)</a>",
            "<a href=\"http://www.wowhead.com/item=144480\">Dreadstone of Endless Shadows</a>",
            "<a href=\"http://www.wowhead.com/item=137419\">Chrono Shard</a>",
            "<a href=\"http://www.wowhead.com/item=142507,bonus_id=605\">Stat Stick (Mastery)</a>",
            "<a href=\"http://www.wowhead.com/item=141584\">Eyasu's Mulligan</a>",
            "<a href=\"http://www.wowhead.com/item=141536\">Padawsen's Unlucky Charm</a>",
            "<a href=\"http://www.wowhead.com/item=142507,bonus_id=607\">Stat Stick (Versatility)</a>",
            "<a href=\"http://www.wowhead.com/item=137367\">Stormsinger Fulmination Charge</a>",
            "<a href=\"http://www.wowhead.com/item=151971\">Sheath of Asara</a>",
            "<a href=\"http://www.wowhead.com/item=142507,bonus_id=603\">Stat Stick (Crit)</a>",
            "<a href=\"http://www.wowhead.com/item=142779\">PVP Badge of Dominance</a>",
            "<a href=\"http://www.wowhead.com/item=147019\">Tome of Unraveling Sanity</a>",
            "<a href=\"http://www.wowhead.com/item=151970\">Vitality Resonator</a>",
            "<a href=\"http://www.wowhead.com/item=151962\">Prototype Personnel Decimator</a>",
            "<a href=\"http://www.wowhead.com/item=137485\">Infernal Writ</a>",
            "<a href=\"http://www.wowhead.com/item=147017\">Tarnished Sentinel Medallion</a>",
            "<a href=\"http://www.wowhead.com/item=137433\">Obelisk of the Void</a>",
            "<a href=\"http://www.wowhead.com/item=142668\">PVP Insignia of Dominance</a>",
            "<a href=\"http://www.wowhead.com/item=133642\">Horn of Valor</a>",
            "<a href=\"http://www.wowhead.com/item=147016\">Terror From Below</a>",
            "<a href=\"http://www.wowhead.com/item=140804\">Star Gate</a>",
            "<a href=\"http://www.wowhead.com/item=151310\">Reality Breacher</a>",
            "<a href=\"http://www.wowhead.com/item=151969\">Terminus Signaling Beacon</a>",
            "<a href=\"http://www.wowhead.com/item=137349\">Naraxas' Spiked Tongue</a>",
            "<a href=\"http://www.wowhead.com/item=142165\">Deteriorated Construct Core</a>",
            "<a href=\"http://www.wowhead.com/item=147018\">Spectral Thurible</a>",
            "<a href=\"http://www.wowhead.com/item=139323\">Twisting Wind</a>",
            "<a href=\"http://www.wowhead.com/item=140801\">Fury of the Burning Sky</a>",
            "<a href=\"http://www.wowhead.com/item=139323\">Bough of Corruption</a>",
            "<a href=\"http://www.wowhead.com/item=139321\">Swarming Plaguehive</a>",
            "<a href=\"http://www.wowhead.com/item=137306\">Oakheart's Gnarled Root</a>",
            "<a href=\"http://www.wowhead.com/item=137541\">Moonlit Prism</a>",
            "<a href=\"http://www.wowhead.com/item=137398\">Portable Manacracker</a>",
            "<a href=\"http://www.wowhead.com/item=151607\">Astral Alchemist Stone</a>",
            "<a href=\"http://www.wowhead.com/item=140800\">Pharameres Forbidden Grimoire</a>",
            "<a href=\"http://www.wowhead.com/item=140030\">Devilsaur Shock-Baton</a>",
            "<a href=\"http://www.wowhead.com/item=142157\">Aran's Relaxing Ruby</a>",
            "<a href=\"http://www.wowhead.com/item=142164\">Toe Knee's Promise</a>",
            "<a href=\"http://www.wowhead.com/item=140798\">Icon of Rot</a>",
            "<a href=\"http://www.wowhead.com/item=136716\">Caged Horror</a>",
            "<a href=\"http://www.wowhead.com/item=137301\">Corrupted Starlight</a>",
            "<a href=\"http://www.wowhead.com/item=142160\">Mrrgria's Favor</a>",
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
                    text: 'mean: ' + Intl.NumberFormat().format(156680),
                    verticalAlign: "bottom",
                    x: 10,
                    y: -23
                },
                value: 156680.8524590164,
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