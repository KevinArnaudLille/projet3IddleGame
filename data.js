// ALL DATA THAT SAVE PROGRESS =====================
let STATES = {
  "checkpointProgress" : 0,  
  "mainBarProgress" : 0,

  "clickIncrement" : 0.001,
  "clickMultiplicator" : 1,
  "autoProgressVal" : 0,
  "autoProgressFactor" : 1,
  "autoProgressSpeed" : 2000,

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

// SHOP ITEM DATA ===============================
const shopItemsData = [
  {
  "itemId" : "item0",
  "itemPower" : 10,
  "itemName" : "RAM ",
  "itemInitPrice" : 250,
  "itemCurrentPrice" : 250,
  "itemEffectOnAutoProgressVal" : 1,
  "itemEffectOnAutoProgressFactor" : 1,
  "itemEffectOnAutoProgressSpeed" : 1,
},
{
  "itemId" : "item1",
  "itemPower" : 100,
  "itemName" : "Processor ",
  "itemInitPrice" : 1000,
  "itemCurrentPrice" : 1000,
  "itemEffectOnAutoProgressVal" : 1,
  "itemEffectOnAutoProgressFactor" : 1,
  "itemEffectOnAutoProgressSpeed" : 1,
},
{
  "itemId" : "item2",
  "itemPower" : 1000,
  "itemName" : "Graphic Card ",
  "itemInitPrice" : 5000,
  "itemCurrentPrice" : 5000,
  "itemEffectOnAutoProgressVal" : 1,
  "itemEffectOnAutoProgressFactor" : 1,
  "itemEffectOnAutoProgressSpeed" : 1,
},
{
  "itemId" : "item3",
  "itemPower" : 10000,
  "itemName" : "NASA Cloud Subscription ",
  "itemInitPrice" : 15000,
  "itemCurrentPrice" : 15000,
  "itemEffectOnAutoProgressVal" : 1,
  "itemEffectOnAutoProgressFactor" : 1,
  "itemEffectOnAutoProgressSpeed" : 1,
},
]

// PACKAGING ITEM DATA ============================
const packagingItemsData = [
  {
    "itemId" : "cardboard",
    "itemName" : "Cardboard",
    "itemVal" : 100,
    "isCombined" : false
  },
  {
    "itemId" : "bubbleWrap",
    "itemName" : "Bubble wrap",
    "itemVal" : 1,
    "isCombined" : false
  },
  {
    "itemId" : "can",
    "itemName" : "Can",
    "itemVal" : 200,
    "isCombined" : false
  },
  {
    "itemId" : "bottle",
    "itemName" : "Bottle",
    "itemVal" : 150,
    "isCombined" : false
  },
  {
    "itemId" : "box",
    "itemName" : "Box",
    "itemVal" : 300,
    "isCombined" : true,
    "nbOfCarboardsRequired" : 4,
    "nbOfBubbleWrapsRequired" : 20,
  },
  {
    "itemId" : "case",
    "itemName" : "Case",
    "itemVal" : 500,
    "isCombined" : true,
    "nbOfCanRequired" : 17,
    "nbOfBottleRequired" : 9,
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
    "rewardVal" : 1000
  },
  {
    "taskId" : 1,
    "taskText" : "Prout",
    "nbOfBoxesRequired" : 2,
    "nbOfCasesRequired" : 1,
    "rewardType" : "money",
    "rewardVal" : 1500
  }
]

// NARRATOR TEXT DATA ==========================
const narratorData={
  "error1":[
    "You don't have enough money",
  ],
  "error2":[
    "You can't do that now"
  ],
  "phase00":[
    "Oh! \\o/ Finally someone is here \\o/! Wait wait wait!",
    "Please just listen to me",
    "I'm Nathan by the way ;) ",
    "Last day, I met an old bearded man that predents to know the way to find The Meaning Of Life!",
    "Believe me or not, I trust him, just follows his instructions and finds myself on this webpage",
    "You see that progress bar ? We need to complete it and then The Meaning Of Life will be revealed!",
    "You seem quite sharp, I'm sure you already guess how we will proceed",
    "Yes! By clicking! I'll try to help you but I'm currently busy :/ sorry",
    "Give it a try!"
  ],
  "phase01":[
    "You get it! Keep going!!",
  ],  
  "phase02":
  [
    "So ... do you find this funny ?",
    "I guess not, but don't worry I'm now available to help ;)",
    "Let me just connect my computer to yours, don't stop clicking!"
  ],
  "phase10":
  [
    "Ok it's connected!",
    "You should see a bar autoprogression",
    "It's very slow for now but there is also a shop where you can spend your money to upgrade my computer!",
    "You don't have money ? Don't worry I "
  ],
};

// STORY TRIGGER DATA ============================

const storyProgressBarCheckpoint=[0,0.18,0.25,0.32];