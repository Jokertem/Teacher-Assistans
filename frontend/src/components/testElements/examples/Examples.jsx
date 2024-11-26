import styles from "./Examples.module.css";

export default function Examples(props) {
  return (
    <>
      <div className="element">
        <div className={styles.task}>
          <b className="taskname">{props.element.title}</b>
          <b className={styles.points}>__/{props.element.points}</b>
        </div>
        <div className={styles.examples}>
          {props.element.exa.map((ex) => {
            return (
              <>
                <span
                  key={ex}
                >{`${ex}..................................`}</span>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
