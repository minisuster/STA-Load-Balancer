export default class LoadBalancer {
  // import vite.config;
  // Очень важное примечание к этому заданию: все полезные нагрузки запросов должны быть заменены числовым значением строки. В противном случае задание будет считаться невыполненным.

  constructor(servers) {
    // Ejemplo de un servidor:
    // {
    //   id: "server-2",
    //   power: 3,          // Unidades de trabajo por segundo simulado
    //   activeRequest: { id: "P01", payload: "08319462", work: 4 }, // null si está libre
    //   queuedRequests: [{ id: "P02", payload: "74150328", work: 2 }],
    //   activeProgress: 0.25 // Progreso de 0 a 1 (0 si está libre)
    // }
    // Los datos son de solo lectura y se actualizan durante la simulación.
    this.servers = Object.freeze([...servers]);
    this.next = 0;
  }

  async onRequestArrival(request, sendToServer) {
    const server = this.server[this.next];



    // Ejemplo de la petición que llega:
    // {
    //   id: "request-17",
    //   payload: "08319462", // Datos que envía el cliente
    //   work: 4              // Unidades de trabajo necesarias
    // }
    const Servidor1 = this.servers[0].power;
    const Servidor2 = this.servers[1].power;
    const Servidor3 = this.servers[2].power;
    const Servidor4 = this.servers[3].power;

    const trabajoPaquete = this.request.work;

    const dividir1 = trabajoPaquete / Servidor1 ;
    const dividir2 = trabajoPaquete / Servidor2;
    const dividir3 = trabajoPaquete / Servidor3;
    const dividir4 = trabajoPaquete / Servidor4;

    // dividimos para ver donde me va a costar menos y lo ponemos en un array
    const tiempos = []


    if ((dividir1 > dividir2) ) {

      
      
    }
  }













}


