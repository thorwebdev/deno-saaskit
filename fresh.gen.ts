// DO NOT EDIT. This file is generated by fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import config from "./deno.json" assert { type: "json" };
import * as $0 from "./routes/_404.tsx";
import * as $1 from "./routes/_500.tsx";
import * as $2 from "./routes/api/login.ts";
import * as $3 from "./routes/api/logout.ts";
import * as $4 from "./routes/api/signup.ts";
import * as $5 from "./routes/blog/[slug].tsx";
import * as $6 from "./routes/blog/index.tsx";
import * as $7 from "./routes/dashboard/_middleware.ts";
import * as $8 from "./routes/dashboard/account.tsx";
import * as $9 from "./routes/dashboard/api/todo.ts";
import * as $10 from "./routes/dashboard/index.tsx";
import * as $11 from "./routes/dashboard/manage-subscription.ts";
import * as $12 from "./routes/dashboard/todos.tsx";
import * as $13 from "./routes/dashboard/upgrade-subscription.ts";
import * as $14 from "./routes/index.tsx";
import * as $15 from "./routes/login.tsx";
import * as $16 from "./routes/logout.ts";
import * as $17 from "./routes/signup.tsx";
import * as $$0 from "./islands/TodoList.tsx";

const manifest = {
  routes: {
    "./routes/_404.tsx": $0,
    "./routes/_500.tsx": $1,
    "./routes/api/login.ts": $2,
    "./routes/api/logout.ts": $3,
    "./routes/api/signup.ts": $4,
    "./routes/blog/[slug].tsx": $5,
    "./routes/blog/index.tsx": $6,
    "./routes/dashboard/_middleware.ts": $7,
    "./routes/dashboard/account.tsx": $8,
    "./routes/dashboard/api/todo.ts": $9,
    "./routes/dashboard/index.tsx": $10,
    "./routes/dashboard/manage-subscription.ts": $11,
    "./routes/dashboard/todos.tsx": $12,
    "./routes/dashboard/upgrade-subscription.ts": $13,
    "./routes/index.tsx": $14,
    "./routes/login.tsx": $15,
    "./routes/logout.ts": $16,
    "./routes/signup.tsx": $17,
  },
  islands: {
    "./islands/TodoList.tsx": $$0,
  },
  baseUrl: import.meta.url,
  config,
};

export default manifest;
