export const getContacts = (state) => state.contacts.items || [];
export const getFilters = (state) => state.filters.value || "";
export const selectIsLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;

import { createSelector } from "@reduxjs/toolkit";

export const selectFilteredContacts = createSelector(
  [getContacts, getFilters],
  (contacts, filters) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filters.toLowerCase())
    );
  }
);
