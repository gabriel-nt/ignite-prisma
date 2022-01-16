import { hash } from 'bcrypt';
import { prisma } from '../../../../database/prismaClient';

interface ICreateDeliveryman {
  username: string;
  password: string;
}

export class CreateDeliverymanUseCase {
  async execute({ password, username }: ICreateDeliveryman) {
    const clientExist = await prisma.deliveryMan.findFirst({
      where: {
        username: {
          mode: 'insensitive',
        },
      },
    });

    if (clientExist) {
      throw new Error('Deliveryman already exists');
    }

    const hasPassword = await hash(password, 10);

    const client = await prisma.deliveryMan.create({
      data: {
        username,
        password: hasPassword,
      },
    });

    return client;
  }
}
