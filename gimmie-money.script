export async function main(ns){

    //Grab the target from the list of arguments that the game provides.
    var target = ns.args[0];
    //This is going to get the security level of the target. 
    //Then increase that security level by 5 for optimiaztion purposes.
    var securityThresh = ns.getServerMinSecurityLevel(target) + 5;
    //This command is going to get the max amount of money from the target.
    //Then it will only take 75 percent of what is listed.
    var moneyThresh = ns.getServerMaxMoney(target) * .75;

    //while loop
    while(true){
        //If the current seclvl is bigger than the sercurity threash.
        //Then it will weaken the security of the target.
        if(ns.getServerMinSecurityLevel(target) > securityThresh){
            await ns.weaken(target);
        }
        /*
        If the money in the target server is less than 75 percent of the money,
        it will simulate putting money back into the account. This is probably 
        to keep security low.
        */
        else if(ns.getServerMoneyAvaiable(target) < moneyThresh){
            await ns.grow(target);
        }
        /*
        If the other conditions are met, then this will hack the server
        and begin stealing money from it.
        */
        else{
            await ns.hack(target);
        }
    }
}