
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {
  "src/app/pages/home/home.component.ts": [
    {
      "path": "chunk-CDIK3NDI.js",
      "dynamicImport": false
    }
  ],
  "src/app/pages/case-studies/bladder-boss/bladder-boss.component.ts": [
    {
      "path": "chunk-B7DIOSQE.js",
      "dynamicImport": false
    },
    {
      "path": "chunk-LLFRSPWG.js",
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
      "path": "chunk-TQMPFLGD.js",
      "dynamicImport": false
    }
  ],
  "src/app/pages/case-studies/taxeezy/taxeezy.component.ts": [
    {
      "path": "chunk-KTCYUUYA.js",
      "dynamicImport": false
    },
    {
      "path": "chunk-LLFRSPWG.js",
      "dynamicImport": false
    }
  ]
},
  assets: {
    'index.csr.html': {size: 7914, hash: '89730138c90c14afa9003b4bdabba55cf4ea8326f28c9ddf5cef4b78e454f59b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 3186, hash: 'ce72dbb72f8e4e3affbe112c7bb954baf9fbd78eeb1a82348a10e88941968b55', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-PYP76347.css': {size: 248732, hash: 'd13kFrjGcHs', text: () => import('./assets-chunks/styles-PYP76347_css.mjs').then(m => m.default)}
  },
};
