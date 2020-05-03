


export class Endpoints {

  private static PROTOCOL: string = 'http://';
  private static SERVER: string = 'localhost:';
  private static PORT: string = '8000';
  private static PREFIX_API: string = '/api';
  private static PREFIX_SEARCH: string = '/search';
  private static PREFIX_REPORT: string = 'reportes/';
  private static SERVER_PATH_CONTEXT: string = Endpoints.PROTOCOL + Endpoints.SERVER + Endpoints.PORT + Endpoints.PREFIX_API;

  private static CLIENT_PATH_CONTEXT: string = '/clientes/clientes/';
  public static CLIENT_REPORT_BALANCE_LAST_SHOPPING: string = Endpoints.PREFIX_SEARCH + '/balance-ultimas-compras-cliente?codigoCliente='
  public static CLIENT_REPORT_PRINT_BASIC_DATA: string = Endpoints.PREFIX_REPORT + 'datos-basicos/'
  public static get CLIENTES_ALL(): string { return this.SERVER_PATH_CONTEXT + this.CLIENT_PATH_CONTEXT; }
}
