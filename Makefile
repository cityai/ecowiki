# The Makefile defines all builds/tests steps

# include .env file
include .env

# compose command
COMPOSE?=docker-compose -f docker-compose.yml 

export HOST
export LEVEL

up:
	# run compose in background
	$(COMPOSE) up -d

build:
	# run compose in foreground
	$(COMPOSE) build

dev:
	# run compose in foreground
	$(COMPOSE) up

down:
	# shutdown compose
	#$(COMPOSE) down --remove-orphans
	$(COMPOSE) down

stop:
	# stop compose
	$(COMPOSE) stop

logs:
	# stop compose
	$(COMPOSE) logs --tail 50 -f
