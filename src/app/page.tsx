"use client";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import AwardCategory from "@/components/award-category/award-category";
import ResultsModal from "@/components/results-modal/results-modal";
import { dummyData } from "@/lib/data";

type SelectionsType = {
  [categoryId: string]: string | undefined;
};

export default function Home() {
  const [categories, setCategories] = useState([]);
  const [selections, setSelections] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [submitAttempted, setSubmitAttempted] = useState(false);

  const handleSelectNominee = (categoryId: string, nomineeId: string) => {
    setSelections((prevSelections: SelectionsType) => {
      const isSelected = prevSelections[categoryId] === nomineeId;
      if (isSelected) {
        const { [categoryId]: removed, ...rest } = prevSelections;
        return { ...rest };
      } else {
        return { ...prevSelections, [categoryId]: nomineeId };
      }
    });
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSubmitAttempted(false);
    setSelections({});
  };

  const handleSubmit = () => {
    setSubmitAttempted(true);
    const allSelected = categories.every((category) =>
      selections.hasOwnProperty(category.id)
    );
    if (!allSelected) {
      return;
    }
    setIsModalOpen(true);
  };

  const fetchCategories = async () => {
    setCategories(dummyData);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Awards 2021</h1>
      <AwardCategory
        categories={categories}
        handleSelectNominee={handleSelectNominee}
        selections={selections}
        submitAttempted={submitAttempted}
      />
      <ResultsModal
        isOpen={isModalOpen}
        selections={selections}
        onClose={handleCloseModal}
        categories={categories}
      />
      <button className={styles.submitButton} onClick={handleSubmit}>
        Submit Selections
      </button>
    </div>
  );
}
