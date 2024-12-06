import styles from "./Cases.module.css";

export default function Cases(props) {
  const _cases = ["M", "D", "C", "B", "N", "Msc", "W"];
  return (
    <>
      <div className="element">
        <div className={styles.task}>
          <b className="taskname">{props.element.title}</b>
          <b className={styles.points}>__/{props.element.points}</b>
        </div>
        <b className={styles.word}>{props.element.word}</b>
        <div>
          <table className={styles.table}>
            <thead>
              <tr className={styles.tableHead}>
                <th></th>
                <th>l.poj</th>
                <th>l.mng</th>
              </tr>
            </thead>
            <tbody>
              {_cases.map((_case) => {
                return (
                  <tr key={_case} className={styles.cases}>
                    <td className={styles.caseName}>{_case}</td>
                    <td className={styles.dots}>...........................</td>
                    <td className={styles.dots}>...........................</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
