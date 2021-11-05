-- Verify ShopTP:init on pg

BEGIN;

SELECT "id", "firstname", "lastname", "email", "password", "role", "created_at", "updated_at" FROM "user" WHERE 'false';

SELECT "id", "status", "user_id", "created_at", "updated_at" FROM "order" WHERE 'false';

SELECT "id", "name","created_at", "updated_at" FROM "category" WHERE 'false';

SELECT "id", "name", "description", "picture", "price", "amount", "category_id", "created_at", "updated_at" FROM "product" WHERE 'false';

SELECT "product_id", "order_id" FROM "order_has_product" WHERE 'false';

ROLLBACK;
