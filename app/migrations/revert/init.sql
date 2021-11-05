-- Revert ShopTP:init from pg

BEGIN;

DROP TABLE IF EXISTS "user", "order", "product", "category", "order_has_product";

COMMIT;
