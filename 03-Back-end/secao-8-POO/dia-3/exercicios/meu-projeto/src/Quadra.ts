import { IAgenda } from './interfaces/IAgenda';

abstract class Quadra<T> {
  abstract reservar(reservation: Date): IAgenda<T>;
}

export default Quadra;