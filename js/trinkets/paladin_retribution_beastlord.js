Highcharts.chart('paladin_retribution_beastlord', 
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
                511776,
                0,
                511561,
                494905,
                0,
                68929,
                78224,
                68789,
                64099,
                401935,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                62880,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
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
                41144,
                0,
                0,
                38904,
                39952,
                15187,
                26562,
                11236,
                0,
                42313,
                15187,
                31577,
                29280,
                28933,
                17676,
                31581,
                17363,
                38517,
                25390,
                17475,
                23435,
                9270,
                14565,
                18257,
                15083,
                13750,
                16769,
                23141,
                33204,
                22781,
                32107,
                21815,
                16991,
                9879,
                27811,
                21232,
                30607,
                29163,
                5258,
                25461,
                20213,
                0,
                13257,
                11950,
                8201,
                16352,
                6665,
                4218,
                12411,
                9975,
                6498,
                1393,
                1452,
                4635,
                19439
            ],
            name: "980"
        },
        {
            color: "#ff7f00",
            data: [
                0,
                24132,
                0,
                0,
                21452,
                12389,
                26613,
                332718,
                34385,
                0,
                16102,
                14823,
                34829,
                30284,
                22070,
                15348,
                20098,
                16427,
                18944,
                13673,
                17420,
                16641,
                42984,
                22759,
                16716,
                35884,
                18713,
                26828,
                17487,
                22579,
                12860,
                15392,
                24547,
                25151,
                17117,
                23179,
                24686,
                23459,
                17387,
                7602,
                23385,
                15535,
                0,
                4261,
                8269,
                19892,
                10983,
                3497,
                16634,
                7939,
                16119,
                4332,
                7918,
                6086,
                0,
                0
            ],
            name: "970"
        },
        {
            color: "#fb9a99",
            data: [
                0,
                45508,
                0,
                0,
                41302,
                19156,
                16679,
                0,
                28044,
                0,
                22947,
                9183,
                19620,
                11456,
                26154,
                37045,
                20284,
                21382,
                22564,
                28402,
                32812,
                23547,
                10321,
                24004,
                23163,
                9209,
                15328,
                18979,
                23485,
                8013,
                27293,
                21720,
                23831,
                15984,
                16381,
                8498,
                20035,
                6384,
                17626,
                27870,
                12380,
                24370,
                0,
                15079,
                14701,
                3365,
                6931,
                23969,
                7758,
                4538,
                0,
                5520,
                130,
                1978,
                11327,
                13437
            ],
            name: "960"
        },
        {
            color: "#e31a1c",
            data: [
                0,
                31858,
                0,
                0,
                26028,
                28130,
                29318,
                0,
                14967,
                0,
                25385,
                27446,
                20074,
                22299,
                14638,
                13969,
                16851,
                25775,
                14780,
                24144,
                14727,
                9274,
                19273,
                9866,
                29610,
                28824,
                25855,
                10231,
                15233,
                22291,
                13841,
                2121,
                22457,
                23383,
                24467,
                25742,
                13687,
                23137,
                6631,
                945,
                6665,
                13481,
                0,
                6335,
                9854,
                8146,
                9729,
                15435,
                6182,
                5427,
                3603,
                14726,
                9452,
                6950,
                2634,
                18771
            ],
            name: "950"
        },
        {
            color: "#b2df8a",
            data: [
                0,
                28129,
                0,
                0,
                27900,
                282105,
                278821,
                0,
                265528,
                0,
                17048,
                10647,
                23874,
                17725,
                18137,
                22615,
                21661,
                19055,
                13020,
                11793,
                19785,
                30251,
                10058,
                21149,
                177934,
                20209,
                14137,
                17422,
                16619,
                13590,
                18989,
                14245,
                19711,
                25802,
                9883,
                14629,
                13612,
                23835,
                11466,
                23602,
                14060,
                5369,
                0,
                0,
                3503,
                12200,
                15384,
                0,
                7943,
                4113,
                12005,
                0,
                3452,
                8818,
                8366,
                4886
            ],
            name: "940"
        },
        {
            color: "#33a02c",
            data: [
                0,
                17696,
                0,
                0,
                26514,
                0,
                0,
                0,
                0,
                0,
                18285,
                11677,
                8571,
                9756,
                26175,
                10159,
                22959,
                14864,
                16004,
                23985,
                8428,
                13100,
                30217,
                17753,
                0,
                11737,
                17417,
                20872,
                19240,
                13415,
                8716,
                18836,
                8247,
                6734,
                14918,
                14219,
                16732,
                851,
                0,
                0,
                20288,
                22155,
                12870,
                15181,
                13574,
                4511,
                1392,
                16051,
                7449,
                11464,
                8589,
                10816,
                19287,
                4621,
                4908,
                11703
            ],
            name: "930"
        },
        {
            color: "#a6cee3",
            data: [
                0,
                27945,
                0,
                0,
                285215,
                0,
                0,
                0,
                0,
                0,
                251196,
                1998,
                17369,
                15190,
                8520,
                16118,
                0,
                4058,
                10616,
                6268,
                9689,
                4384,
                5965,
                6822,
                0,
                202687,
                13667,
                8708,
                419,
                15974,
                20993,
                9354,
                20372,
                14185,
                13911,
                10970,
                5107,
                7619,
                170806,
                13074,
                14434,
                11321,
                15893,
                0,
                7970,
                12761,
                11739,
                7815,
                7172,
                3604,
                3663,
                10240,
                0,
                12144,
                5678,
                8589
            ],
            name: "920"
        },
        {
            color: "#1f78b4",
            data: [
                0,
                295328,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                283916,
                215318,
                232228,
                212974,
                220498,
                207686,
                217757,
                201171,
                201771,
                214827,
                212463,
                202101,
                212327,
                0,
                0,
                204248,
                196021,
                199416,
                182908,
                175826,
                180083,
                149313,
                153236,
                173181,
                146467,
                144314,
                139878,
                0,
                165491,
                126589,
                123512,
                189137,
                165577,
                126463,
                126095,
                119781,
                127570,
                113024,
                114580,
                107910,
                106424,
                104278,
                94890,
                91514,
                23683
            ],
            name: "910"
        }
    ],
    subtitle: {
        text: "UTC 2017-12-13 21:45 SimC build: <a href=\"https://github.com/simulationcraft/simc/commit/2143d84bc98dd1d780b61e851198f81cf756e317\" target=\"blank\">2143d84</a>",
        useHTML: true
    },
    title: {
        text: "Paladin - Retribution - Beastlord",
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
            "<a href=\"http://www.wowhead.com/item=147012\">Umbral Moonglaives</a>",
            "<a href=\"http://www.wowhead.com/item=154172\">Aman'Thul's Vision +15</a>",
            "<a href=\"http://www.wowhead.com/item=154172\">Aman'Thul's Vision +10</a>",
            "<a href=\"http://www.wowhead.com/item=152093\">Gorshalach's Legacy</a>",
            "<a href=\"http://www.wowhead.com/item=154176\">Khaz'goroths Courage +20</a>",
            "<a href=\"http://www.wowhead.com/item=154176\">Khaz'goroths Courage +15</a>",
            "<a href=\"http://www.wowhead.com/item=144259\">Kil'jaeden's Burning Wish</a>",
            "<a href=\"http://www.wowhead.com/item=154176\">Khaz'goroths Courage +10</a>",
            "<a href=\"http://www.wowhead.com/item=154172\">Aman'Thul's Vision</a>",
            "<a href=\"http://www.wowhead.com/item=151963\">Forgefiend's Fabricator</a>",
            "<a href=\"http://www.wowhead.com/item=141482\">Unstable Arcanocrystal</a>",
            "<a href=\"http://www.wowhead.com/item=147010\">Cradle of Anguish</a>",
            "<a href=\"http://www.wowhead.com/item=140806\">Convergence of Fates</a>",
            "<a href=\"http://www.wowhead.com/item=137459\">Chaos Talisman</a>",
            "<a href=\"http://www.wowhead.com/item=142167\">Eye of Command</a>",
            "<a href=\"http://www.wowhead.com/item=142508,bonus_id=607\">Stat Stick (Versatility)</a>",
            "<a href=\"http://www.wowhead.com/item=133642\">Horn of Valor</a>",
            "<a href=\"http://www.wowhead.com/item=133644\">Memento of Angerboda</a>",
            "<a href=\"http://www.wowhead.com/item=144482\">Fel-Oiled Infernal Machine</a>",
            "<a href=\"http://www.wowhead.com/item=147015\">Engine of Eradication</a>",
            "<a href=\"http://www.wowhead.com/item=142508,bonus_id=604\">Stat Stick (Haste)</a>",
            "<a href=\"http://www.wowhead.com/item=141535\">Ettin Fingernail</a>",
            "<a href=\"http://www.wowhead.com/item=140796\">Entwined Elemental Foci</a>",
            "<a href=\"http://www.wowhead.com/item=154176\">Khaz'goroths Courage</a>",
            "<a href=\"http://www.wowhead.com/item=151968\">Shadow-Singed Fang</a>",
            "<a href=\"http://www.wowhead.com/item=142508,bonus_id=605\">Stat Stick (Mastery)</a>",
            "<a href=\"http://www.wowhead.com/item=137312\">Nightmare Egg Shell</a>",
            "<a href=\"http://www.wowhead.com/item=142508,bonus_id=603\">Stat Stick (Crit)</a>",
            "<a href=\"http://www.wowhead.com/item=142669\">PVP Badge of Victory</a>",
            "<a href=\"http://www.wowhead.com/item=137419\">Chrono Shard</a>",
            "<a href=\"http://www.wowhead.com/item=142784\">PVP Insignia of Victory</a>",
            "<a href=\"http://www.wowhead.com/item=140790\">Claw of the Crystalline Scorpid</a>",
            "<a href=\"http://www.wowhead.com/item=151190\">Specter of Betrayal</a>",
            "<a href=\"http://www.wowhead.com/item=133647\">Gift of Radiance</a>",
            "<a href=\"http://www.wowhead.com/item=147011\">Vial of Ceaseless Toxins</a>",
            "<a href=\"http://www.wowhead.com/item=151307\">Void Stalker's Contract</a>",
            "<a href=\"http://www.wowhead.com/item=142159\">Bloodstained Handkerchief</a>",
            "<a href=\"http://www.wowhead.com/item=151964\">Seeping Scourgewing</a>",
            "<a href=\"http://www.wowhead.com/item=137406\">Terrorbound Nexus</a>",
            "<a href=\"http://www.wowhead.com/item=140799\">Might of Krosus</a>",
            "<a href=\"http://www.wowhead.com/item=139328\">Ursoc's Rending Paw</a>",
            "<a href=\"http://www.wowhead.com/item=151607\">Astral Alchemist Stone</a>",
            "<a href=\"http://www.wowhead.com/item=139334\">Nature's Call</a>",
            "<a href=\"http://www.wowhead.com/item=147009\">Infernal Cinders</a>",
            "<a href=\"http://www.wowhead.com/item=137357\">Mark of Dargrul</a>",
            "<a href=\"http://www.wowhead.com/item=137439\">Tiny Oozeling in a Jar</a>",
            "<a href=\"http://www.wowhead.com/item=140034\">Impact Tremor</a>",
            "<a href=\"http://www.wowhead.com/item=137539\">Faulty Countermeasure</a>",
            "<a href=\"http://www.wowhead.com/item=139325\">Spontaneous Appendages</a>",
            "<a href=\"http://www.wowhead.com/item=142164\">Toe Knee's Promise</a>",
            "<a href=\"http://www.wowhead.com/item=137486\">Windscar Whetstone</a>",
            "<a href=\"http://www.wowhead.com/item=136715\">Spiked Counterweight</a>",
            "<a href=\"http://www.wowhead.com/item=139320\">Ravaged Seed Pod</a>",
            "<a href=\"http://www.wowhead.com/item=137369\">Giant Ornamental Pearl</a>",
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
                    text: 'mean: ' + Intl.NumberFormat().format(304057),
                    verticalAlign: "bottom",
                    x: 10,
                    y: -23
                },
                value: 304057.41071428574,
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