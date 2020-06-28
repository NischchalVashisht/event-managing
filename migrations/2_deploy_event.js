let event = artifact.require("./Event.sol");

module.exports =async function(deployer){
    await deployer.deploy(Event);
}
