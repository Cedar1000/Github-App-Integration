import { createAppAuth } from '@octokit/auth-app';
const fs = require('fs');

const path = require('path');
const filePath = path.join(__dirname, 'mykey.pem');
const myKey = fs.readFileSync(filePath, 'utf8').trim();

const auth = createAppAuth({
  appId: process.env.GITHUB_APP_ID!,
  privateKey: myKey,
  installationId: process.env.GITHUB_INSTALLATION_ID,
});

export default auth;
