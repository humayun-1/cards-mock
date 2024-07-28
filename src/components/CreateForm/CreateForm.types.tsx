import { FieldError } from "react-hook-form";

/**
 * Field types for Create Card Form
 */
export type CreateCardForm = {
  firstname: string | null;
  lastname: string | null;
  birthday: string | null;
};

/**
 * Error messages helper for Create form
 */
export const ERR = {
  required: "Field is required.",
  date: "Invalid date format",
};

/**
 * Regular expression used to validate date format mm-dd-yyyy
 */
export const datePattern = /(?:(09|04|06|11)(\/|-|\.)(0[1-9]|[12]\d|30)(\/|-|\.)((?:19|20)\d\d))|(?:(01|03|05|07|08|10|12)(\/|-|\.)(0[1-9]|[12]\d|3[01])(\/|-|\.)((?:19|20)\d\d))|(?:02(\/|-|\.)(?:(?:(0[1-9]|1\d|2[0-8])(\/|-|\.)((?:19|20)\d\d))|(?:(29)(\/|-|\.)((?:(?:19|20)(?:04|08|12|16|20|24|28|32|36|40|44|48|52|56|60|64|68|72|76|80|84|88|92|96))|2000))))/;

/**
 * Error structure for form errors
 */
export interface IFormErrorProps {
  error: FieldError | undefined;
}
