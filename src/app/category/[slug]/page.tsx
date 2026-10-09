import CategoryProducts from "@/components/CategoryProducts";
import { ItemType } from "@/components/ProductType";

interface Category {
  id: string;
  slug: string;
  nameBn: string;
  icon: string;
}

const CategoryPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;

  const [categoryRes, productRes] = await Promise.all([
    fetch("https://api.api-store.workers.dev/api/bazardor/categories"),
    fetch("https://api.api-store.workers.dev/api/bazardor/products"),
  ]);

  const categories: Category[] = await categoryRes.json();
  const products: ItemType[] = await productRes.json();

  const category = categories.find((item) => item.slug === slug);

  const categoryProducts = products.filter((item) => item.category === slug);

  return <CategoryProducts category={category} products={categoryProducts} />;
};

export default CategoryPage;
