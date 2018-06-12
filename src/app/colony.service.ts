import { Injectable } from "@angular/core";
import { ColonyClient } from "./colony-client.interface";

declare function require(moduleName: string): any;

const ethers = require("ethers");
const { default: EthersAdapter } = require("@colony/colony-js-adapter-ethers");
const { TrufflepigLoader } = require("@colony/colony-js-contract-loader-http");
const { default: ColonyNetworkClient } = require("@colony/colony-js-client");

@Injectable({
  providedIn: "root",
})
export class ColonyService {
  private colonyClient: ColonyClient;

  constructor() {
    this.getColonyClient().then(colonyClient => (this.colonyClient = colonyClient));
  }

  async newProject() {
    const { localSkillId } = await this.colonyClient.getDomain.call({ domainId: 1 });
    const result = await this.colonyClient.addDomain.send({ parentSkillId: localSkillId });
    return result;
  }

  private getColonyClient() {
    const asyncResult = async () => {
      const loader = new TrufflepigLoader();
      const provider = new ethers.providers.JsonRpcProvider("http://localhost:8545/");
      const { privateKey } = await loader.getAccount(0);
      const wallet = new ethers.Wallet(privateKey, provider);
      const adapter = new EthersAdapter({
        loader,
        provider,
        wallet,
      });
      const networkClient = new ColonyNetworkClient({ adapter });
      await networkClient.init();
      return networkClient.getColonyClient(1) as Promise<ColonyClient>;
    };
    return asyncResult();
  }
}
