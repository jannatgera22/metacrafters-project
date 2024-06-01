*/

// create a variable to hold your NFT's

var Nfts = []

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (name, age, accessory , nftAddress) {
    nftAddress = {
        "name": name,
        "age" : parseInt(age) ,
        "accessory": accessory,
        "address": nftAddress,
    }

    Nfts.push(nftAddress);
    
}
// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for(i = 0 ; i < Nfts.length ; i++){
        console.log("name " + Nfts[i]["name"],", age " + Nfts[i]["age"],", accessory " +Nfts[i]["accessory"],", address " +Nfts[i]["address"]  );
    }

}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("Total supplies:" + Nfts.length);

}
// call your functions below this line
mintNFT("chimpu",18,"banana","12ashd");
mintNFT("chinki",19,"Gun","49dashd");
console.log("Nfts metadata:")
listNFTs();
getTotalSupply();
