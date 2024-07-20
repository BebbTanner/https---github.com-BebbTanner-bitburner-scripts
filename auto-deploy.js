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

}