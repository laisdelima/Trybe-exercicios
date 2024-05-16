import Clube from './Clube';
import QuadraFutebol from './QuadraFutebol';
import QuadraTenis from './QuadraTenis';
import { IFutebol } from './interfaces/IFutebol';
import { ITenis } from './interfaces/ITenis';

const clube = new Clube<IFutebol | ITenis>();
const quadraFut = new QuadraFutebol();
const quadraTenis = new QuadraTenis();

clube.adicionarQuadra(quadraFut);
clube.adicionarQuadra(quadraTenis);


const data = new Date('2024-05-28');
const dataTenis = new Date('2024-05-29');

const reserva = clube.buscarQuadra(0).reservar(data);
console.log(reserva);
const reservaTenis = clube.buscarQuadra(1).reservar(dataTenis);
console.log(reservaTenis);

