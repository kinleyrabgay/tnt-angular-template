# Accounts Feature Library

This library is part of the TNT Angular project, managed within an [Nx Monorepo](https://nx.dev). It contains the feature-specific logic and UI for account management.

## 🚀 Technical Stack

This project leverages modern Angular technologies for high performance and reactive state management:

- **Angular 21**: The core framework for building the application. [angular.dev](https://angular.dev)
- **Angular Signals**: Reactive primitives for granular state tracking. [Signals Guide](https://angular.dev/guide/signals)
- **Signal Store**: State management using `@ngrx/signals`. [NgRx Signal Store](https://ngrx.io/guide/signals)
- **Signal Forms**: Experimental signal-based form handling. [Signal Forms Guide](https://angular.dev/guide/forms/signal-forms)
- **TanStack Query**: Powerful asynchronous state management (data fetching). [TanStack Query for Angular](https://tanstack.com/query/latest/docs/framework/angular/overview)
- **GraphQL & REST**: Communication protocols for backend synchronization.
    - [GraphQL.org](https://graphql.org/)
    - [REST API Guide](https://restfulapi.net/)

## 🛠 Library Generation

To maintain consistency across the monorepo, use the provided generation script.

### Usage

If you are currently in the feature directory:

```bash
cd libs/features
../../scripts/gen-lib.sh <library-name>
```

### Example

To generate a new library named `billing` under features:

```bash
../../scripts/gen-lib.sh billing
```

## 🏗 Workspace Structure

- `apps/`: Main entry points for the applications.
- `libs/`: Shared and feature-specific libraries.
    - `libs/features/`: Complex feature modules like `accounts`.
    - `libs/shared/`: Utility functions and common components.

## 🧪 Testing

Run unit tests for this library using Vitest:

```bash
nx test accounts
```
