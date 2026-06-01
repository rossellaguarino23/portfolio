
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {
  "src/app/pages/home/home.component.ts": [
    {
      "path": "chunk-6PNJ4UX7.js",
      "dynamicImport": false
    }
  ],
  "src/app/pages/case-studies/bladder-boss/bladder-boss.component.ts": [
    {
      "path": "chunk-5BKEXWSS.js",
      "dynamicImport": false
    },
    {
      "path": "chunk-YYY6ZTZI.js",
      "dynamicImport": false
    }
  ],
  "src/app/pages/case-studies/boardmatch/boardmatch.component.ts": [
    {
      "path": "chunk-KEHD4KW3.js",
      "dynamicImport": false
    }
  ],
  "src/app/pages/case-studies/avolta/avolta.component.ts": [
    {
      "path": "chunk-N24WSP6X.js",
      "dynamicImport": false
    }
  ],
  "src/app/pages/case-studies/taxeezy/taxeezy.component.ts": [
    {
      "path": "chunk-NTZ6SZWM.js",
      "dynamicImport": false
    },
    {
      "path": "chunk-YYY6ZTZI.js",
      "dynamicImport": false
    }
  ]
},
  assets: {
    'index.csr.html': {size: 7482, hash: '143064f8976777d1ec7cb7290ca323c35d3cd8e5754396b3a0c10bcde18ab808', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 2754, hash: '6ab1654e64321ecbdc690fa1c85ec94e85d6e4fdbeaaaaa3bbde06e2740f2c82', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-662477QQ.css': {size: 248250, hash: 'LC5nebXTXns', text: () => import('./assets-chunks/styles-662477QQ_css.mjs').then(m => m.default)}
  },
};
