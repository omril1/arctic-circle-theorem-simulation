import style from './Block.module.scss';
import classNames from 'classnames';
import BlockState from './BlockState';
import { memo } from 'react';

interface Props {
  x: number;
  y: number;
  orientation: BlockState;
}

const contentMap = {
  left: '⬅',
  right: '➡',
  top: '⬆',
  down: '⬇',
};

const GRID_UNIT = 30;

export default memo(function Block(props: Props) {
  const content = contentMap[props.orientation];
  const className = classNames(style.block, style[props.orientation]);

  return (
    <div className={className} style={{ left: GRID_UNIT * props.x, top: GRID_UNIT * props.y }}>
      {content}
    </div>
  );
});
