/* début de la transaction*/
BEGIN;

/* suppression des tables existantes */
DROP TABLE IF EXISTS "user", "order", "product", "category", "order_has_product";

CREATE TABLE "user" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "firstname" TEXT NOT NULL DEFAULT '',
    "lastname" TEXT NOT NULL DEFAULT '',
    "email" TEXT NOT NULL UNIQUE DEFAULT '',
    "password" TEXT NOT NULL DEFAULT '',
    "role" TEXT NOT NULL DEFAULT 0,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE "order" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "status" TEXT NOT NULL DEFAULT '',
    "user_id" INT NOT NULL REFERENCES "user"("id") ON DELETE CASCADE,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMPTZ NOT NULL DEFAULT NOW()
);


CREATE TABLE "category" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" TEXT NOT NULL DEFAULT '',
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE "product" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" TEXT NOT NULL DEFAULT '',
    "description" TEXT NOT NULL DEFAULT '',
    "picture" TEXT NOT NULL DEFAULT '',
    "price" INT NOT NULL DEFAULT 0,
    "amount" INT NOT NULL DEFAULT 0,
    "category_id" INT NOT NULL REFERENCES category("id") ON DELETE CASCADE,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE "order_has_product" (
    "product_id" INT NOT NULL REFERENCES "product"("id"),
    "order_id" INT NOT NULL REFERENCES "order"("id"),
    PRIMARY KEY("product_id", "order_id")
);

USER(id, firstname, lastname, email, password, role)
ORDER(id, status, user_id)
CATEGORY(id, name)
PRODUCT(id, name, description, picture, price, amount,
       category_id)
ORDER_HAS_PRODUCT(#ORDER(id), #PRODUCT(id))

/* seeding */
INSERT INTO "category" ("name") 
VALUES ('nba');

INSERT INTO "product" ("name", "description", "picture", "price", "amount", "category_id") VALUES ('Casquette nba', 'une jolie casquette de nba', 'casquette-nba.png', 30, 10, 1);

/* fin de la transaction */
COMMIT;
