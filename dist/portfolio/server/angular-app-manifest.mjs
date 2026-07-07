
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
    'index.csr.html': {size: 7914, hash: '6304706657f8bc5b2796fd0fe79310f98f5786f2233b1056b0e47b9b38c56052', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 3186, hash: '84f73e7c8212c2b79bb88ab963d738181cc76a4eda0d7f9c1b6a9d7c2fc3855e', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-PYP76347.css': {size: 248732, hash: 'd13kFrjGcHs', text: () => import('./assets-chunks/styles-PYP76347_css.mjs').then(m => m.default)}
  },
};
