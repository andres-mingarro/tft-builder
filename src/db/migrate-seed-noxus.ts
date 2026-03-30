/**
 * Seed script: inserta la build Noxus Reroll (buildId=2) en la base de datos.
 * Ejecutar con: npx tsx src/db/migrate-seed-noxus.ts
 */
import { db } from './index';
import { builds, buildChampions, buildChampionItems, buildChampionAltItems } from './schema';

const NOXUS_CHAMPIONS = [
  {
    name: 'Draven',
    cost: 3,
    role: 'carry',
    portraitVariant: 'carry',
    roleIcon: '⚔️',
    roleLabel: 'Carry AD Principal',
    roleStyle: 'carry',
    priority: 5,
    note: 'Carry AD principal. Buscar 3⭐ en nivel 7 (slow roll). Guinsoo + Last Whisper destrozan armaduras.',
    tags: JSON.stringify([{ label: 'Noxus', type: 'noxus' }, { label: 'Quickstriker', type: 'other' }]),
    image: '/tft-assets/champions/Draven.png',
    position: 0,
    items: [
      { name: "Guinsoo's Rageblade", image: '/tft-assets/items/GuinsoosRageblade.png', slot: 1 },
      { name: 'Last Whisper',        image: '/tft-assets/items/LastWhisper.png',        slot: 2 },
      { name: 'Deathblade',          image: '/tft-assets/items/Deathblade.png', slot: 3 },
    ],
    altItems: [
      { name: 'Infinity Edge',      image: '/tft-assets/items/InfinityEdge.png',                    slot: 1 },
      { name: "Runaan's Hurricane", image: '/tft-assets/items/RunaansHurricane.png', slot: 2 },
      { name: "Thief's Gloves",     image: '/tft-assets/items/ThiefsGloves.png',                    slot: 3 },
    ],
  },
  {
    name: 'Darius',
    cost: 3,
    role: 'carry',
    portraitVariant: 'default',
    roleIcon: '🛡️',
    roleLabel: 'Tank / Secundario',
    roleStyle: 'tank',
    priority: 4,
    note: 'Frontline y carry secundario. Buscar 3⭐. Adaptive Helm + Sterak\'s Gage lo vuelven indestructible.',
    tags: JSON.stringify([{ label: 'Noxus', type: 'noxus' }, { label: 'Defender', type: 'other' }]),
    image: '/tft-assets/champions/Darius.png',
    position: 1,
    items: [
      { name: 'Adaptive Helm',   image: '/tft-assets/items/AdaptiveHelm.png',  slot: 1 },
      { name: "Sterak's Gage",   image: '/tft-assets/items/SteraksGage.png',   slot: 2 },
      { name: "Titan's Resolve", image: '/tft-assets/items/TitansResolve.png', slot: 3 },
    ],
    altItems: [
      { name: 'Bramble Vest',        image: '/tft-assets/items/BrambleVest.png',        slot: 1 },
      { name: 'Gargoyle Stoneplate', image: '/tft-assets/items/GargoyleStoneplate.png', slot: 2 },
      { name: "Warmog's Armor",      image: '/tft-assets/items/WarmogsArmor.png',       slot: 3 },
    ],
  },
  {
    name: 'LeBlanc',
    cost: 3,
    role: 'carry',
    portraitVariant: 'carry',
    roleIcon: '🔮',
    roleLabel: 'Carry AP',
    roleStyle: 'ap',
    priority: 4,
    note: 'Carry AP de burst. Buscar 3⭐. Jeweled Gauntlet permite crits mágicos masivos.',
    tags: JSON.stringify([{ label: 'Noxus', type: 'noxus' }, { label: 'Invoker', type: 'other' }]),
    image: '/tft-assets/champions/LeBlanc.png',
    position: 2,
    items: [
      { name: 'Jeweled Gauntlet',   image: '/tft-assets/items/JeweledGauntlet.png',   slot: 1 },
      { name: 'Spear of Shojin',    image: '/tft-assets/items/SpearOfShojin.png',     slot: 2 },
      { name: "Rabadon's Deathcap", image: '/tft-assets/items/RabadonsDeathcap.png', slot: 3 },
    ],
    altItems: [
      { name: 'Morellonomicon',    image: '/tft-assets/items/Morellonomicon.png',   slot: 1 },
      { name: 'Hextech Gunblade',  image: '/tft-assets/items/HextechGunblade.png', slot: 2 },
      { name: "Archangel's Staff", image: '/tft-assets/items/ArchangelsStaff.png', slot: 3 },
    ],
  },
  {
    name: 'Ambessa',
    cost: 4,
    role: 'carry',
    portraitVariant: 'default',
    roleIcon: '⚔️',
    roleLabel: 'Carry Flex',
    roleStyle: 'carry',
    priority: 3,
    note: 'Carry AD secundaria de 4-cost. Añadir en nivel 8. Bloodthirster + Infinity Edge escalan enorme.',
    tags: JSON.stringify([{ label: 'Noxus', type: 'noxus' }, { label: 'Vanquisher', type: 'other' }]),
    image: '/tft-assets/champions/Ambessa.png',
    position: 3,
    items: [
      { name: 'Bloodthirster', image: '/tft-assets/items/Bloodthirster.png', slot: 1 },
      { name: 'Infinity Edge', image: '/tft-assets/items/InfinityEdge.png',                   slot: 2 },
      { name: 'Deathblade',    image: '/tft-assets/items/Deathblade.png',    slot: 3 },
    ],
    altItems: [
      { name: "Guinsoo's Rageblade", image: '/tft-assets/items/GuinsoosRageblade.png', slot: 1 },
      { name: 'Last Whisper',        image: '/tft-assets/items/LastWhisper.png',        slot: 2 },
      { name: "Thief's Gloves",      image: '/tft-assets/items/ThiefsGloves.png',       slot: 3 },
    ],
  },
  {
    name: 'Swain',
    cost: 4,
    role: 'default',
    portraitVariant: 'default',
    roleIcon: '🛡️',
    roleLabel: 'Utility / AP Frontline',
    roleStyle: 'flex',
    priority: 3,
    note: 'Activa Juggernaut 2 con Briar. Crownguard lo hace casi inmortal. Clave para activar 7 Noxus.',
    tags: JSON.stringify([{ label: 'Noxus', type: 'noxus' }, { label: 'Juggernaut', type: 'other' }, { label: 'Arcanist', type: 'other' }]),
    image: '/tft-assets/champions/Swain.png',
    position: 4,
    items: [
      { name: 'Crownguard',    image: '/tft-assets/items/Crownguard.png',   slot: 1 },
      { name: 'Adaptive Helm', image: '/tft-assets/items/AdaptiveHelm.png', slot: 2 },
      { name: 'Ionic Spark',   image: '/tft-assets/items/IonicSpark.png',                    slot: 3 },
    ],
    altItems: [
      { name: "Dragon's Claw",       image: '/tft-assets/items/DragonsClaw.png',        slot: 1 },
      { name: 'Bramble Vest',        image: '/tft-assets/items/BrambleVest.png',         slot: 2 },
      { name: 'Gargoyle Stoneplate', image: '/tft-assets/items/GargoyleStoneplate.png', slot: 3 },
    ],
  },
  {
    name: 'Mel',
    cost: 5,
    role: 'carry',
    portraitVariant: 'unlock',
    roleIcon: '✨',
    roleLabel: 'Finisher AP',
    roleStyle: 'ap',
    priority: 3,
    note: 'El campeón más fuerte de Noxus (61% win rate). Comprar siempre que aparezca. Añadir en nivel 9.',
    tags: JSON.stringify([{ label: 'Noxus', type: 'noxus' }, { label: 'Disruptor', type: 'other' }]),
    image: '/tft-assets/champions/Mel.png',
    position: 5,
    items: [
      { name: 'Jeweled Gauntlet', image: '/tft-assets/items/JeweledGauntlet.png', slot: 1 },
      { name: 'Blue Buff',        image: '/tft-assets/items/BlueBuff.png',         slot: 2 },
      { name: 'Morellonomicon',   image: '/tft-assets/items/Morellonomicon.png',   slot: 3 },
    ],
    altItems: [
      { name: "Rabadon's Deathcap", image: '/tft-assets/items/RabadonsDeathcap.png', slot: 1 },
      { name: 'Hextech Gunblade',   image: '/tft-assets/items/HextechGunblade.png',  slot: 2 },
      { name: "Archangel's Staff",  image: '/tft-assets/items/ArchangelsStaff.png',  slot: 3 },
    ],
  },
  {
    name: 'Sion',
    cost: 2,
    role: 'default',
    portraitVariant: 'default',
    roleIcon: '🛡️',
    roleLabel: 'Frontline',
    roleStyle: 'tank',
    priority: 2,
    note: 'Frontline barata para activar Noxus. Sin prioridad de items; ceder sus slots a carries.',
    tags: JSON.stringify([{ label: 'Noxus', type: 'noxus' }, { label: 'Bruiser', type: 'other' }]),
    image: '/tft-assets/champions/Sion.png',
    position: 6,
    items: [
      { name: 'Bramble Vest',  image: '/tft-assets/items/BrambleVest.png',  slot: 1 },
      { name: "Dragon's Claw", image: '/tft-assets/items/DragonsClaw.png',  slot: 2 },
      { name: 'Ionic Spark',   image: '/tft-assets/items/IonicSpark.png',   slot: 3 },
    ],
    altItems: [
      { name: "Warmog's Armor", image: '/tft-assets/items/WarmogsArmor.png',   slot: 1 },
      { name: 'Sunfire Cape',   image: '/tft-assets/items/SunfireCape.png',    slot: 2 },
      { name: 'Frozen Heart',   image: '/tft-assets/items/FrozenHeart.png',    slot: 3 },
    ],
  },
  {
    name: 'Briar',
    cost: 1,
    role: 'default',
    portraitVariant: 'default',
    roleIcon: '⚔️',
    roleLabel: 'Early Filler',
    roleStyle: 'flex',
    priority: 1,
    note: 'Activador de Noxus + Juggernaut en early game. Reemplazar con Ambessa/Mel en etapas tardías.',
    tags: JSON.stringify([{ label: 'Noxus', type: 'noxus' }, { label: 'Juggernaut', type: 'other' }]),
    image: '/tft-assets/champions/Briar.png',
    position: 7,
    items: [
      { name: "Thief's Gloves",  image: '/tft-assets/items/ThiefsGloves.png',                    slot: 1 },
      { name: "Titan's Resolve", image: '/tft-assets/items/TitansResolve.png',  slot: 2 },
      { name: "Guinsoo's Rageblade", image: '/tft-assets/items/GuinsoosRageblade.png',           slot: 3 },
    ],
    altItems: [
      { name: 'Deathblade',    image: '/tft-assets/items/Deathblade.png', slot: 1 },
      { name: 'Bramble Vest',  image: '/tft-assets/items/BrambleVest.png',                 slot: 2 },
      { name: 'Last Whisper',  image: '/tft-assets/items/LastWhisper.png',                 slot: 3 },
    ],
  },
];

