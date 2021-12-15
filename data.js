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

// NARRATOR TEXT
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

// SHOP ITEM STATS
let shopItemDate = [
  {
  "ProcessorId" : "ProcessorId",
  "ProcessorValue" : 0,
  "ProcessorName" : "Processor",
  "ProcessorCurrentValue" : 0,
  "ProcessorPrice" : 250 ,
  "ProcessorCurrentPrice" : 0,
},
{
  "RAMId" : "ProcessorId",
  "RAMValue" : 0,
  "RAMName" : "Processor",
  "RAMCurrentValue" : 0,
  "RAMPrice" : 250 ,
  "RAMCurrentPrice" : 0,
},
{
  "GraphiceCardId" : "ProcessorId",
  "GraphiceCardValue" : 0,
  "GraphiceCardName" : "Processor",
  "GraphiceCardCurrentValue" : 0,
  "GraphiceCardPrice" : 250 ,
  "GraphiceCardCurrentPrice" : 0,
},
{
  "HardwareId" : "ProcessorId",
  "HardwareValue" : 0,
  "HardwareName" : "Processor",
  "HardwareCurrentValue" : 0,
  "HardwarePrice" : 250 ,
  "HardwareCurrentPrice" : 0,
},
]