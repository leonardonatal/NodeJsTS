import { container } from 'tsyringe';
import {Request, Response} from 'express';
import CreateSessionService from '../services/CreateSessionService';
import {classToClass} from 'class-transformer';
export default class SessionController {
  public async create(request: Request, response: Response): Promise<Response> {
    const {email, password} = request.body;

    const createSession = container.resolve(CreateSessionService);

    const user = await createSession.execute({
      email,
      password,
    }).catch(err => console.log(err));

    return response.json(classToClass(user));
  }
}
