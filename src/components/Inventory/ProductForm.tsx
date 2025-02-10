// components/ProductForm.tsx
import { useState } from "react";
import { useProducts } from "../../context/ProductContext";
import { Plus, X } from "lucide-react";
import React from "react";

const ProductForm = () => {
  const { addProduct } = useProducts();
  const [isOpen, setIsOpen] = useState(false);
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: 0,
    stock: 0,
    category: "",
    brand: "",
    sizeProduct: "",
    imageUrl: "",
  });

  const calculateSalePrice = (price: number) => {
    return price + price * 0.3;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Crear un nuevo objeto combinando el nombre y el tamaño
    const productToSave = {
      ...newProduct,
      name: `${newProduct.name} ${newProduct.sizeProduct}`, // Combinar nombre y tamaño
      price: calculateSalePrice(newProduct.price),
    };

    await addProduct(productToSave);
    setNewProduct({
      name: "",
      price: 0,
      stock: 0,
      category: "",
      brand: "",
      sizeProduct: "",
      imageUrl: "",
    });
    setIsOpen(false);
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700"
      >
        <Plus className="w-6 h-6" />
      </button>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-lg p-6 max-w-md w-full space-y-4"
      >
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold">Agregar Nuevo Producto</h2>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Nombre
          </label>
          <input
            type="text"
            required
            className="mt-1 w-full p-2 border rounded"
            value={newProduct.name}
            onChange={(e) =>
              setNewProduct({ ...newProduct, name: e.target.value })
            }
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Precio de Costo
          </label>
          <input
            type="number"
            required
            min="0"
            className="mt-1 w-full p-2 border rounded"
            value={newProduct.price}
            onChange={(e) =>
              setNewProduct({ ...newProduct, price: Number(e.target.value) })
            }
          />
          {newProduct.price > 0 && (
            <div className="mt-2 text-sm">
              <span className="text-gray-600">Precio de venta (+30%): </span>
              <span className="font-medium text-green-600">
                ${calculateSalePrice(newProduct.price).toFixed(2)}
              </span>
            </div>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Stock
          </label>
          <input
            type="number"
            required
            min="0"
            className="mt-1 w-full p-2 border rounded"
            value={newProduct.stock}
            onChange={(e) =>
              setNewProduct({ ...newProduct, stock: Number(e.target.value) })
            }
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Categoría
          </label>
          <input
            type="text"
            required
            className="mt-1 w-full p-2 border rounded"
            value={newProduct.category}
            onChange={(e) =>
              setNewProduct({ ...newProduct, category: e.target.value })
            }
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Marca
          </label>
          <input
            type="text"
            required
            className="mt-1 w-full p-2 border rounded"
            value={newProduct.brand}
            onChange={(e) =>
              setNewProduct({ ...newProduct, brand: e.target.value })
            }
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Tamaño
          </label>
          <input
            type="text"
            required
            className="mt-1 w-full p-2 border rounded"
            value={newProduct.sizeProduct}
            onChange={(e) =>
              setNewProduct({ ...newProduct, sizeProduct: e.target.value })
            }
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            URL de Imagen (opcional)
          </label>
          <input
            type="url"
            className="mt-1 w-full p-2 border rounded"
            value={newProduct.imageUrl}
            onChange={(e) =>
              setNewProduct({ ...newProduct, imageUrl: e.target.value })
            }
          />
        </div>

        <div className="flex justify-end space-x-2">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Guardar
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;
