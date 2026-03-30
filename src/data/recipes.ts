const base = '/tft-assets/items';

export interface Component {
  name: string;
  image: string;
}

export interface ItemStats {
  stats: string[];
  passive?: string;
}

export const itemStats: Record<string, ItemStats> = {
  'Statikk Shiv':        { stats: ['+50% Vel. de ataque', '+15 Poder de habilidad'],                           passive: 'C/3.er ataque: <r>daña a 4 enemigos</r> y desgarra MR' },
  'Morellonomicon':       { stats: ['+20 Poder de habilidad', '+150 PV'],                                       passive: 'Aplica Quemadura (<r>1% PV máx/seg</r>) y reduce curación <r>33%</r>' },
  'Jeweled Gauntlet':     { stats: ['+35 Poder de habilidad', '+35% Golpe crítico'],                            passive: 'Las habilidades pueden ser críticas' },
  'Spear of Shojin':      { stats: ['+15% Daño de ataque', '+15 Poder de habilidad'],                          passive: 'Los ataques otorgan +5 de maná' },
  "Rabadon's Deathcap":   { stats: ['+50 Poder de habilidad', '+15% Amplificación de daño'] },
  'Hextech Gunblade':     { stats: ['+20% Daño de ataque', '+20 Poder de habilidad', '+15% Omnivampiro'],       passive: 'Cura al aliado con menor % de PV por +20% del daño hecho' },
  "Thief's Gloves":       { stats: ['+150 PV', '+20% Golpe crítico'],                                          passive: 'Ocupa 3 slots. Equipa 2 ítems aleatorios por ronda' },
  "Dragon's Claw":        { stats: ['+75 Resistencia mágica', '+9% PV máx'],                                   passive: 'Regenera +2.5% PV máx cada 2 seg' },
  'Bramble Vest':         { stats: ['+65 Armadura', '+9% PV máx'],                                             passive: 'Al recibir ataque: <r>100 daño mágico</r> a enemigos adyacentes' },
  "Warmog's Armor":       { stats: ['+500 PV', '+18% PV máx'] },
  'Blue Buff':            { stats: ['+15% Daño de ataque', '+15 Poder de habilidad', '+5% Reg. maná'],          passive: '+10% de DA y PA adicionales de todas las fuentes' },
  'Ionic Spark':          { stats: ['+15 Poder de habilidad', '+35 Resistencia mágica', '+250 PV'],             passive: 'Desgarra <r>30% MR</r> en 2 hex; al castear recibe <r>daño mágico</r>' },
  'Infinity Edge':        { stats: ['+35% Daño de ataque', '+35% Golpe crítico'],                               passive: 'Las habilidades pueden ser críticas' },
  "Guinsoo's Rageblade":  { stats: ['+10% Vel. de ataque', '+10 Poder de habilidad'],                          passive: '+7% vel. de ataque apilable por seg en combate' },
  'Deathblade':           { stats: ['+55% Daño de ataque'],                                                    passive: 'Al eliminar un campeón: <r>+10% DA permanente</r> (hasta 5 pilas = +50%)' },
  "Runaan's Hurricane":   { stats: ['+15% Vel. de ataque', '+30 Resistencia mágica'],                          passive: 'Los ataques lanzan 2 proyectiles a enemigos distintos por <r>40% del daño</r>' },
  'Adaptive Helm':        { stats: ['+30 Resistencia mágica', '+15 Poder de habilidad'],                       passive: 'Al castear: reduce daño mágico recibido <r>15%</r> por 4 seg (máx 3 pilas)' },
  "Sterak's Gage":        { stats: ['+20% Daño de ataque', '+200 PV'],                                         passive: 'Al bajar de 60% PV: escudo de <r>25% PV máx</r> (1 vez por combate)' },
  "Titan's Resolve":      { stats: ['+20 Armadura', '+10% Vel. de ataque'],                                    passive: 'Al recibir daño: <r>+2% DA y PA</r> acumulable (máx 25 pilas = +50%)' },
  'Bloodthirster':        { stats: ['+20% Daño de ataque', '+20 Resistencia mágica'],                          passive: '+20% Omnivampiro. Al bajar de 40% PV: escudo de <r>25% PV máx</r>' },
  'Crownguard':           { stats: ['+20 Armadura', '+20 Poder de habilidad'],                                 passive: 'Inicio: otorga escudo de <r>25% PV máx</r> al aliado con más PA' },
  'Last Whisper':         { stats: ['+15% Daño de ataque', '+20% Vel. de ataque', '+20% Golpe crítico'],        passive: 'Ataques aplican <r>30% Sunder</r> (reduce armadura enemiga)' },
  'Gargoyle Stoneplate':  { stats: ['+30 Armadura', '+30 Resistencia mágica', '+100 PV'],                       passive: '+10 Arm/RM por cada enemigo que ataca al portador' },
  'Frozen Heart':         { stats: ['+25 Armadura', '+25 Resistencia mágica'],                                  passive: 'Inicio: +20 maná. Al bajar de 40% PV: escudo de +20% PV máx' },
  'Sunfire Cape':         { stats: ['+20 Armadura', '+150 PV', '+8% PV máx'],                                  passive: 'C/2 seg: aplica Quemadura (<r>1% PV máx/seg</r>) a enemigo adyacente' },
  "Archangel's Staff":    { stats: ['+30 Poder de habilidad'],                                                  passive: '+20% PA adicional cada 5 seg en combate' },
  "Zeke's Herald":        { stats: ['+10% Daño de ataque', '+150 PV'],                                         passive: '+30% vel. de ataque a aliados en la misma fila (2 hex)' },
};

