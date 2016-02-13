var CBOT = {};
CBOT.objects = Array(
    ["#product0" , "Cursor"],
    ["#product1" , "Grandma"],
    ["#product2" , "Farm"],
    ["#product3" , "Mine"],
    ["#product4" , "Factory"],
    ["#product5" , "Bank"],
    ["#product6" , "Temple"],
    ["#product7" , "Wizard tower"],
    ["#product8" , "Shipment"],
    ["#product9" , "Alchemy lab"],
    ["#product10" , "Portal"],
    ["#product11" , "Time machine"],
    ["#product12" , "Antimatter condenser"],
    ["#product13" , "Prism"]
)
CBOT.buyStuff = function(){

    for (var i = 0; i < CBOT.objects.length; i++){
        if (CM.Cache.Objects[CBOT.objects[i][1]].color == "Green"){
            $(CBOT.objects[i][0]).click();
        }
    }
}

CBOT.autoClick = function(){
    clearInterval(CBOT.autoObject);
    CBOT.autoObject = setInterval(function(){
        Game.ClickCookie();
    }, 1);
}

CBOT.autoGoldenCookie = function(){
    $('#goldenCookie').click();
}

CBOT.stopClick = function(){
    clearInterval(CBOT.autoObject);
} 

CBOT.startAutoBuy = function(){
    clearInterval(CBOT.autoBuyObject);
    CBOT.autoBuyObject = setInterval(function(){
        CBOT.buyStuff();
    }, 100)
}

CBOT.stopAutoBuy = function(){
    clearInterval(CBOT.autoBuyObject);
}

CBOT.startGoldenClicker = function(){
    clearInterval(CBOT.autoGoldenCookieObject);
    CBOT.autoGoldenCookieObject = setInterval(function(){
        CBOT.autoGoldenCookie();
    }, 500)
}

CBOT.stopGoldenClicker = function(){
    clearInterval(CBOT.autoGoldenCookieObject);
}

CBOT.insertHTML = "<button id='CBOTstartClick' onclick='CBOT.autoClick()'>Start click</button> <button id='CBOTstopClick' onclick='CBOT.stopClick()'>Stop click</button><br><button id='CBOTautoBuy' onclick='CBOT.startAutoBuy()'>AutoBuy</button> <button id='CBOTstopBuy' onclick = 'CBOT.stopAutoBuy()'>Stop AutoBuy</button><br><button id='CBOTstartAutoGoldCookie' onclick='CBOT.startGoldenClicker()'>auto GCookie</button> <button id='CBOTstopAutoGoldCookie' onclick = 'stopGoldenClicker()'>stop auto GCookie</button>";
document.getElementById("comments").insertAdjacentHTML("beforeBegin", "<div id='CBOTControl' style='z-index: 99999999; background-color: black; position: relative; top: 0px; left: 100px; width: 175px; height: 50px;'>" + CBOT.insertHTML + " </div>");
