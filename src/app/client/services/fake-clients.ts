import { Client } from 'src/app/shared/models/client.model';
import { StateClient } from 'src/app/shared/enums/state-client.enum';
export const fakeClients: Client[] = [
 new Client({
  id: '123',
  name: 'nouha',
  email: 'e',
  state: StateClient.ACTIF,

 }),
 new Client({
  id: '127',
  name: 'ahmed',
  email: 'e@gmail.com',
  state: StateClient.INACTIF
 })
];
