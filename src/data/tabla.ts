import { Item, Tag } from './build';

export type RoleStyle = 'carry' | 'ap' | 'tank' | 'flex';
export type PortraitVariant = 'carry' | 'unlock' | 'default';

export interface TableRow {
  name: string;
  image: string;
  cost: 1 | 2 | 3 | 4;
  portraitVariant: PortraitVariant;
  roleIcon: string;
  roleLabel: string;
  roleStyle: RoleStyle;
  tags: Tag[];
  items: Item[];
  priority: number; // 1-5
  note: string;
}

export const tableRows: TableRow[] = [
  {
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
    priority: 5,
    note: 'Carry principal. Hongos AP + Statikk para cadena de daño. Buscar 3⭐.',
  },
  {
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
    priority: 5,
    note: 'Desbloquear: colocar 2× Rabadon en una unidad. Burst masivo con Shojin.',
  },
  {
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
      { name: "Thief's Gloves", image: '/tft-assets/items/ThiefsGloves.png' },
      { name: "Thief's Gloves", image: '/tft-assets/items/ThiefsGloves.png' },
    ],
    priority: 4,
    note: 'Desbloquear: 5 Yordle/Bilgewater en tablero siendo nivel 7. Solo Thief\'s Gloves.',
  },
  {
    name: 'Kennen',
    image: '/tft-assets/champions/Kennen.png',
    cost: 3,
    portraitVariant: 'default',
    roleIcon: '🛡️',
    roleLabel: 'Tank / CC',
    roleStyle: 'tank',
    tags: [{ label: 'Yordle', type: 'yordle' }, { label: 'Invoker', type: 'other' }],
    items: [
      { name: "Dragon's Claw", image: '/tft-assets/items/DragonsClaw.png' },
      { name: 'Bramble Vest', image: '/tft-assets/items/BrambleVest.png' },
      { name: "Warmog's Armor", image: '/tft-assets/items/WarmogsArmor.png' },
    ],
    priority: 4,
    note: "Frontline + CC masivo. Dragon's Claw bloquea el daño AP enemigo.",
  },
  {
    name: 'Lulu',
    image: '/tft-assets/champions/Lulu.png',
    cost: 3,
    portraitVariant: 'default',
    roleIcon: '🌟',
    roleLabel: 'Support',
    roleStyle: 'flex',
    tags: [{ label: 'Yordle', type: 'yordle' }, { label: 'Invoker', type: 'other' }],
    items: [
      { name: "Zeke's Herald", image: '/tft-assets/items/ZekesHerald.png' },
      { name: 'Ionic Spark', image: '/tft-assets/items/IonicSpark.png' },
      { name: "Archangel's Staff", image: '/tft-assets/items/ArchangelsStaff.png' },
    ],
    priority: 3,
    note: "Ionic Spark shredea MR. Zeke's da velocidad de ataque al carry más cercano.",
  },
  {
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
      { name: 'Frozen Heart', image: '/tft-assets/items/FrozenHeart.png' },
    ],
    priority: 3,
    note: 'Frontline secundaria. Sunfire quema al frente. Frozen Heart reduce vel. de ataque.',
  },
  {
    name: 'Rumble',
    image: '/tft-assets/champions/Rumble.png',
    cost: 2,
    portraitVariant: 'default',
    roleIcon: '🛡️',
    roleLabel: 'Bruiser',
    roleStyle: 'tank',
    tags: [{ label: 'Yordle', type: 'yordle' }, { label: 'Bruiser', type: 'other' }],
    items: [
      { name: "Warmog's Armor", image: '/tft-assets/items/WarmogsArmor.png' },
      { name: 'Bramble Vest', image: '/tft-assets/items/BrambleVest.png' },
      { name: 'Morellonomicon', image: '/tft-assets/items/Morellonomicon.png' },
    ],
    priority: 3,
    note: 'Tank robusto con daño secundario. Bramble Vest bloquea curas enemigas.',
  },
  {
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
    priority: 3,
    note: 'Carry AD de respaldo. Usa sus items solo si los carries AP están cubiertos.',
  },
  {
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
    priority: 3,
    note: 'Desbloquear: 6 niveles entre Bruiser/Yordle/Invoker siendo nivel 7.',
  },
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
