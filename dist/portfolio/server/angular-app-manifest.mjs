
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {
  "src/app/pages/home/home.component.ts": [
    {
      "path": "chunk-RP4PIYZQ.js",
      "dynamicImport": false
    }
  ],
  "src/app/pages/case-studies/bladder-boss/bladder-boss.component.ts": [
    {
      "path": "chunk-IBII5KXX.js",
      "dynamicImport": false
    }
  ],
  "src/app/pages/case-studies/boardmatch/boardmatch.component.ts": [
    {
      "path": "chunk-IS3EMGMX.js",
      "dynamicImport": false
    }
  ],
  "src/app/pages/case-studies/avolta/avolta.component.ts": [
    {
      "path": "chunk-BC7COHQ2.js",
      "dynamicImport": false
    }
  ]
},
  assets: {
    'index.csr.html': {size: 7462, hash: '635c044217f1cf20214fdb8607dfa0fa1f5a53f73b59ec70768eff59a45640bc', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 2754, hash: '0257191e4d575cebb03933b709a452433c302e4adc4f052dff30b50cc9bbe07b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-MYKLKJGO.css': {size: 242108, hash: 'RSYQjMwZM4o', text: () => import('./assets-chunks/styles-MYKLKJGO_css.mjs').then(m => m.default)}
  },
};
