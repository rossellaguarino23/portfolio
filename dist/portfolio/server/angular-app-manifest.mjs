
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {
  "src/app/pages/home/home.component.ts": [
    {
      "path": "chunk-POLDZDDF.js",
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
    'index.csr.html': {size: 7482, hash: 'd0332679101644388af01e4f83da4af05043d8a2e271c48cb35640c14af5a24e', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 2754, hash: '404ac411c478220420c4cdbf45806d6b3c4b9d1580af26b55698ec75e365e824', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-662477QQ.css': {size: 248250, hash: 'LC5nebXTXns', text: () => import('./assets-chunks/styles-662477QQ_css.mjs').then(m => m.default)}
  },
};
