export type TraitType = 'yordle' | 'gold';

export interface Trait {
  name: string;
  count: number;
  type: TraitType;
  highlighted?: boolean;
}

export type ChampionRole = 'carry' | 'unlock' | 'default';
export type TagType = 'yordle' | 'noxus' | 'other';

export interface Tag {
  label: string;
  type: TagType;
}

export interface Champion {
  name: string;
  image: string;
  cost: 1 | 2 | 3 | 4;
  role: ChampionRole;
  tags: Tag[];
}

export interface Item {
  name: string;
  image: string;
}

export interface CarryBuild {
  champion: string;
  image: string;
  role: string;
  description: string;
  isMain: boolean;
  items: Item[];
}

export type AugmentTier = 'prismatic' | 'gold' | 'silver';

export interface Augment {
  icon: string;
  tier: AugmentTier;
  name: string;
  description: string;
}

export interface Tip {
  icon: string;
  text: string;
}

export const traits: Trait[] = [
  { name: 'Yordle', count: 8, type: 'yordle', highlighted: true },
  { name: 'Invoker', count: 2, type: 'gold' },
  { name: 'Bruiser', count: 2, type: 'gold' },
  { name: 'Duelist', count: 2, type: 'gold' },
  { name: 'Piltover', count: 2, type: 'gold' },
];

export const champions: Champion[] = [
  {
    name: 'Teemo',
    image: '/tft-assets/champions/Teemo.png',
    cost: 1,
    role: 'carry',
    tags: [
      { label: 'Yordle', type: 'yordle' },
      { label: 'Piltover', type: 'other' },
    ],
  },
  {
    name: 'Tristana',
    image: '/tft-assets/champions/Tristana.png',
    cost: 2,
    role: 'default',
    tags: [
      { label: 'Yordle', type: 'yordle' },
      { label: 'Duelist', type: 'other' },
    ],
  },
  {
    name: 'Rumble',
    image: '/tft-assets/champions/Rumble.png',
    cost: 2,
    role: 'default',
    tags: [
      { label: 'Yordle', type: 'yordle' },
      { label: 'Bruiser', type: 'other' },
    ],
  },
  {
    name: 'Kennen',
    image: '/tft-assets/champions/Kennen.png',
    cost: 3,
    role: 'default',
    tags: [
      { label: 'Yordle', type: 'yordle' },
      { label: 'Invoker', type: 'other' },
    ],
  },
  {
    name: 'Lulu',
    image: '/tft-assets/champions/Lulu.png',
    cost: 3,
    role: 'default',
    tags: [
      { label: 'Yordle', type: 'yordle' },
      { label: 'Invoker', type: 'other' },
    ],
  },
  {
    name: 'Poppy',
    image: '/tft-assets/champions/Poppy.png',
    cost: 3,
    role: 'default',
    tags: [
      { label: 'Yordle', type: 'yordle' },
      { label: 'Bruiser', type: 'other' },
    ],
  },
  {
    name: 'Veigar',
    image: '/tft-assets/champions/Veigar.png',
    cost: 3,
    role: 'unlock',
    tags: [
      { label: 'Yordle', type: 'yordle' },
      { label: 'Piltover', type: 'other' },
    ],
  },
  {
    name: 'Fizz',
    image: '/tft-assets/champions/Fizz.png',
    cost: 3,
    role: 'unlock',
    tags: [
      { label: 'Yordle', type: 'yordle' },
      { label: 'Bruiser', type: 'other' },
    ],
  },
  {
    name: 'Kobuko & Yuumi',
    image: '/tft-assets/champions/Kobuko.png',
    cost: 4,
    role: 'default',
    tags: [
      { label: 'Yordle', type: 'yordle' },
      { label: 'Duelist', type: 'other' },
    ],
  },
];

