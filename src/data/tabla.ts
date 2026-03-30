import { Item, Tag } from './build';

export type RoleStyle = 'carry' | 'ap' | 'tank' | 'flex';
export type PortraitVariant = 'carry' | 'unlock' | 'default';

export interface TableItem extends Item {
  dbId?: number; // id en build_champion_items (undefined en datos estáticos)
}

export interface TableRow {
  id: number;
  name: string;
  image: string;
  cost: 1 | 2 | 3 | 4 | 5;
  portraitVariant: PortraitVariant;
  roleIcon: string;
  roleLabel: string;
  roleStyle: RoleStyle;
  tags: Tag[];
  items: TableItem[];
  altItems?: TableItem[];
  priority: number; // 1-5
  note: string;
}

export const tableRows: TableRow[] = [
  {
    id: 0,
    name: 'Teemo',
    image: '/tft-assets/champions/Teemo.png',
    cost: 1,
    portraitVariant: 'carry',
    roleIcon: '⚔️',
    roleLabel: 'Carry Principal',
    roleStyle: 'carry',
    tags: [{ label: 'Yordle', type: 'yordle' }, { label: 'Piltover', type: 'other' }],
    items: [
      { name: 'Statikk Shiv', image: '/tft-assets/items/StatikkShiv.png' },
      { name: 'Morellonomicon', image: '/tft-assets/items/Morellonomicon.png' },
      { name: 'Jeweled Gauntlet', image: '/tft-assets/items/JeweledGauntlet.png' },
    ],
    altItems: [
      { name: "Guinsoo's Rageblade", image: '/tft-assets/items/GuinsoosRageblade.png' },
      { name: "Archangel's Staff", image: '/tft-assets/items/ArchangelsStaff.png' },
      { name: 'Ionic Spark', image: '/tft-assets/items/IonicSpark.png' },
    ],
    priority: 5,
    note: 'Carry principal. Rageblade + Jeweled Gauntlet para hongos críticos AP. Buscar 3⭐.',
  },
  {
    id: 0,
    name: 'Veigar',
    image: '/tft-assets/champions/Veigar.png',
    cost: 3,
    portraitVariant: 'carry',
    roleIcon: '🔮',
    roleLabel: 'Carry AP Burst',
    roleStyle: 'ap',
    tags: [{ label: 'Yordle', type: 'yordle' }, { label: 'Piltover', type: 'other' }],
    items: [
      { name: 'Spear of Shojin', image: '/tft-assets/items/SpearOfShojin.png' },
      { name: "Rabadon's Deathcap", image: '/tft-assets/items/RabadonsDeathcap.png' },
      { name: 'Hextech Gunblade', image: '/tft-assets/items/HextechGunblade.png' },
    ],
    altItems: [
      { name: 'Blue Buff', image: '/tft-assets/items/BlueBuff.png' },
      { name: "Archangel's Staff", image: '/tft-assets/items/ArchangelsStaff.png' },
      { name: 'Ionic Spark', image: '/tft-assets/items/IonicSpark.png' },
    ],
    priority: 5,
    note: 'Desbloquear: colocar 2× Rabadon en una unidad. Burst masivo con Shojin.',
  },
  {
    id: 0,
    name: 'Fizz',
    image: '/tft-assets/champions/Fizz.png',
    cost: 3,
    portraitVariant: 'unlock',
    roleIcon: '💧',
    roleLabel: 'Carry Flex',
    roleStyle: 'flex',
    tags: [{ label: 'Yordle', type: 'yordle' }, { label: 'Bruiser', type: 'other' }],
    items: [
      { name: "Thief's Gloves", image: '/tft-assets/items/ThiefsGloves.png' },
      { name: 'Jeweled Gauntlet', image: '/tft-assets/items/JeweledGauntlet.png' },
      { name: "Rabadon's Deathcap", image: '/tft-assets/items/RabadonsDeathcap.png' },
    ],
    altItems: [
      { name: 'Blue Buff', image: '/tft-assets/items/BlueBuff.png' },
      { name: 'Spear of Shojin', image: '/tft-assets/items/SpearOfShojin.png' },
      { name: "Archangel's Staff", image: '/tft-assets/items/ArchangelsStaff.png' },
    ],
    priority: 4,
    note: 'Desbloquear: 5 Yordle/Bilgewater en tablero siendo nivel 7. Jeweled Gauntlet para crits de habilidad.',
  },
  {
    id: 0,
    name: 'Kennen',
    image: '/tft-assets/champions/Kennen.png',
    cost: 3,
    portraitVariant: 'default',
    roleIcon: '🛡️',
    roleLabel: 'Tank / CC',
    roleStyle: 'tank',
    tags: [{ label: 'Yordle', type: 'yordle' }, { label: 'Invoker', type: 'other' }],
    items: [
      { name: 'Gargoyle Stoneplate', image: '/tft-assets/items/GargoyleStoneplate.png' },
      { name: 'Sunfire Cape', image: '/tft-assets/items/SunfireCape.png' },
      { name: "Warmog's Armor", image: '/tft-assets/items/WarmogsArmor.png' },
    ],
    altItems: [
      { name: "Dragon's Claw", image: '/tft-assets/items/DragonsClaw.png' },
      { name: 'Frozen Heart', image: '/tft-assets/items/FrozenHeart.png' },
      { name: 'Bramble Vest', image: '/tft-assets/items/BrambleVest.png' },
    ],
    priority: 4,
    note: 'Frontline + CC masivo. Gargoyle escala con enemigos que lo atacan.',
  },
  {
    id: 0,
    name: 'Lulu',
    image: '/tft-assets/champions/Lulu.png',
    cost: 3,
    portraitVariant: 'default',
    roleIcon: '🌟',
    roleLabel: 'Support',
    roleStyle: 'flex',
    tags: [{ label: 'Yordle', type: 'yordle' }, { label: 'Invoker', type: 'other' }],
    items: [
      { name: 'Spear of Shojin', image: '/tft-assets/items/SpearOfShojin.png' },
      { name: 'Jeweled Gauntlet', image: '/tft-assets/items/JeweledGauntlet.png' },
      { name: "Rabadon's Deathcap", image: '/tft-assets/items/RabadonsDeathcap.png' },
    ],
    altItems: [
      { name: 'Blue Buff', image: '/tft-assets/items/BlueBuff.png' },
      { name: "Archangel's Staff", image: '/tft-assets/items/ArchangelsStaff.png' },
      { name: 'Ionic Spark', image: '/tft-assets/items/IonicSpark.png' },
    ],
    priority: 3,
    note: 'Caster AP de apoyo. Shojin para castear seguido, Jeweled para crits de habilidad.',
  },
  {
    id: 0,
    name: 'Poppy',
    image: '/tft-assets/champions/Poppy.png',
    cost: 3,
    portraitVariant: 'default',
    roleIcon: '🛡️',
    roleLabel: 'Tank',
    roleStyle: 'tank',
    tags: [{ label: 'Yordle', type: 'yordle' }, { label: 'Bruiser', type: 'other' }],
    items: [
      { name: 'Gargoyle Stoneplate', image: '/tft-assets/items/GargoyleStoneplate.png' },
      { name: 'Sunfire Cape', image: '/tft-assets/items/SunfireCape.png' },
      { name: "Warmog's Armor", image: '/tft-assets/items/WarmogsArmor.png' },
    ],
    altItems: [
      { name: "Dragon's Claw", image: '/tft-assets/items/DragonsClaw.png' },
      { name: 'Frozen Heart', image: '/tft-assets/items/FrozenHeart.png' },
      { name: 'Bramble Vest', image: '/tft-assets/items/BrambleVest.png' },
    ],
    priority: 3,
    note: 'Frontline secundaria. Sunfire quema al frente. Warmog para máxima supervivencia.',
  },
  {
    id: 0,
    name: 'Rumble',
    image: '/tft-assets/champions/Rumble.png',
    cost: 2,
    portraitVariant: 'default',
    roleIcon: '🛡️',
    roleLabel: 'Bruiser',
    roleStyle: 'tank',
    tags: [{ label: 'Yordle', type: 'yordle' }, { label: 'Bruiser', type: 'other' }],
    items: [
      { name: 'Gargoyle Stoneplate', image: '/tft-assets/items/GargoyleStoneplate.png' },
      { name: "Dragon's Claw", image: '/tft-assets/items/DragonsClaw.png' },
      { name: "Warmog's Armor", image: '/tft-assets/items/WarmogsArmor.png' },
    ],
    altItems: [
      { name: 'Sunfire Cape', image: '/tft-assets/items/SunfireCape.png' },
      { name: 'Bramble Vest', image: '/tft-assets/items/BrambleVest.png' },
      { name: 'Frozen Heart', image: '/tft-assets/items/FrozenHeart.png' },
    ],
    priority: 3,
    note: 'Bruiser tanque. Gargoyle + Dragon\'s Claw para resistencia física y mágica.',
  },
  {
    id: 0,
    name: 'Tristana',
    image: '/tft-assets/champions/Tristana.png',
    cost: 2,
    portraitVariant: 'default',
    roleIcon: '💥',
    roleLabel: 'Duelist',
    roleStyle: 'flex',
    tags: [{ label: 'Yordle', type: 'yordle' }, { label: 'Duelist', type: 'other' }],
    items: [
      { name: 'Infinity Edge', image: '/tft-assets/items/InfinityEdge.png' },
      { name: "Guinsoo's Rageblade", image: '/tft-assets/items/GuinsoosRageblade.png' },
      { name: 'Last Whisper', image: '/tft-assets/items/LastWhisper.png' },
    ],
    altItems: [
      { name: 'Statikk Shiv', image: '/tft-assets/items/StatikkShiv.png' },
      { name: 'Last Whisper', image: '/tft-assets/items/LastWhisper.png' },
      { name: "Thief's Gloves", image: '/tft-assets/items/ThiefsGloves.png' },
    ],
    priority: 3,
    note: 'Carry AD de respaldo. Usa sus items solo si los carries AP están cubiertos.',
  },
  {
    id: 0,
    name: 'Kobuko & Yuumi',
    image: '/tft-assets/champions/Kobuko.png',
    cost: 4,
    portraitVariant: 'unlock',
    roleIcon: '🛡️',
    roleLabel: 'Tank Duelist',
    roleStyle: 'tank',
    tags: [{ label: 'Yordle', type: 'yordle' }, { label: 'Duelist', type: 'other' }],
    items: [
      { name: 'Gargoyle Stoneplate', image: '/tft-assets/items/GargoyleStoneplate.png' },
      { name: "Dragon's Claw", image: '/tft-assets/items/DragonsClaw.png' },
      { name: "Warmog's Armor", image: '/tft-assets/items/WarmogsArmor.png' },
    ],
    altItems: [
      { name: 'Sunfire Cape', image: '/tft-assets/items/SunfireCape.png' },
      { name: 'Bramble Vest', image: '/tft-assets/items/BrambleVest.png' },
      { name: "Dragon's Claw", image: '/tft-assets/items/DragonsClaw.png' },
    ],
    priority: 3,
    note: 'Desbloquear: 6 niveles entre Bruiser/Yordle/Invoker siendo nivel 7.',
  },
  {
    id: 0,
    name: 'Ziggs',
    image: '/tft-assets/champions/Ziggs.png',
    cost: 4,
    portraitVariant: 'unlock',
    roleIcon: '💥',
    roleLabel: 'Carry AP',
    roleStyle: 'ap',
    tags: [{ label: 'Yordle', type: 'yordle' }, { label: 'Zaun', type: 'other' }],
    items: [
      { name: "Guinsoo's Rageblade", image: '/tft-assets/items/GuinsoosRageblade.png' },
      { name: 'Jeweled Gauntlet', image: '/tft-assets/items/JeweledGauntlet.png' },
      { name: "Rabadon's Deathcap", image: '/tft-assets/items/RabadonsDeathcap.png' },
    ],
    altItems: [
      { name: 'Blue Buff', image: '/tft-assets/items/BlueBuff.png' },
      { name: 'Infinity Edge', image: '/tft-assets/items/InfinityEdge.png' },
      { name: "Archangel's Staff", image: '/tft-assets/items/ArchangelsStaff.png' },
    ],
    priority: 4,
    note: 'Desbloquear: llegar a nivel 9 con un Yordle o Zaunita con 3 ítems. Rageblade + Jeweled Gauntlet para crits AP continuos.',
  },
];

