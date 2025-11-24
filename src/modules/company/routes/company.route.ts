import { Router } from 'express';

import { validateWithZod } from '../../../shared/middlewares/validate.middleware';
import { CreateCompanyController } from '../controllers/create-company.controller';
import { DeleteCompanyController } from '../controllers/delete-company.controller';
import { FindAllCompaniesController } from '../controllers/find-all-companies.controller';
import { FindByIdCompanyController } from '../controllers/find-by-id-company.controller';
import { UpdateCompanyController } from '../controllers/update-company.controller';
import { companySchema, updateCompanySchema } from '../schemas/company.schema';

const CompanyRoutes = Router();

CompanyRoutes.post(
  '/api/v1/companies',
  validateWithZod(companySchema),
  CreateCompanyController

  /* 
  #swagger.tags = ['Empresa']
  #swagger.summary = 'Criar empresa'
  #swagger.description = 'Cria uma nova empresa. Recebe os dados básicos da organização e realiza validações nos campos. Retorna o registro criado com seu identificador único.'

  #swagger.parameters['body'] = {
    in: 'body',
    required: true,
    description: 'Dados para criar uma empresa',
    schema: {
      name: 'Empresa Exemplo LTDA',
      cnpj: '12345678000199',
      city: 'Rua Exemplo, 123 - São Paulo',
      sector: 'TI' 
    }
  }

  #swagger.responses[201] = {
    description: "Empresa criada com sucesso",
    schema: {
      id: '64123abc0987df111222333',
      name: 'Empresa Exemplo LTDA',
      sector: 'TI',
      cnpj: '12345678000199',
      city: 'Rua Exemplo, 123 - São Paulo',
    }
  }
  #swagger.responses[400] = { description: "Dados inválidos enviados" }
  #swagger.responses[409] = { description: "Empresa já existe" }
  #swagger.responses[422] = { description: "Erro de validação Zod"}
  #swagger.responses[500] = { description: 'Erro interno'}
  */
);

CompanyRoutes.delete(
  '/api/v1/companies/:id',
  DeleteCompanyController
  /*
  #swagger.tags = ['Empresa']
  #swagger.summary = 'Excluir empresa por ID'
  #swagger.description = 'Exclui uma empresa pelo seu ID. Caso o registro exista, o recurso é deletado e uma resposta sem conteúdo é retornada.'

  #swagger.parameters['id'] = {
    in: 'path',
    required: true,
    description: 'ID da empresa',
    type: 'string',
    example: '64123abc0987df111222333'
  }

  #swagger.responses[204] = { description: 'Empresa excluída com sucesso' }
  #swagger.responses[404] = { description: 'Empresa não encontrada' }
  #swagger.responses[500] = { description: 'Erro interno'}
  */
);

CompanyRoutes.get(
  '/api/v1/companies',
  FindAllCompaniesController
  /*
  #swagger.tags = ['Empresa']
  #swagger.summary = 'Listar empresas'
  #swagger.description = 'Lista todas as empresas cadastradas. Permite consultar todos os registros, possibilitando visualizar nome, cidade, setor, id e cnpj'

  #swagger.responses[200] = {
    description: 'Lista de empresas',
    schema: {
      type: 'array',
      items: {
        example: {
          id: "64123abc0987df111222333",
          name: "Empresa Exemplo LTDA",
          sector: "TI",
          cnpj: "12345678000199",
          city: "Rua A, 123"
        }
      }
    }
  }

  #swagger.responses[500] = { description: 'Erro interno'}
  */
);

CompanyRoutes.get(
  '/api/v1/companies/:id',
  FindByIdCompanyController
  /*
  #swagger.tags = ['Empresa']
  #swagger.summary = 'Buscar empresa por ID.'
  #swagger.description = 'Retorna todos os dados relacionados ao ID inserido, tais como: id, nome, cnpj, cidade e setor'

  #swagger.parameters['id'] = {
    in: 'path',
    required: true,
    description: 'ID da empresa',
    type: 'string',
    example: '64123abc0987df111222333'
  }

  #swagger.responses[200] = {
    description: 'Detalhes da empresa',
    schema: {
      id: '64123abc0987df111222333',
      name: 'Empresa Exemplo LTDA',
      sector: 'TI',
      cnpj: '12345678000199',
      city: 'Rua Exemplo, 123 - São Paulo'
    }
  }

  #swagger.responses[404] = { description: "Empresa näo encontrada" }
  #swagger.responses[500] = { description: 'Erro interno'}
*/
);

CompanyRoutes.put(
  '/api/v1/companies/:id',
  validateWithZod(updateCompanySchema),
  UpdateCompanyController
  /*
  #swagger.tags = ['Empresa']
  #swagger.summary = 'Atualizar empresa'
  #swagger.description = 'Atualiza completamente os dados de uma empresa. Os dados nome, cidade e setor säo obrigátorios para atualizar a empresa'

  #swagger.parameters['id'] = {
    in: 'path',
    required: true,
    description: 'ID da empresa a ser atualizada',
    type: 'string',
    example: '64123abc0987df111222333'
  }

  #swagger.parameters['body'] = {
    in: 'body',
    required: true,
    description: 'Dados para atualizar a empresa',
    schema: {
      name: 'Novo Nome da Empresa',
      city: 'Novo Endereço, São Paulo',
      sector: 'Financeiro'
    }
  }

  #swagger.responses[200] = {
    description: 'Empresa atualizada com sucesso',
    schema: {
      id: '64123abc0987df111222333',
      name: 'Novo Nome da Empresa',
      sector: 'Financeiro',
      cnpj: '12345678000199',
      city: 'Novo Endereço, São Paulo'
    }
  }

  #swagger.responses[404] = { description: 'Empresa não encontrada' }
  #swagger.responses[422] = { description: 'Erro de validação Zod'}
  #swagger.responses[500] = { description: 'Erro interno'}
*/
);

export { CompanyRoutes };
