
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {
  "src/app/pages/home/home.component.ts": [
    {
      "path": "chunk-4GIEP2KX.js",
      "dynamicImport": false
    }
  ],
  "src/app/pages/case-studies/bladder-boss/bladder-boss.component.ts": [
    {
      "path": "chunk-COH3ZROA.js",
      "dynamicImport": false
    }
  ],
  "src/app/pages/case-studies/boardmatch/boardmatch.component.ts": [
    {
      "path": "chunk-53JNDROT.js",
      "dynamicImport": false
    }
  ],
  "src/app/pages/case-studies/avolta/avolta.component.ts": [
    {
      "path": "chunk-4QRB253U.js",
      "dynamicImport": false
    }
  ]
},
  assets: {
    'index.csr.html': {size: 14189, hash: '277b11dfb99684179ea6a588678b4ab8186f632c46270843bb6fe85380811342', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 9444, hash: '916cb7457fd99e5abbb94f219cd8d472060b507c3d7bc662e2a84e53a8c24523', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-EWF77DFC.css': {size: 312570, hash: 'ipcM5KgqqgY', text: () => import('./assets-chunks/styles-EWF77DFC_css.mjs').then(m => m.default)}
  },
};