export const noxusLegendItems: Item[] = [
  { name: "Guinsoo's Rageblade", image: '/tft-assets/items/GuinsoosRageblade.png' },
  { name: 'Last Whisper',        image: '/tft-assets/items/LastWhisper.png' },
  { name: 'Deathblade',          image: '/tft-assets/items/Deathblade.png' },
  { name: 'Infinity Edge',       image: '/tft-assets/items/InfinityEdge.png' },
  { name: "Runaan's Hurricane",  image: '/tft-assets/items/RunaansHurricane.png' },
  { name: "Thief's Gloves",      image: '/tft-assets/items/ThiefsGloves.png' },
  { name: 'Adaptive Helm',       image: '/tft-assets/items/AdaptiveHelm.png' },
  { name: "Sterak's Gage",       image: '/tft-assets/items/SteraksGage.png' },
  { name: "Titan's Resolve",     image: '/tft-assets/items/TitansResolve.png' },
  { name: 'Bramble Vest',        image: '/tft-assets/items/BrambleVest.png' },
  { name: 'Gargoyle Stoneplate', image: '/tft-assets/items/GargoyleStoneplate.png' },
  { name: "Warmog's Armor",      image: '/tft-assets/items/WarmogsArmor.png' },
  { name: 'Jeweled Gauntlet',    image: '/tft-assets/items/JeweledGauntlet.png' },
  { name: 'Spear of Shojin',     image: '/tft-assets/items/SpearOfShojin.png' },
  { name: "Rabadon's Deathcap",  image: '/tft-assets/items/RabadonsDeathcap.png' },
  { name: 'Morellonomicon',      image: '/tft-assets/items/Morellonomicon.png' },
  { name: 'Hextech Gunblade',    image: '/tft-assets/items/HextechGunblade.png' },
  { name: "Archangel's Staff",   image: '/tft-assets/items/ArchangelsStaff.png' },
  { name: 'Blue Buff',           image: '/tft-assets/items/BlueBuff.png' },
  { name: 'Bloodthirster',       image: '/tft-assets/items/Bloodthirster.png' },
  { name: 'Crownguard',          image: '/tft-assets/items/Crownguard.png' },
  { name: "Dragon's Claw",       image: '/tft-assets/items/DragonsClaw.png' },
  { name: 'Ionic Spark',         image: '/tft-assets/items/IonicSpark.png' },
  { name: 'Sunfire Cape',        image: '/tft-assets/items/SunfireCape.png' },
  { name: 'Frozen Heart',        image: '/tft-assets/items/FrozenHeart.png' },
];

