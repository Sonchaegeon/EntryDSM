var fs = require('fs');
var scanf = require('scanf');

var account = {
    "username" : "",
    "id" : "",
    "password" : ""
};

console.log("1. login\n2. register");
var answer = scanf("%d");
if(answer === 1) login();
else if(answer === 2) register();
else console.log("only 1 or 2");
     


function login(){
    console.log("Please input your id: ");
    account.id = scanf('%s');
    console.log("Please input password: ");
    account.password = scanf('%s');
    fs.readFile('account.json', (err, data) => {
        if(err) console.log(err);
        let tmp = JSON.parse(data);
        
        if(tmp.id === account.id && tmp.password === account.password){
            rsp();
        }else{
            console.log("No Data");
        }
    });
}
function rsp(){
    console.log("1. Rock 2. Sissor 3. Paper");
    var playerInput = scanf("%d");
    var computerInput = getRandomInt(1, 3);

    if(playerInput === computerInput) { 
        console.log("Same!");
        rsp();
    }
    else if (playerInput === 1){
        if(computerInput === 3) console.log("Lose");
        else if(computerInput === 2) console.log("Win");
    }
    else if(playerInput === 2){
        if(computerInput === 1) console.log("Lose");
        else if(computerInput === 3) console.log("Win");
    }
    else{
        if(computerInput === 2) console.log("Lose");
        else if(computerInput === 1) console.log("Win");
    }
}

function register(){
    console.log("Please input your id: ");
    account.id = scanf('%s');
    console.log("Please input password: ");
    account.password = scanf('%s');
    console.log("Please input your username: ");
    account.username = scanf('%s');
    
    var accountStr = JSON.stringify(account);
    fs.writeFile("account.json", accountStr, function(err) {
        if(err) console.log(err);
    });
    console.log("Create account success");
}

function getRandomInt(min, max){
    return Math.floor(Math.random() * max) + min;
}
