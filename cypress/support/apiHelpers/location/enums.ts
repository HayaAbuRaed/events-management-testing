export const POS_IMPORT_TYPES = {
  None: 0,
  "Sales and Labor": 1,
  Sales: 2,
  "Sales Summary": 3,
  "Sales Summary And Labor": 4,
} as const;

export const LABOR_DATA_TRACKING_SYSTEM = {
  "Managed In POS": 1,
  "Managed In R365": 2,
} as const;

export const OVERTIME_TRACKING_TYPE = {
  "Tracked in POS": 0,
  "Over 40": 1,
  "Over 40 Over 8": 2,
  "R365 OT Rules": 3,
} as const;

export const LOCATION_TYPES = {
  Restaurant: 1,
  AccountingEntity: 2,
  Commissary: 3,
} as const;

export const SOS_SYSTEM = {
  // @ts-ignore
  None: null,
  "Drive Thru": 1,
} as const;
