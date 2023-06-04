import { Request, Response } from 'express';
import UserRepository from '../repositories/UserRepository';

class UserController {
  private userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  async create(req: Request, res: Response) {
    try {
      const { cpf, rg } = req.body;

      const userExists = await this.userRepository.findByCpfOrRg(cpf, rg);

      if (userExists) {
        return res.status(400).json({
          error: 'Registration failed',
          message: 'User already exists',
        });
      }

      const user = await this.userRepository.create(req.body);
      return res.json(user);
    } catch (error) {
      return res.status(500).send({
        error: 'Registration failed',
      });
    }
  }

  async findById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const user = await this.userRepository.findById(id);
      return res.json(user);
    } catch (error) {
      return res.status(500).send({
        error: 'Something wrong happened, try again',
      });
    }
  }

  async findAll(req: Request, res: Response) {
    try {
      const users = await this.userRepository.findAll();
      return res.json(users);
    } catch (error) {
      return res.status(500).send({
        error: 'Something wrong happened, try again',
      });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const updatedUser = await this.userRepository.update(id, req.body);
      return res.json(updatedUser);
    } catch (error) {
      return res.status(500).send({
        error: 'Update failed',
      });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;
      await this.userRepository.delete(id);
      return res.json({ message: 'User deleted successfully' });
    } catch (error) {
      return res.status(500).send({
        error: 'Delete failed',
      });
    }
  }
}

export default UserController;
