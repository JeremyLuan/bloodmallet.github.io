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
                49530,
                49794,
                46438,
                42850,
                235745,
                232090,
                35232,
                0,
                220761,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                165371,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
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
                20966,
                20410,
                18461,
                17895,
                0,
                0,
                14407,
                20373,
                0,
                12587,
                13496,
                16547,
                20482,
                16578,
                12520,
                14051,
                14239,
                13963,
                14043,
                16615,
                14866,
                16388,
                14415,
                14548,
                14160,
                14855,
                13983,
                14962,
                13662,
                14574,
                0,
                12839,
                14712,
                13524,
                13579,
                13102,
                14148,
                5710,
                9940,
                13116,
                12093,
                9060,
                9143,
                7858,
                9897,
                0,
                11849,
                8014,
                6023,
                5586,
                2638,
                3675,
                5268,
                5096,
                5081,
                5608,
                3936,
                4714,
                3019,
                2110
            ],
            name: "980"
        },
        {
            color: "#ff7f00",
            data: [
                19506,
                18833,
                18776,
                17598,
                0,
                0,
                179844,
                18408,
                0,
                14445,
                16109,
                11482,
                15194,
                17627,
                13295,
                13044,
                14636,
                13578,
                13009,
                10257,
                13802,
                15962,
                11956,
                13273,
                11668,
                12481,
                12969,
                15002,
                10841,
                13166,
                0,
                12954,
                11698,
                10790,
                10404,
                13061,
                12959,
                4713,
                10237,
                10801,
                8759,
                9715,
                10199,
                9466,
                8529,
                0,
                12186,
                5898,
                5125,
                6235,
                3905,
                3529,
                2809,
                4627,
                2427,
                4503,
                2174,
                1579,
                4440,
                0
            ],
            name: "970"
        },
        {
            color: "#fb9a99",
            data: [
                18516,
                19000,
                18449,
                15136,
                0,
                0,
                0,
                16472,
                0,
                11851,
                11889,
                13633,
                13239,
                12136,
                11899,
                11812,
                10993,
                12582,
                12837,
                12533,
                11364,
                13006,
                12068,
                11233,
                10868,
                11768,
                10249,
                11116,
                12992,
                12933,
                0,
                9795,
                11544,
                10111,
                11283,
                13096,
                9853,
                6070,
                10205,
                9998,
                9172,
                8377,
                7158,
                8145,
                10099,
                0,
                10739,
                4204,
                5778,
                4679,
                2985,
                5566,
                4746,
                2231,
                2557,
                1754,
                2369,
                3662,
                2704,
                3354
            ],
            name: "960"
        },
        {
            color: "#e31a1c",
            data: [
                17055,
                17468,
                16107,
                12036,
                0,
                0,
                0,
                15460,
                0,
                13808,
                11027,
                11797,
                13810,
                14772,
                11651,
                8851,
                12830,
                11751,
                10100,
                10862,
                12817,
                12353,
                11766,
                9815,
                11605,
                9551,
                9604,
                11971,
                8597,
                11393,
                0,
                7955,
                12611,
                10276,
                9532,
                9612,
                13262,
                5947,
                9197,
                9482,
                7311,
                9526,
                9239,
                6345,
                5387,
                0,
                9810,
                7957,
                5735,
                4778,
                4163,
                3664,
                3843,
                3786,
                3614,
                3223,
                4365,
                3053,
                3550,
                0
            ],
            name: "950"
        },
        {
            color: "#b2df8a",
            data: [
                166561,
                162099,
                156665,
                141153,
                0,
                0,
                0,
                14729,
                0,
                10043,
                9772,
                8429,
                11672,
                11333,
                11082,
                12563,
                6834,
                8594,
                8948,
                8542,
                8114,
                9274,
                9908,
                9058,
                9764,
                9765,
                10484,
                10865,
                8910,
                10506,
                0,
                10451,
                9628,
                9278,
                10575,
                10485,
                7811,
                6321,
                5837,
                7989,
                6710,
                5713,
                7088,
                6307,
                5549,
                0,
                8686,
                5012,
                3110,
                3326,
                2555,
                5526,
                3483,
                3029,
                1697,
                3989,
                2479,
                2359,
                1649,
                509
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
                10282,
                0,
                8925,
                11316,
                8842,
                10318,
                11296,
                8109,
                10159,
                12698,
                8048,
                9359,
                10840,
                10022,
                10007,
                7662,
                11986,
                8322,
                9583,
                9051,
                9793,
                8090,
                9927,
                0,
                7028,
                9243,
                6798,
                7957,
                8065,
                8570,
                3277,
                7736,
                7385,
                7711,
                5294,
                6617,
                6789,
                7558,
                7824,
                7864,
                2628,
                5023,
                5176,
                4739,
                2279,
                3262,
                2878,
                4649,
                3654,
                3687,
                3662,
                458,
                3117
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
                10953,
                0,
                9650,
                123253,
                8908,
                8819,
                7548,
                121201,
                6445,
                8820,
                9237,
                8645,
                6686,
                8007,
                11016,
                8038,
                5431,
                8785,
                7237,
                7574,
                8004,
                7957,
                6594,
                0,
                8182,
                7648,
                8610,
                7407,
                7884,
                6611,
                5542,
                6182,
                8052,
                6195,
                7218,
                6773,
                86008,
                81162,
                7517,
                8019,
                6066,
                3485,
                1235,
                1045,
                4061,
                3069,
                4728,
                3749,
                2637,
                804,
                2667,
                3570,
                0
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
                116244,
                0,
                125086,
                0,
                116434,
                101048,
                100979,
                0,
                109445,
                105106,
                107580,
                107486,
                107900,
                104600,
                93286,
                104991,
                103042,
                103129,
                102599,
                103614,
                87992,
                96423,
                86518,
                0,
                94719,
                85229,
                92053,
                90494,
                84619,
                81167,
                116799,
                93874,
                81476,
                86905,
                88141,
                84277,
                0,
                0,
                102285,
                45179,
                65475,
                64324,
                61169,
                62620,
                54729,
                52207,
                45299,
                47648,
                45264,
                50140,
                43713,
                40936,
                42142
            ],
            name: "910"
        }
    ],
    subtitle: {
        text: "UTC 2017-12-13 21:45 SimC build: <a href=\"https://github.com/simulationcraft/simc/commit/2143d84bc98dd1d780b61e851198f81cf756e317\" target=\"blank\">2143d84</a>",
        useHTML: true
    },
    title: {
        text: "Druid - Feral - Patchwerk",
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
            "<a href=\"http://www.wowhead.com/item=154174\">Golganneth's Vitality +20</a>",
            "<a href=\"http://www.wowhead.com/item=154174\">Golganneth's Vitality +15</a>",
            "<a href=\"http://www.wowhead.com/item=154174\">Golganneth's Vitality +10</a>",
            "<a href=\"http://www.wowhead.com/item=154174\">Golganneth's Vitality</a>",
            "<a href=\"http://www.wowhead.com/item=154172\">Aman'Thul's Vision +20</a>",
            "<a href=\"http://www.wowhead.com/item=154172\">Aman'Thul's Vision +15</a>",
            "<a href=\"http://www.wowhead.com/item=144259\">Kil'jaeden's Burning Wish</a>",
            "<a href=\"http://www.wowhead.com/item=151190\">Specter of Betrayal</a>",
            "<a href=\"http://www.wowhead.com/item=154172\">Aman'Thul's Vision +10</a>",
            "<a href=\"http://www.wowhead.com/item=142167\">Eye of Command</a>",
            "<a href=\"http://www.wowhead.com/item=151964\">Seeping Scourgewing</a>",
            "<a href=\"http://www.wowhead.com/item=140806\">Convergence of Fates</a>",
            "<a href=\"http://www.wowhead.com/item=147011\">Vial of Ceaseless Toxins</a>",
            "<a href=\"http://www.wowhead.com/item=140802\">Nightblooming Frond</a>",
            "<a href=\"http://www.wowhead.com/item=151968\">Shadow-Singed Fang</a>",
            "<a href=\"http://www.wowhead.com/item=142506,bonus_id=607\">Stat Stick (Versatility)</a>",
            "<a href=\"http://www.wowhead.com/item=137459\">Chaos Talisman</a>",
            "<a href=\"http://www.wowhead.com/item=147015\">Engine of Eradication</a>",
            "<a href=\"http://www.wowhead.com/item=142506,bonus_id=603\">Stat Stick (Crit)</a>",
            "<a href=\"http://www.wowhead.com/item=142773\">PVP Badge of Conquest</a>",
            "<a href=\"http://www.wowhead.com/item=147010\">Cradle of Anguish</a>",
            "<a href=\"http://www.wowhead.com/item=141585\">Six-Feather Fan</a>",
            "<a href=\"http://www.wowhead.com/item=142506,bonus_id=605\">Stat Stick (Mastery)</a>",
            "<a href=\"http://www.wowhead.com/item=139329\">Bloodthirsty Instinct</a>",
            "<a href=\"http://www.wowhead.com/item=133644\">Memento of Angerboda</a>",
            "<a href=\"http://www.wowhead.com/item=141537\">Thrice-Accursed Compass</a>",
            "<a href=\"http://www.wowhead.com/item=140796\">Entwined Elemental Foci</a>",
            "<a href=\"http://www.wowhead.com/item=137537\">Tirathon's Betrayal</a>",
            "<a href=\"http://www.wowhead.com/item=142506,bonus_id=604\">Stat Stick (Haste)</a>",
            "<a href=\"http://www.wowhead.com/item=140794\">Arcanogolem Digit</a>",
            "<a href=\"http://www.wowhead.com/item=154172\">Aman'Thul's Vision</a>",
            "<a href=\"http://www.wowhead.com/item=133647\">Gift of Radiance</a>",
            "<a href=\"http://www.wowhead.com/item=151307\">Void Stalker's Contract</a>",
            "<a href=\"http://www.wowhead.com/item=137419\">Chrono Shard</a>",
            "<a href=\"http://www.wowhead.com/item=137312\">Nightmare Egg Shell</a>",
            "<a href=\"http://www.wowhead.com/item=142159\">Bloodstained Handkerchief</a>",
            "<a href=\"http://www.wowhead.com/item=137373\">Tempered Egg of Serpentrix</a>",
            "<a href=\"http://www.wowhead.com/item=141482\">Unstable Arcanocrystal</a>",
            "<a href=\"http://www.wowhead.com/item=142662\">PVP Insignia of Conquest</a>",
            "<a href=\"http://www.wowhead.com/item=144477\">Splinters of Agronax</a>",
            "<a href=\"http://www.wowhead.com/item=147009\">Infernal Cinders</a>",
            "<a href=\"http://www.wowhead.com/item=147012\">Umbral Moonglaives</a>",
            "<a href=\"http://www.wowhead.com/item=133642\">Horn of Valor</a>",
            "<a href=\"http://www.wowhead.com/item=151963\">Forgefiend's Fabricator</a>",
            "<a href=\"http://www.wowhead.com/item=152093\">Gorshalach's Legacy</a>",
            "<a href=\"http://www.wowhead.com/item=151607\">Astral Alchemist Stone</a>",
            "<a href=\"http://www.wowhead.com/item=140808\">Draught of Souls</a>",
            "<a href=\"http://www.wowhead.com/item=140026\">The Devilsaur's Bite</a>",
            "<a href=\"http://www.wowhead.com/item=137539\">Faulty Countermeasure</a>",
            "<a href=\"http://www.wowhead.com/item=139325\">Spontaneous Appendages</a>",
            "<a href=\"http://www.wowhead.com/item=139334\">Nature's Call</a>",
            "<a href=\"http://www.wowhead.com/item=137406\">Terrorbound Nexus</a>",
            "<a href=\"http://www.wowhead.com/item=137357\">Mark of Dargrul</a>",
            "<a href=\"http://www.wowhead.com/item=142164\">Toe Knee's Promise</a>",
            "<a href=\"http://www.wowhead.com/item=137439\">Tiny Oozeling in a Jar</a>",
            "<a href=\"http://www.wowhead.com/item=136715\">Spiked Counterweight</a>",
            "<a href=\"http://www.wowhead.com/item=137369\">Giant Ornamental Pearl</a>",
            "<a href=\"http://www.wowhead.com/item=137486\">Windscar Whetstone</a>",
            "<a href=\"http://www.wowhead.com/item=139320\">Ravaged Seed Pod</a>",
            "<a href=\"http://www.wowhead.com/item=140027\">Ley Spark</a>"
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
                    text: 'mean: ' + Intl.NumberFormat().format(160175),
                    verticalAlign: "bottom",
                    x: 10,
                    y: -23
                },
                value: 160175.48333333334,
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