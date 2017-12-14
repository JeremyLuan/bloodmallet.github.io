Highcharts.chart('warrior_fury_beastlord', 
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
                0,
                0,
                0,
                370071,
                369019,
                0,
                56621,
                0,
                359262,
                44980,
                54191,
                43743,
                0,
                0,
                312947,
                0,
                0,
                42569,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
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
                40982,
                23107,
                29763,
                0,
                0,
                32312,
                19379,
                30865,
                0,
                26620,
                21380,
                13689,
                16095,
                30891,
                0,
                20568,
                15508,
                20340,
                21903,
                11706,
                28598,
                18030,
                18792,
                6352,
                23564,
                14932,
                11694,
                17542,
                9821,
                14084,
                11528,
                20971,
                9910,
                21363,
                7418,
                9668,
                12268,
                12911,
                13503,
                14516,
                11843,
                7273,
                27023,
                13418,
                9297,
                12779,
                6847,
                13010,
                9535,
                6096,
                6982,
                2065,
                5947,
                12114,
                0,
                27194
            ],
            name: "980"
        },
        {
            color: "#ff7f00",
            data: [
                28313,
                31181,
                32873,
                0,
                0,
                33356,
                24387,
                20418,
                0,
                18946,
                19969,
                279565,
                13552,
                21795,
                0,
                32791,
                4397,
                18891,
                12324,
                15248,
                20017,
                19643,
                20743,
                19097,
                1107,
                12409,
                21465,
                5452,
                11813,
                20233,
                18300,
                6950,
                13151,
                3879,
                7661,
                21617,
                13828,
                7754,
                12663,
                13943,
                6474,
                15954,
                6269,
                5575,
                11478,
                8866,
                22510,
                11599,
                20879,
                8180,
                8272,
                11603,
                1069,
                7947,
                0,
                14267
            ],
            name: "970"
        },
        {
            color: "#fb9a99",
            data: [
                34334,
                23890,
                18728,
                0,
                0,
                17260,
                20198,
                27324,
                0,
                18480,
                16095,
                0,
                15406,
                21538,
                0,
                10451,
                12399,
                14896,
                16401,
                20209,
                12431,
                5996,
                19498,
                12469,
                11351,
                16966,
                10715,
                16460,
                14994,
                11429,
                12440,
                8813,
                12897,
                11548,
                15423,
                6840,
                13693,
                21697,
                11736,
                3080,
                13228,
                17910,
                11855,
                12236,
                9231,
                10948,
                11267,
                15361,
                11553,
                10084,
                22133,
                16500,
                3985,
                4134,
                0,
                18302
            ],
            name: "960"
        },
        {
            color: "#e31a1c",
            data: [
                28931,
                21726,
                32347,
                0,
                0,
                30494,
                18592,
                14675,
                0,
                15165,
                21685,
                0,
                5966,
                20252,
                0,
                15586,
                8530,
                13749,
                8167,
                6653,
                9430,
                14411,
                17407,
                12773,
                14320,
                0,
                5228,
                12545,
                12052,
                9800,
                9395,
                12861,
                3976,
                8417,
                3980,
                5026,
                9163,
                11538,
                9362,
                15890,
                13249,
                2210,
                14315,
                14250,
                11000,
                6814,
                13346,
                4574,
                8222,
                3250,
                9226,
                5117,
                4716,
                10766,
                0,
                13654
            ],
            name: "950"
        },
        {
            color: "#b2df8a",
            data: [
                23304,
                21643,
                18107,
                0,
                0,
                9863,
                223938,
                21033,
                0,
                224771,
                206766,
                0,
                4009,
                18555,
                0,
                21897,
                16461,
                153542,
                10253,
                4869,
                22418,
                11119,
                14441,
                9826,
                11367,
                20718,
                16712,
                13433,
                6193,
                10581,
                17227,
                10170,
                17091,
                10076,
                5338,
                21505,
                10272,
                12426,
                12997,
                16839,
                9019,
                13736,
                10661,
                7903,
                8198,
                10025,
                8676,
                10068,
                11724,
                9890,
                7641,
                2187,
                6482,
                2128,
                0,
                13457
            ],
            name: "940"
        },
        {
            color: "#33a02c",
            data: [
                21389,
                18969,
                19635,
                0,
                0,
                27270,
                0,
                22469,
                0,
                0,
                0,
                0,
                9825,
                16053,
                0,
                13889,
                514,
                0,
                17414,
                20433,
                6092,
                9496,
                0,
                13168,
                8060,
                13999,
                8183,
                4196,
                12776,
                7350,
                5975,
                6163,
                16127,
                10683,
                10101,
                0,
                12449,
                0,
                14200,
                4094,
                11818,
                9585,
                17078,
                5927,
                10934,
                9226,
                6511,
                1261,
                11731,
                9638,
                9631,
                7401,
                10365,
                1950,
                4494,
                13259
            ],
            name: "930"
        },
        {
            color: "#a6cee3",
            data: [
                281305,
                255040,
                14293,
                0,
                0,
                5595,
                0,
                11255,
                0,
                0,
                0,
                0,
                11514,
                17187,
                0,
                13391,
                2653,
                0,
                24,
                6037,
                15423,
                11483,
                21899,
                4157,
                10833,
                5221,
                11271,
                6618,
                0,
                12396,
                9235,
                17537,
                5231,
                11791,
                9711,
                7943,
                3514,
                139637,
                2148,
                12632,
                131768,
                7932,
                6007,
                7402,
                3906,
                5706,
                10519,
                10847,
                3889,
                4890,
                10585,
                6784,
                2920,
                5644,
                11356,
                13755
            ],
            name: "920"
        },
        {
            color: "#1f78b4",
            data: [
                0,
                0,
                223782,
                0,
                0,
                208291,
                0,
                213778,
                0,
                0,
                0,
                0,
                256459,
                168485,
                0,
                183560,
                230161,
                0,
                156200,
                155163,
                124161,
                144383,
                121563,
                151661,
                144809,
                145081,
                137670,
                143889,
                152773,
                133581,
                132438,
                126782,
                131480,
                131716,
                147904,
                135693,
                130546,
                0,
                126108,
                120550,
                0,
                121319,
                99263,
                124767,
                112936,
                109786,
                91300,
                103869,
                92241,
                105968,
                82778,
                105434,
                102087,
                91631,
                117848,
                4222
            ],
            name: "910"
        }
    ],
    subtitle: {
        text: "UTC 2017-12-13 21:45 SimC build: <a href=\"https://github.com/simulationcraft/simc/commit/2143d84bc98dd1d780b61e851198f81cf756e317\" target=\"blank\">2143d84</a>",
        useHTML: true
    },
    title: {
        text: "Warrior - Fury - Beastlord",
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
            "<a href=\"http://www.wowhead.com/item=151963\">Forgefiend's Fabricator</a>",
            "<a href=\"http://www.wowhead.com/item=152093\">Gorshalach's Legacy</a>",
            "<a href=\"http://www.wowhead.com/item=137439\">Tiny Oozeling in a Jar</a>",
            "<a href=\"http://www.wowhead.com/item=154172\">Aman'Thul's Vision +15</a>",
            "<a href=\"http://www.wowhead.com/item=154172\">Aman'Thul's Vision +20</a>",
            "<a href=\"http://www.wowhead.com/item=147012\">Umbral Moonglaives</a>",
            "<a href=\"http://www.wowhead.com/item=154176\">Khaz'goroths Courage +20</a>",
            "<a href=\"http://www.wowhead.com/item=142164\">Toe Knee's Promise</a>",
            "<a href=\"http://www.wowhead.com/item=154172\">Aman'Thul's Vision +10</a>",
            "<a href=\"http://www.wowhead.com/item=154176\">Khaz'goroths Courage +15</a>",
            "<a href=\"http://www.wowhead.com/item=154176\">Khaz'goroths Courage +10</a>",
            "<a href=\"http://www.wowhead.com/item=144259\">Kil'jaeden's Burning Wish</a>",
            "<a href=\"http://www.wowhead.com/item=140806\">Convergence of Fates</a>",
            "<a href=\"http://www.wowhead.com/item=151307\">Void Stalker's Contract</a>",
            "<a href=\"http://www.wowhead.com/item=154172\">Aman'Thul's Vision</a>",
            "<a href=\"http://www.wowhead.com/item=137406\">Terrorbound Nexus</a>",
            "<a href=\"http://www.wowhead.com/item=141482\">Unstable Arcanocrystal</a>",
            "<a href=\"http://www.wowhead.com/item=154176\">Khaz'goroths Courage</a>",
            "<a href=\"http://www.wowhead.com/item=147010\">Cradle of Anguish</a>",
            "<a href=\"http://www.wowhead.com/item=137459\">Chaos Talisman</a>",
            "<a href=\"http://www.wowhead.com/item=140790\">Claw of the Crystalline Scorpid</a>",
            "<a href=\"http://www.wowhead.com/item=137357\">Mark of Dargrul</a>",
            "<a href=\"http://www.wowhead.com/item=151190\">Specter of Betrayal</a>",
            "<a href=\"http://www.wowhead.com/item=142167\">Eye of Command</a>",
            "<a href=\"http://www.wowhead.com/item=139320\">Ravaged Seed Pod</a>",
            "<a href=\"http://www.wowhead.com/item=141535\">Ettin Fingernail</a>",
            "<a href=\"http://www.wowhead.com/item=144482\">Fel-Oiled Infernal Machine</a>",
            "<a href=\"http://www.wowhead.com/item=140034\">Impact Tremor</a>",
            "<a href=\"http://www.wowhead.com/item=142508,bonus_id=604\">Stat Stick (Haste)</a>",
            "<a href=\"http://www.wowhead.com/item=137486\">Windscar Whetstone</a>",
            "<a href=\"http://www.wowhead.com/item=137419\">Chrono Shard</a>",
            "<a href=\"http://www.wowhead.com/item=147015\">Engine of Eradication</a>",
            "<a href=\"http://www.wowhead.com/item=140796\">Entwined Elemental Foci</a>",
            "<a href=\"http://www.wowhead.com/item=137312\">Nightmare Egg Shell</a>",
            "<a href=\"http://www.wowhead.com/item=139334\">Nature's Call</a>",
            "<a href=\"http://www.wowhead.com/item=133644\">Memento of Angerboda</a>",
            "<a href=\"http://www.wowhead.com/item=142508,bonus_id=605\">Stat Stick (Mastery)</a>",
            "<a href=\"http://www.wowhead.com/item=151968\">Shadow-Singed Fang</a>",
            "<a href=\"http://www.wowhead.com/item=142508,bonus_id=607\">Stat Stick (Versatility)</a>",
            "<a href=\"http://www.wowhead.com/item=133647\">Gift of Radiance</a>",
            "<a href=\"http://www.wowhead.com/item=151964\">Seeping Scourgewing</a>",
            "<a href=\"http://www.wowhead.com/item=142508,bonus_id=603\">Stat Stick (Crit)</a>",
            "<a href=\"http://www.wowhead.com/item=139328\">Ursoc's Rending Paw</a>",
            "<a href=\"http://www.wowhead.com/item=142669\">PVP Badge of Victory</a>",
            "<a href=\"http://www.wowhead.com/item=142784\">PVP Insignia of Victory</a>",
            "<a href=\"http://www.wowhead.com/item=133642\">Horn of Valor</a>",
            "<a href=\"http://www.wowhead.com/item=147011\">Vial of Ceaseless Toxins</a>",
            "<a href=\"http://www.wowhead.com/item=147009\">Infernal Cinders</a>",
            "<a href=\"http://www.wowhead.com/item=142159\">Bloodstained Handkerchief</a>",
            "<a href=\"http://www.wowhead.com/item=137539\">Faulty Countermeasure</a>",
            "<a href=\"http://www.wowhead.com/item=140799\">Might of Krosus</a>",
            "<a href=\"http://www.wowhead.com/item=139325\">Spontaneous Appendages</a>",
            "<a href=\"http://www.wowhead.com/item=136715\">Spiked Counterweight</a>",
            "<a href=\"http://www.wowhead.com/item=137369\">Giant Ornamental Pearl</a>",
            "<a href=\"http://www.wowhead.com/item=151607\">Astral Alchemist Stone</a>",
            "<a href=\"http://www.wowhead.com/item=140808\">Draught of Souls</a>"
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
                    text: 'mean: ' + Intl.NumberFormat().format(245506),
                    verticalAlign: "bottom",
                    x: 10,
                    y: -23
                },
                value: 245506.05357142858,
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