require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/8z2W7Ic5hEiog8noMyvZriyCHHOrg1kT',
      accounts: ['c3355e201e0ea064a2e40f1c0e7641394f2ba5d9a8b1bc8510139292b60cbbc2'],
    },
  },
};