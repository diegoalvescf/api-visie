import { Request, Response } from 'express';
import UserService from '../services/UserService';

class UserController {
  private _userService: UserService;

  constructor() {
    this._userService = new UserService();
  }

  async create(req: Request, res: Response) {
    try {
      const user = await this._userService.create(req.body);
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
      const user = await this._userService.findById(id);
      return res.json(user);
    } catch (error) {
      return res.status(500).send({
        error: 'Something wrong happened, try again',
      });
    }
  }

  async findAll(req: Request, res: Response) {
    try {
      const users = await this._userService.findAll();
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
      const updatedUser = await this._userService.update(id, req.body);
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
      await this._userService.delete(id);
      return res.json({ message: 'User deleted successfully' });
    } catch (error) {
      return res.status(500).send({
        error: 'Delete failed',
      });
    }
  }
}

export default UserController;
