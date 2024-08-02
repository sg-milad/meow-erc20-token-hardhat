import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const MeowModule = buildModule("Meow", (m) => {
  const _INITIAL_SUPPLY = "10000000000000000000000"

  const INITIAL_SUPPLY = m.getParameter("initSupply", _INITIAL_SUPPLY);
  const Meow = m.contract("Meow", [INITIAL_SUPPLY]);
  console.log("contract deployed successfully");
  return { Meow };
});

export default MeowModule;
