// src/index.ts
import axios from "axios";
import { stringify } from "query-string";
import { match } from "ts-pattern";
var axiosInstance = axios.create();
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
  const op = match(operator).with("eq", () => "equals" /* EQUALS */).with("ne", () => "notEquals" /* NOT_EQUALS */).with("null", () => "specified" /* SPECIFIED */).with("nnull", () => "specified" /* SPECIFIED */).with("in", () => "in" /* IN */).with("nin", () => "notIn" /* NOT_IN */).with("contains", () => "contains" /* CONTAINS */).with("ncontains", () => "doesNotContain" /* DOES_NOT_CONTAIN */).with("gt", () => "greaterThan" /* GREATER_THAN */).with("gte", () => "greaterThanOrEqual" /* GREATER_THAN_OR_EQUAL */).with("lt", () => "lessThan" /* LESS_THAN */).with("lte", () => "lessThanOrEqual" /* LESS_THAN_OR_EQUAL */).otherwise((notSupportedOperator) => {
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
        `${url}?${stringify(query)}&${stringify(queryFilters)}`
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
        `${this.apiUrl}/${params.resource}?${stringify(queryFilters)}`
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
export {
  src_default as default,
  generateFilter,
  generateSort
};
//# sourceMappingURL=index.mjs.map