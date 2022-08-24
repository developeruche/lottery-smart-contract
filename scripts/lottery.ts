import { ethers, upgrades } from "hardhat";

async function main() {
  const Lottery = await ethers.getContractFactory("Lottery");
  console.log("deploying proxy, admin proxy, implementation contract.....");
  
  const lottery = await upgrades.deployProxy(Lottery, [0]);

  await lottery.deployed();

  console.log("this is an address",lottery.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});