export interface RestPage<T> {
  page_size: number
  page_index: number
  pages_total: number
  items_total: number
  is_first: boolean
  is_last: boolean
  content: T[]
}
