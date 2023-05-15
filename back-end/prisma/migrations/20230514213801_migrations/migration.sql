-- CreateTable
CREATE TABLE "categories" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "restaurantId" INTEGER NOT NULL,

    CONSTRAINT "categories_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "historic" (
    "id" SERIAL NOT NULL,
    "listRequests" TEXT NOT NULL,
    "description" VARCHAR(700),
    "status" VARCHAR(255) NOT NULL,
    "tableNumber" INTEGER NOT NULL,
    "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT '2023-05-14 16:52:32.839876-03'::timestamp with time zone,
    "totalPrice" INTEGER NOT NULL,
    "restaurantId" INTEGER NOT NULL,

    CONSTRAINT "historic_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "product" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "imgUrl" TEXT NOT NULL,
    "description" VARCHAR(500),
    "price" INTEGER NOT NULL,
    "categoriesId" INTEGER NOT NULL,

    CONSTRAINT "product_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "requests" (
    "id" SERIAL NOT NULL,
    "listRequests" TEXT NOT NULL,
    "description" VARCHAR(700),
    "status" VARCHAR(255) NOT NULL,
    "tableNumber" INTEGER NOT NULL,
    "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT '2023-05-14 16:52:32.839876-03'::timestamp with time zone,
    "totalPrice" INTEGER NOT NULL,
    "restaurantId" INTEGER NOT NULL,

    CONSTRAINT "requests_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "restaurants" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "password" VARCHAR(255) NOT NULL,

    CONSTRAINT "restaurants_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sessions" (
    "id" SERIAL NOT NULL,
    "restaurantId" INTEGER NOT NULL,
    "token" VARCHAR(500) NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT '2023-05-14 16:52:32.839876-03'::timestamp with time zone,

    CONSTRAINT "sessions_pk" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "categories_imageUrl_key" ON "categories"("imageUrl");

-- CreateIndex
CREATE UNIQUE INDEX "product_name_key" ON "product"("name");

-- CreateIndex
CREATE UNIQUE INDEX "restaurants_name_key" ON "restaurants"("name");

-- AddForeignKey
ALTER TABLE "categories" ADD CONSTRAINT "categories_fk0" FOREIGN KEY ("restaurantId") REFERENCES "restaurants"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "historic" ADD CONSTRAINT "historic_fk0" FOREIGN KEY ("restaurantId") REFERENCES "restaurants"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "product" ADD CONSTRAINT "product_fk0" FOREIGN KEY ("categoriesId") REFERENCES "categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "requests" ADD CONSTRAINT "requests_fk0" FOREIGN KEY ("restaurantId") REFERENCES "restaurants"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "sessions" ADD CONSTRAINT "sessions_fk0" FOREIGN KEY ("restaurantId") REFERENCES "restaurants"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
