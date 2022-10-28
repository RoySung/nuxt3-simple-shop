
import z from 'zod'
import { toZod } from 'tozod'

const productSchema: toZod<Product> = z.object({
  product_id: z.string(),
  product_name: z.string(),
  product_category: z.string(),
  product_img_path: z.string(),
  product_price: z.number(),
  product_description: z.string()
})

const productArrSchema = productSchema.array()

const getProducts = async (cursor: string | null, limit: number = 30) => {
  // HACK: mock API from public
  const config = useRuntimeConfig()
  const publicApiBase = config.public.apiBase
  const url = new URL(publicApiBase + '/products.json')

  if (cursor) { url.searchParams.set('cursor', cursor) }
  url.searchParams.set('limit', limit.toString())
  const { data } = await useFetch(url.href)
  const result = productArrSchema.safeParse(data.value)

  if (!result.success) { return [] }

  // HACK: mock data with pagination
  let cursorIndex = 0
  if (cursor) {
    const index = /P(\d+)/.exec(cursor)?.[1]
    cursorIndex = parseInt(index || '0') + 1
  }
  const products = result.data.slice(cursorIndex, cursorIndex + limit)
  // add hash to img URL for random
  products.forEach((p) => {
    p.product_img_path += `?${p.product_id}`
  })

  return products
}

const getProduct = async (id: string): Promise<Product> => {
  // HACK: mock action about getting the product
  await Promise.resolve()
  const product = {
    product_id: id,
    product_name: '企鵝嘟嘟玩偶-' + /P(\d+)/.exec(id)?.[1],
    product_price: 55023.0,
    product_category: '玩偶',
    product_img_path: 'https://picsum.photos/800/600' + `?${id}`,
    product_description: '此玩偶乃用純天然企鵝毛所製而成，親近肌膚不會引發幼童過敏，內容物填充採用美國原裝進口的棉花，絕對沒有使用黑奴採集，完全100%純棉！'
  }

  return product
}

const createProduct = async (product: Product) => {
  await Promise.resolve()
  product.product_id = 'newID'

  return product
}

const updateProduct = async (product: Product) => {
  await Promise.resolve()

  return product
}

// HACK: mock Product API
export const useProductAPI = () => {
  return {
    createProduct,
    getProducts,
    getProduct,
    updateProduct
  }
}
