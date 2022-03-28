import { ethers } from 'hardhat'
import { isHexString, keccak256 } from 'ethers/lib/utils'
import { AvalancheTokenController__factory, AvalancheTrueUSD__factory } from 'build/types'

async function main() {

    debugger

    // 部署tokencontroller
   const tokencontroller = deploy_tokencontroller()
   const tokencontrollerAddress=(await tokencontroller).address

   console.log('tokencontrollerAddress:'+tokencontrollerAddress)

   //部署tusd
   const tusd = deploy_tusd()
   const tusdAddress=(await tusd).address
   console.log('tusdAddress:'+tusdAddress)

   return tokencontrollerAddress+'->deploy success!'
}


async function deploy_tokencontroller() {
    const e = ethers.providers.getDefaultProvider()
    debugger
    const [account] = await ethers.getSigners()
    const t = new AvalancheTokenController__factory(account);
    const x = await t.deploy();
    await x.deployed();
    return x
}


async function deploy_tusd() {
    const e = ethers.providers.getDefaultProvider()
    debugger
    const [account] = await ethers.getSigners()
    const t = new AvalancheTrueUSD__factory(account);
    const x = await t.deploy();
    await x.deployed();
    return x
}



main().then((r) => {
    console.log(r)
})