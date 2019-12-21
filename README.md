Repro case for https://github.com/welldone-software/why-did-you-render/issues/77

**Repro Steps**

1. `git clone https://github.com/justingrant/repro-why-render-hooks` (this is a just-created CRA app with non-essential files removed and only one dependency added: `@welldone-sofwtare/why-did-you-render`)
2. `cd repro-why-render-hooks`
3. `npm i`
4. `npm start`
5. open http://localhost:3000 in Chrome
6. right-click + Inspect to open dev tools
7. select the ⚛ Profiler tab
8. click the "Reload and start profiling" button (it looks like a little refresh icon)
9. click on the `Repro` component in the Flamegraph view

Expected: no crash

Actual: crash! `TypeError: Cannot read property 'push' of undefined` inside React Dev Tools
