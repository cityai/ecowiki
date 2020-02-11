# Ecosystem Wiki

## Installation

Evythings is controlled using rules defined in Makefile

* To launch dockers in daemon mode use:

```
make up
```

* To launch dockers in foreground mode use:

```
make dev
```

* To stop dockers without removing containers and volumes (Database will not be deleted):

```
make stop
```

* To stop dockers with removing all containers and volumes (Database will be deleted):

```
make down
```

## Config

* Environmental variables are defined in `.env` file. A dummy `.env` file is provided to list the required environmental variables (`.env_dist`).

* In ecowiki-api folder you need to add .env file also. For instructions see readme file in that folder!

## Requirements

```
git
docker
docker-compose
```

## Updating project

* When updating project on server you need to do following
1. Log in into server
2. Navigate to ecowiki/ecowiki (run command ``` cd ecowiki/ecowiki ```)
3. Run ``` make stop ```
4. Run ``` git pull ```
5. Run ``` make build ```
6. Run ``` make up ```
* Now wait few seconds and website should work if there are no errors in an update!
