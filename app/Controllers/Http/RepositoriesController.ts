'use strict';
import auth from 'Config/github';
import { Octokit } from '@octokit/rest';

class GithubController {
  public async getRepos({ response }) {
    try {
      const { token } = await auth({ type: 'installation' });

      const octokit = new Octokit({ auth: `token ${token}` });

      const { data } = await octokit.repos.listForAuthenticatedUser({
        visibility: 'private',
      });

      return response.status(200).json(data);
    } catch (error) {
      console.error(error);
      return response.status(error.status).json({ error: error.response.data.message });
    }
  }
}

module.exports = GithubController;
function use(arg0: string) {
  throw new Error('Function not implemented.');
}
