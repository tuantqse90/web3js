var Web3 = require('web3')
let url = 'https://mainnet.infura.io/v3/be624c8138b44160962e4f20e3cfdf69'
var web3 = new Web3(url)
var address = '0xfE6Fd1C97EB421e4A29E4CA8AAe078111D948105'

web3.eth.getBalance(address,(err,bal)=>{
    balance = bal
    console.log(web3.utils.fromWei(balance, 'ether'))
 
})
