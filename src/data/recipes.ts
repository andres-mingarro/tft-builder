const base = '/tft-assets/items-ddragon';

export interface Component {
  name: string;
  image: string;
}

export const recipes: Record<string, [Component, Component]> = {
  'Statikk Shiv':         [{ name: 'Recurve Bow',          image: `${base}/TFT_Item_RecurveBow.png` },          { name: 'Sparring Gloves',       image: `${base}/TFT_Item_SparringGloves.png` }],
  'Morellonomicon':        [{ name: 'Needlessly Large Rod', image: `${base}/TFT_Item_NeedlesslyLargeRod.png` }, { name: "Giant's Belt",          image: `${base}/TFT_Item_GiantsBelt.png` }],
  'Jeweled Gauntlet':      [{ name: 'Needlessly Large Rod', image: `${base}/TFT_Item_NeedlesslyLargeRod.png` }, { name: 'Sparring Gloves',       image: `${base}/TFT_Item_SparringGloves.png` }],
  'Spear of Shojin':       [{ name: 'B.F. Sword',           image: `${base}/TFT_Item_BFSword.png` },            { name: 'Tear of the Goddess',   image: `${base}/TFT_Item_TearOfTheGoddess.png` }],
  "Rabadon's Deathcap":    [{ name: 'Needlessly Large Rod', image: `${base}/TFT_Item_NeedlesslyLargeRod.png` }, { name: 'Needlessly Large Rod',  image: `${base}/TFT_Item_NeedlesslyLargeRod.png` }],
  'Hextech Gunblade':      [{ name: 'B.F. Sword',           image: `${base}/TFT_Item_BFSword.png` },            { name: 'Needlessly Large Rod',  image: `${base}/TFT_Item_NeedlesslyLargeRod.png` }],
  "Thief's Gloves":        [{ name: 'Sparring Gloves',      image: `${base}/TFT_Item_SparringGloves.png` },     { name: 'Sparring Gloves',       image: `${base}/TFT_Item_SparringGloves.png` }],
  "Dragon's Claw":         [{ name: 'Negatron Cloak',       image: `${base}/TFT_Item_NegatronCloak.png` },      { name: 'Negatron Cloak',        image: `${base}/TFT_Item_NegatronCloak.png` }],
  'Bramble Vest':          [{ name: 'Chain Vest',           image: `${base}/TFT_Item_ChainVest.png` },          { name: 'Chain Vest',            image: `${base}/TFT_Item_ChainVest.png` }],
  "Warmog's Armor":        [{ name: "Giant's Belt",         image: `${base}/TFT_Item_GiantsBelt.png` },         { name: "Giant's Belt",          image: `${base}/TFT_Item_GiantsBelt.png` }],
  "Zeke's Herald":         [{ name: 'B.F. Sword',           image: `${base}/TFT_Item_BFSword.png` },            { name: "Giant's Belt",          image: `${base}/TFT_Item_GiantsBelt.png` }],
  'Ionic Spark':           [{ name: 'Needlessly Large Rod', image: `${base}/TFT_Item_NeedlesslyLargeRod.png` }, { name: 'Negatron Cloak',        image: `${base}/TFT_Item_NegatronCloak.png` }],
  "Archangel's Staff":     [{ name: 'Needlessly Large Rod', image: `${base}/TFT_Item_NeedlesslyLargeRod.png` }, { name: 'Tear of the Goddess',   image: `${base}/TFT_Item_TearOfTheGoddess.png` }],
  'Gargoyle Stoneplate':   [{ name: 'Chain Vest',           image: `${base}/TFT_Item_ChainVest.png` },          { name: 'Negatron Cloak',        image: `${base}/TFT_Item_NegatronCloak.png` }],
  'Sunfire Cape':          [{ name: "Giant's Belt",         image: `${base}/TFT_Item_GiantsBelt.png` },         { name: 'Chain Vest',            image: `${base}/TFT_Item_ChainVest.png` }],
  'Frozen Heart':          [{ name: 'Chain Vest',           image: `${base}/TFT_Item_ChainVest.png` },          { name: 'Tear of the Goddess',   image: `${base}/TFT_Item_TearOfTheGoddess.png` }],
  'Infinity Edge':         [{ name: 'B.F. Sword',           image: `${base}/TFT_Item_BFSword.png` },            { name: 'Sparring Gloves',       image: `${base}/TFT_Item_SparringGloves.png` }],
  "Guinsoo's Rageblade":   [{ name: 'Needlessly Large Rod', image: `${base}/TFT_Item_NeedlesslyLargeRod.png` }, { name: 'Recurve Bow',           image: `${base}/TFT_Item_RecurveBow.png` }],
  'Last Whisper':          [{ name: 'B.F. Sword',           image: `${base}/TFT_Item_BFSword.png` },            { name: 'Recurve Bow',           image: `${base}/TFT_Item_RecurveBow.png` }],
};
