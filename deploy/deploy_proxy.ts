import { ethers } from 'hardhat'
import { OwnedUpgradeabilityProxy__factory } from '../build/types'




async function main() {
    const e = ethers.providers.getDefaultProvider()
    debugger
    const [account] = await ethers.getSigners()
    const t = new OwnedUpgradeabilityProxy__factory(account);
    const x = await t.deploy();
    await x.deployed();
    return x
}



main().then((r) => {
    console.log('registry_proxy:'+r.address)
})