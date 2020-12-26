import style from './ButtonsPanel.module.scss';

interface Props {
  onEvolve: VoidFunction;
}

export default function ButtonsPanel(props: Props) {
  return (
    <div className={style.ButtonsPanel}>
      <button onClick={props.onEvolve}>evolve</button>
    </div>
  );
}
