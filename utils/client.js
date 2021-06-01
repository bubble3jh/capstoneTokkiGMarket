var Web3 = require ('web3')
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545")); 
var address = process.env.BLOCK_ADD;
var contract = new web3.eth.Contract([
	{
		"constant": true,
		"inputs": [],
		"name": "getName",
		"outputs": [
			{
				"name": "name",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_ip_address",
				"type": "string"
			}
		],
		"name": "Check_ip",
		"outputs": [
			{
				"name": "",
				"type": "int256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getIdentify",
		"outputs": [
			{
				"name": "identify",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "account",
				"type": "address"
			}
		],
		"name": "getData",
		"outputs": [
			{
				"name": "_name",
				"type": "string"
			},
			{
				"name": "_identify",
				"type": "string"
			},
			{
				"name": "_ip_address",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"name": "Own_admis",
		"outputs": [
			{
				"name": "alloReference",
				"type": "bool"
			},
			{
				"name": "BlockNo",
				"type": "uint256"
			},
			{
				"name": "allow_addr",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_identify",
				"type": "string"
			}
		],
		"name": "Add_already_identify",
		"outputs": [
			{
				"name": "",
				"type": "int256"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "identify",
				"type": "string"
			}
		],
		"name": "check_authentication",
		"outputs": [
			{
				"name": "",
				"type": "int256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_user_identify",
				"type": "string"
			}
		],
		"name": "setIdentify",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "identify",
				"type": "string"
			}
		],
		"name": "is_exist",
		"outputs": [
			{
				"name": "",
				"type": "int256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_user_name",
				"type": "string"
			},
			{
				"name": "_user_identify",
				"type": "string"
			},
			{
				"name": "_user_ip",
				"type": "string"
			}
		],
		"name": "setUser",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_ip_address",
				"type": "address"
			}
		],
		"name": "setAdmis",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_name",
				"type": "string"
			}
		],
		"name": "name_modify",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "check",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"name": "Own_User",
		"outputs": [
			{
				"name": "name",
				"type": "string"
			},
			{
				"name": "identify",
				"type": "string"
			},
			{
				"name": "addr",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_ip_address",
				"type": "string"
			}
		],
		"name": "Add_ip",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_user_ip",
				"type": "string"
			}
		],
		"name": "setIp",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "account",
				"type": "address"
			}
		],
		"name": "getName2",
		"outputs": [
			{
				"name": "name",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "get_account",
		"outputs": [
			{
				"name": "account",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_user_name",
				"type": "string"
			}
		],
		"name": "setName",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getIp",
		"outputs": [
			{
				"name": "ip",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_identify",
				"type": "string"
			}
		],
		"name": "Add_ko_identify",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "account",
				"type": "address"
			}
		],
		"name": "getIdentify2",
		"outputs": [
			{
				"name": "identify",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	}
],process.env.ADDRESS_ADD,{from : address});

var smart_function = {};

smart_function.get_account = async function(){
	
	//contract.methods.get_account().call({from : '0xd400f57d0C3A2958090965382BA570528a00b838'}).then(value => {
	//	console.log(value);})
	var account; 
	account = await contract.methods.get_account().call().then(value =>{
		//console.log(value.result);
		return value;
	});
	
	console.log(account);
	
	return account;
}
smart_function.getName = async function() {
	var n1 = await contract.methods.getName().call({from : address}).then(value =>{
		//console.log(value.result);
		return value;
	});
	//document.getElementById("n1").innerHTML=n1;
	console.log(n1);
	return n1;
}

smart_function.getNum = async function() {
	
	
	var num1 = await contract.methods.getIdentify().call({from : address}).then(value =>{
		//console.log(value.result);
		return value;
	});
	//document.getElementById("num1").innerHTML=num1;
	console.log(num1);
	return num1;
}

module.exports = {
    web3,
    smart_function
};