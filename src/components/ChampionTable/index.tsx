import Image from 'next/image';
import { TableRow, RoleStyle } from '@/data/tabla';
import { recipes } from '@/data/recipes';
import styles from './ChampionTable.module.scss';

const costClass: Record<number, string> = {
  1: styles.c1,
  2: styles.c2,
  3: styles.c3,
  4: styles.c4,
};

const costLabel: Record<number, string> = {
  1: '1 Gold',
  2: '2 Gold',
  3: '3 Gold',
  4: '4 Gold',
};

const roleClass: Record<RoleStyle, string> = {
  carry: styles.rCarry,
  ap: styles.rAp,
  tank: styles.rTank,
  flex: styles.rFlex,
};

interface ChampionTableProps {
  rows: TableRow[];
}

export default function ChampionTable({ rows }: ChampionTableProps) {
  return (
    <div className={styles.tableWrap}>
      <table>
        <thead>
          <tr>
            <th>Campeón</th>
            <th>Rol</th>
            <th>Traits</th>
            <th>Items Recomendados</th>
            <th>Prioridad</th>
            <th>Notas</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.name}>
              <td>
                <div className={styles.champCell}>
                  <div className={`${styles.portraitWrap} ${styles[row.portraitVariant]}`}>
                    <Image
                      src={row.image}
                      alt={row.name}
                      width={60}
                      height={60}
                      unoptimized
                    />
                    {row.portraitVariant === 'carry' && (
                      <span className={`${styles.plabel} ${styles.plabelCarry}`}>CARRY</span>
                    )}
                    {row.portraitVariant === 'unlock' && (
                      <span className={`${styles.plabel} ${styles.plabelUnlock}`}>🔓</span>
                    )}
                  </div>
                  <div className={styles.champInfo}>
                    <div className={styles.champName}>{row.name}</div>
                    <span className={`${styles.costBadge} ${costClass[row.cost]}`}>
                      {costLabel[row.cost]}
                    </span>
                  </div>
                </div>
              </td>
              <td>
                <span className={`${styles.roleBadge} ${roleClass[row.roleStyle]}`}>
                  {row.roleIcon} {row.roleLabel}
                </span>
              </td>
              <td>
                <div className={styles.traitsCell}>
                  {row.tags.map((tag) => (
                    <span
                      key={tag.label}
                      className={`${styles.ttag} ${tag.type === 'yordle' ? styles.ttY : styles.ttO}`}
                    >
                      {tag.label}
                    </span>
                  ))}
                </div>
              </td>
              <td>
                <div className={styles.itemsCell}>
                  {row.items.map((item, i) => {
                    const recipe = recipes[item.name];
                    return (
                      <div key={i} className={styles.itemSlot}>
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={54}
                          height={54}
                          unoptimized
                        />
                        {recipe && (
                          <div className={styles.components}>
                            {recipe.map((comp, j) => (
                              <Image
                                key={j}
                                src={comp.image}
                                alt={comp.name}
                                title={comp.name}
                                width={27}
                                height={27}
                                unoptimized
                                className={styles.compImg}
                                style={{ width: 27, height: 27 }}
                              />
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </td>
              <td>
                <div className={styles.stars}>
                  {Array.from({ length: 5 }, (_, i) => (
                    <span key={i} className={i < row.priority ? styles.star : styles.starEmpty}>
                      ★
                    </span>
                  ))}
                </div>
              </td>
              <td>
                <p className={styles.note}>{row.note}</p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
