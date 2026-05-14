
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {
  "src/app/pages/home/home.component.ts": [
    {
      "path": "chunk-XCBGNHSP.js",
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
    'index.csr.html': {size: 7462, hash: 'e40853d1ec5c4008aa6854da9b9cefa43098b176b93b31837bc951983e48ae0c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 2754, hash: '31f10594e0b313e6e439b1a714e0148cb8c6b9521571d1f1a1fc3d49fcb53f48', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-MYKLKJGO.css': {size: 242108, hash: 'RSYQjMwZM4o', text: () => import('./assets-chunks/styles-MYKLKJGO_css.mjs').then(m => m.default)}
  },
};
