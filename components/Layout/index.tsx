import { FC, useEffect, useState } from "react";
import TheCart from "@/components/Layout/TheCart";
import TheNavbar from "@/components/Layout/TheNavbar";
import CategoryList from "@/components/Layout/CategoryList";
import { ICategory } from "@/models/ICategory";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  const [categories, setCategories] = useState<ICategory[] | null>(null);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/categories/`)
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      });
  };

  return (
    <>
      <div className="border-bottom text-danger text-center px-2">
        Магазин закрыт. Спасибо всем, кто у нас покупал.
      </div>
      <TheNavbar />
      <div className="container-lg mb-5">
        <div className="row">
          <div className="col-md-4 col-lg-3">
            <TheCart />
            {categories && <CategoryList categories={categories} />}
          </div>
          <div className="col-md-8 col-lg-9">{children}</div>
        </div>
      </div>
    </>
  );
};

export default Layout;
