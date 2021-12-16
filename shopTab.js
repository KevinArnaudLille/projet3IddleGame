/* Shop tab */
function updatePCPower(itemId){
  item = shopItemsData.find(o => o.itemId === itemId);
  
  if (STATES.currentMoney >= item.itemCurrentPrice){
    STATES.currentMoney -= item.itemCurrentPrice;
    STATES.autoProgressVal += item.itemEffectOnAutoProgressVal;
    STATES.autoProgressFactor += item.itemEffectOnAutoProgressFactor;
    STATES.autoProgressSpeed -= item.itemEffectOnAutoProgressSpeed;
    STATES.PCPower += item.itemPower;
  } else {
    addTextToNarrator(narratorData.error1);
  }
  updateStats();
}