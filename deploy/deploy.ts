import { ethers } from 'hardhat'
import { isHexString, keccak256 } from 'ethers/lib/utils'
import { Registry__factory, TokenController__factory, TrueUSD__factory } from '../build/types'

async function main() {

    debugger
   

    // 部署tokencontroller
    const tokencontroller = deploy_tokencontroller()
   const tokencontrollerAddress=(await tokencontroller).address

   const tokencontrollerAddressPosition= keccak256(tokencontrollerAddress)
   console.log('tokencontrollerAddressPosition:'+tokencontrollerAddressPosition)

   //部署tusd
   const tusd = deploy_tusd()
   const tusdAddress=(await tusd).address

   const tusdAddressPosition= keccak256(tusdAddress)
   console.log('tusdAddressPosition:'+tusdAddressPosition)

   //部署registry
   const registry = deploy_registry()
   const registryAddress=(await registry).address
   const registryProxyOwnerPosition= keccak256(registryAddress)
   console.log('registryProxyOwnerPosition:'+registryProxyOwnerPosition)

    //获取owner的position
    const ownerAddressPosition=keccak256('0x8985c02378aee7c805d71433b9131678d2a3582c')

    console.log('ownerAddressPosition:'+ownerAddressPosition)

   const result = '{"registryAddress":"'+registryAddress+'","registryProxyOwnerPosition":"'
                    +registryProxyOwnerPosition+'","tokencontrollerAddress":"'
                    +"tokencontrollerAddress"+'","tokencontrollerAddressPosition":"'
                    +"tokencontrollerAddressPosition"+'","tusdAddress":"'
                    +tusdAddress+'","tusdAddressPosition":"'
                    +tusdAddressPosition+'","ownerAddressPosition":"'
                    +ownerAddressPosition+'" }'

   return result+'->deploy success!'
}


async function deploy_registry() {
    const e = ethers.providers.getDefaultProvider()
    const [account] = await ethers.getSigners()
    const t = new Registry__factory(account);
    const x = await t.deploy();
    await x.deployed();
    return x

}

async function deploy_tokencontroller() {
    const e = ethers.providers.getDefaultProvider()
    debugger
    const [account] = await ethers.getSigners()
    const t = new TokenController__factory(account);
    const x = await t.deploy();
    await x.deployed();
    return x
}


async function deploy_tusd() {
    const e = ethers.providers.getDefaultProvider()
    debugger
    const [account] = await ethers.getSigners()
    const t = new TrueUSD__factory(account);
    const x = await t.deploy();
    await x.deployed();
    return x
}



main().then((r) => {
    console.log(r)
})