async function main() {
  console.log('Seeding Noxus Reroll build...');

  // Insertar la build
  const [build] = await db.insert(builds).values({
    name: 'Noxus Reroll',
    set: '16',
    description: 'Noxus 7 Reroll — Draven + Darius + LeBlanc 3⭐',
    notes: 'Slow roll en nivel 7 para 3⭐ en Draven, Darius y LeBlanc. Push a nivel 9 para Mel.',
    isActive: true,
  }).returning();

  console.log(`Build insertada con id=${build.id}`);

  for (const champ of NOXUS_CHAMPIONS) {
    const { items, altItems, ...champData } = champ;

    const [insertedChamp] = await db.insert(buildChampions).values({
      buildId: build.id,
      ...champData,
    }).returning();

    console.log(`  Campeón: ${champ.name} (id=${insertedChamp.id})`);

    if (items.length > 0) {
      await db.insert(buildChampionItems).values(
        items.map((item) => ({
          buildChampionId: insertedChamp.id,
          itemName: item.name,
          itemImage: item.image,
          slot: item.slot,
        }))
      );
    }

    if (altItems.length > 0) {
      await db.insert(buildChampionAltItems).values(
        altItems.map((item) => ({
          buildChampionId: insertedChamp.id,
          itemName: item.name,
          itemImage: item.image,
          slot: item.slot,
        }))
      );
    }
  }

  console.log('Done! Noxus build seeded.');
  process.exit(0);
}

main().catch((e) => { console.error(e); process.exit(1); });