export const recipes: Record<string, [Component, Component]> = {
  'Statikk Shiv':         [{ name: 'Recurve Bow',          image: `${base}/RecurveBow.png` },          { name: 'Tear of the Goddess',   image: `${base}/TearOfTheGoddess.png` }],
  'Morellonomicon':        [{ name: 'Needlessly Large Rod', image: `${base}/NeedlesslyLargeRod.png` }, { name: "Giant's Belt",          image: `${base}/GiantsBelt.png` }],
  'Jeweled Gauntlet':      [{ name: 'Needlessly Large Rod', image: `${base}/NeedlesslyLargeRod.png` }, { name: 'Sparring Gloves',       image: `${base}/SparringGloves.png` }],
  'Spear of Shojin':       [{ name: 'B.F. Sword',           image: `${base}/BFSword.png` },            { name: 'Tear of the Goddess',   image: `${base}/TearOfTheGoddess.png` }],
  "Rabadon's Deathcap":    [{ name: 'Needlessly Large Rod', image: `${base}/NeedlesslyLargeRod.png` }, { name: 'Needlessly Large Rod',  image: `${base}/NeedlesslyLargeRod.png` }],
  'Hextech Gunblade':      [{ name: 'B.F. Sword',           image: `${base}/BFSword.png` },            { name: 'Needlessly Large Rod',  image: `${base}/NeedlesslyLargeRod.png` }],
  "Thief's Gloves":        [{ name: 'Sparring Gloves',      image: `${base}/SparringGloves.png` },     { name: 'Sparring Gloves',       image: `${base}/SparringGloves.png` }],
  "Dragon's Claw":         [{ name: 'Negatron Cloak',       image: `${base}/NegatronCloak.png` },      { name: 'Negatron Cloak',        image: `${base}/NegatronCloak.png` }],
  'Bramble Vest':          [{ name: 'Chain Vest',           image: `${base}/ChainVest.png` },          { name: 'Chain Vest',            image: `${base}/ChainVest.png` }],
  "Warmog's Armor":        [{ name: "Giant's Belt",         image: `${base}/GiantsBelt.png` },         { name: "Giant's Belt",          image: `${base}/GiantsBelt.png` }],
  "Zeke's Herald":         [{ name: 'B.F. Sword',           image: `${base}/BFSword.png` },            { name: "Giant's Belt",          image: `${base}/GiantsBelt.png` }],
  'Blue Buff':             [{ name: 'Tear of the Goddess',  image: `${base}/TearOfTheGoddess.png` },  { name: 'Tear of the Goddess',   image: `${base}/TearOfTheGoddess.png` }],
  'Ionic Spark':           [{ name: 'Needlessly Large Rod', image: `${base}/NeedlesslyLargeRod.png` }, { name: 'Negatron Cloak',        image: `${base}/NegatronCloak.png` }],
  "Archangel's Staff":     [{ name: 'Needlessly Large Rod', image: `${base}/NeedlesslyLargeRod.png` }, { name: 'Tear of the Goddess',   image: `${base}/TearOfTheGoddess.png` }],
  'Gargoyle Stoneplate':   [{ name: 'Chain Vest',           image: `${base}/ChainVest.png` },          { name: 'Negatron Cloak',        image: `${base}/NegatronCloak.png` }],
  'Sunfire Cape':          [{ name: "Giant's Belt",         image: `${base}/GiantsBelt.png` },         { name: 'Chain Vest',            image: `${base}/ChainVest.png` }],
  'Frozen Heart':          [{ name: 'Chain Vest',           image: `${base}/ChainVest.png` },          { name: 'Tear of the Goddess',   image: `${base}/TearOfTheGoddess.png` }],
  'Infinity Edge':         [{ name: 'B.F. Sword',           image: `${base}/BFSword.png` },            { name: 'Sparring Gloves',       image: `${base}/SparringGloves.png` }],
  "Guinsoo's Rageblade":   [{ name: 'Needlessly Large Rod', image: `${base}/NeedlesslyLargeRod.png` }, { name: 'Recurve Bow',           image: `${base}/RecurveBow.png` }],
  'Last Whisper':          [{ name: 'Recurve Bow',           image: `${base}/RecurveBow.png` },          { name: 'Sparring Gloves',       image: `${base}/SparringGloves.png` }],
  'Deathblade':            [{ name: 'B.F. Sword',            image: `${base}/BFSword.png` },             { name: 'B.F. Sword',            image: `${base}/BFSword.png` }],
  "Runaan's Hurricane":    [{ name: 'Recurve Bow',           image: `${base}/RecurveBow.png` },          { name: 'Negatron Cloak',        image: `${base}/NegatronCloak.png` }],
  'Adaptive Helm':         [{ name: 'Negatron Cloak',        image: `${base}/NegatronCloak.png` },       { name: 'Tear of the Goddess',   image: `${base}/TearOfTheGoddess.png` }],
  "Sterak's Gage":         [{ name: 'B.F. Sword',            image: `${base}/BFSword.png` },             { name: "Giant's Belt",          image: `${base}/GiantsBelt.png` }],
  "Titan's Resolve":       [{ name: 'Chain Vest',            image: `${base}/ChainVest.png` },           { name: 'Recurve Bow',           image: `${base}/RecurveBow.png` }],
  'Bloodthirster':         [{ name: 'B.F. Sword',            image: `${base}/BFSword.png` },             { name: 'Negatron Cloak',        image: `${base}/NegatronCloak.png` }],
  'Crownguard':            [{ name: 'Needlessly Large Rod',  image: `${base}/NeedlesslyLargeRod.png` },  { name: 'Chain Vest',            image: `${base}/ChainVest.png` }],
};
