NPM=pnpm

all: tests


package.json:
	$(NPM) init

init: package.json
	$(NPM) install -D

clean:
	rm -R docs/

tags:
	ctags -R exercices

tests:
	$(NPM) run test

docs:
	$(NPM) run generate-docs

.PHONY: all init clean tags tests
