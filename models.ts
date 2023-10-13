export type Model = {
  key: string
  tag: string
  name: string
  label: string
  picture: string
}

export const models: Record<string, Model> = {
  sdxl: {
    key: 'sdxl',
    tag: 'c221b2b8ef527988fb59bf24a8b97c4561f1c671f73bd389f866bfb27c061316',
    label: 'SDXL',
    name: 'stability-ai/sdxl',
    picture: '/sdxl.png',
  },

  dreamshaper: {
    key: 'dreamshaper',
    name: 'mcai/dreamshaper-v6-img2img',
    label: 'Dreamshaper',
    tag: 'c7959eb3a86c09b449dacc11ce8bba295fda466fc6935ab8709e35f4f48c980c',
    picture: '/dream.png',
  },

  botw: {
    key: 'botw',
    name: 'jbilcke/sdxl-botw',
    label: 'Zelda',
    tag: 'bf412da351d41547f117391eff2824ab0301b6ba1c6c010c4b5f766a492d62fc',
    picture: '/zelda.png',
  },

  gta: {
    key: 'gta',
    name: 'pwntus/sdxl-gta-v',
    label: 'GTA',
    tag: 'b61a50b07f8316aab4a10253692511dd2f0b6f8546113c314a0e0940dc372614',
    picture: '/gta.png',
  },

  tron: {
    key: 'tron',
    name: 'fofr/sdxl-tron',
    label: 'Tron',
    tag: 'fd920825e12db2a942f8a9cac40ad4f624a34a06faba3ac1b44a5305df8c6e2d',
    picture: '/tron.png',
  },

  barbie: {
    key: 'barbie',
    name: 'fofr/sdxl-barbie',
    label: 'Barbie',
    tag: '657c074cdd0e0098e39dae981194c4e852ad5bc88c7fbbeb0682afae714a6b0e',
    picture: '/barbie.png',
  },

  emoji: {
    key: 'emoji',
    name: 'fofr/sdxl-emoji',
    label: 'emoji',
    tag: 'dee76b5afde21b0f01ed7925f0665b7e879c50ee718c5f78a9d38e04d523cc5e',
    picture: '/emoji.png',
  },

  nammeh: {
    key: 'nammeh',
    name: 'galleri5/nammeh',
    label: 'Nammeh',
    tag: 'dddb29d25e750e44a553e4f869d682be050fb6efbb189981e287cc87e71486be',
    picture: '/nammeh.png',
  },
}