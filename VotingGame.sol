pragma solidity 0.8.11;

contract VotingGame{
    address public owner;
    mapping (address => uint) public Balances;
    uint poolA;
    uint poolB;
    address[] a;
    address[] b;
    uint[] increAmountA;
    uint[] increAmountB;
    
    constructor(){
        owner=msg.sender;
        Balances[address(this)]=0;
        choiceA=0;
        choiceB=0;
    }

    function getBalance() public view returns (uint){
        return Balances[address(this)];
    }

    function getMoneyInPoolA() returns(uint){
        return poolA;
    }

    function getMoneyInPoolB() returns(uint){
        return poolB;
    }

    //decrease the user's money by amount and increase ours. 
    //can't use private?
    function putInA(uint amount) public payable{
        poolA+=amount;
        Balances[address(this)]+=amount;
        Balances[msg.sender]-=amount;
    }
    //same function for B

    //gives the winner back their money doubled
    function giveBack(uint amount) public payable{

    }

}
