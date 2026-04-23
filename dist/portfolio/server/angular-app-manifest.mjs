
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {
  "src/app/pages/home/home.component.ts": [
    {
      "path": "chunk-RV77PKLL.js",
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
    'index.csr.html': {size: 14434, hash: '172984e520f529e9ad3c092cec671799182b0422d41fae777a5e52baa18630d1', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 9444, hash: '51181218cef49f2327dbcc0b666688e7dc3deea2a853fc64f3a42b06993209d3', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-O44DCDMJ.css': {size: 316132, hash: 'Ktuq0n1QjGY', text: () => import('./assets-chunks/styles-O44DCDMJ_css.mjs').then(m => m.default)}
  },
};
