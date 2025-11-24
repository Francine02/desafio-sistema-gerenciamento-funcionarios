import { SERVER_PORT } from '../env/env.config';

export const doc = {
  info: {
    title: 'Sistema de gerenciamento de funcionários de uma empresa',
    version: '1.0.0',
    description:
      'API RESTful desenvolvida como parte de um desafio técnico para a vaga de Desenvolvedor Backend JR - Contato Seguro. O sistema oferece funcionalidades completas para gerenciamento de empresas e funcionários, incluindo criação, listagem, atualização e exclusão.',
  },
  host: `localhost:${SERVER_PORT}`,
  servers: [
    {
      url: '/api/v1',
      description: 'Servidor de desenvolvimento',
    },
  ],
  tags: [
    { name: 'Empresa', description: 'Operações relacionadas às empresas' },
    { name: 'Funcionário', description: 'Gerenciamento de funcionários' },
  ],
  definitions: {
    CreateCompanyDto: {
      type: 'object',
      required: ['name', 'cnpj', 'city', 'sector'],
      properties: {
        name: { type: 'string', example: 'Empresa Exemplo LTDA', description: 'Nome da empresa' },
        cnpj: {
          type: 'string',
          format: 'cnpj',
          example: '12345678000199',
          description: 'CNPJ da empresa',
        },
        city: {
          type: 'string',
          example: 'Rua Exemplo, 123 - São Paulo',
          description: 'Endereço da empresa',
        },
        sector: { type: 'string', example: 'TI', description: 'Setor de atuação' },
      },
    },
    UpdateCompanyDto: {
      type: 'object',
      required: ['name', 'city', 'sector'],
      properties: {
        name: { type: 'string', example: 'Empresa Exemplo LTDA', description: 'Nome da empresa' },
        city: {
          type: 'string',
          example: 'Rua Exemplo, 123 - São Paulo',
          description: 'Endereço da empresa',
        },
        sector: { type: 'string', example: 'TI', description: 'Setor de atuação' },
      },
    },
    CompanyResponseDto: {
      type: 'object',
      properties: {
        id: {
          type: 'string',
          example: '65123abc0987df111222333',
          description: 'ID da empresa (MongoDB ObjectId)',
        },
        name: {
          type: 'string',
          example: 'Empresa Exemplo LTDA',
          description: 'Nome da empresa',
        },
        cnpj: {
          type: 'string',
          format: 'cnpj',
          example: '12345678000199',
          description: 'CNPJ da empresa',
        },
        city: {
          type: 'string',
          example: 'Rua Exemplo, 123 - São Paulo',
          description: 'Endereço da empresa',
        },
        sector: {
          type: 'string',
          example: 'TI',
          description: 'Setor de atuação da empresa',
        },
      },
    },
    CompaniesResponseDto: {
      type: 'array',
      items: { $ref: '#/definitions/CompanyResponseDto' },
    },
    CreateEmployeeDto: {
      type: 'object',
      required: ['name', 'email', 'position', 'password', 'company_id'],
      properties: {
        name: { type: 'string', example: 'João Silva', description: 'Nome do funcionário' },
        email: {
          type: 'string',
          format: 'email',
          example: 'joao@gmail.com',
          description: 'Email do funcionário',
        },
        position: {
          type: 'string',
          example: 'Analista',
          description: 'Cargo do funcionário',
        },
        password: {
          type: 'string',
          example: 'Teste12?',
          description:
            'Senha do funcionário. Precisa ter entre 8 - 64 caracteres, um número, uma letra maúscula, uma minúscula e um simbolo',
        },
        company_id: {
          type: 'string',
          example: '64123abc0987df111222333',
          description: 'ID da empresa gerado pelo MongoDB',
        },
        termination_date: {
          type: 'string',
          format: 'date',
          example: '2025-11-23',
          description: 'Data de desligamento do funcionário',
        },
        status: {
          type: 'string',
          enum: ['ACTIVE', 'INACTIVE'],
          example: 'ACTIVE',
        },
      },
    },

    UpdateEmployeeDto: {
      type: 'object',
      required: ['name', 'password', 'position'],
      properties: {
        name: { type: 'string', example: 'João Silva', description: 'Nome do funcionário' },
        position: {
          type: 'string',
          example: 'Analista',
          description: 'Cargo do funcionário',
        },
        password: {
          type: 'string',
          example: 'Teste12?',
          description:
            'Senha do funcionário. Precisa ter entre 8 - 64 caracteres, um número, uma letra maúscula, uma minúscula e um simbolo',
        },
        termination_date: {
          type: 'string',
          format: 'date',
          example: '2025-11-23',
          description: 'Data de desligamento do funcionário',
        },
        status: {
          type: 'enum',
          example: 'ACTIVE',
          description: 'Status do funcionário, sendo ACTIVE ou INACTIVE',
        },
      },
    },
    EmployeeResponseDto: {
      type: 'object',
      properties: {
        employee_id: {
          type: 'string',
          example: '64123abc0987df111222333',
          description: 'ID do funcionário (MongoDB ObjectId)',
        },
        name: {
          type: 'string',
          example: 'João Silva',
          description: 'Nome do funcionário',
        },
        email: {
          type: 'string',
          format: 'email',
          example: 'joao@gmail.com',
          description: 'Email do funcionário',
        },
        position: {
          type: 'string',
          example: 'Analista',
          description: 'Cargo do funcionário',
        },
        status: {
          type: 'enum',
          example: 'ACTIVE',
          description: 'Status do funcionário (ACTIVE ou INACTIVE)',
        },
        company_id: {
          type: 'string',
          example: '65123abc0987df111222333',
          description: 'ID da empresa vinculada (MongoDB ObjectId)',
        },
        created_at: {
          type: 'string',
          example: '23/11/2025, 20:06:06',
          description: 'Data de criação do funcionário',
        },
        termination_date: {
          type: 'string',
          format: 'date',
          example: '2025-11-23',
          description: 'Data de desligamento do funcionário (opcional)',
        },
      },
    },

    EmployeesResponseDto: {
      type: 'array',
      items: { $ref: '#/definitions/EmployeeResponseDto' },
    },

    ErrorZodValidation: {
      type: 'object',
      properties: {
        status: { type: 'string', example: 'error' },
        message: { type: 'string', example: 'Validation failed' },
        issues: {
          type: 'array',
          description: 'Lista de erros de validação retornados pelo Zod',
          items: {
            type: 'object',
            properties: {
              path: { type: 'array', example: ['email'] },
              message: { type: 'string', example: 'Invalid email' },
            },
          },
        },
      },
    },

    ErrorInvalidJson: {
      type: 'object',
      properties: {
        status: { type: 'string', example: 'error' },
        message: {
          type: 'string',
          example: 'Invalid JSON format',
          description: 'JSON enviado está mal formatado',
        },
      },
    },

    ErrorBadRequest: {
      type: 'object',
      properties: {
        status: { type: 'string', example: 'error' },
        message: {
          type: 'string',
          example: 'Invalid parameters provided',
        },
      },
    },

    ErrorEntityAlreadyExists: {
      type: 'object',
      properties: {
        status: { type: 'string', example: 'error' },
        message: {
          type: 'string',
          example: 'Entity already exists',
        },
      },
    },

    ErrorNotFound: {
      type: 'object',
      properties: {
        status: { type: 'string', example: 'error' },
        message: {
          type: 'string',
          example: 'Resource not found',
        },
      },
    },

    ErrorInternalServer: {
      type: 'object',
      properties: {
        status: { type: 'string', example: 'error' },
        message: {
          type: 'string',
          example: 'Internal Server Error',
        },
      },
    },
  },
};
