
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {
  "src/app/pages/home/home.component.ts": [
    {
      "path": "chunk-NHCVG2WI.js",
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
    'index.csr.html': {size: 7482, hash: '7d7563ee1f9f4b0f21e9f9138b37cdeb41cf500d194ee72efddcebb93c97f17d', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 2754, hash: 'f6909f7a707ddd83d6c656b10fff09fc1327f555934dbbf226f447ccecbc9b47', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-AKN24RPU.css': {size: 248267, hash: 'Cp74D8Bc4DI', text: () => import('./assets-chunks/styles-AKN24RPU_css.mjs').then(m => m.default)}
  },
};
