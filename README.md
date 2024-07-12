# Install

```
yarn
cd packages/common-cosmos && yarn && yarn build && cd ..
cd types && yarn && yarn build && cd ..
cd testproj && yarn && yarn codegen && yarn build && cd ..
cd node && yarn 
cd docker && docker compose up -d && cd ..
yarn start

```
