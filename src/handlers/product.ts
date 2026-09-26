import { Request, Response } from 'express'
// import { check, validationResult } from 'express-validator'
import Product from '../models/Product.model'

export const getProducts = async (req: Request, res: Response) => {
  const products = await Product.findAll({
    order: [['id', 'DESC']],
  })
  res.json({ data: products })
}

export const getProductsById = async (
  req: Request<{ id: string }>,
  res: Response,
) => {
  const { id } = req.params
  const product = await Product.findByPk(id)

  if (!product) {
    return res.status(404).json({
      error: 'Producto No Encontrado',
    })
  }
  res.json({ data: product })
}

export const createProduct = async (req: Request, res: Response) => {
  //   await check('name')
  //     .notEmpty()
  //     .withMessage('El nombre no puede estar vacio')
  //     .run(req)

  //   await check('price')
  //     .isNumeric()
  //     .withMessage('Valor no valido')
  //     .custom(value => value > 0)
  //     .withMessage('Precio no válido')
  //     .notEmpty()
  //     .withMessage('El precio no puede estar vacio')
  //     .run(req)
  const product = await Product.create(req.body)
  res.status(201).json({ data: product })
}

export const updateProduct = async (
  req: Request<{ id: string }>,
  res: Response,
) => {
  const { id } = req.params
  const product = await Product.findByPk(id)

  if (!product) {
    return res.status(404).json({
      error: 'Producto No Encontrado',
    })
  }

  // Actualizar

  await product.update(req.body)
  await product.save()

  res.json({ data: product })
}

export const updateAvailability = async (
  req: Request<{ id: string }>,
  res: Response,
) => {
  const { id } = req.params
  const product = await Product.findByPk(id)

  if (!product) {
    return res.status(404).json({
      error: 'Producto No Encontrado',
    })
  }

  // Actualizar

  product.availability = !product.dataValues.availability
  await product.save()
  res.json({ data: product })
}

export const deleteProduct = async (
  req: Request<{ id: string }>,
  res: Response,
) => {
  const { id } = req.params
  const product = await Product.findByPk(id)

  if (!product) {
    return res.status(404).json({
      error: 'Producto No Encontrado',
    })
  }

  await product.destroy()
  res.json({ data: 'Producto Eliminado' })
}
