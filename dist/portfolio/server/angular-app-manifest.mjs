
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {
  "src/app/pages/home/home.component.ts": [
    {
      "path": "chunk-AXUZXYL2.js",
      "dynamicImport": false
    }
  ],
  "src/app/pages/case-studies/bladder-boss/bladder-boss.component.ts": [
    {
      "path": "chunk-ETP4W7N7.js",
      "dynamicImport": false
    }
  ],
  "src/app/pages/case-studies/boardmatch/boardmatch.component.ts": [
    {
      "path": "chunk-KWJEQABI.js",
      "dynamicImport": false
    }
  ],
  "src/app/pages/case-studies/avolta/avolta.component.ts": [
    {
      "path": "chunk-LRTAOWGO.js",
      "dynamicImport": false
    }
  ]
},
  assets: {
    'index.csr.html': {size: 14145, hash: '986bc4f873336d9c4d37537bf0f7e8ebc8c10288f9e7a3944caaac62148e513a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 9733, hash: '8f8e53177ee87a633c1696fa7f45e890e58c737ade4fff4728999a52256f400a', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-VXE6H5FB.css': {size: 236647, hash: 'l4Iy6pLpx5E', text: () => import('./assets-chunks/styles-VXE6H5FB_css.mjs').then(m => m.default)}
  },
};
