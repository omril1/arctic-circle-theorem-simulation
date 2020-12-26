import Block from '../Block';
import BlockState from '../Block/BlockState';
import ButtonsPanel from '../ButtonsPanel';
import Extents from '../Extents';
import style from './Board.module.scss';
import { CSSProperties, useState } from 'react';

interface IBlock {
  x: number;
  y: number;
  state: BlockState;
}

const initialState: IBlock[] = [
  { x: 0, y: 0, state: 'left' },
  { x: 1, y: 0, state: 'right' },
  // { x: 6, y: 7, state: 'down' },
  // { x: 8, y: 7, state: 'top' },
];

const GRID_UNIT = 30;

export default function Board() {
  const [generation, setGeneration] = useState(1);
  const [blocks, setBlocks] = useState(initialState);

  function onEvolve() {
    console.log('evolving!');
    // setBlocks(blocks.map(randomBlock));
    setBlocks(
      blocks
        .filter(
          b1 =>
            !(
              (b1.state === 'right' &&
                blocks.some(b2 => b2.state === 'left' && b2.x === b1.x + 1 && b1.y === b2.y)) ||
              (b1.state === 'left' &&
                blocks.some(b2 => b2.state === 'right' && b2.x === b1.x - 1 && b1.y === b2.y)) ||
              (b1.state === 'down' &&
                blocks.some(b2 => b2.state === 'top' && b2.y === b1.y + 1 && b1.x === b2.x)) ||
              (b1.state === 'top' &&
                blocks.some(b2 => b2.state === 'down' && b2.y === b1.y - 1 && b1.x === b2.x))
            ),
        )
        .map(b => ({
          state: b.state,
          x: b.state === 'right' ? b.x + 1 : b.state === 'left' ? b.x - 1 : b.x,
          y: b.state === 'down' ? b.y + 1 : b.state === 'top' ? b.y - 1 : b.y,
        })),
    );
    setGeneration(generation + 1);
  }
  const GRID_STYLE: CSSProperties = {
    width: GRID_UNIT * (generation * 2),
    height: GRID_UNIT * (generation * 2),
  };

  return (
    <div>
      <ButtonsPanel onEvolve={onEvolve} />

      <div className={style.grid} style={GRID_STYLE}>
        <Extents generation={generation} />

        {blocks.map((block, i) => (
          <Block
            key={i}
            x={block.x + generation - 1}
            y={block.y + generation - 1}
            orientation={block.state}
          />
        ))}
      </div>
    </div>
  );
}
