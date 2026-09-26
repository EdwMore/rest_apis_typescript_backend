import { Router } from 'express'
import { body, param } from 'express-validator'
import {
  createProduct,
  deleteProduct,
  getProducts,
  getProductsById,
  updateAvailability,
  updateProduct,
} from './handlers/product'
import { handleInputErrors } from './middleware'

const router = Router()

/**
 *@swagger
 *components:
 *   schemas:
 *     Product:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: The Product ID
 *           example: 1
 *         name:
 *           type: string
 *           description: The Product name
 *           example: Monitor Curvo de 49 Pulgadas
 *         price:
 *           type: number
 *           description: The Product price
 *           example: 300
 *         availability:
 *           type: boolean
 *           description: The Product availability
 *           example: true
 */

/**
 *@swagger
 *  /api/products:
 *    get:
 *      summary: Get a List of Products
 *      tags:
 *        - Products
 *      description: Return a list of products
 *      responses:
 *        200:
 *          description: Successful response
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: '#/components/schemas/Product'
 */
router.get('/', getProducts)

/**
 *@swagger
 * /api/products/{id}:
 *    get:
 *      summary: Get a Product by ID
 *      tags:
 *        - Products
 *      description: Return a product based on its unique ID
 *      parameters:
 *        - in: path
 *          name: id
 *          description: The ID io the product to retrieve
 *          required: true
 *          schema:
 *            type: integer
 *      responses:
 *        200:
 *          description: Successful Response
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Product'
 *        400:
 *          description: Bad Request - Invalid ID
 *        404:
 *          description: Not Found
 */
router.get(
  '/:id',
  param('id').isInt().withMessage('ID no válido'),
  handleInputErrors,
  getProductsById,
)

/**
 * @swagger
 * /api/products:
 *  post:
 *    summary: Creates a new product
 *    tags:
 *      - Products
 *    description: Returns a new record in the database
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              name:
 *                type: string
 *                example: "Monitor Curvo de 80 Pulgadas"
 *              price:
 *                type: number
 *                example: 499
 *    responses:
 *      201:
 *        description: Successful response
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Product'
 *      400:
 *        description: Bad Request - Invalid input data
 */
router.post(
  '/',
  // Validación
  body('name').notEmpty().withMessage('El nombre no puede estar vacio'),
  body('price')
    .isNumeric()
    .withMessage('Valor no valido')
    .custom(value => value > 0)
    .withMessage('Precio no válido')
    .notEmpty()
    .withMessage('El precio no puede estar vacio'),
  handleInputErrors,
  createProduct,
)

/**
 * @swagger
 * /api/products/{id}:
 *  put:
 *    summary: Updates a product with user input
 *    tags:
 *      - Products
 *    decription: Returns the updated product
 *    parameters:
 *        - in: path
 *          name: id
 *          description: The ID io the product to retrieve
 *          required: true
 *          schema:
 *            type: integer
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              name:
 *                type: string
 *                example: "Monitor Curvo de 80 Pulgadas"
 *              price:
 *                type: number
 *                example: 499
 *              availability:
 *                type: boolean
 *                example: true
 *    responses:
 *      200:
 *        description: Successful response
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Product'
 *      400:
 *        description: Bad Request - Invalid ID or Invalid input data
 *      404:
 *        description: Product Not Found
 */
router.put(
  '/:id',
  //Validación
  param('id').isInt().withMessage('ID no válido'),
  body('name').notEmpty().withMessage('El nombre no puede estar vacio'),
  body('price')
    .isNumeric()
    .withMessage('Valor no valido')
    .custom(value => value > 0)
    .withMessage('Precio no válido')
    .notEmpty()
    .withMessage('El precio no puede estar vacio'),
  body('availability').isBoolean().withMessage('Valor no válido'),
  handleInputErrors,
  updateProduct,
)

/**
 * @swagger
 * /api/products/{id}:
 *  patch:
 *   summary: Update Product availability
 *   tags:
 *     - Products
 *   description: Returns the updated availability
 *   parameters:
 *        - in: path
 *          name: id
 *          description: The ID io the product to retrieve
 *          required: true
 *          schema:
 *            type: integer
 *   responses:
 *     200:
 *       description: Successful response
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Product'
 *     400:
 *       description: Bad Request - Invalid ID
 *     404:
 *       description: Product Not Found
 */

router.patch(
  '/:id',
  param('id').isInt().withMessage('ID no válido'),
  handleInputErrors,
  updateAvailability,
)

/**
 * @swagger
 * /api/products/{id}:
 *  delete:
 *   summary: Deletes a Product by a given ID 
 *   tags:
 *     - Products
 *   description: Returns a confirmation message
 *   parameters:
 *        - in: path
 *          name: id
 *          description: The ID io the product to delete
 *          required: true
 *          schema:
 *            type: integer
 *   responses:
 *     200:
 *       description: Successful response
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *              data:
 *                type: string
 *                description: Successful response
 *                example: Producto Eliminado
 *     400:
 *       description: Bad Request - Invalid ID
 *     404:
 *       description: Product Not Found
 */

router.delete(
  '/:id',
  param('id').isInt().withMessage('ID no válido'),
  handleInputErrors,
  deleteProduct,
)

export default router