export const legendItems: Item[] = [
  { name: 'Statikk Shiv', image: '/tft-assets/items/StatikkShiv.png' },
  { name: 'Morellonomicon', image: '/tft-assets/items/Morellonomicon.png' },
  { name: 'Jeweled Gauntlet', image: '/tft-assets/items/JeweledGauntlet.png' },
  { name: 'Spear of Shojin', image: '/tft-assets/items/SpearOfShojin.png' },
  { name: "Rabadon's Deathcap", image: '/tft-assets/items/RabadonsDeathcap.png' },
  { name: 'Hextech Gunblade', image: '/tft-assets/items/HextechGunblade.png' },
  { name: "Thief's Gloves", image: '/tft-assets/items/ThiefsGloves.png' },
  { name: "Dragon's Claw", image: '/tft-assets/items/DragonsClaw.png' },
  { name: 'Bramble Vest', image: '/tft-assets/items/BrambleVest.png' },
  { name: "Warmog's Armor", image: '/tft-assets/items/WarmogsArmor.png' },
  { name: "Zeke's Herald", image: '/tft-assets/items/ZekesHerald.png' },
  { name: 'Ionic Spark', image: '/tft-assets/items/IonicSpark.png' },
  { name: "Archangel's Staff", image: '/tft-assets/items/ArchangelsStaff.png' },
  { name: 'Gargoyle Stoneplate', image: '/tft-assets/items/GargoyleStoneplate.png' },
  { name: 'Sunfire Cape', image: '/tft-assets/items/SunfireCape.png' },
  { name: 'Frozen Heart', image: '/tft-assets/items/FrozenHeart.png' },
  { name: 'Infinity Edge', image: '/tft-assets/items/InfinityEdge.png' },
  { name: "Guinsoo's Rageblade", image: '/tft-assets/items/GuinsoosRageblade.png' },
  { name: 'Last Whisper', image: '/tft-assets/items/LastWhisper.png' },
  { name: 'Blue Buff', image: '/tft-assets/items/BlueBuff.png' },
];
