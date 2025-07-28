// src/common/parsers.js

export function parseModelsEntries(entries) {
  // If entries.items exists, return the array, else return an empty array
  return entries && entries.items ? entries.items : []
}

export function parsePaginatedEntries(entries, page = 1) {
  return {
    items: entries && entries.items ? entries.items : [],
    total: entries && entries.total ? entries.total : 0,
    skip: entries && entries.skip ? entries.skip : 0,
    limit: entries && entries.limit ? entries.limit : 0,
    page,
  }
}