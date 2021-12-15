// ALL DATA THAT SAVE PROGRESS =====================
let STATES = {
  "checkpointProgress" : 0,
  "mainBarProgress" : 0,
  "clickIncrement" : 0.001,
  "clickMultiplicator" : 1,
  "currentMoney" : 0,
  "PCPower" : 0,
  
  "cryptoAInStock" : 0,
  "cryptoACurrentVal" : 20,
  "cryptoBInStock" : 0,
  "cryptoBCurrentVal" : 20,
  "cryptoCInStock" : 0,
  "cryptoCCurrentVal" : 20,

  "isFormularEnable": false,
  "isShopEnable" : false,
  "isCryptoEnable" : false,
  "isTaskEnable" : false,
};

// CRYPTO DATA ================================
let cryptoData = [
  {
    "cryptoId" : "cryptoA",
    "cryptoName" : "TonyCoin",
    "cryptoMinVal" : 1,
    "cryptoMedVal" : 10,
    "cryptoMaxVal" : 20,
    "cryptoTimeInterval" : 1000,
    "cryptoInitCurrentVal" : 10,
  },
  {
    "cryptoId" : "cryptoB",
    "cryptoName" : "ClickCoin",
    "cryptoMinVal" : 1,
    "cryptoMedVal" : 20,
    "cryptoMaxVal" : 30,
    "cryptoTimeInterval" : 5000,
    "cryptoInitCurrentVal" : 20,
  },
  {
    "cryptoId" : "cryptoC",
    "cryptoName" : "SullyCoin",
    "cryptoMinVal" : 0,
    "cryptoMedVal" : 50,
    "cryptoMaxVal" : 100,
    "cryptoTimeInterval" : 10000,
    "cryptoInitCurrentVal" : 20,
  }
];

// NARRATOR TEXT ============================
let narratorData={
  "phase0":[
    "Hello1",
    "Hello2",
    "Hello3",
    "Hello4"
  ],
  "phase1":[
    "Hello5",
    "Hello6",
    "Hello7"
  ]
};

// SHOP ITEM STATS ===============================
let shopItemStats = [
  {
  "itemId" : "item0",
  "itemPower" : 10,
  "itemName" : "RAM",
  "itemCurrentNb" : 0,
  "itemInitPrice" : 250,
  "itemCurrentPrice" : 250,
},
{
  "itemId" : "item1",
  "itemPower" : 100,
  "itemName" : "Processor",
  "itemCurrentNb" : 0,
  "itemInitPrice" : 1000,
  "itemCurrentPrice" : 1000,
},
{
  "itemId" : "item2",
  "itemPower" : 1000,
  "itemName" : "Graphic Card",
  "itemCurrentNb" : 0,
  "itemInitPrice" : 5000,
  "itemCurrentPrice" : 5000,
},
{
  "itemId" : "item3",
  "itemPower" : 10000,
  "itemName" : "NASA Cloud Subscription",
  "itemCurrentNb" : 0,
  "itemInitPrice" : 15000,
  "itemCurrentPrice" : 15000,
},
]