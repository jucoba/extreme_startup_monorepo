# ExtremeStartupMonorepo


# To deploy on aws
1. configure aws CLI and loguin to you accoun
2. install dependencies npm i
3. Deploy de lambda function
    cd extreeme_startup_node_player
    configure serverless.yml with you org name  (see serverless getting start)
    sls deploy

To redeploy function

sls deploy function -f player1 (Or you function name in serverless.yml)

## Run tasks

To run the dev server locally for your app, use:

```sh
npx nx serve extreme_startup_node_player
```

To create a production bundle:

```sh
npx nx build extreme_startup_node_player
```


