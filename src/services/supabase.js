import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = 'https://ntvmjhajmltwxkzkatvf.supabase.co'
const SUPABASE_ANON_KEY = 'sb_publishable_6J89cbcX9ONNdxZWBQ9hQA_71Uf-I9E'

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

export const fetchCategories = async () => {
  const { data, error } = await supabase
    .from('categories')
    .select('*')
    .order('display_order')
  
  if (error) throw error
  return data
}

export const fetchProducts = async () => {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .order('display_order', { ascending: true })
  
  if (error) throw error
  return data
}