// var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));



var address = "0xe65DeCBEe3C1340Bfd4B1DbCF2E3247580ebD662"
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
],'0xE15d0Bef487d5B80E704884A0FD205F05b7F6d46',{from : address});

var smart_function = {};

function test(){
	var p = ip();
	console.log(p);

   const residentnum = document.getElementById('residentnum').value;
   console.log(residentnum);
   const residentnum2= document.getElementById('residentnum2').value;
   console.log(residentnum2);
   const name1 = document.getElementById('name1').value;
   console.log(name1);
   res = residentnum +'-'+ residentnum2;
   console.log(res);
	contract.methods.setName(name1).send({from : '0xd400f57d0C3A2958090965382BA570528a00b838'},function(e,r){console.log(r);});
	contract.methods.setIdentify(res).send({from : '0xd400f57d0C3A2958090965382BA570528a00b838'},function(e,r){console.log(r);});
	contract.methods.setIp(p).send({from : '0xd400f57d0C3A2958090965382BA570528a00b838'},function(e,r){console.log(r);});

}
function test4(){
	var p = ip();
	console.log(p);
	contract.methods.getName().call({from : '0x25C925B9Fa05Dd6E1885890f548911B9159Bd135'}).then(console.log);
	contract.methods.getIdentify().call({from : '0x25C925B9Fa05Dd6E1885890f548911B9159Bd135'}).then(console.log);
	contract.methods.getIp().call({from : '0x25C925B9Fa05Dd6E1885890f548911B9159Bd135'}).then(console.log);
	contract.methods.Check_ip(p).call({from : '0x25C925B9Fa05Dd6E1885890f548911B9159Bd135'}).then(console.log);
}

function test2(){
	var p = ip();
	console.log(p);
	console.log(typeof(p));
	/*contract.methods.setUser1("jiwon","000000-000000",p).call().then(value=>{
		console.log(value); })
	
	contract.methods.getdata().call().then(console.log);
	contract.methods.Check_ip(p).call().then(value=>{
		console.log(value); })*/
	contract.methods.check_authentication("res").call().then(value => {
			console.log(value);})
	contract.methods.testin("jiwon").call();
	contract.methods.testout().call().then(console.log);

}

function test3(){
	 const residentnum = document.getElementById('residentnum').value;
	 console.log(residentnum);
	 const residentnum2= document.getElementById('residentnum2').value;
	 console.log(residentnum2);
	 const name1 = document.getElementById('name1').value;
	 console.log(name1);
	 res = residentnum + '-' + residentnum2;
	 console.log(res);
	 contract.methods.check_authentication(res).call().then(value => {
	console.log(value);
	 if(value ==1)
	 contract.methods.is_exist(res).call().then(value => {console.log(value);})
	 alert("회원가입 가능합니다.");
	 });
	 //contract.methods.setUser("jiwon","000000-0000000","0000.0000").call();
	 
}
function check_identify(){
	 var p = ip();
	 console.log(p);

	const residentnum = document.getElementById('residentnum').value;
	console.log(residentnum);
	const residentnum2= document.getElementById('residentnum2').value;
	console.log(residentnum2);
	const name1 = document.getElementById('name1').value;
	console.log(name1);
    res = residentnum +'-'+ residentnum2;
    console.log(res)
    contract.methods.check_authentication(res).call().then(value => {
        console.log(value);
		if(value==1){
            contract.methods.is_exist(res).call().then(value =>{
                if(value==2){
                    console.log(value);
					contract.methods.setName(name1).send({from : address},function(e,r){
						console.log(e);
						console.log(r);
					});
					contract.methods.setIdentify(res).send({from : address},function(e,r){
						console.log(e)
						console.log(r);
					});
					contract.methods.setIp(p).send({from : address},function(e,r){
						console.log(e)
						console.log(r);
					});
                    alert("회원가입 가능합니다.");
					location.href ="/users/new";
                }
                else if(value ==3){
                    console.log(value);
                    alert("이미 가입된 계정입니다."); // 이미 등록된 주민번호
					location.reload();
                }
        })
            // 신원인증 성공 false면 신원인증 X
            }
        else{
            alert("등록되지 않은 주민등록번호입니다.");
			location.reload();

        }
    });
}

function getData(){
	contract.methods.getName().call({from : address}).then(console.log);
	contract.methods.getIdentify().call({from : address}).then(console.log);
	contract.methods.getIp().call({from : address}).then(console.log);
}

async function getName(){
	var n1 = await contract.methods.getName().call({from : address}).then(value =>{
		//console.log(value.result);
		return value;
	});
	document.getElementById("n1").innerHTML=n1;
	var num1 = await contract.methods.getIdentify().call({from : address}).then(value =>{
		//console.log(value.result);
		return value;
	});
	document.getElementById("num1").innerHTML=num1;
}

function getData2(){
	//account = '0x9bde6e856a3E382F6863fa0798394E2540682964'
	contract.methods.getName2('0x9bde6e856a3E382F6863fa0798394E2540682964').call({from : address}).then(console.log);
	contract.methods.getIdentify2('0x9bde6e856a3E382F6863fa0798394E2540682964').call({from : address}).then(console.log);
	contract.methods.getName().call({from : address}).then(console.log);
	contract.methods.getIdentify().call({from : address}).then(console.log);
} // 신고하기

function check_login(){
	var p = ip();
	console.log(p);
	contract.methods.Check_ip(p).call().then(value => {
	console.log(value);
	if(value == 0){
		alert("새로운 ip계정입니다. 다시 본인 인증을 하세요 ");
		location.reload();
	}
				}
		)
}

async function get_account(){
	
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

function add_ip(){
	var p = ip();
	console.log(p);

   const residentnum = document.getElementById('residentnum').value;
   console.log(residentnum);
   const residentnum2= document.getElementById('residentnum2').value;
   console.log(residentnum2);
   res = residentnum +'-'+ residentnum2;
    console.log(res);
	contract.methods.is_exist(res).call().then(value =>{
		if(value==2){
			alert("신원 인증을 먼저 진행하세요.");
			location.href ="/users/identity";
		}
		else if(value ==3){
			console.log(value);
			contract.methods.Add_ip(p).send({from : address },function(e,r){console.log(r);});
			alert("새로운 ip를 추가하였습니다."); 
		}
})
}
