import style from './Extents.module.scss';

const UNIT = 30;

interface Props {
  generation: number;
}

export default function Extents({ generation }: Props) {
  const unitTimesGen = generation * UNIT;
  const startingPosition = `M ${unitTimesGen},0`;
  const quad1 = `h ${UNIT} v ${UNIT}`.repeat(generation);
  const quad2 = `v ${UNIT} h ${-UNIT}`.repeat(generation);
  const quad3 = `h ${-UNIT} v ${-UNIT}`.repeat(generation);
  const quad4 = `v ${-UNIT} h ${UNIT}`.repeat(generation);
  const d = `${startingPosition} ${quad1} ${quad2} ${quad3} ${quad4}`;

  return (
    <svg className={style.Extents} width={unitTimesGen * 2} height={unitTimesGen * 2}>
      <path d={d} />
    </svg>
  );
}
