export const NAME_REGEX = /^[\p{L}\s]+$/u;

export const ID_REGEX = /^[0-9a-fA-F]{24}$/;

export const DATE_REGEX = /^\d{4}-\d{2}-\d{2}$/;

export const CNPJ_REGEX = /^\d{14}$/;

export const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$/;
