NPM=pnpm

all: tests


package.json:
	$(NPM) init

init: package.json
	$(NPM) install

clean:
	rm tags

tags:
	ctags -R exercices

tests:
	$(NPM) run test
