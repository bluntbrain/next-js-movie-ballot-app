import React from "react";
import styles from "./nominee-card.module.css";

const NomineeCard = ({
  nominees,
  categoryId,
  handleSelectNominee,
  selectedNomineeId,
}: any) => {
  return (
    <div className={styles.card}>
      {nominees.map((nominee: any) => {
        const isSelected = selectedNomineeId === nominee.id;
        return (
          <div
            key={nominee.id}
            className={styles.nominee}
            onClick={(e) => {
              e.stopPropagation();
              handleSelectNominee(categoryId, nominee.id);
            }}
          >
            <h3 className={styles.nomineeTitle}>{nominee.title}</h3>
            <div className={styles.nomineeImageContainer}>
              {isSelected && (
                <img
                  src="/selectedTick.png"
                  alt={`selectedTick`}
                  className={styles.selectedTick}
                />
              )}
              <img
                src={nominee.photoUrL}
                alt={`Photo of ${nominee.title}`}
                className={`${styles.nomineeImage} ${
                  isSelected ? styles.selected : ""
                }`}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default NomineeCard;
