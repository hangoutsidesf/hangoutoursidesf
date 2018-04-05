# hangoutsidesf [![CircleCI](https://circleci.com/gh/hangoutsidesf/hangoutsidesf/tree/development.svg?style=shield)](https://circleci.com/gh/hangoutsidesf/hangoutsidesf/tree/development) [![Coverage Status](https://coveralls.io/repos/github/hangoutsidesf/hangoutsidesf/badge.svg)](https://coveralls.io/github/hangoutsidesf/hangoutsidesf)

Hangoutsidesf is a application to find a San Francisco parklet. It has all the information you'd want at your fingertips. 

## The Team

#### Frontend
- [Justin Cruz](https://github.com/jcruzz)
- [Mike Hernandez](https://github.com/mikehern)
- [Angela Huang](https://github.com/angelahuang89)
- [Daniel London](https://github.com/unknowntheory)

#### Backend
- [Aric Alves](https://github.com/aricalves)
- [Lam Bui](https://github.com/lamdbui)
- [Andy Nguyen](https://github.com/andino93)

#### Analytics
- [Jackie Leung](https://github.com/jackieline)
- [Brendan Kelly]()

## Installation
- Clone down developement branch of [hangoutsidesf](https://github.com/hangoutsidesf/hangoutsidesf)
#### Dependencies
- Node 9+
- npm 
- MongoDB

#### Development
1. Ensure above dependencies are installed
2. Install project modules (`npm install`)
3. Copy and rename `.env-example` to `.env`
4. Fill in missing information in `.env`
5. Start develeopment environment (`npm run start:dev`)

#### Staging
To start a staging environment on your local machine, you can change your `NODE_ENV` to `staging` and the scripts will take care of the rest. 

```bash
$ NODE_ENV=staging node /path/to/server/index
```

#### Production
Similar to above, you can run a production like environment on your local machine by changing your `NODE_ENV` `production`. 

```bash
$ NODE_ENV=production node /path/to/server/index
```

#### Deployment
For deployment, we use Docker containers to for thier modularity and ease of use. You can more closely similate a staging or production environment by running your instances in Docker locally. This part of the proejct is in development and should be part of the `development`, `staging` and `deployment` branches soon. 

## Contributing
[Contributing Guidelines](CONTRIBUTING.md)

## StyleGuide
We adhere to the [AirBnB styleguide](https://github.com/airbnb/javascript). In addition, we also use `impoort` and `export` statements rather than CommonJS across the stack. 