install:
	npm ci

gendiff:
	node bin/gendiff.js -h

lint:
	npx eslint .
