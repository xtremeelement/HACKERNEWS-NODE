# Migration `20200805201345-added-user`

This migration has been generated at 8/5/2020, 4:13:45 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
PRAGMA foreign_keys=OFF;

CREATE TABLE "User" (
"id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
"name" TEXT NOT NULL,
"email" TEXT NOT NULL,
"password" TEXT NOT NULL)

ALTER TABLE "Link" ADD COLUMN "postedById" INTEGER ;

CREATE UNIQUE INDEX "User.email_unique" ON "User"("email")

PRAGMA foreign_key_check;

PRAGMA foreign_keys=ON;
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200805191849-init..20200805201345-added-user
--- datamodel.dml
+++ datamodel.dml
@@ -1,7 +1,7 @@
 datasource db {
     provider = "sqlite"
-    url = "***"
+    url = "***"
 }
 generator client {
     provider = "prisma-client-js"
@@ -11,5 +11,15 @@
     id  Int @id @default(autoincrement())
     createdAt DateTime @default(now())
     description String
     url String
-}
+    postedBy User? @relation(fields: [postedById], references: [id])
+    postedById Int?
+}
+
+model User {
+    id Int @id @default(autoincrement())
+    name String
+    email String @unique
+    password String
+    links Link[]
+}
```


