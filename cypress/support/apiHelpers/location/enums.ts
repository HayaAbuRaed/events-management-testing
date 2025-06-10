export enum POSImportType {
  None,
  "Sales and Labor",
  Sales,
  "Sales Summary",
  "Sales Summary And Labor",
}

export enum LaborDataTrackingSystem {
  "Managed In POS" = 1,
  "Managed In R365" = 2,
}

export enum OvertimeTrackingType {
  "Tracked in POS",
  "Over 40",
  "Over 40 Over 8",
  "R365 OT Rules",
}

export enum LocationType {
  Restaurant = 1,
  AccountingEntity = 2,
  Commissary = 3,
}

export enum SOSSystem {
  None = null,
  "Drive Thru" = 1,
}
