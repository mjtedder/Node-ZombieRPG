// Dependencies
let fs = require('fs')
let inquirer = require('inquirer')

// set global variables & starting HP
let minHP = 20
let maxHP = 40
let playerHP = Math.floor(Math.random()*(maxHP - minHP +1))+minHP
let zombieHP = Math.floor(Math.random()*(maxHP - minHP +1))+minHP
console.log('======================================================')
console.log('***RESIDENT EVIL NODE***' + '\n')
console.log('Leon S. Kennedy HP: ' + playerHP + '\n' + 'Mr. X HP: ' + zombieHP)
console.log('======================================================')

// function for calculating damage

function rollDamage(){
let attack = Math.floor(Math.random()* 5+1)
let zombieAttack = Math.floor(Math.random() * 5+1)
startGame(attack, zombieAttack)
}

//function for start game - use inquirer
//function startGame(attack, zombieAttack) {
    //let questions = [

    //]
//}




