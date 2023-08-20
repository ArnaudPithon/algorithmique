NPM:=pnpm
HOST:=$(shell hostname)

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

push:
	@pwsafe -Epq clef.ssh.id@$(HOST) | xclip -i -loop 1
	git push

.PHONY: all init clean tags tests push docs
