const skynetNode = require('@skynetlabs/skynet-nodejs');
const skynetJS = require('skynet-js');

const chalk = require('chalk');

const server = 'https://siasky.dev';

const pushDirectoryToSkynet = async (path, nodeClient, server, routeRules) => {
  try {
    const { tryFiles, errorPages } = routeRules;
    console.log('tryFiles', tryFiles);
    console.log('errorPages:', errorPages);
    const response = await nodeClient.uploadDirectory(path, {
      portalUrl: server,
      tryFiles,
      errorPages,
    });
    return response;
  } catch (e) {
    console.error(e);
    return {};
  }
};

const routingPresets = {
  gatsby: {
    errorPages: { 404: '/404.html' },
    tryFiles: ['index.html', '/index.html'],
  },
  gatsbyStatic: {
    errorPages: { 404: '/404.html' },
    tryFiles: ['index.html'],
  },
  reactRouter: {
    tryFiles: ['index.html', '/index.html'],
  },
  traditional: {
    errorPages: { 404: '/404.html' },
    tryFiles: ['index.html'],
  },
};

const deploy = async (server, dir, routeRules) => {
  // Create clients for upload and resolver skylink.
  let nodeClient = new skynetNode.SkynetClient(server);
  let client = new skynetJS.SkynetClient(server);

  let path = './builds/' + dir;

  console.log(`🛰 Uploading ${path} to ${server}...`);

  let skylink = await pushDirectoryToSkynet(
    path,
    nodeClient,
    server,
    routeRules
  );
  let skylinkUrl = await client.getSkylinkUrl(skylink, { subdomain: true });

  if (!skylink) {
    console.log(`📡 App deployment failed`);
    return false;
  } else {
    console.log(`✅ App ${dir} deployed to:`);
    console.log(`skylink: ${chalk.magenta(skylink)}`);
    console.log(`url: ${chalk.green(skylinkUrl)}`);
    console.log(
      `metadata: ${chalk.cyan(
        server + '/skynet/metadata/' + skylink.slice(6, skylink.length)
      )}`
    );
  }
};

const dir = process.argv[2];
const presetName = process.argv[3] || 'traditional';
const routeRules = routingPresets[presetName];

deploy(server, dir, routeRules);
