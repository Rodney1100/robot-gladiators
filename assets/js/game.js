var playerName = window.prompt("What is your robots name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
    var promptFight = window.prompt(
        "Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose."
    );
    console.log(promptFight);
    if (promptFight === "Fight" || promptFight === "fight") {
        window.alert("Welcome to Robot Gladiators! " + playerName);
        //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
        enemyHealth = enemyHealth - playerAttack;
        // Log a resulting message to the console so we know that it worked.
        console.log(
            playerName +
            " attacked " +
            enemyName +
            ". " +
            enemyName +
            " now has " +
            enemyHealth +
            " health remaining."
        );
        if (playerHealth > 0) {
            window.alert(playerName + " you are still alive!");
        } else {
            playerName + " you are dead";
        }

        // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
        playerHealth = playerHealth - enemyAttack;
        //check players health

        // Log a resulting message to the console so we know that it worked.//

        console.log(
            enemyName +
            " attacked " +
            playerName +
            ". " +
            playerName +
            " now has " +
            playerHealth +
            " health remaining."
        );
        //check players health
        if (enemyHealth > 0) {
            window.alert(enemyName + " you are still alive!");
        } else {
            enemyName + " you are dead";
        }
    } else if (promptFight === "skip" || promptFight === "SKIP") {
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");
        if (confirmSkip) {
            window.alert(
                playerName + " has decided to skip this fight. Goodbye!"
            );
            // subtract money from playerMoney for skipping      
            playerMoney = playerMoney - 2;
        } else { fight() }
    } else {
        window.alert("you have entered the wrong answer");
        fight();
    }
}
fight();