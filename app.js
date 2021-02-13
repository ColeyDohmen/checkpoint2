let totalMoonDust = 0 

let clickUpgrades = {
    shovel: {
      price: 10,
      quantity: 0,
      multiplier: 1
    },
     pickaxe: {
        price: 50,
        quantity: 0,
        multiplier: 2
      },
      laser: {
        price: 150,
        quantity: 0,
        multiplier: 4
      },
      rover: {
        price: 200,
        quantity: 0,
        multiplier: 8
      },
  };

  let automaticUpgrades = {
    elonMusk: {
      price: 50,
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
        item.price*= 2
    }
update()
}

function buyAutoUpgrade(upgradeKey){
    let item = automaticUpgrades[upgradeKey]
    if (totalMoonDust >= item.price){
        totalMoonDust-= item.price
        item.quantity++
        console.log(`purchased`)
        item.price*= 2
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