


export class Endpoints {

  private static PROTOCOL: string = 'http://';
  private static SERVER: string = 'localhost:';
  private static PORT: string = '8000';
  private static PREFIX_API: string = '/api';
  private static SERVER_PATH_CONTEXT: string = Endpoints.PROTOCOL + Endpoints.SERVER + Endpoints.PORT + Endpoints.PREFIX_API;

  private static CLIENT_PATH_CONTEXT: string = '/clientes/clientes/';
  public static get CLIENTES_ALL(): string { return this.SERVER_PATH_CONTEXT + this.CLIENT_PATH_CONTEXT; }

}
