pragma solidity 0.8.11;

contract VotingGame{
    address public owner;
    uint poolA;
    uint poolB;
    address payable[] a;
    address payable[] b;
    uint[] private valuesA;
    uint[] private valuesB;
    
    constructor(){
        owner=msg.sender;
        poolA=0;
        poolB=0;
    }

    function getBalance() public returns (uint){
        return address(this).balance;
    }

    function getMoneyInPoolA() public returns(uint){
        return poolA;
    }

    function getMoneyInPoolB() public returns(uint){
        return poolB;
    }

    //decrease the user's money by amount and increase ours. 
    //can't use private?
    //I wrote it like what I found online, but I don't how how the user was able to enter the value
    function putInA() public payable{
        require(msg.sender!=owner);
        require(msg.value>.01 ether, "You must put in at least .01 ether to enter.");
        poolA+=msg.value;
        a.push(payable(msg.sender));
        valuesA.push(msg.value);
    }
    
    //same function for B
    function putInB() public payable{
        require(msg.sender!=owner);
        require(msg.value>.01 ether, "You must put in at least .01 ether to enter.");
        poolB+=msg.value;
        b.push(payable(msg.sender));
        valuesB.push(msg.value);
    }
    
    //gives the winner back their money doubled
    function giveBack() public {
        require(msg.sender==owner);
        if (getMoneyInPoolA()>getMoneyInPoolB()){
            for (uint i=0;i<b.length;i++){
                b[i].transfer(2*valuesB[i]);
            }
        }
        else{
            for (uint i=0;i<a.length;i++){
                a[i].transfer(2*valuesA[i]);
            }
        }
        //renew for new round
        a=new address payable[](0);
        b=new address payable[](0);
        valuesA=new uint[](0);
        valuesA=new uint[](0);
        poolA=0;
        poolB=0;
    }
}
