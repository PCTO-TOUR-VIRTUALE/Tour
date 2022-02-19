var APP_DATA = {
  "scenes": [
    {
      "id": "0-ingresso",
      "name": "ingresso",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -1.1880341878499685,
        "pitch": 0.10053918912357318,
        "fov": 1.3687812585745385
      },
      "linkHotspots": [
        {
          "yaw": -0.8146754605160726,
          "pitch": 0.11562916788247968,
          "rotation": 0.7853981633974483,
          "target": "1-corridoio1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.5885761806122325,
          "pitch": 0.05454108125763568,
          "title": "Stanzino",
          "text": "Stanzino personale A.T.A."
        },
        {
          "yaw": 1.7744730231106374,
          "pitch": 0.01639410935222685,
          "title": "Entrata principale",
          "text": "Ingresso/Uscita"
        }
      ]
    },
    {
      "id": "1-corridoio1",
      "name": "corridoio1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 3.065496967444089,
        "pitch": 0.08406531740060252,
        "fov": 1.3687812585745385
      },
      "linkHotspots": [
        {
          "yaw": -2.4011751083053454,
          "pitch": 0.07281143238309795,
          "rotation": 5.497787143782138,
          "target": "0-ingresso"
        },
        {
          "yaw": 2.358050127964492,
          "pitch": 0.05112172868658149,
          "rotation": 0,
          "target": "6-aula19"
        },
        {
          "yaw": 2.923289763374253,
          "pitch": 0.05220855029050142,
          "rotation": 0,
          "target": "5-lab18"
        },
        {
          "yaw": 0.8327170820605687,
          "pitch": 0.19785643960842947,
          "rotation": 0,
          "target": "2-corridoio2"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.10598005856470927,
          "pitch": 0.2817352554682948,
          "title": "Bagno",
          "text": "Bagno femmine"
        }
      ]
    },
    {
      "id": "2-corridoio2",
      "name": "corridoio2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.9375863573744887,
        "pitch": 0.24679362618931222,
        "fov": 1.3687812585745385
      },
      "linkHotspots": [
        {
          "yaw": -1.1168396914065912,
          "pitch": 0.040693181173338644,
          "rotation": 0,
          "target": "1-corridoio1"
        },
        {
          "yaw": -3.1010191142021846,
          "pitch": 0.03511921959965747,
          "rotation": 0,
          "target": "8-lab21"
        },
        {
          "yaw": -2.5150050261753574,
          "pitch": 0.05011650350768804,
          "rotation": 0,
          "target": "7-aula20"
        },
        {
          "yaw": 2.0566167603514707,
          "pitch": 0.04245188539652922,
          "rotation": 0,
          "target": "3-corridoio3"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.7864655517912276,
          "pitch": 0.06979604449347931,
          "title": "Stanzino",
          "text": "<span style=\"font-size: 16px; background-color: rgba(103, 115, 131, 0.8);\">Stanzino tecnico</span>"
        },
        {
          "yaw": -0.023020823897553555,
          "pitch": 0.040024900669857644,
          "title": "Bagno",
          "text": "Bagno docenti"
        }
      ]
    },
    {
      "id": "3-corridoio3",
      "name": "corridoio3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.26017925601216874,
        "pitch": 0.027152950056855474,
        "fov": 1.3687812585745385
      },
      "linkHotspots": [
        {
          "yaw": 1.0608631376436115,
          "pitch": 0.03540094365345858,
          "rotation": 0,
          "target": "2-corridoio2"
        },
        {
          "yaw": -0.20218360218347442,
          "pitch": 0.029373139097717882,
          "rotation": 0,
          "target": "9-lab22"
        },
        {
          "yaw": -0.7986043180182776,
          "pitch": 0.024469066401781703,
          "rotation": 0,
          "target": "10-aula23"
        },
        {
          "yaw": -2.036591836335326,
          "pitch": 0.03824912584374296,
          "rotation": 0,
          "target": "4-corridoio4"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.1837736201115927,
          "pitch": 0.047945989596295036,
          "title": "Stanzino",
          "text": "<span style=\"font-size: 16px; background-color: rgba(103, 115, 131, 0.8);\">Stanzino tecnico</span>"
        },
        {
          "yaw": -2.9839064236175137,
          "pitch": 0.05469115687493442,
          "title": "Bagno",
          "text": "Bagno maschi"
        }
      ]
    },
    {
      "id": "4-corridoio4",
      "name": "corridoio4",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -1.7532003849240194,
        "pitch": 0.17554816280713226,
        "fov": 1.3687812585745385
      },
      "linkHotspots": [
        {
          "yaw": 0.0014038112146543824,
          "pitch": 0.06370441920492276,
          "rotation": 0,
          "target": "3-corridoio3"
        },
        {
          "yaw": -1.5136002433697602,
          "pitch": 0.0631777560682707,
          "rotation": 0,
          "target": "11-aula24"
        },
        {
          "yaw": -2.1217807084579086,
          "pitch": 0.04427917004738191,
          "rotation": 0,
          "target": "12-lab25"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -3.043567332148278,
          "pitch": -0.002038280163567663,
          "title": "Uscita",
          "text": "Uscita d'emergenza"
        }
      ]
    },
    {
      "id": "5-lab18",
      "name": "lab18",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.1484243780381433,
        "pitch": 0.22013792822317235,
        "fov": 1.3687812585745385
      },
      "linkHotspots": [
        {
          "yaw": 1.5620026496261739,
          "pitch": 0.1693599962843919,
          "rotation": 0,
          "target": "1-corridoio1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-aula19",
      "name": "aula19",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.6108561360798959,
        "pitch": 0.16321088926521554,
        "fov": 1.3687812585745385
      },
      "linkHotspots": [
        {
          "yaw": 2.9308232771773675,
          "pitch": 0.17488569337698578,
          "rotation": 0,
          "target": "1-corridoio1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-aula20",
      "name": "aula20",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.09795215189763162,
        "pitch": 0.05933202050603725,
        "fov": 1.3687812585745385
      },
      "linkHotspots": [
        {
          "yaw": -2.622191261113729,
          "pitch": 0.17542391738768082,
          "rotation": 0,
          "target": "2-corridoio2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-lab21",
      "name": "lab21",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.46303762437423757,
        "pitch": 0.24230591486055175,
        "fov": 1.3687812585745385
      },
      "linkHotspots": [
        {
          "yaw": -3.1314224113466977,
          "pitch": 0.13199360472716215,
          "rotation": 0,
          "target": "2-corridoio2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-lab22",
      "name": "lab22",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -1.1601145567862368,
        "pitch": 0.27787245403376737,
        "fov": 1.3687812585745385
      },
      "linkHotspots": [
        {
          "yaw": 2.50680906686798,
          "pitch": -0.051683152036421376,
          "rotation": 0,
          "target": "3-corridoio3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-aula23",
      "name": "aula23",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.16030388139416374,
        "pitch": 0.051922696041550864,
        "fov": 1.3687812585745385
      },
      "linkHotspots": [
        {
          "yaw": 2.5581979963260597,
          "pitch": 0.19156226534184562,
          "rotation": 0,
          "target": "3-corridoio3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-aula24",
      "name": "aula24",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.36331343612942923,
        "pitch": 0.014835056011865078,
        "fov": 1.3687812585745385
      },
      "linkHotspots": [
        {
          "yaw": -3.019588301439157,
          "pitch": 0.1927802944667576,
          "rotation": 0,
          "target": "4-corridoio4"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-lab25",
      "name": "lab25",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 1.9148431413114038,
        "pitch": 0.23262193038337742,
        "fov": 1.3687812585745385
      },
      "linkHotspots": [
        {
          "yaw": -1.6588169511380997,
          "pitch": 0.16705931905757154,
          "rotation": 0,
          "target": "4-corridoio4"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
