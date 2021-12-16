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
    "taskText" : "I need supply for a charity center, help me my friend.",
    "nbOfBoxesRequired" : 4,
    "nbOfCasesRequired" : 4,
    "rewardType" : "money",
    "rewardVal" : 1500,
  },
  {
    "taskId" : 3,
    "taskText" : "Some guys threaten me for 3 cases help men, they're going to kill me !",
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
    "taskId" : 5,
    "taskText" : "I'm going to do a big party for a special occasion but i need some supply to do it, help me man.",
    "nbOfBoxesRequired" : 10,
    "nbOfCasesRequired" : 10,
    "rewardType" : "money",
    "rewardVal" : 5000,
  },
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
    "You don't have money ? Don't worry I'll lend you some",
    "That's not that much but I may have an idea to generate income",
    "I'll come back soon, don't forget to click ;) ",
  ],
};

// STORY TRIGGER DATA ============================

const storyProgressBarCheckpoint=[0,0.18,0.25,0.32,0.5];