var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  default: () => src_default,
  generateFilter: () => generateFilter,
  generateSort: () => generateSort
});
module.exports = __toCommonJS(src_exports);
var import_axios = __toESM(require("axios"));
var import_query_string = require("query-string");
var import_ts_pattern = require("ts-pattern");
var axiosInstance = import_axios.default.create();
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    var _a, _b, _c;
    const customError = {
      ...error,
      message: (_b = (_a = error.response) == null ? void 0 : _a.data) == null ? void 0 : _b.message,
      statusCode: (_c = error.response) == null ? void 0 : _c.status
    };
    return Promise.reject(customError);
  }
);
var mapOperator = (operator) => {
  const op = (0, import_ts_pattern.match)(operator).with("eq", () => "equals" /* EQUALS */).with("ne", () => "notEquals" /* NOT_EQUALS */).with("null", () => "specified" /* SPECIFIED */).with("nnull", () => "specified" /* SPECIFIED */).with("in", () => "in" /* IN */).with("nin", () => "notIn" /* NOT_IN */).with("contains", () => "contains" /* CONTAINS */).with("ncontains", () => "doesNotContain" /* DOES_NOT_CONTAIN */).with("gt", () => "greaterThan" /* GREATER_THAN */).with("gte", () => "greaterThanOrEqual" /* GREATER_THAN_OR_EQUAL */).with("lt", () => "lessThan" /* LESS_THAN */).with("lte", () => "lessThanOrEqual" /* LESS_THAN_OR_EQUAL */).otherwise((notSupportedOperator) => {
    throw Error(`Operator ${notSupportedOperator} is not supported`);
  });
  return `${op}`;
};
var generateSort = (sort) => {
  if (sort && sort.length > 0) {
    const _sort = [];
    const _order = [];
    sort.map((item) => {
      _sort.push(item.field);
      _order.push(item.order);
    });
    return {
      _sort,
      _order
    };
  }
  return;
};
var generateFilter = (filters) => {
  const queryFilters = {};
  if (filters) {
    filters.map((filter) => {
      if ("field" in filter) {
        const { field, operator, value } = filter;
        const mappedOperator = mapOperator(operator);
        queryFilters[`${field}.${mappedOperator}`] = value;
      }
    });
  }
  return queryFilters;
};
var JHipsterDataProvider = class {
  constructor(apiUrl, httpClient = axiosInstance) {
    this.getApiUrl = () => {
      return this.apiUrl;
    };
    this.getOne = async (params) => {
      const { data } = await this.httpClient.get(
        `${this.apiUrl}/${params.resource}/${params.id}`
      );
      return {
        data
      };
    };
    /**
     *
     * TODO: check default values
     **/
    this.getList = async (params = {
      hasPagination: true,
      pagination: { current: 1, pageSize: 10 },
      resource: ""
    }) => {
      const url = `${this.apiUrl}/${params.resource}`;
      const { current = 1, pageSize = 10 } = params.pagination ?? {};
      const queryFilters = generateFilter(params.filters);
      const query = params.hasPagination ? {
        _start: (current - 1) * pageSize,
        _end: current * pageSize
      } : {};
      const generatedSort = generateSort(params.sort);
      if (generatedSort) {
        const { _sort, _order } = generatedSort;
        query._sort = _sort.join(",");
        query._order = _order.join(",");
      }
      const { data, headers } = await this.httpClient.get(
        `${url}?${(0, import_query_string.stringify)(query)}&${(0, import_query_string.stringify)(queryFilters)}`
      );
      const total = +(headers["x-total-count"] ?? Number.NaN);
      return {
        data,
        total
      };
    };
    this.getMany = async (params) => {
      const idsInFilter = {
        field: "id",
        operator: "in",
        value: params.ids
      };
      const queryFilters = generateFilter([idsInFilter]);
      const { data } = await this.httpClient.get(
        `${this.apiUrl}/${params.resource}?${(0, import_query_string.stringify)(queryFilters)}`
      );
      return {
        data
      };
    };
    this.create = async (params) => {
      const url = `${this.apiUrl}/${params.resource}`;
      const { data } = await this.httpClient.post(url, params.variables);
      return {
        data
      };
    };
    this.update = async (params) => {
      const url = `${this.apiUrl}/${params.resource}/${params.id}`;
      const { data } = await this.httpClient.put(url, params.variables);
      return {
        data
      };
    };
    this.deleteOne = async (params) => {
      const url = `${this.apiUrl}/${params.resource}/${params.id}`;
      const { data } = await this.httpClient.delete(url, {
        data: params.variables
      });
      return {
        data
      };
    };
    this.custom = async (params) => {
      throw Error("Not implemented");
    };
    this.apiUrl = apiUrl;
    this.httpClient = httpClient;
  }
};
var JHipsterServer = (apiUrl, httpClient = axiosInstance) => {
  const jhipsterDataProvider = new JHipsterDataProvider(apiUrl, httpClient);
  return jhipsterDataProvider;
};
var src_default = JHipsterServer;
//# sourceMappingURL=index.js.map