# Repro

> Repro to issue: https://github.com/ionic-team/stencil/issues/2954

1. clone repository: https://github.com/JulianLang/stencil-bug-lifecycle-hooks.git
2. `npm install`
3. `npm start`
4. goto `http://localhost:3333/`
5. hit `F12` to open dev tools
6. see console output
7. reload page several times and see sporadic changes in console output order
8. go to the code `components/toggle-group` and `components/toggle-button` and play around with the life-cycle hooks (comment / uncomment)

**Note:** I figured that having many `console.log`s activated it makes it more likely that the order in console will change in fewer page reloads.
