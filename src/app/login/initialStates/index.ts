export interface FormValues {
  name: string | null
  lastname: string | null
  email: string | null
  password: string | null
};

export const INITIAL_STATE_USER: FormValues = {
  name: null,
  lastname: null,
  email: null,
  password: null,
}