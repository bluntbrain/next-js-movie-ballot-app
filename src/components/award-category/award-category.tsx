import React from "react";
import NomineeCard from "../nominee-card/nominee-card";
import styles from "./award-category.module.css";

const AwardCategory = ({
  categories,
  handleSelectNominee,
  selections,
  submitAttempted,
}: any) => {
  return (
    <div>
      {categories.map((category: any, index: number) => (
        <div key={category.id}>
          <h2 className={styles.categoryTitle}>{category.title}</h2>
          <h4
            className={`${styles.categoryError} ${
              submitAttempted && !selections[category.id] ? "" : styles.hidden
            }`}
          >
            Please select one option
          </h4>
          <NomineeCard
            nominees={category.items}
            categoryId={category.id}
            handleSelectNominee={handleSelectNominee}
            selectedNomineeId={selections[category.id]}
          />
        </div>
      ))}
    </div>
  );
};

export default AwardCategory;
