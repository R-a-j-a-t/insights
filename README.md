# Insights

- Visualise a host of insights of an npm package in an easy to understand manner

- Steps to run the project:

  1. Create a clone of the repository:

     > git clone https://github.com/R-a-j-a-t/insights.git

  2. Change directory to /insights and fetch all dependencies:

     > npm install

  3. Get your API keys for safedep from https://platform.safedep.io and add the following exports to insights/secrets.js. (Creating insights/secrets.js is not mandatory if you are able to create .env file. However, in certain online sandboxes, it is not possible to create such a file)

     > export const SAFEDEP_API_KEY

     > export const SAFEDEP_TENANT_ID

  4. Run the project and explore some insights!

     > npm run dev
