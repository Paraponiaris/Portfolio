
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/about"
  },
  {
    "renderMode": 2,
    "route": "/skills"
  },
  {
    "renderMode": 2,
    "route": "/work"
  },
  {
    "renderMode": 2,
    "route": "/work/codepulse"
  },
  {
    "renderMode": 2,
    "route": "/work/andrew-complainer"
  },
  {
    "renderMode": 2,
    "route": "/work/ef-derma"
  },
  {
    "renderMode": 2,
    "route": "/work/exchange-subs"
  },
  {
    "renderMode": 2,
    "route": "/work/todo-list"
  },
  {
    "renderMode": 2,
    "route": "/work/digital-tuner"
  },
  {
    "renderMode": 2,
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "redirectTo": "/",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 6339, hash: '5ddf0da1d24e0c50eef8877cbebfe436fd3540422610d378a80b6fee884165aa', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1352, hash: '93c98e890deb7eb690a837ff631884cc60a518b9c201346c8a7ad2f51a81b0b9', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 10470, hash: '3efcd2e2704799238d3c5ef1520c35c39d102278eff818a4b6877b0d4cbc133e', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'work/index.html': {size: 14181, hash: '8c73ad2d07954daa9da66126e173121628075ee6b30dbd70dcaed39f05f8e315', text: () => import('./assets-chunks/work_index_html.mjs').then(m => m.default)},
    'work/codepulse/index.html': {size: 15291, hash: 'd16f3bab04a00008aad85ed06782a194c872ff472fb0dad4ca71e19f635c8b8a', text: () => import('./assets-chunks/work_codepulse_index_html.mjs').then(m => m.default)},
    'work/andrew-complainer/index.html': {size: 9819, hash: 'dc855fe2ceb03f0e552229d6a0de871523169e20ad3e6f4a586b3fe07a6dada7', text: () => import('./assets-chunks/work_andrew-complainer_index_html.mjs').then(m => m.default)},
    'work/ef-derma/index.html': {size: 10332, hash: 'cb16485c5a57a61d5f9c76fecc48fce6470dfbd7aadae9187b320a1d6b665029', text: () => import('./assets-chunks/work_ef-derma_index_html.mjs').then(m => m.default)},
    'skills/index.html': {size: 10496, hash: '7eb72da193f76dd6b6398c5d3f8f8b7cc48f4c76c6a7a2d50bdceb8a55229e12', text: () => import('./assets-chunks/skills_index_html.mjs').then(m => m.default)},
    'index.html': {size: 19977, hash: 'd47aaef64ac3367bcba91b6ee17ae7c7d4ce51899bacea9d4f474af7417cf009', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'work/todo-list/index.html': {size: 9545, hash: 'fd0be360e8c3bba4678702b251cf07191c12b6a77021ab44092b3fba1793c273', text: () => import('./assets-chunks/work_todo-list_index_html.mjs').then(m => m.default)},
    'work/exchange-subs/index.html': {size: 11715, hash: 'fe44ee593c4cafa0f7046cf0a2e3db779f040ae37eba545de3368e704fbcd652', text: () => import('./assets-chunks/work_exchange-subs_index_html.mjs').then(m => m.default)},
    'work/digital-tuner/index.html': {size: 16975, hash: '9afe9aade8cf30bb65ff121ec73da9b6697b6950a0f06a47a68a59c7e1427b51', text: () => import('./assets-chunks/work_digital-tuner_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 10069, hash: '7e4f120cc2a413f5e2453bd318384ce1d982255397bf80478af81834bfa022ab', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'styles-QS5OXJBT.css': {size: 6137, hash: 'BA7zewWZGnA', text: () => import('./assets-chunks/styles-QS5OXJBT_css.mjs').then(m => m.default)}
  },
};
