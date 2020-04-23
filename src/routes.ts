import {  Request, Response} from 'express';
import createUser from './services/CreateUsers';

export function  helloWorld (req: Request, res: Response) {
  
  const user = createUser({
    name: 'leandro',
    email: 'Teste',
    password: 'res',
    techs: ['Node', 'React', 'Angular', { title: 'Ionic', experience:10}]
  });

  return res.json({message: 'Hello World'});
}