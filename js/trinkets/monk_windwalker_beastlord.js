Highcharts.chart('monk_windwalker_beastlord', 
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
                92906,
                83622,
                68579,
                465173,
                83524,
                453018,
                432168,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                65391,
                0,
                0,
                0,
                337167,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
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
                27647,
                28634,
                41887,
                0,
                34924,
                0,
                0,
                40636,
                32279,
                17976,
                33101,
                24084,
                32859,
                24122,
                24893,
                25009,
                26119,
                32313,
                0,
                17125,
                30153,
                28333,
                33916,
                25707,
                24239,
                33454,
                23851,
                22520,
                20847,
                26670,
                11275,
                22224,
                24244,
                30571,
                20617,
                18438,
                31746,
                27200,
                15126,
                23230,
                33890,
                22906,
                14498,
                0,
                12950,
                23000,
                6514,
                3479,
                10319,
                5552,
                10427,
                17212,
                58,
                17373,
                24977,
                16954,
                8983,
                16503,
                10622,
                3985
            ],
            name: "980"
        },
        {
            color: "#ff7f00",
            data: [
                37359,
                32998,
                364627,
                0,
                22806,
                0,
                0,
                37862,
                30156,
                32639,
                33119,
                20481,
                29516,
                30803,
                30699,
                33750,
                17309,
                18743,
                0,
                41709,
                16849,
                18353,
                17403,
                31564,
                24550,
                28906,
                30470,
                25399,
                23415,
                17202,
                10462,
                21799,
                13052,
                24504,
                24382,
                20456,
                19985,
                19406,
                35029,
                26128,
                10411,
                21635,
                21224,
                0,
                12334,
                2412,
                19673,
                17341,
                7098,
                10039,
                5681,
                17861,
                9656,
                270,
                3646,
                1658,
                7015,
                9274,
                13467,
                2212
            ],
            name: "970"
        },
        {
            color: "#fb9a99",
            data: [
                25991,
                39284,
                0,
                0,
                27055,
                0,
                0,
                13134,
                7657,
                21296,
                27862,
                8451,
                22482,
                24239,
                12831,
                20318,
                28587,
                22291,
                0,
                11511,
                23406,
                19843,
                24567,
                6361,
                25954,
                19759,
                20096,
                21062,
                21565,
                30496,
                6257,
                25436,
                22152,
                16171,
                20957,
                22464,
                20086,
                16777,
                7070,
                14602,
                15725,
                11377,
                6258,
                0,
                8667,
                2657,
                8747,
                3944,
                1755,
                17711,
                4682,
                4119,
                6813,
                8777,
                14587,
                5152,
                4927,
                7546,
                11447,
                7048
            ],
            name: "960"
        },
        {
            color: "#e31a1c",
            data: [
                29057,
                15135,
                0,
                0,
                22042,
                0,
                0,
                34083,
                32419,
                18073,
                28637,
                25680,
                23015,
                17720,
                11471,
                14913,
                18570,
                16090,
                0,
                34336,
                18324,
                14964,
                19029,
                28864,
                18710,
                27998,
                20859,
                16014,
                23733,
                11312,
                6779,
                19455,
                15704,
                19325,
                18880,
                6605,
                14783,
                14737,
                19321,
                8003,
                22330,
                21182,
                8830,
                0,
                9735,
                11523,
                19000,
                22714,
                16603,
                0,
                14645,
                15401,
                15806,
                3118,
                9600,
                3369,
                688,
                8706,
                4628,
                10511
            ],
            name: "950"
        },
        {
            color: "#b2df8a",
            data: [
                286309,
                284107,
                0,
                0,
                266318,
                0,
                0,
                23161,
                17137,
                28548,
                19030,
                17887,
                34119,
                16727,
                211348,
                19003,
                11248,
                19128,
                0,
                19730,
                19018,
                33926,
                16264,
                20936,
                7448,
                22739,
                22717,
                24302,
                9057,
                20473,
                19761,
                10553,
                10708,
                10476,
                24018,
                21269,
                9427,
                23742,
                26344,
                28656,
                14574,
                13895,
                6646,
                0,
                14251,
                17016,
                0,
                0,
                12146,
                19885,
                7622,
                4820,
                6182,
                7776,
                4809,
                5878,
                9467,
                1922,
                11836,
                9099
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
                8276,
                17577,
                9203,
                25695,
                13576,
                10658,
                22706,
                0,
                16908,
                18001,
                15753,
                0,
                17021,
                14870,
                0,
                6705,
                8644,
                13041,
                6806,
                19878,
                20525,
                3759,
                9948,
                7136,
                12843,
                11546,
                15600,
                8306,
                9430,
                16773,
                15207,
                4638,
                12680,
                13151,
                15107,
                17622,
                18284,
                1008,
                0,
                6234,
                10049,
                5941,
                2282,
                2403,
                1007,
                0,
                0,
                0,
                3102,
                693,
                12933,
                8682,
                3407
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
                218268,
                12423,
                15347,
                10855,
                18522,
                16710,
                220758,
                0,
                21841,
                14006,
                17191,
                0,
                4850,
                12212,
                21067,
                20909,
                22532,
                20542,
                21257,
                16063,
                19495,
                18283,
                16564,
                0,
                7155,
                198702,
                23058,
                12008,
                7296,
                24098,
                13344,
                12881,
                10418,
                8693,
                11498,
                4116,
                11007,
                15713,
                1447,
                131584,
                6732,
                6006,
                0,
                6456,
                12509,
                11556,
                13373,
                9555,
                12691,
                0,
                2149,
                4188,
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
                0,
                225446,
                230104,
                194521,
                236270,
                193206,
                0,
                0,
                197449,
                205818,
                196862,
                0,
                190082,
                201287,
                199901,
                195602,
                188453,
                197874,
                167183,
                172756,
                173602,
                188625,
                172042,
                240160,
                178595,
                0,
                142341,
                151849,
                170427,
                139449,
                132087,
                141314,
                136691,
                137115,
                134009,
                133082,
                182058,
                126479,
                145415,
                0,
                112546,
                108400,
                114242,
                102941,
                76876,
                95453,
                89159,
                69403,
                86092,
                102256,
                69191,
                58514,
                86970
            ],
            name: "910"
        }
    ],
    subtitle: {
        text: "UTC 2017-12-13 21:45 SimC build: <a href=\"https://github.com/simulationcraft/simc/commit/2143d84bc98dd1d780b61e851198f81cf756e317\" target=\"blank\">2143d84</a>",
        useHTML: true
    },
    title: {
        text: "Monk - Windwalker - Beastlord",
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
            "<a href=\"http://www.wowhead.com/item=144259\">Kil'jaeden's Burning Wish</a>",
            "<a href=\"http://www.wowhead.com/item=154172\">Aman'Thul's Vision +20</a>",
            "<a href=\"http://www.wowhead.com/item=154174\">Golganneth's Vitality +10</a>",
            "<a href=\"http://www.wowhead.com/item=154172\">Aman'Thul's Vision +15</a>",
            "<a href=\"http://www.wowhead.com/item=154172\">Aman'Thul's Vision +10</a>",
            "<a href=\"http://www.wowhead.com/item=152093\">Gorshalach's Legacy</a>",
            "<a href=\"http://www.wowhead.com/item=142167\">Eye of Command</a>",
            "<a href=\"http://www.wowhead.com/item=140806\">Convergence of Fates</a>",
            "<a href=\"http://www.wowhead.com/item=137459\">Chaos Talisman</a>",
            "<a href=\"http://www.wowhead.com/item=139329\">Bloodthirsty Instinct</a>",
            "<a href=\"http://www.wowhead.com/item=147010\">Cradle of Anguish</a>",
            "<a href=\"http://www.wowhead.com/item=151968\">Shadow-Singed Fang</a>",
            "<a href=\"http://www.wowhead.com/item=154174\">Golganneth's Vitality</a>",
            "<a href=\"http://www.wowhead.com/item=147015\">Engine of Eradication</a>",
            "<a href=\"http://www.wowhead.com/item=133644\">Memento of Angerboda</a>",
            "<a href=\"http://www.wowhead.com/item=142506,bonus_id=603\">Stat Stick (Crit)</a>",
            "<a href=\"http://www.wowhead.com/item=154172\">Aman'Thul's Vision</a>",
            "<a href=\"http://www.wowhead.com/item=142506,bonus_id=604\">Stat Stick (Haste)</a>",
            "<a href=\"http://www.wowhead.com/item=140796\">Entwined Elemental Foci</a>",
            "<a href=\"http://www.wowhead.com/item=142506,bonus_id=605\">Stat Stick (Mastery)</a>",
            "<a href=\"http://www.wowhead.com/item=142506,bonus_id=607\">Stat Stick (Versatility)</a>",
            "<a href=\"http://www.wowhead.com/item=137419\">Chrono Shard</a>",
            "<a href=\"http://www.wowhead.com/item=141537\">Thrice-Accursed Compass</a>",
            "<a href=\"http://www.wowhead.com/item=151190\">Specter of Betrayal</a>",
            "<a href=\"http://www.wowhead.com/item=140794\">Arcanogolem Digit</a>",
            "<a href=\"http://www.wowhead.com/item=142773\">PVP Badge of Conquest</a>",
            "<a href=\"http://www.wowhead.com/item=137312\">Nightmare Egg Shell</a>",
            "<a href=\"http://www.wowhead.com/item=133647\">Gift of Radiance</a>",
            "<a href=\"http://www.wowhead.com/item=141482\">Unstable Arcanocrystal</a>",
            "<a href=\"http://www.wowhead.com/item=133642\">Horn of Valor</a>",
            "<a href=\"http://www.wowhead.com/item=151963\">Forgefiend's Fabricator</a>",
            "<a href=\"http://www.wowhead.com/item=147011\">Vial of Ceaseless Toxins</a>",
            "<a href=\"http://www.wowhead.com/item=151307\">Void Stalker's Contract</a>",
            "<a href=\"http://www.wowhead.com/item=142662\">PVP Insignia of Conquest</a>",
            "<a href=\"http://www.wowhead.com/item=141585\">Six-Feather Fan</a>",
            "<a href=\"http://www.wowhead.com/item=142159\">Bloodstained Handkerchief</a>",
            "<a href=\"http://www.wowhead.com/item=137537\">Tirathon's Betrayal</a>",
            "<a href=\"http://www.wowhead.com/item=140802\">Nightblooming Frond</a>",
            "<a href=\"http://www.wowhead.com/item=137373\">Tempered Egg of Serpentrix</a>",
            "<a href=\"http://www.wowhead.com/item=144477\">Splinters of Agronax</a>",
            "<a href=\"http://www.wowhead.com/item=137406\">Terrorbound Nexus</a>",
            "<a href=\"http://www.wowhead.com/item=151607\">Astral Alchemist Stone</a>",
            "<a href=\"http://www.wowhead.com/item=147012\">Umbral Moonglaives</a>",
            "<a href=\"http://www.wowhead.com/item=139334\">Nature's Call</a>",
            "<a href=\"http://www.wowhead.com/item=151964\">Seeping Scourgewing</a>",
            "<a href=\"http://www.wowhead.com/item=137357\">Mark of Dargrul</a>",
            "<a href=\"http://www.wowhead.com/item=147009\">Infernal Cinders</a>",
            "<a href=\"http://www.wowhead.com/item=137439\">Tiny Oozeling in a Jar</a>",
            "<a href=\"http://www.wowhead.com/item=137369\">Giant Ornamental Pearl</a>",
            "<a href=\"http://www.wowhead.com/item=142164\">Toe Knee's Promise</a>",
            "<a href=\"http://www.wowhead.com/item=140026\">The Devilsaur's Bite</a>",
            "<a href=\"http://www.wowhead.com/item=137486\">Windscar Whetstone</a>",
            "<a href=\"http://www.wowhead.com/item=136715\">Spiked Counterweight</a>",
            "<a href=\"http://www.wowhead.com/item=139325\">Spontaneous Appendages</a>",
            "<a href=\"http://www.wowhead.com/item=137539\">Faulty Countermeasure</a>",
            "<a href=\"http://www.wowhead.com/item=139320\">Ravaged Seed Pod</a>",
            "<a href=\"http://www.wowhead.com/item=140808\">Draught of Souls</a>",
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
                    text: 'mean: ' + Intl.NumberFormat().format(289030),
                    verticalAlign: "bottom",
                    x: 10,
                    y: -23
                },
                value: 289030.43333333335,
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