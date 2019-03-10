# The Makefile defines all builds/tests steps

# include .env file
include .env

# compose command
COMPOSE?=docker-compose -f docker-compose.yml 

up:
	# run compose in background
	$(COMPOSE) up -d

dev:
	# run compose in foreground
	$(COMPOSE) up

down:
	# stop compose
	#$(COMPOSE) down --remove-orphans
	$(COMPOSE) down
