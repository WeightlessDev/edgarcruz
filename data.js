var APP_DATA = {
  "scenes": [
    {
      "id": "0-entrada-1",
      "name": "Entrada 1",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.07062780000000757,
          "pitch": 0,
          "rotation": 0,
          "target": "1-entrada-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-entrada-2",
      "name": "Entrada 2",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.006461980000008083,
          "pitch": -0.07345100652798209,
          "rotation": 0,
          "target": "2-bodega-1"
        },
        {
          "yaw": -3.1400182718000345,
          "pitch": -0.0401678106778629,
          "rotation": 0,
          "target": "0-entrada-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-bodega-1",
      "name": "Bodega 1",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -3.0427112559149805,
        "pitch": -0.05500317792771625,
        "fov": 1.5547512182991647
      },
      "linkHotspots": [
        {
          "yaw": 0.3772912433818245,
          "pitch": -0.06132359933952003,
          "rotation": 0,
          "target": "1-entrada-2"
        },
        {
          "yaw": -3.0427112559149805,
          "pitch": -0.05500317792771625,
          "rotation": 0,
          "target": "3-bodega-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-bodega-2",
      "name": "Bodega 2",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.027129620000007293,
        "pitch": 0,
        "fov": 1.5547512182991647
      },
      "linkHotspots": [
        {
          "yaw": 0.08320977407782948,
          "pitch": 0.03625210581090421,
          "rotation": 0,
          "target": "2-bodega-1"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
