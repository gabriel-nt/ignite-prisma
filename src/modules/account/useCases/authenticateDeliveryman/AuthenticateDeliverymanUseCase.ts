import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { prisma } from '../../../../database/prismaClient';

interface IAuthenticateDeliveryman {
  username: string;
  password: string;
}

export class AuthenticateDeliverymanUseCase {
  async execute({ username, password }: IAuthenticateDeliveryman) {
    const deliveryMan = await prisma.deliveryMan.findFirst({
      where: {
        username,
      },
    });

    if (!deliveryMan) {
      throw new Error('Username or password invalid!');
    }

    const passwordMatch = await compare(password, deliveryMan.password);

    if (!passwordMatch) {
      throw new Error('Username or password invalid!');
    }

    const token = sign({ username }, 'eaf5df7b88a013748ceb2f2161f90171', {
      subject: deliveryMan.id,
      expiresIn: '1d',
    });

    return token;
  }
}
