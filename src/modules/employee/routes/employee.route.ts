import { Router } from 'express';

import { validateWithZod } from '../../../shared/middlewares/validate.middleware';
import { CreateEmployeeController } from '../controllers/create-employee.controller';
import { DeleteEmployeeController } from '../controllers/delete-employee.controller';
import { FindAllEmployeesController } from '../controllers/find-all-employees.controller';
import { FindEmployeesByCompanyController } from '../controllers/find-employees-by-company.controller';
import { UpdateEmployeeController } from '../controllers/update-employee.controller';
import { employeeSchema, updateEmployeeSchema } from '../schemas/employee.schema';

const EmployeeRoutes = Router();

EmployeeRoutes.post(
  '/api/v1/employees',
  validateWithZod(employeeSchema),
  CreateEmployeeController
  /*
  #swagger.tags = ['Funcionário']
  #swagger.summary = 'Criar funcionário'
  #swagger.description = 'Cria um novo funcionário vinculado a uma empresa. Os campos name, email, position, password e company_id säo obrigátorios. Os campos termination_date e status säo opcionais, sendo o status por padräo ACTIVE. A senha precisa conter entre 8 - 64 caracteres, ter um número, uma letra maiúscula, uma minúscula e um caractere especial'

  #swagger.parameters['body'] = {
    in: 'body',
    required: true,
    description: 'Dados para criar um funcionário',
    schema: {
      name: 'João Silva',
      email: 'joao@gmail.com',
      position: 'Analista',
      password: 'Teste12?',
      company_id: '64123abc0987df111222333',
      termination_date: '2025-11-23',
      status: 'ACTIVE'
    }
  }

  #swagger.responses[201] = {
    description: 'Funcionário criado com sucesso',
    schema: {
      company_id: '64123abc0987df111222333',
      name: 'João Silva',
      email: 'joao@gmail.com',
      position: 'Analista',
      status: 'ACTIVE',
      termination_date: '2025-11-23',
      employee_id: '64123abc0987df111222333',
      created_at: '23/11/2025, 20:06:06'
    }
  }
  #swagger.responses[400] = { description: 'Dados inválidos enviados' }
  #swagger.responses[404] = { description: 'Empresa informada não existe' }
  #swagger.responses[409] = { description: 'Funcionário já existe' }
  #swagger.responses[422] = { description: 'Erro de validação Zod'}
  #swagger.responses[500] = { description: 'Erro interno'}
  */
);

EmployeeRoutes.delete(
  '/api/v1/employees/:id',
  DeleteEmployeeController
  /*
  #swagger.tags = ['Funcionário']
  #swagger.summary = 'Excluir funcionário por ID'
  #swagger.description = 'Exclui um funcionário existente pelo seu ID. Caso exista, o recurso é removido permanentemente.'

  #swagger.parameters['id'] = {
    in: 'path',
    required: true,
    description: 'ID do funcionário',
    type: 'string',
    example: '65123abc0987df111222333'
  }

  #swagger.responses[204] = { description: 'Funcionário excluído com sucesso' }
  #swagger.responses[404] = { description: 'Funcionário não encontrado' }
  #swagger.responses[500] = { description: 'Erro interno'}
  */
);

EmployeeRoutes.get(
  '/api/v1/employees',
  FindAllEmployeesController
  /*
  #swagger.tags = ['Funcionário']
  #swagger.summary = 'Listar funcionários'
  #swagger.description = 'Retorna todos os funcionários cadastrados no sistema, incluindo informações como company_id, name, email, position, status, employee_id, created_at e termination_date'

  #swagger.responses[200] = {
    description: 'Lista de funcionários',
    schema: {
      type: 'array',
      items: {
        example: {
          company_id: '65123abc0987df111222333',
          name: 'João Silva',
          email: 'joao@gmail.com',
          position: 'Analista',
          status: 'ACTIVE',
          termination_date: '2004-12-15',
          employee_id: '64123abc0987df111222333',
          created_at: '23/11/2025, 20:06:06'
        }
      }
    }
  }

  #swagger.responses[500] = { description: 'Erro interno'}
  */
);

EmployeeRoutes.get(
  '/api/v1/employees/company/:id',
  FindEmployeesByCompanyController
  /*
  #swagger.tags = ['Funcionário']
  #swagger.summary = 'Listar funcionários por empresa'
  #swagger.description = 'Lista todos os funcionários vinculados a uma empresa específica.'

  #swagger.parameters['id'] = {
    in: 'path',
    required: true,
    description: 'ID da empresa',
    type: 'string',
    example: '64123abc0987df111222333'
  }

  #swagger.responses[200] = {
    description: 'Funcionários encontrados',
    schema: {
      type: 'array',
      items: {
        example: {
          company_id: '65123abc0987df111222333',
          name: 'João Silva',
          email: 'joao@gmail.com',
          position: 'Analista',
          status: 'ACTIVE',
          termination_date: '2004-12-15',
          employee_id: '64123abc0987df111222333',
          created_at: '23/11/2025, 20:06:06'
        }
      }
    }
  }

  #swagger.responses[404] = { description: 'Empresa não encontrada' }
  #swagger.responses[500] = { description: 'Erro interno'}
  */
);

EmployeeRoutes.put(
  '/api/v1/employees/:id',
  validateWithZod(updateEmployeeSchema),
  UpdateEmployeeController
  /*
  #swagger.tags = ['Funcionário']
  #swagger.summary = 'Atualizar funcionário'
  #swagger.description = 'Atualiza completamente os dados de um funcionário. Campos como name, password e position são obrigatórios. A senha precisa conter entre 8 - 64 caracteres, ter um número, uma letra maiúscula, uma minúscula e um caractere especial'

  #swagger.parameters['id'] = {
    in: 'path',
    required: true,
    description: 'ID do funcionário a ser atualizado',
    type: 'string',
    example: '65123abc0987df111222333'
  }

  #swagger.parameters['body'] = {
    in: 'body',
    required: true,
    description: 'Dados para atualizar o funcionário',
    schema: {
      name: 'João Silva',
      position: 'Analista',
      password: 'Teste12?',
      termination_date: '2025-11-23',
      status: 'ACTIVE'
    }
  }

  #swagger.responses[200] = {
    description: 'Funcionário atualizado com sucesso',
    schema: {
      company_id: '65123abc0987df111222333',
      name: 'João Silva',
      email: 'joao@gmail.com',
      position: 'Analista',
      status: 'ACTIVE',
      termination_date: '2004-12-15',
      employee_id: '64123abc0987df111222333',
      created_at: '23/11/2025, 20:06:06'
    }
  }

  #swagger.responses[404] = { description: 'Funcionário não encontrado' }
  #swagger.responses[422] = { description: 'Erro de validação Zod'}
  #swagger.responses[500] = { description: 'Erro interno'}
  */
);

export { EmployeeRoutes };
