
export class Util {
  static trimData(data: Object, exclude: Array = [], include: Array): any;

  static isEmail(val: string): boolean;

  static isMobile(val: string): boolean;

  // from core-util-is
  static isArray(arg);  
  static isBoolean(arg);  
  static isNull(arg);  
  static isNullOrUndefined(arg);  
  static isNumber(arg);  
  static isString(arg);  
  static isSymbol(arg);  
  static isUndefined(arg);  
  static isRegExp(re);  
  static isObject(arg);  
  static isDate(d);  
  static isError(e);  
  static isstatic(arg);  
  static isPrimitive(arg);
  
}

declare namespace Error {

  export class NafError {
    constructor(err, message, details);
  }
  
  export class BusinessError extends NafError {
    static getErrorMsg(errcode);
  }

  declare namespace ErrorCode {
    declare var UNKNOW: number;
    declare var BADPARAM: number;
    declare var NETWORK: number;
    declare var JSON_ERROR: number;
    declare var USER_NOT_EXIST: number;
    declare var BAD_PASSWORD: number;
    declare var NOT_LOGIN: number;
    declare var ACCESS_DENIED: number;
    declare var DATA_NOT_EXIST: number;
    declare var DATA_EXISTED: number;
    declare var DATA_INVALID: number;
    declare var VERIFYCODE_INVALID: number;
    declare var SERVICE_FAULT: number;
    declare var DATABASE_FAULT: number;
    declare var FILE_FAULT: number;
    declare var BUSINESS: number;
  }
}

export as namespace NafCore;