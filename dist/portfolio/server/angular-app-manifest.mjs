
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {
  "src/app/pages/home/home.component.ts": [
    {
      "path": "chunk-GSPBX54O.js",
      "dynamicImport": false
    }
  ],
  "src/app/pages/case-studies/bladder-boss/bladder-boss.component.ts": [
    {
      "path": "chunk-ZJA6UYXF.js",
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
      "path": "chunk-N24WSP6X.js",
      "dynamicImport": false
    }
  ],
  "src/app/pages/case-studies/taxeezy/taxeezy.component.ts": [
    {
      "path": "chunk-JIANXRWI.js",
      "dynamicImport": false
    },
    {
      "path": "chunk-LLFRSPWG.js",
      "dynamicImport": false
    }
  ]
},
  assets: {
    'index.csr.html': {size: 7482, hash: 'c200764cfaebe5bcb2be2631827cee420fc95b782f6ba98b6c9e73d99bfb2a64', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 2754, hash: '22d49af3f3083cbca8b791fae7f8276001b5989665b7af2918b0ed2e8e8abb8d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-KIYXCZCC.css': {size: 248222, hash: 'eMss7/WwhtA', text: () => import('./assets-chunks/styles-KIYXCZCC_css.mjs').then(m => m.default)}
  },
};
