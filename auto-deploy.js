//Currently, I am not too sure as to what all of this does. I am learning it as I go.
export async function main(ns){
    //This is setting up the specified target.
    var target = ns.args[0];
    //This is setting up the home server.
    var homeServer = 'home';
    //This is a list of exe files that are avaiable in the game. 
    var cracks = {
        'BruteSSH.exe': ns.brutessh,
        'FTPCrack.exe': ns.ftpcrack,
        'relaySMTP.exe': ns.relaysmtp,
        'HTTPWorm.exe': ns.httpworm,
        'SQLInject.exe': ns.sqlinject
    };

    /*
    This is the virus variable that will deploy the 
    gimmime money script that I programmed earlier.
    */
    var virus = "gimmie-money.js"
    /*
    This variable is going to get the avaible ram
    for the virus variable that is defined up above.
    */
    var virusRam = ns.getScriptRam(virus);

    /*
    I setup the funcution the way that it is presented.
    But it is throwing errors and I do not know why.
     */
    function getNumCracks(){
        return Object.keys(cracks).filter(funciton(file){
            return ns.fileExists(file, homeServer);
        }).length;
    }

}