# Developer Notes – @keshavsoft/kschema-cli

---

## 🎯 Purpose

This package is **NOT just a CLI**.

It serves two roles:
1. CLI tool (via `bin/cli.js`)
2. Internal SDK used by VS Code extension (EndPointGen)

---

## 🧩 Architecture

VS Code Extension (EndPointGen)
→ triggers commands  
→ calls orchestration  
→ imports from `@keshavsoft/kschema-cli`  
→ uses exported functions (like `express`)  
→ internally maps to `bin/v12/...` implementation  

---

## 🔗 Important Flow

```js
import { express } from "@keshavsoft/kschema-cli";

## 🔗 Related Projects

### Core Schema Library
https://www.npmjs.com/package/@keshavsoft/kschema

Minimal config store used internally by CLI.

---

### CLI Tool
https://www.npmjs.com/package/@keshavsoft/kschema-cli

Scaffolding engine used to generate project structures.

---

### VS Code Extension (Real Usage)
https://github.com/keshavsoft/EndPointGen

This extension uses `@keshavsoft/kschema-cli` internally  
to generate and manage project structures.

---

## 🧠 Note

This CLI is actively used in production via the VS Code extension above.  
It is not just a standalone tool, but part of a working ecosystem.