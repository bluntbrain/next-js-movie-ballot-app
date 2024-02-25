import React, { useMemo } from "react";
import styles from "./results-modal.module.css";

const ResultsModal = ({ isOpen, onClose, selections, categories }: any) => {
  if (!isOpen) return null;

  const selectionsList = useMemo(() => {
    return Object.entries(selections).map(([categoryId, nomineeId]) => {
      const category = categories.find((cat: any) => cat.id === categoryId);
      const categoryTitle = category?.title || "Unknown Category";

      const nomineeTitle =
        category?.items.find((nom: any) => nom.id === nomineeId)?.title ||
        "Unknown Nominee";

      return `${categoryTitle}: ${nomineeTitle}`;
    });
  }, [selections, categories]);

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <div className={styles.modalHeader}>
          <h2>Success</h2>
          <button className={styles.closeButton} onClick={onClose}>
            X
          </button>
        </div>
        <img
          src="/success.gif"
          alt="Success GIF"
          className={styles.successGif}
        />
        <ul className={styles.selectionsList}>
          {selectionsList.map((selection, index) => (
            <li key={index} className={styles.selectionItem}>
              {selection}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ResultsModal;
