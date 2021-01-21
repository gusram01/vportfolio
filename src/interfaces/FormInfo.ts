export interface FormInfo {
  [key: string]: string | boolean | any[];
  pristine: boolean;
  valid: boolean;
  errors: Array<any>;
  controls: Array<any>;
  value: any;
}
