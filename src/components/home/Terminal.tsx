import React from "react";
import styles from "./Terminal.module.scss";

interface TerminalProps {
  title: string;
  entries: { command: string; output: string[] }[];
}

const CHAR_MS = 45; // vitesse de frappe
const PAUSE_MS = 450; // pause entre deux commandes

/**
 * Terminal décoratif : les commandes sont « tapées » et leurs sorties
 * apparaissent ensuite. Tout est en CSS (aucun JS côté client) et le texte
 * complet est présent dans le HTML.
 */
export function Terminal({ title, entries }: TerminalProps) {
  let clock = 600;

  return (
    <div className={styles.terminal}>
      <div className={styles.bar}>
        <span className={styles.dots} aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        <span className={styles.title}>{title}</span>
      </div>
      <div className={styles.body}>
        {entries.map((entry) => {
          const start = clock;
          const typed = start + entry.command.length * CHAR_MS;
          clock = typed + PAUSE_MS + 150;

          return (
            <div key={entry.command} className={styles.entry}>
              <div
                className={styles.line}
                style={{ "--delay": `${start}ms` } as React.CSSProperties}
              >
                <span className={styles.prompt}>$</span>
                <span
                  className={styles.command}
                  style={
                    {
                      "--chars": entry.command.length,
                      "--delay": `${start}ms`,
                      "--duration": `${entry.command.length * CHAR_MS}ms`,
                    } as React.CSSProperties
                  }
                >
                  {entry.command}
                </span>
              </div>
              {entry.output.map((text) => (
                <div
                  key={text}
                  className={styles.output}
                  style={{ "--delay": `${typed + 150}ms` } as React.CSSProperties}
                >
                  {text}
                </div>
              ))}
            </div>
          );
        })}
        <div className={styles.line} style={{ "--delay": `${clock}ms` } as React.CSSProperties}>
          <span className={styles.prompt}>$</span>
          <span className={styles.cursor} aria-hidden="true" />
        </div>
      </div>
    </div>
  );
}
