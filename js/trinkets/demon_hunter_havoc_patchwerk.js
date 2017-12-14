Highcharts.chart('demon_hunter_havoc_patchwerk', 
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
                63397,
                62812,
                349642,
                346909,
                58160,
                335518,
                281705,
                44267,
                0,
                39053,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
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
                28162,
                24922,
                0,
                0,
                26324,
                0,
                0,
                22076,
                7761,
                16970,
                19660,
                15473,
                16333,
                16142,
                14273,
                14205,
                15310,
                19098,
                12103,
                12274,
                13562,
                11624,
                12787,
                12719,
                10970,
                14319,
                12609,
                16001,
                17939,
                11330,
                16272,
                13455,
                12011,
                15015,
                10676,
                9752,
                10802,
                9940,
                14105,
                8308,
                13912,
                14044,
                13244,
                10871,
                12206,
                7200,
                5580,
                4454,
                7984,
                0,
                4853,
                5469,
                6090,
                10061,
                4450,
                2413,
                1805,
                633,
                3317,
                956
            ],
            name: "980"
        },
        {
            color: "#ff7f00",
            data: [
                25020,
                23789,
                0,
                0,
                21650,
                0,
                0,
                15890,
                10493,
                204344,
                18468,
                13614,
                12448,
                11174,
                14488,
                15979,
                11725,
                15603,
                15420,
                15665,
                14135,
                13408,
                10901,
                13847,
                13589,
                18015,
                10136,
                11170,
                11991,
                11876,
                13899,
                10941,
                8843,
                12614,
                11511,
                10453,
                12023,
                12202,
                14560,
                11782,
                12559,
                12694,
                12193,
                12093,
                10595,
                8460,
                11522,
                2870,
                7354,
                0,
                5223,
                10865,
                6367,
                13097,
                7231,
                6393,
                8133,
                4967,
                2932,
                3237
            ],
            name: "970"
        },
        {
            color: "#fb9a99",
            data: [
                24447,
                22360,
                0,
                0,
                22737,
                0,
                0,
                16025,
                12289,
                0,
                16131,
                14575,
                11146,
                12503,
                10504,
                11983,
                12019,
                17691,
                13912,
                12935,
                11973,
                15372,
                14780,
                11301,
                12191,
                14465,
                10345,
                12408,
                14056,
                11595,
                14929,
                12666,
                10810,
                13428,
                7181,
                7903,
                12075,
                7896,
                10492,
                5091,
                10803,
                13078,
                11747,
                13091,
                10594,
                8108,
                7119,
                6725,
                6787,
                0,
                6919,
                1097,
                4632,
                10175,
                2007,
                2997,
                2454,
                303,
                4683,
                2527
            ],
            name: "960"
        },
        {
            color: "#e31a1c",
            data: [
                20575,
                22120,
                0,
                0,
                19006,
                0,
                0,
                15373,
                9195,
                0,
                16604,
                11891,
                14114,
                10850,
                11865,
                11034,
                12570,
                11608,
                6734,
                10146,
                9214,
                5903,
                9180,
                11815,
                9315,
                11565,
                12985,
                7228,
                13655,
                9536,
                10163,
                9194,
                6767,
                10679,
                10983,
                6932,
                8470,
                11924,
                10907,
                12383,
                10604,
                10646,
                9039,
                10108,
                6565,
                7539,
                7285,
                5452,
                3388,
                0,
                3969,
                3971,
                3384,
                11042,
                8120,
                2992,
                2462,
                2733,
                3057,
                4244
            ],
            name: "950"
        },
        {
            color: "#b2df8a",
            data: [
                215549,
                208035,
                0,
                0,
                193744,
                0,
                0,
                149882,
                5494,
                0,
                12776,
                12372,
                5918,
                10936,
                12269,
                10407,
                11259,
                13301,
                12985,
                10029,
                9860,
                12018,
                10276,
                9260,
                9213,
                13631,
                7934,
                10611,
                10932,
                10692,
                13743,
                10457,
                10163,
                10881,
                7773,
                8382,
                6492,
                8632,
                12104,
                6332,
                9357,
                9630,
                9531,
                9267,
                8515,
                3095,
                4121,
                3099,
                7007,
                0,
                4941,
                6511,
                5944,
                9776,
                3106,
                5834,
                3983,
                2085,
                2565,
                571
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
                9261,
                0,
                12236,
                10916,
                14114,
                13042,
                8747,
                11208,
                9332,
                13456,
                9585,
                11888,
                7941,
                7544,
                8777,
                9088,
                9893,
                8066,
                9912,
                8606,
                12371,
                6288,
                8985,
                9676,
                4578,
                9720,
                8467,
                8906,
                9279,
                6364,
                6271,
                9458,
                8697,
                7817,
                9496,
                6601,
                7117,
                6188,
                5512,
                8013,
                4512,
                11412,
                5838,
                3741,
                4651,
                5327,
                4511,
                1722,
                1468,
                705,
                5713,
                1809
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
                11242,
                0,
                163362,
                9907,
                143611,
                10200,
                11746,
                8950,
                8258,
                7833,
                9393,
                7078,
                8776,
                134939,
                9628,
                9836,
                7510,
                11179,
                6125,
                10039,
                7717,
                7964,
                8214,
                6704,
                114834,
                8314,
                4725,
                6520,
                7482,
                6510,
                7657,
                4029,
                7441,
                7004,
                7989,
                7616,
                7600,
                7206,
                5769,
                2822,
                6221,
                5310,
                5674,
                4234,
                4011,
                8682,
                1820,
                4292,
                5233,
                1972,
                0,
                2585
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
                195090,
                0,
                0,
                159744,
                0,
                129098,
                130046,
                130169,
                131006,
                110083,
                127653,
                122070,
                125384,
                0,
                123547,
                121315,
                124144,
                101421,
                121871,
                113516,
                99475,
                117098,
                96883,
                109580,
                0,
                86523,
                104477,
                104629,
                96692,
                98872,
                84344,
                102236,
                85920,
                83466,
                84458,
                80716,
                80452,
                95579,
                96359,
                106742,
                90623,
                109687,
                83100,
                81805,
                80791,
                45779,
                80265,
                72438,
                69738,
                72982,
                60342,
                48938
            ],
            name: "910"
        }
    ],
    subtitle: {
        text: "UTC 2017-12-13 21:45 SimC build: <a href=\"https://github.com/simulationcraft/simc/commit/2143d84bc98dd1d780b61e851198f81cf756e317\" target=\"blank\">2143d84</a>",
        useHTML: true
    },
    title: {
        text: "Demon_Hunter - Havoc - Patchwerk",
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
            "<a href=\"http://www.wowhead.com/item=154172\">Aman'Thul's Vision +20</a>",
            "<a href=\"http://www.wowhead.com/item=154172\">Aman'Thul's Vision +15</a>",
            "<a href=\"http://www.wowhead.com/item=154174\">Golganneth's Vitality +10</a>",
            "<a href=\"http://www.wowhead.com/item=154172\">Aman'Thul's Vision +10</a>",
            "<a href=\"http://www.wowhead.com/item=154172\">Aman'Thul's Vision</a>",
            "<a href=\"http://www.wowhead.com/item=154174\">Golganneth's Vitality</a>",
            "<a href=\"http://www.wowhead.com/item=141482\">Unstable Arcanocrystal</a>",
            "<a href=\"http://www.wowhead.com/item=144259\">Kil'jaeden's Burning Wish</a>",
            "<a href=\"http://www.wowhead.com/item=151964\">Seeping Scourgewing</a>",
            "<a href=\"http://www.wowhead.com/item=142167\">Eye of Command</a>",
            "<a href=\"http://www.wowhead.com/item=151968\">Shadow-Singed Fang</a>",
            "<a href=\"http://www.wowhead.com/item=147015\">Engine of Eradication</a>",
            "<a href=\"http://www.wowhead.com/item=137459\">Chaos Talisman</a>",
            "<a href=\"http://www.wowhead.com/item=147010\">Cradle of Anguish</a>",
            "<a href=\"http://www.wowhead.com/item=142506,bonus_id=603\">Stat Stick (Crit)</a>",
            "<a href=\"http://www.wowhead.com/item=151190\">Specter of Betrayal</a>",
            "<a href=\"http://www.wowhead.com/item=142506,bonus_id=605\">Stat Stick (Mastery)</a>",
            "<a href=\"http://www.wowhead.com/item=141537\">Thrice-Accursed Compass</a>",
            "<a href=\"http://www.wowhead.com/item=140796\">Entwined Elemental Foci</a>",
            "<a href=\"http://www.wowhead.com/item=151963\">Forgefiend's Fabricator</a>",
            "<a href=\"http://www.wowhead.com/item=147009\">Infernal Cinders</a>",
            "<a href=\"http://www.wowhead.com/item=133644\">Memento of Angerboda</a>",
            "<a href=\"http://www.wowhead.com/item=142506,bonus_id=604\">Stat Stick (Haste)</a>",
            "<a href=\"http://www.wowhead.com/item=147011\">Vial of Ceaseless Toxins</a>",
            "<a href=\"http://www.wowhead.com/item=139329\">Bloodthirsty Instinct</a>",
            "<a href=\"http://www.wowhead.com/item=142506,bonus_id=607\">Stat Stick (Versatility)</a>",
            "<a href=\"http://www.wowhead.com/item=141585\">Six-Feather Fan</a>",
            "<a href=\"http://www.wowhead.com/item=133647\">Gift of Radiance</a>",
            "<a href=\"http://www.wowhead.com/item=140802\">Nightblooming Frond</a>",
            "<a href=\"http://www.wowhead.com/item=142773\">PVP Badge of Conquest</a>",
            "<a href=\"http://www.wowhead.com/item=152093\">Gorshalach's Legacy</a>",
            "<a href=\"http://www.wowhead.com/item=140794\">Arcanogolem Digit</a>",
            "<a href=\"http://www.wowhead.com/item=133642\">Horn of Valor</a>",
            "<a href=\"http://www.wowhead.com/item=140026\">The Devilsaur's Bite</a>",
            "<a href=\"http://www.wowhead.com/item=137419\">Chrono Shard</a>",
            "<a href=\"http://www.wowhead.com/item=137312\">Nightmare Egg Shell</a>",
            "<a href=\"http://www.wowhead.com/item=142159\">Bloodstained Handkerchief</a>",
            "<a href=\"http://www.wowhead.com/item=142662\">PVP Insignia of Conquest</a>",
            "<a href=\"http://www.wowhead.com/item=140806\">Convergence of Fates</a>",
            "<a href=\"http://www.wowhead.com/item=137373\">Tempered Egg of Serpentrix</a>",
            "<a href=\"http://www.wowhead.com/item=137537\">Tirathon's Betrayal</a>",
            "<a href=\"http://www.wowhead.com/item=151307\">Void Stalker's Contract</a>",
            "<a href=\"http://www.wowhead.com/item=144477\">Splinters of Agronax</a>",
            "<a href=\"http://www.wowhead.com/item=137539\">Faulty Countermeasure</a>",
            "<a href=\"http://www.wowhead.com/item=139325\">Spontaneous Appendages</a>",
            "<a href=\"http://www.wowhead.com/item=139334\">Nature's Call</a>",
            "<a href=\"http://www.wowhead.com/item=137406\">Terrorbound Nexus</a>",
            "<a href=\"http://www.wowhead.com/item=151607\">Astral Alchemist Stone</a>",
            "<a href=\"http://www.wowhead.com/item=137357\">Mark of Dargrul</a>",
            "<a href=\"http://www.wowhead.com/item=142164\">Toe Knee's Promise</a>",
            "<a href=\"http://www.wowhead.com/item=137439\">Tiny Oozeling in a Jar</a>",
            "<a href=\"http://www.wowhead.com/item=140808\">Draught of Souls</a>",
            "<a href=\"http://www.wowhead.com/item=136715\">Spiked Counterweight</a>",
            "<a href=\"http://www.wowhead.com/item=137486\">Windscar Whetstone</a>",
            "<a href=\"http://www.wowhead.com/item=139320\">Ravaged Seed Pod</a>",
            "<a href=\"http://www.wowhead.com/item=140027\">Ley Spark</a>",
            "<a href=\"http://www.wowhead.com/item=137369\">Giant Ornamental Pearl</a>",
            "<a href=\"http://www.wowhead.com/item=147012\">Umbral Moonglaives</a>"
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
                    text: 'mean: ' + Intl.NumberFormat().format(191053),
                    verticalAlign: "bottom",
                    x: 10,
                    y: -23
                },
                value: 191053.9,
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