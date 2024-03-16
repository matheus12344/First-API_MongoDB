# API de Recomendação de Restaurantes

Bem-vindo à API de Recomendação de Restaurantes! Esta API permite aos desenvolvedores acessarem uma vasta coleção de restaurantes e receberem recomendações personalizadas com base em preferências e critérios específicos.

## Endpoints Disponíveis

### 1. Listar Restaurantes

Endpoint:
```
GET /restaurantes
```

Descrição:
Retorna uma lista de todos os restaurantes disponíveis.

### 2. Detalhes do Restaurante

Endpoint:
```
GET /restaurantes/{id}
```

Descrição:
Retorna os detalhes de um restaurante específico com base no ID fornecido.

### 3. Recomendação Personalizada

Endpoint:
```
POST /recomendar
```

Descrição:
Recebe os critérios de preferência do usuário e retorna uma recomendação personalizada de restaurantes.

#### Parâmetros de Requisição:

- **Cidade** (obrigatório): A cidade onde o usuário está buscando por restaurantes.
- **Tipo de Cozinha** (opcional): O tipo de culinária que o usuário prefere.
- **Avaliação Mínima** (opcional): A classificação mínima que o restaurante deve ter.
- **Preço Máximo** (opcional): O preço máximo que o usuário está disposto a pagar.

### 4. Avaliar Restaurante

Endpoint:
```
POST /restaurantes/{id}/avaliar
```

Descrição:
Permite que os usuários avaliem um restaurante específico.

#### Parâmetros de Requisição:

- **Avaliação** (obrigatório): A avaliação do restaurante, em uma escala de 1 a 5.
- **Comentário** (opcional): Um comentário opcional sobre a experiência no restaurante.

## Autenticação

A API requer autenticação para acessar determinados endpoints. Por favor, entre em contato para obter credenciais de acesso.

## Exemplos de Uso

### Listar Restaurantes

```
GET /restaurantes
```

### Detalhes do Restaurante

```
GET /restaurantes/123
```

### Recomendação Personalizada

```
POST /recomendar
{
  "cidade": "São Paulo",
  "tipo_cozinha": "Italiana",
  "avaliacao_minima": 4,
  "preco_maximo": 100
}
```

### Avaliar Restaurante

```
POST /restaurantes/123/avaliar
{
  "avaliacao": 5,
  "comentario": "Excelente comida e serviço!"
}
```

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

---

Este README fornece uma visão geral clara dos endpoints disponíveis, parâmetros de requisição, exemplos de uso e informações sobre autenticação e licenciamento. Certifique-se de personalizar conforme necessário para atender às especificidades da sua API de recomendação de restaurantes.