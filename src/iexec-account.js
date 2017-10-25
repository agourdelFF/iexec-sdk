#!/usr/bin/env node

const Debug = require('debug');
const cli = require('commander');
const account = require('./account');

const debug = Debug('iexec:iexec-account');

cli
  .option('--chain, --network [name]', 'network name', 'ropsten');

cli
  .command('login')
  .description('login into your iexec account')
  .action(() => account.login().catch(error => console.log(`"iexec account login" failed with ${error}`)));

cli
  .command('allow <amount>')
  .description('set the nRLC allowance on iexec account')
  .action(amount => account.allow(cli.network, amount).catch(error => console.log(`"iexec account credit" failed with ${error}`)));

cli
  .command('show')
  .description('show iexec account status')
  .action(() => account.show().catch(error => console.log(`"iexec account show" failed with ${error}`)));

cli.parse(process.argv);

debug('cli.args.length', cli.args.length);
if (cli.args.length === 0) cli.help();