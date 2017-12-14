Highcharts.chart('druid_balance_patchwerk', 
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
                283204,
                280547,
                39158,
                272829,
                39544,
                36144,
                227619,
                29003,
                0,
                27313,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
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
                17129,
                0,
                17791,
                16403,
                0,
                13355,
                4086,
                13045,
                15900,
                14483,
                11989,
                15119,
                13562,
                13588,
                11678,
                13258,
                12484,
                14476,
                10852,
                11510,
                9767,
                12591,
                11081,
                10671,
                13117,
                10114,
                11884,
                7274,
                9744,
                10457,
                9628,
                12412,
                8825,
                7856,
                10850,
                10396,
                8999,
                11443,
                12407,
                5365,
                7435,
                11101,
                4798,
                7003,
                6426,
                8480,
                6213,
                0,
                7259,
                6847,
                4761,
                6572,
                6107,
                5115,
                6532,
                6409,
                2479,
                4295,
                833
            ],
            name: "980"
        },
        {
            color: "#ff7f00",
            data: [
                0,
                0,
                16401,
                0,
                15395,
                16168,
                0,
                173713,
                8636,
                11873,
                11983,
                11616,
                11597,
                8547,
                10816,
                8010,
                12543,
                7338,
                10268,
                13285,
                11388,
                12939,
                12689,
                11702,
                9529,
                13995,
                11446,
                13835,
                10050,
                12078,
                8087,
                6973,
                11400,
                12300,
                8892,
                7627,
                12484,
                9282,
                6975,
                13462,
                8122,
                6990,
                5629,
                10581,
                6405,
                8427,
                6181,
                3938,
                6800,
                0,
                2702,
                2312,
                4428,
                4564,
                5015,
                2840,
                4126,
                2789,
                4387,
                543,
                5289
            ],
            name: "970"
        },
        {
            color: "#fb9a99",
            data: [
                0,
                0,
                15620,
                0,
                15185,
                13515,
                0,
                0,
                8523,
                9354,
                11524,
                10920,
                8861,
                11093,
                10522,
                10828,
                10757,
                9943,
                9507,
                11292,
                10461,
                8073,
                7857,
                8267,
                9261,
                7280,
                9535,
                8719,
                8868,
                8899,
                8905,
                8079,
                3628,
                10351,
                8210,
                7964,
                7423,
                10573,
                5329,
                5328,
                9461,
                7428,
                4629,
                10207,
                8411,
                7356,
                5378,
                4985,
                7189,
                0,
                4897,
                5755,
                7267,
                4087,
                1716,
                4883,
                5095,
                6275,
                2004,
                4194,
                470
            ],
            name: "960"
        },
        {
            color: "#e31a1c",
            data: [
                0,
                0,
                15103,
                0,
                12651,
                11210,
                0,
                0,
                8200,
                10708,
                9022,
                12873,
                12257,
                7395,
                9211,
                9678,
                8041,
                12039,
                11281,
                11470,
                8210,
                8210,
                11909,
                5918,
                8174,
                7707,
                10995,
                6700,
                8799,
                7416,
                6875,
                6804,
                10677,
                9209,
                6551,
                5508,
                8619,
                7292,
                7577,
                10870,
                8108,
                6378,
                6969,
                6941,
                5378,
                5008,
                5124,
                6465,
                3300,
                0,
                7104,
                6508,
                1806,
                6197,
                2382,
                4002,
                2529,
                3782,
                4945,
                1824,
                672
            ],
            name: "950"
        },
        {
            color: "#b2df8a",
            data: [
                0,
                0,
                170141,
                0,
                168516,
                161750,
                0,
                0,
                6885,
                131376,
                8960,
                7711,
                5477,
                9307,
                7846,
                8939,
                8672,
                7085,
                7257,
                8511,
                9848,
                11029,
                5131,
                9573,
                7778,
                7988,
                10190,
                7193,
                6898,
                8931,
                7641,
                9291,
                6550,
                6220,
                6975,
                6252,
                7607,
                10354,
                4302,
                6986,
                6180,
                7757,
                5968,
                4632,
                4770,
                4804,
                5783,
                5774,
                4846,
                0,
                4687,
                4172,
                9045,
                2477,
                6126,
                3872,
                4677,
                1430,
                2901,
                2559,
                4394
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
                5820,
                0,
                9810,
                10869,
                8965,
                7513,
                8486,
                7012,
                6561,
                8970,
                9711,
                12109,
                8410,
                4145,
                8025,
                8529,
                10398,
                9048,
                6756,
                7515,
                7854,
                4917,
                5553,
                4428,
                4707,
                6951,
                3230,
                6370,
                8687,
                6250,
                6316,
                6664,
                8396,
                2278,
                3540,
                4659,
                4684,
                3829,
                5896,
                5702,
                3437,
                6899,
                2892,
                4218,
                2520,
                3314,
                2882,
                4020,
                2843,
                2029,
                4446,
                4142,
                0
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
                4302,
                0,
                131475,
                7511,
                8179,
                9570,
                4838,
                8412,
                8820,
                5869,
                5953,
                93220,
                5907,
                6705,
                7994,
                7199,
                5467,
                4419,
                7159,
                7593,
                5565,
                98543,
                91732,
                6850,
                7144,
                4458,
                8326,
                5395,
                5222,
                7373,
                83220,
                5557,
                5980,
                6602,
                7543,
                8115,
                5105,
                5106,
                3425,
                4629,
                6139,
                6532,
                1999,
                3702,
                2546,
                1382,
                2446,
                2616,
                5118,
                6076,
                1566,
                926,
                2744
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
                161689,
                0,
                0,
                116600,
                107538,
                103758,
                105700,
                103737,
                101899,
                103265,
                100376,
                0,
                98452,
                99742,
                98142,
                96929,
                97926,
                97426,
                87655,
                92736,
                90411,
                0,
                0,
                85141,
                83844,
                71381,
                82117,
                84179,
                67671,
                65196,
                0,
                62116,
                62419,
                76884,
                76091,
                61385,
                76116,
                73446,
                72203,
                67313,
                67940,
                90956,
                70670,
                65248,
                65911,
                63220,
                64745,
                63328,
                57781,
                57000,
                55188,
                54262,
                43543
            ],
            name: "910"
        }
    ],
    subtitle: {
        text: "UTC 2017-12-13 21:45 SimC build: <a href=\"https://github.com/simulationcraft/simc/commit/2143d84bc98dd1d780b61e851198f81cf756e317\" target=\"blank\">2143d84</a>",
        useHTML: true
    },
    title: {
        text: "Druid - Balance - Patchwerk",
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
            "<a href=\"http://www.wowhead.com/item=154177\">Norgannon's Prowess +20</a>",
            "<a href=\"http://www.wowhead.com/item=154172\">Aman'Thul's Vision +10</a>",
            "<a href=\"http://www.wowhead.com/item=154177\">Norgannon's Prowess +15</a>",
            "<a href=\"http://www.wowhead.com/item=154177\">Norgannon's Prowess +10</a>",
            "<a href=\"http://www.wowhead.com/item=154172\">Aman'Thul's Vision</a>",
            "<a href=\"http://www.wowhead.com/item=144259\">Kil'jaeden's Burning Wish</a>",
            "<a href=\"http://www.wowhead.com/item=141482\">Unstable Arcanocrystal</a>",
            "<a href=\"http://www.wowhead.com/item=154177\">Norgannon's Prowess</a>",
            "<a href=\"http://www.wowhead.com/item=151955\">Acrid Catalyst Injector</a>",
            "<a href=\"http://www.wowhead.com/item=147017\">Tarnished Sentinel Medallion</a>",
            "<a href=\"http://www.wowhead.com/item=147002\">Charm of the Rising Tide</a>",
            "<a href=\"http://www.wowhead.com/item=140792\">Erratic Metronome</a>",
            "<a href=\"http://www.wowhead.com/item=144480\">Dreadstone of Endless Shadows</a>",
            "<a href=\"http://www.wowhead.com/item=142507,bonus_id=605\">Stat Stick (Mastery)</a>",
            "<a href=\"http://www.wowhead.com/item=141536\">Padawsen's Unlucky Charm</a>",
            "<a href=\"http://www.wowhead.com/item=142507,bonus_id=604\">Stat Stick (Haste)</a>",
            "<a href=\"http://www.wowhead.com/item=140809\">Whispers in the Dark</a>",
            "<a href=\"http://www.wowhead.com/item=151971\">Sheath of Asara</a>",
            "<a href=\"http://www.wowhead.com/item=137419\">Chrono Shard</a>",
            "<a href=\"http://www.wowhead.com/item=142507,bonus_id=603\">Stat Stick (Crit)</a>",
            "<a href=\"http://www.wowhead.com/item=147016\">Terror From Below</a>",
            "<a href=\"http://www.wowhead.com/item=141584\">Eyasu's Mulligan</a>",
            "<a href=\"http://www.wowhead.com/item=137367\">Stormsinger Fulmination Charge</a>",
            "<a href=\"http://www.wowhead.com/item=142507,bonus_id=607\">Stat Stick (Versatility)</a>",
            "<a href=\"http://www.wowhead.com/item=147019\">Tome of Unraveling Sanity</a>",
            "<a href=\"http://www.wowhead.com/item=137485\">Infernal Writ</a>",
            "<a href=\"http://www.wowhead.com/item=142779\">PVP Badge of Dominance</a>",
            "<a href=\"http://www.wowhead.com/item=151962\">Prototype Personnel Decimator</a>",
            "<a href=\"http://www.wowhead.com/item=151970\">Vitality Resonator</a>",
            "<a href=\"http://www.wowhead.com/item=133642\">Horn of Valor</a>",
            "<a href=\"http://www.wowhead.com/item=142668\">PVP Insignia of Dominance</a>",
            "<a href=\"http://www.wowhead.com/item=140804\">Star Gate</a>",
            "<a href=\"http://www.wowhead.com/item=137433\">Obelisk of the Void</a>",
            "<a href=\"http://www.wowhead.com/item=137349\">Naraxas' Spiked Tongue</a>",
            "<a href=\"http://www.wowhead.com/item=151310\">Reality Breacher</a>",
            "<a href=\"http://www.wowhead.com/item=142165\">Deteriorated Construct Core</a>",
            "<a href=\"http://www.wowhead.com/item=151969\">Terminus Signaling Beacon</a>",
            "<a href=\"http://www.wowhead.com/item=139323\">Twisting Wind</a>",
            "<a href=\"http://www.wowhead.com/item=139323\">Bough of Corruption</a>",
            "<a href=\"http://www.wowhead.com/item=140030\">Devilsaur Shock-Baton</a>",
            "<a href=\"http://www.wowhead.com/item=139321\">Swarming Plaguehive</a>",
            "<a href=\"http://www.wowhead.com/item=137398\">Portable Manacracker</a>",
            "<a href=\"http://www.wowhead.com/item=140801\">Fury of the Burning Sky</a>",
            "<a href=\"http://www.wowhead.com/item=147018\">Spectral Thurible</a>",
            "<a href=\"http://www.wowhead.com/item=137541\">Moonlit Prism</a>",
            "<a href=\"http://www.wowhead.com/item=137306\">Oakheart's Gnarled Root</a>",
            "<a href=\"http://www.wowhead.com/item=140798\">Icon of Rot</a>",
            "<a href=\"http://www.wowhead.com/item=151607\">Astral Alchemist Stone</a>",
            "<a href=\"http://www.wowhead.com/item=142157\">Aran's Relaxing Ruby</a>",
            "<a href=\"http://www.wowhead.com/item=142160\">Mrrgria's Favor</a>",
            "<a href=\"http://www.wowhead.com/item=140800\">Pharameres Forbidden Grimoire</a>",
            "<a href=\"http://www.wowhead.com/item=142164\">Toe Knee's Promise</a>",
            "<a href=\"http://www.wowhead.com/item=136716\">Caged Horror</a>",
            "<a href=\"http://www.wowhead.com/item=137301\">Corrupted Starlight</a>",
            "<a href=\"http://www.wowhead.com/item=139326\">Wriggling Sinew</a>",
            "<a href=\"http://www.wowhead.com/item=133641\">Eye of Skovald</a>",
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
                    text: 'mean: ' + Intl.NumberFormat().format(151088),
                    verticalAlign: "bottom",
                    x: 10,
                    y: -23
                },
                value: 151088.11475409835,
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