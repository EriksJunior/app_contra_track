import { FormValues } from "../initialStates";

export interface FormCompanyHandle {
  clear: () => void;
  payloadForm: () => FormValues
};