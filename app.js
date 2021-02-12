let totalMoonDust = 0 

let clickUpgrades = {
    shovel: {
      price: 10,
      quantity: 0,
      multiplier: 1
    },
     pickaxe: {
        price: 20,
        quantity: 0,
        multiplier: 2
      },
      laser: {
        price: 25,
        quantity: 0,
        multiplier: 4
      },
      rover: {
        price: 30,
        quantity: 0,
        multiplier: 8
      },
  };

  let automaticUpgrades = {
    elonMusk: {
      price: 10,
      quantity: 0,
      multiplier: 20
    }
  };

function buyUpgrade(upgradeKey){
    let item = clickUpgrades[upgradeKey]
    if (totalMoonDust >= item.price){
        totalMoonDust-= item.price
        item.quantity++
        console.log(`purchased`)
    }
update()
}

function buyAutoUpgrade(upgradeKey){
    let item = automaticUpgrades[upgradeKey]
    if (totalMoonDust >= item.price){
        totalMoonDust-= item.price
        item.quantity++
        console.log(`purchased`)
    }
update()
}

function collectAutoUpgrades(){
    for (let key in automaticUpgrades){
        let upgrade = automaticUpgrades[key]
        // console.log(clickUpgrades[key])
        totalMoonDust+= upgrade.multiplier * upgrade.quantity
    }
   update()
}
function startInterval() {
    setInterval(collectAutoUpgrades, 3000);
    console.log (`started`)
        update ()
      }
  


function mine(){
    totalMoonDust++
    for (let key in clickUpgrades){
        let upgrade = clickUpgrades[key]
        // console.log(clickUpgrades[key])
        totalMoonDust+= upgrade.multiplier * upgrade.quantity
    }
    
    console.log (`you did it`)
    update()
}

function update(){
    document.getElementById('moonDust').innerText = totalMoonDust.toString();

}
update()
startInterval()