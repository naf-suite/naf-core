'use strict';

const UNKNOW = 'UNKNOW';
const BADPARAM = 'BADPARAM';
const NETWORK = 'NETWORK';
const JSON_ERROR = 'JSON_ERROR';
const USER_NOT_EXIST = 'USER_NOT_EXIST';
const BAD_PASSWORD = 'BAD_PASSWORD';
const NOT_LOGIN = 'NOT_LOGIN';
const ACCESS_DENIED = 'ACCESS_DENIED';
const DATA_NOT_EXIST = 'DATA_NOT_EXIST';
const DATA_EXISTED = 'DATA_EXISTED';
const DATA_INVALID = 'DATA_INVALID';
const VERIFYCODE_INVALID = 'VERIFYCODE_INVALID';
const SERVICE_FAULT = 'SERVICE_FAULT';
const DATABASE_FAULT = 'DATABASE_FAULT';
const FILE_FAULT = 'FILE_FAULT';
const USER_NOT_BIND = 'USER_NOT_BIND';
const BUSINESS = 'BUSINESS';

const ErrorCode = {
  [UNKNOW]: -1,
  [BADPARAM]: -2,
  [NETWORK]: -3,
  [JSON_ERROR]: -4,
  [USER_NOT_EXIST]: -5,
  [BAD_PASSWORD]: -6,
  [NOT_LOGIN]: -7,
  [ACCESS_DENIED]: -8,
  [DATA_NOT_EXIST]: -9,
  [DATA_EXISTED]: -10,
  [DATA_INVALID]: -11,
  [VERIFYCODE_INVALID]: -12,
  [SERVICE_FAULT]: -13,
  [DATABASE_FAULT]: -14,
  [FILE_FAULT]: -15,
  [USER_NOT_BIND]: -16,
  [BUSINESS]: -100,
};

const ErrorMessage = {
  [UNKNOW]: '系统错误',
  [BADPARAM]: '参数错误',
  [NETWORK]: '网络错误',
  [JSON_ERROR]: 'JSON错误',
  [USER_NOT_EXIST]: '用户不存在',
  [BAD_PASSWORD]: '密码错误',
  [NOT_LOGIN]: '未登录',
  [ACCESS_DENIED]: '禁止访问',
  [DATA_NOT_EXIST]: '数据不存在',
  [DATA_EXISTED]: '数据已存在',
  [DATA_INVALID]: '无效数据',
  [VERIFYCODE_INVALID]: '验证码无效',
  [SERVICE_FAULT]: '服务错误',
  [DATABASE_FAULT]: '数据库错误',
  [FILE_FAULT]: '文件错误',
  [USER_NOT_BIND]: '用户未绑定',
  [BUSINESS]: '业务错误',
};

const errmsg = err => {
  for (const key in ErrorMessage) {
    if (ErrorCode[key] === err) {
      return ErrorMessage[key];
    }
  }
};

module.exports = {
  ErrorCode,
  errmsg,
};
