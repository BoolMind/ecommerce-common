# Ecommerce Common

`@ecommerce/common` is a shared library used across the Ecommerce Microservices.

It contains reusable functionality that can be shared between services to avoid duplication.

## Responsibilities

The common library provides reusable components such as:

* Base entities
* Base services
* Base repositories
* DTOs
* Exception filters
* gRPC utilities
* gRPC interceptors
* TypeORM utilities
* Shared interfaces
* Configuration utilities

## Package Name

```text
@ecommerce/common
```

## Architecture

```text
             @ecommerce/common
                    |
       --------------|--------------
       |             |              |
       v             v              v
 User Service  Catalog Service  API Gateway
```

The library contains shared functionality but should not contain service-specific business logic.

## Tech Stack

* Node.js
* NestJS
* TypeScript
* TypeORM
* gRPC
* Protocol Buffers
* RxJS
* class-validator
* class-transformer

## Installation

The package is used as a local dependency within the Ecommerce Microservices project.

```bash
npm install
```

## Build

```bash
npm run build
```

The compiled output is generated in:

```text
dist/
```

## Usage

Shared functionality can be imported using:

```ts
import { ... } from '@ecommerce/common';
```

## Design Principles

The common library should contain:

* Reusable functionality
* Service-independent abstractions
* Shared infrastructure utilities

Business logic specific to a service should remain inside that service.

## Related Repositories

* [API Gateway](https://github.com/BoolMind/api-gateway)
* [User Service](https://github.com/BoolMind/user-service)
* [Catalog Service](https://github.com/BoolMind/catalog-service)
* [Ecommerce Contracts](https://github.com/BoolMind/ecommerce-contracts)

## License

Private project developed under BoolMind.
