// ALL DATA THAT SAVE PROGRESS =====================
let STATES = {
  "checkpointProgress" : 0,  
  "mainBarProgress" : 0,

  "clickIncrement" : 0.001,
  "clickMultiplicator" : 1,
  "autoProgressVal" : 0,
  "autoProgressFactor" : 1,
  "autoProgressSpeed" : 5000,

  "currentMoney" : 0,
  "PCPower" : 0,
  
  "cryptoAInStock" : 0,
  "cryptoACurrentVal" : 20,
  "cryptoBInStock" : 0,
  "cryptoBCurrentVal" : 20,
  "cryptoCInStock" : 0,
  "cryptoCCurrentVal" : 20,

  "RAMCurrentNb" : 0,
  "ProcessorCurrentNb" : 0,
  "GraphicCardCurrentNb" : 0,
  "NASACloudSubCurrentNb" : 0,

  "cardboardCurrentNb" : 0,
  "canCurrentNb" : 0,
  "bottleCurrentNb" : 0,
  "bubbleWrapCurrentNb" : 0,
  "boxCurrentNb" : 0,
  "caseCurrentNb" : 0,

  "currentPackagingTask" : null,

  "isAutoProgressEnable":false,
  "isShopEnable" : false,
  "isCryptoEnable" : false,
  "isTaskEnable" : false,
};

// CRYPTO DATA ================================
const cryptoData = [
  {
    "cryptoId" : "cryptoA",
    "cryptoName" : "ClickCoin",
    "cryptoMinVal" : 1,
    "cryptoMedVal" : 10,
    "cryptoMaxVal" : 20,
    "cryptoTimeInterval" : 1500,
    "cryptoInitCurrentVal" : 10,
  },
  {
    "cryptoId" : "cryptoB",
    "cryptoName" : "TonyCoin",
    "cryptoMinVal" : 1,
    "cryptoMedVal" : 20,
    "cryptoMaxVal" : 30,
    "cryptoTimeInterval" : 5000,
    "cryptoInitCurrentVal" : 20,
  },
  {
    "cryptoId" : "cryptoC",
    "cryptoName" : "KekCoin",
    "cryptoMinVal" : 0,
    "cryptoMedVal" : 50,
    "cryptoMaxVal" : 100,
    "cryptoTimeInterval" : 10000,
    "cryptoInitCurrentVal" : 20,
  }
];

// SHOP ITEM DATA ===============================
const shopItemsData = [
  {
  "itemId" : "item0",
  "itemPower" : 1,
  "itemName" : "RAM ",
  "itemInitPrice" : 250,
  "itemCurrentPrice" : 250,
  "itemEffectOnAutoProgressVal" : 0.0005,
  "itemEffectOnAutoProgressFactor" : 0.05,
  "itemEffectOnAutoProgressSpeed" : 0,
},
{
  "itemId" : "item1",
  "itemPower" : 2,
  "itemName" : "Processor ",
  "itemInitPrice" : 1000,
  "itemCurrentPrice" : 1000,
  "itemEffectOnAutoProgressVal" : 0.001,
  "itemEffectOnAutoProgressFactor" : 0.1,
  "itemEffectOnAutoProgressSpeed" : 15,
},
{
  "itemId" : "item2",
  "itemPower" : 4,
  "itemName" : "Graphic Card ",
  "itemInitPrice" : 5000,
  "itemCurrentPrice" : 5000,
  "itemEffectOnAutoProgressVal" : 0.002,
  "itemEffectOnAutoProgressFactor" : 0.4,
  "itemEffectOnAutoProgressSpeed" : 30,
},
{
  "itemId" : "item3",
  "itemPower" : 10,
  "itemName" : "NASA Cloud Subscription ",
  "itemInitPrice" : 15000,
  "itemCurrentPrice" : 15000,
  "itemEffectOnAutoProgressVal" : 0.005,
  "itemEffectOnAutoProgressFactor" : 0.6,
  "itemEffectOnAutoProgressSpeed" : 60,
},
]

// PACKAGING ITEM DATA ============================
const packagingItemsData = [
  {
    "itemId" : "cardboard",
    "itemName" : "Cardboard",
    "itemVal" : 10,
    "isCombined" : false
  },
  {
    "itemId" : "bubbleWrap",
    "itemName" : "Bubble wrap",
    "itemVal" : 4,
    "isCombined" : false
  },
  {
    "itemId" : "can",
    "itemName" : "Can",
    "itemVal" : 12,
    "isCombined" : false
  },
  {
    "itemId" : "bottle",
    "itemName" : "Bottle",
    "itemVal" : 15,
    "isCombined" : false
  },
  {
    "itemId" : "box",
    "itemName" : "Box",
    "itemVal" : 25,
    "isCombined" : true,
    "nbOfCarboardsRequired" : 5,
    "nbOfBubbleWrapsRequired" : 15,
  },
  {
    "itemId" : "case",
    "itemName" : "Case",
    "itemVal" : 50,
    "isCombined" : true,
    "nbOfCanRequired" : 10,
    "nbOfBottleRequired" : 7,
  }
]

// PACKAGING TASK POSSIBILITIES ============
const packagingTaskData = [
  {
    "taskId" : 0,
    "taskText" : "Some friends want to have a party ! We have to help them !!",
    "nbOfBoxesRequired" : 1,
    "nbOfCasesRequired" : 3,
    "rewardType" : "money",
    "rewardVal" : 1200,
  },
  {
    "taskId" : 1,
    "taskText" : "I'm out of boxes and cases, can you help me out please ?",
    "nbOfBoxesRequired" : 2,
    "nbOfCasesRequired" : 1,
    "rewardType" : "money",
    "rewardVal" : 500,
  },
  {
    "taskId" : 2,
    "taskText" : "I need supply to give them to a charity center, help me bro.",
    "nbOfBoxesRequired" : 4,
    "nbOfCasesRequired" : 4,
    "rewardType" : "money",
    "rewardVal" : 1500,
  },
  {
    "taskId" : 3,
    "taskText" : "Some guy treated me to give them 3 cases help men, they're going to kill me !",
    "nbOfBoxesRequired" : 0,
    "nbOfCasesRequired" : 3,
    "rewardType" : "money",
    "rewardVal" : 1000,
  },
  {
    "taskId" : 4,
    "taskText" : "A church need supply for orphans, you can't abandon me on this...",
    "nbOfBoxesRequired" : 7,
    "nbOfCasesRequired" : 6,
    "rewardType" : "money",
    "rewardVal" : 2500,
  },
  {
    "taskId" : 4,
    "taskText" : "I'm going to do a big party for a special occasion but i need some supply to do it, help me man.",
    "nbOfBoxesRequired" : 10,
    "nbOfCasesRequired" : 10,
    "rewardType" : "money",
    "rewardVal" : 5000,
  },
]

// NARRATOR TEXT DATA ==========================
const narratorData={
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

// STORY TRIGGER DATA ============================

const storyProgressBarCheckpoint=[0,0.01];