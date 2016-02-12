cookieCheater

This is a quick-and-dirty bot for Cookie Clicker. It supports autoClick and autoBuy (buildings) for now.

It works by adding a crude control panel above the 'comments' section.

Depends on CookieMonster:
http://cookieclicker.wikia.com/wiki/Cookie_Monster_(JavaScript_Add-on)

To use the mod add a bookmark/paste this into console:

    javascript:(function() {
        Game.LoadMod('http://aktanusa.github.io/CookieMonster/CookieMonster.js');
        Game.LoadMod('https://cdn.rawgit.com/Pomlon/CookieCheater/master/cookieCheater.js');
    }());
