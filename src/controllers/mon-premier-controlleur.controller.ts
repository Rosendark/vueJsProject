import {get} from '@loopback/rest';


export class MonPremierControlleurController {
  @get('/hello')
  hello(): string {
    return 'Hello world!';
  }
}
