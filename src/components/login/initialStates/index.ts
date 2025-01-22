export interface FormValues {
  name: string | null
  login: string | null
  password: string | null
};

export const INITIAL_STATE_USER: FormValues = {
  name: null,
  login: null,
  password: null,
}