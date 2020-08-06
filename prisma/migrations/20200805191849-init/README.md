# Migration `20200805191849-init`

This migration has been generated at 8/5/2020, 3:18:49 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
PRAGMA foreign_keys=OFF;

CREATE TABLE "Link" (
"id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
"createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
"description" TEXT NOT NULL,
"url" TEXT NOT NULL)

PRAGMA foreign_key_check;

PRAGMA foreign_keys=ON;
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20200805191849-init
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,15 @@
+datasource db {
+    provider = "sqlite"
+    url = "***"
+}
+
+generator client {
+    provider = "prisma-client-js"
+}
+
+model Link {
+    id  Int @id @default(autoincrement())
+    createdAt DateTime @default(now())
+    description String
+    url String
+}
```


