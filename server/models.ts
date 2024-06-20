export type DiffusionModel = {
  tag: string
  name: string
  label: string
  picture: string
  promptSuffix?: string
}

export const diffusionModels: Record<string, DiffusionModel> = {
  sdxl: {
    label: 'SDXL',
    name: 'stability-ai/sdxl',
    tag: 'c221b2b8ef527988fb59bf24a8b97c4561f1c671f73bd389f866bfb27c061316',
    picture: '/models/sdxl.png',
  },

  sd: {
    label: 'Stable Diffusion',
    name: 'stability-ai/stable-diffusion',
    tag: 'ac732df83cea7fff18b8472768c88ad041fa750ff7682a21affe81863cbe77e4',
    picture: '/models/sd.png',
  },

  dreamshaper: {
    label: 'Dreamshaper',
    name: 'mcai/dreamshaper-v6-img2img',
    tag: 'c7959eb3a86c09b449dacc11ce8bba295fda466fc6935ab8709e35f4f48c980c',
    picture: '/models/dream.png',
  },

  pixart: {
    label: 'Pixart XL',
    name: 'lucataco/pixart-xl-2',
    tag: '816c99673841b9448bc2539834c16d40e0315bbf92fef0317b57a226727409bb',
    picture: '/models/pixart.png',
  },

  kandinsky: {
    label: 'Kandinsky',
    name: 'ai-forever/kandinsky',
    tag: '3c6374e7a9a17e01afe306a5218cc67de55b19ea536466d6ea2602cfecea40a9',
    picture: '/models/kandinsky.png',
  },

  nammeh: {
    label: 'Nammeh',
    name: 'galleri5/nammeh',
    tag: 'dddb29d25e750e44a553e4f869d682be050fb6efbb189981e287cc87e71486be',
    picture: '/models/nammeh.png',
    promptSuffix: '(NAMMEH), glitch',
  },

  botw: {
    label: 'Zelda',
    name: 'jbilcke/sdxl-botw',
    tag: 'bf412da351d41547f117391eff2824ab0301b6ba1c6c010c4b5f766a492d62fc',
    picture: '/models/zelda.png',
    promptSuffix: '(Zelda), breath of the wild',
  },

  gta: {
    label: 'GTA',
    name: 'pwntus/sdxl-gta-v',
    tag: 'b61a50b07f8316aab4a10253692511dd2f0b6f8546113c314a0e0940dc372614',
    picture: '/models/gta.png',
    promptSuffix: '(GTA), Grand Theft Auto',
  },

  tron: {
    label: 'Tron',
    name: 'fofr/sdxl-tron',
    tag: 'fd920825e12db2a942f8a9cac40ad4f624a34a06faba3ac1b44a5305df8c6e2d',
    picture: '/models/tron.png',
    promptSuffix: '(Tron), TRN',
  },

  barbie: {
    label: 'Barbie',
    name: 'fofr/sdxl-barbie',
    tag: '657c074cdd0e0098e39dae981194c4e852ad5bc88c7fbbeb0682afae714a6b0e',
    picture: '/models/barbie.png',
    promptSuffix: '(Barbie)',
  },

  emoji: {
    label: 'Emoji',
    name: 'fofr/sdxl-emoji',
    tag: 'dee76b5afde21b0f01ed7925f0665b7e879c50ee718c5f78a9d38e04d523cc5e',
    picture: '/models/emoji.png',
    promptSuffix: '(emoji)',
  },

  sticker: {
    label: 'Sticker',
    name: 'fofr/sticker-maker',
    tag: '4acb778eb059772225ec213948f0660867b2e03f277448f18cf1800b96a65a1a',
    picture: '/models/sticker.png',
  },
}