export const carryBuilds: CarryBuild[] = [
  {
    champion: 'Teemo',
    image: '/tft-assets/champions/Teemo.png',
    role: 'Carry Principal',
    description: 'AP + Hongos venenosos',
    isMain: true,
    items: [
      { name: "Guinsoo's Rageblade", image: '/tft-assets/items/GuinsoosRageblade.png' },
      { name: 'Morellonomicon', image: '/tft-assets/items/Morellonomicon.png' },
      { name: 'Jeweled Gauntlet', image: '/tft-assets/items/JeweledGauntlet.png' },
    ],
  },
  {
    champion: 'Veigar',
    image: '/tft-assets/champions/Veigar.png',
    role: 'Carry AP Burst',
    description: 'Burst mágico masivo',
    isMain: true,
    items: [
      { name: 'Spear of Shojin', image: '/tft-assets/items/SpearOfShojin.png' },
      { name: "Rabadon's Deathcap", image: '/tft-assets/items/RabadonsDeathcap.png' },
      { name: 'Hextech Gunblade', image: '/tft-assets/items/HextechGunblade.png' },
    ],
  },
  {
    champion: 'Fizz',
    image: '/tft-assets/champions/Fizz.png',
    role: 'Carry AP',
    description: 'Burst mágico + críticos de habilidad',
    isMain: false,
    items: [
      { name: 'Jeweled Gauntlet', image: '/tft-assets/items/JeweledGauntlet.png' },
      { name: "Rabadon's Deathcap", image: '/tft-assets/items/RabadonsDeathcap.png' },
      { name: 'Blue Buff', image: '/tft-assets/items/BlueBuff.png' },
    ],
  },
  {
    champion: 'Kennen',
    image: '/tft-assets/champions/Kennen.png',
    role: 'Tank / CC',
    description: 'Frontline duro con CC masivo',
    isMain: false,
    items: [
      { name: 'Gargoyle Stoneplate', image: '/tft-assets/items/GargoyleStoneplate.png' },
      { name: 'Sunfire Cape', image: '/tft-assets/items/SunfireCape.png' },
      { name: "Warmog's Armor", image: '/tft-assets/items/WarmogsArmor.png' },
    ],
  },
];

export const galleryItems: Item[] = [
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
  { name: 'Blue Buff', image: '/tft-assets/items/BlueBuff.png' },
  { name: 'Ionic Spark', image: '/tft-assets/items/IonicSpark.png' },
  { name: 'Infinity Edge', image: '/tft-assets/items/InfinityEdge.png' },
  { name: "Guinsoo's Rageblade", image: '/tft-assets/items/GuinsoosRageblade.png' },
  { name: 'Last Whisper', image: '/tft-assets/items/LastWhisper.png' },
  { name: 'Gargoyle Stoneplate', image: '/tft-assets/items/GargoyleStoneplate.png' },
  { name: 'Frozen Heart', image: '/tft-assets/items/FrozenHeart.png' },
  { name: 'Sunfire Cape', image: '/tft-assets/items/SunfireCape.png' },
  { name: "Archangel's Staff", image: '/tft-assets/items/ArchangelsStaff.png' },
  { name: "Zeke's Herald", image: '/tft-assets/items/ZekesHerald.png' },
];

export const augments: Augment[] = [
  {
    icon: '🟣',
    tier: 'prismatic',
    name: 'Yordle Population Boom',
    description: 'Todos tus Yordles ganan +20% de todos los stats al activar el trait.',
  },
  {
    icon: '💫',
    tier: 'prismatic',
    name: 'Tiny But Deadly III',
    description: 'Tus Yordles ganan +50% de daño de habilidad.',
  },
  {
    icon: '⚡',
    tier: 'gold',
    name: 'Ability Power II',
    description: 'Todos tus campeones ganan +20 de poder de habilidad.',
  },
  {
    icon: '🎁',
    tier: 'gold',
    name: 'Yordle Grab Bag II',
    description: 'Cada vez que tu trait Yordle aumente de nivel, recibes una bolsa de items gratis.',
  },
  {
    icon: '💰',
    tier: 'silver',
    name: 'Yordle Loot',
    description: 'Al perder 3 combates seguidos, recibes un cofre de items Yordle.',
  },
  {
    icon: '🛡️',
    tier: 'silver',
    name: 'Stand United',
    description: 'Tus unidades ganan +10 armadura y resistencia mágica por cada aliado vivo.',
  },
];

export const tips: Tip[] = [
  { icon: '🎯', text: '<strong>Teemo y Veigar</strong> son los carries principales — priorizá sus items desde early.' },
  { icon: '💰', text: 'Ahorrá hasta 50 de oro antes de hacer rolleos agresivos en nivel 6–7.' },
  { icon: '🔓', text: 'Para desbloquear a <strong>Veigar</strong>, necesitás equipar 2 Rabadon\'s Deathcap a una unidad en combate.' },
  { icon: '🔓', text: '<strong>Fizz</strong> se desbloquea poniendo 5 Yordle o Bilgewater en el tablero siendo nivel 7.' },
  { icon: '⚡', text: 'Con 8 Yordles activos recibís Grab Bags — items gratis que amplifican toda la comp.' },
  { icon: '🧤', text: '<strong>Thief\'s Gloves en Fizz</strong> te da items aleatorios — no necesita items específicos.' },
  { icon: '🛡️', text: 'Kennen con Gargoyle Stoneplate + Sunfire Cape aguanta toda la pelea y aplica CC en área.' },
  { icon: '🏆', text: 'El objetivo es llegar a nivel 9 con Ziggs para el late-game máximo.' },
];
