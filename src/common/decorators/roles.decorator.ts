import { Role } from '@prisma/client';
import { SetMetadata } from '@nestjs/common';

export const Roles = (...roles: Role[]) => SetMetadata('roles', roles);