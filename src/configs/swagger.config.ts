import swaggerJSDoc from 'swagger-jsdoc';

import { SERVER_PORT } from './env.config';

export const swaggerDoc = swaggerJSDoc({
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Sistema de gerenciamento de funcionários de uma empresa',
      version: '1.0.0',
      description:
        'API RESTful desenvolvida como parte de um desafio técnico para a vaga de Desenvolvedor Backend JR - Contato Seguro. O sistema oferece funcionalidades completas para gerenciamento de empresas e funcionários, incluindo criação, listagem, atualização e exclusão.',
    },
    tags: [
      { name: 'Empresa', description: 'Operações relacionadas às empresas' },
      { name: 'Funcionário', description: 'Gerenciamento de funcionários' },
    ],
    servers: [
      {
        url: `http://localhost:${SERVER_PORT}`,
        description: 'Servidor de desenvolvimento',
      },
    ],
  },
  apis: ['./routes/**'],
});
