let event = artifact.require('./Event');

module.exports =async function(deployer){
    await deployer.deploy(Event);
}
