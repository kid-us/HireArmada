"use client";
import React, { createContext, useState, useContext } from "react";

type HireNowModalContextType = {
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
};

const HireNowModalContext = createContext<HireNowModalContextType | undefined>(
  undefined
);

export const HireNowModalProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <HireNowModalContext.Provider
      value={{ isModalOpen, openModal, closeModal }}
    >
      {children}
    </HireNowModalContext.Provider>
  );
};

export const useHireNowModal = () => {
  const context = useContext(HireNowModalContext);
  if (context === undefined) {
    throw new Error(
      "useHireNowModal must be used within a HireNowModalProvider"
    );
  }
  return context;
};
