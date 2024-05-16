import Quadra from './Quadra';
import { IAgenda } from './interfaces/IAgenda';
import { IFutebol } from './interfaces/IFutebol';
import normas from './normas/normasDeUso';

export default class QuadraFutebol extends Quadra<IFutebol> {
  public futebolData: IFutebol = normas.futebol;
  
  public reservar(reservation: Date): IAgenda<IFutebol> {
    const protocolo = (Math.random() + 1).toString(30).substring(3);

    return {
      protocolo,
      data: reservation,
      regras: this.futebolData,
    };
  }
}