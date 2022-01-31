"use strict"

const total = [
    {
        "nombre": "Katsuki Bakugo Deck ",
        "descripcion": "Tabla Primitive Bakugo talla 8.25 ",
        "precio": 73.0,
        "categoria": "tablas ",
        "imagen": "https://cdn.shopify.com/s/files/1/0342/5665/products/PS21W0071-KATSUKIBAKUGODECK_800x800.jpg?v=1636742192",
        "comprar":"https://www.skatedeluxe.com/es/real-walker-magnolia-full-se-8-38-tabla-multi_p154060",
        "fecha":"2022/01/11"
    },
    {
        "nombre": "BONES STF DECENZO ",
        "descripcion": "Ruedas bones Decenzo de 53mm ",
        "precio": 54.99,
        "categoria": "ruedas ",
        "imagen": "https://cdn.skatedeluxe.com/thumb/c3S3WvMPUB9v6SZOmz7iYYX-7Hk=/fit-in/420x490/filters:fill(white):brightness(-4)/product/150561-0-Bones-STFDecenzoGizzmoV2.jpg",
        "comprar":"https://www.skatedeluxe.com/es/real-walker-magnolia-full-se-8-38-tabla-multi_p154060",
        "fecha":"2020/11/19"
    },
    {
        "nombre": "Independent Tiago Lemos ",
        "descripcion": "Ejes independent de talla 8.5 ",
        "precio": 42.99,
        "categoria": "ejes ",
        "imagen": "https://cdn.skatedeluxe.com/thumb/jndzIfCR58C57fzXSOZvkoiTH1o=/fit-in/300x350/filters:fill(white):brightness(-4)/product/142803-0-Independent-149MidLemos.jpg",
        "comprar":"https://www.skatedeluxe.com/es/real-walker-magnolia-full-se-8-38-tabla-multi_p154060",
        "fecha":"2020/05/31"
    },
    {
        "nombre": "ANDALE PUIG ",
        "descripcion": "Rodamientos andale Lucas Puig abec 7 ",
        "precio": 31.99,
        "categoria": "rodamientos ",
        "imagen": "https://cdn.skatedeluxe.com/thumb/iSk6ArWfXy2hpp4ljWnZquL4uuA=/fit-in/420x490/filters:fill(white):brightness(-4)/product/151174-0-Andale-LucasPro.jpg",
        "comprar":"https://www.skatedeluxe.com/es/real-walker-magnolia-full-se-8-38-tabla-multi_p154060",
        "fecha":"2021/12/26"
    },
    {
        "nombre": "Primitive Rpm ",
        "descripcion": "Pack completo Primitive RPM talla 8.15 ",
        "precio": 105.0,
        "categoria": "completos ",
        "imagen": "https://cdn.shopify.com/s/files/1/0342/5665/products/PS21W0019-RPMCOMPLETE_800x800.jpg?v=1622363908",
        "comprar":"https://www.skatedeluxe.com/es/real-walker-magnolia-full-se-8-38-tabla-multi_p154060",
        "fecha":"2022/01/05"
    },
    {
        "nombre": "DGK VIPER DECK",
        "descripcion": "Tabla DGK VIPER talla 8.12",
        "precio": 74.99,
        "categoria": "tablas ",
        "imagen": "https://cdn.skatedeluxe.com/thumb/vxggGrCBdzZYA4zjZwd6_OX7D9g=/fit-in/420x490/filters:fill(white):brightness(-4)/product/130132-0-DGKSkateboards-ViperLogo8125.jpg",
        "comprar":"https://www.skatedeluxe.com/es/real-walker-magnolia-full-se-8-38-tabla-multi_p154060",
        "fecha":"2022/01/20"
    },
    {
        "nombre": "BONES ATFORMULA ",
        "descripcion": "Ruedas Bones atformula de 59mm ",
        "precio": 54.99,
        "categoria": "ruedas ",
        "imagen": "https://cdn.skatedeluxe.com/thumb/o4WazzGTwfFw5-Khwb-c9QiKT0U=/fit-in/420x490/filters:fill(white):brightness(-4)/product/143956-0-Bones-ATFormulaRoughRidersRunners.jpg",
        "comprar":"https://www.skatedeluxe.com/es/real-walker-magnolia-full-se-8-38-tabla-multi_p154060",
        "fecha":"2022/01/05"
    },
    {
        "nombre": "ACE 44 AF1 ",
        "descripcion": "Ejes ACE de talla 8.25 ",
        "precio": 41.99,
        "categoria": "ejes ",
        "imagen": "https://cdn.skatedeluxe.com/thumb/NppE92gzesUGOoN7uScepmjK1NI=/fit-in/420x490/filters:fill(white):brightness(-4)/product/148582-0-Ace-44AF1.jpg",
        "comprar":"https://www.skatedeluxe.com/es/real-walker-magnolia-full-se-8-38-tabla-multi_p154060",
        "fecha":"2022/01/20"
    },
    {
        "nombre": "GRIZZLY BEAR-INGS ",
        "descripcion": "Rodamientos Grizzly Gold Abec 7 ",
        "precio": 27.99,
        "categoria": "rodamientos",
        "imagen": "https://cdn.skatedeluxe.com/thumb/PgYFpu_HC_Tybfhrzze2gVA-pKs=/fit-in/420x490/filters:fill(white):brightness(-4)/product/116686-0-Grizzly-BearingsAbec7.jpg",
        "comprar":"https://www.skatedeluxe.com/es/real-walker-magnolia-full-se-8-38-tabla-multi_p154060",
        "fecha":"2021/12/26"
    },
    {
        "nombre": "SANTA CRUZ SCREAMING HAND",
        "descripcion": "Pack completo SANTA CRUZ talla 7.8",
        "precio": 156.99,
        "categoria": "completos ",
        "imagen": "https://cdn.skatedeluxe.com/thumb/FlzabjMxRaQs2QXWdcUXYLte31E=/fit-in/420x490/filters:fill(white):brightness(-4)/product/139227-0-SantaCruz-ScreamingHand78.jpg",
        "comprar":"https://www.skatedeluxe.com/es/real-walker-magnolia-full-se-8-38-tabla-multi_p154060",
        "fecha":"2020/11/19"
    },
    {
        "nombre": "APRIL CEPEDA ",
        "descripcion": "Tabla APRIL ISH CEPEDA ASTRO talla 8 ",
        "precio": 74.99,
        "categoria": "tablas ",
        "imagen": "https://cdn.skatedeluxe.com/thumb/h-7tlBaU7r7VwTwIFffvOHQ6tnk=/fit-in/420x490/filters:fill(white):brightness(-4)/product/151047-0-AprilSkateboards-CepedaAstro8.jpg",
        "comprar":"https://www.skatedeluxe.com/es/real-walker-magnolia-full-se-8-38-tabla-multi_p154060",
        "fecha":"2021/12/26"
    },
    {
        "nombre": "HAZE WHEELS DEFLATED DOLLS ",
        "descripcion": "Ruedas Haze deflated dolls de 60mm ",
        "precio": 44.99,
        "categoria": "ruedas ",
        "imagen": "https://cdn.skatedeluxe.com/thumb/6zQawfd6McPDmZdFFLklLiEE8Bo=/fit-in/420x490/filters:fill(white):brightness(-4)/product/138958-0-HazeWheels-DeflatedDollsII.jpg",
        "comprar":"https://www.skatedeluxe.com/es/real-walker-magnolia-full-se-8-38-tabla-multi_p154060",
        "fecha":"2022/01/05"
    },
    {
        "nombre": "TENSOR MAGNESIUM LIGHT ",
        "descripcion": "Eje Tensor de talla 8.3 ",
        "precio": 89.99,
        "categoria": "ejes ",
        "imagen": "https://cdn.skatedeluxe.com/thumb/5NgPLqvajw1xLJe0yL2ExkPulv0=/fit-in/420x490/filters:fill(white):brightness(-4)/product/83146-0-Tensor-MagnesiumLightTENs575AllTerrain.jpg",
        "comprar":"https://www.skatedeluxe.com/es/real-walker-magnolia-full-se-8-38-tabla-multi_p154060",
        "fecha":"2020/11/19"
    },
    {
        "nombre": "BRONSON SPEED",
        "descripcion": "Rodamientos Bronson Ceramic",
        "precio": 94.99,
        "categoria": "rodamientos ",
        "imagen": "https://cdn.skatedeluxe.com/thumb/WSNII-blzRmtMCY2dzBNS-FA1YY=/fit-in/420x490/filters:fill(white):brightness(-4)/product/139687-0-BronsonSpeedCo-Ceramic.jpg",
        "comprar":"https://www.skatedeluxe.com/es/real-walker-magnolia-full-se-8-38-tabla-multi_p154060",
        "fecha":"2022/01/11"
    },
    {
        "nombre": "BAKER BRAND LOGO",
        "descripcion": "Pack completo BAKER talla 8",
        "precio": 149.99,
        "categoria": "completos ",
        "imagen": "https://cdn.skatedeluxe.com/thumb/CfV92i5_h9EOaFGflPPf5MbMXdI=/fit-in/420x490/filters:fill(white):brightness(-4)/product/112497-0-Baker-TeamBrandLogo8.jpg",
        "comprar":"https://www.skatedeluxe.com/es/real-walker-magnolia-full-se-8-38-tabla-multi_p154060",
        "fecha":"2022/01/05"
    },
    {
        "nombre": "REAL WALKER MAGNOLIA",
        "descripcion": "Tabla REAL WALKER MAGNOLIA FULL SE talla 8.38",
        "precio": 69.99,
        "categoria": "tablas ",
        "imagen": "https://cdn.skatedeluxe.com/thumb/wfOX2HK76bvYBO0aRROCLenojEY=/fit-in/420x490/filters:fill(white):brightness(-4)/product/154060-0-Real-WalkerMagnoliaFullSE838.jpg",
        "comprar":"https://www.skatedeluxe.com/es/real-walker-magnolia-full-se-8-38-tabla-multi_p154060",
        "fecha":"2022/01/11"
    },
    {
        "nombre": "RICTA SPEEDRINGS ",
        "descripcion": "Ruedas RICTA SPEEDRINGS de 53mm ",
        "precio": 44.99,
        "categoria": "ruedas ",
        "imagen": "https://cdn.skatedeluxe.com/thumb/TxAjFSqhD7x96HXJC8Y6nEnAN6E=/fit-in/420x490/filters:fill(white):brightness(-4)/product/142807-0-Ricta-SpeedringsWide.jpg",
        "comprar":"https://www.skatedeluxe.com/es/real-walker-magnolia-full-se-8-38-tabla-multi_p154060",
        "fecha":"2021/12/26"
    },
    {
        "nombre": "TENSOR MAGNESIUM LIGHT GLOSSY ",
        "descripcion": "Ejes Tensor de talla 8 ",
        "precio": 84.99,
        "categoria": "ejes ",
        "imagen": "https://cdn.skatedeluxe.com/thumb/xfboLcn8r117zwnnzy9AwZQ3e44=/fit-in/420x490/filters:fill(white):brightness(-4)/product/143889-0-Tensor-MagnesiumLightGlossy525AllTerrain.jpg",
        "comprar":"https://www.skatedeluxe.com/es/real-walker-magnolia-full-se-8-38-tabla-multi_p154060",
        "fecha":"2022/01/20"
    },
    {
        "nombre": "BONES BEARINGS REDS ",
        "descripcion": "Rodamientos Bones Race Reds abec 7",
        "precio": 44.99,
        "categoria": "rodamientos ",
        "imagen": "https://cdn.skatedeluxe.com/thumb/iyxOMc284rKpISLGzHL04ls5taA=/fit-in/420x490/filters:fill(white):brightness(-4)/product/94657-0-BonesBearings-RaceReds.jpg",
        "comprar":"https://www.skatedeluxe.com/es/real-walker-magnolia-full-se-8-38-tabla-multi_p154060",
        "fecha":"2022/01/11"
    },
    {
        "nombre": "ELEMENT ESCAPE",
        "descripcion": "Pack completo ELEMENT talla 7.75 ",
        "precio": 99.99,
        "categoria": "completos ",
        "imagen": "https://cdn.skatedeluxe.com/thumb/OP2I-K8DCCzm0Iw9FBjltavCUlY=/fit-in/420x490/filters:fill(white):brightness(-4)/product/146193-0-Element-EscapeFrom775.jpg",
        "comprar":"https://www.skatedeluxe.com/es/real-walker-magnolia-full-se-8-38-tabla-multi_p154060",
        "fecha":"2020/11/19"
    }
    
];