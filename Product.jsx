import React, { useState } from 'react'

const Product = () => {
    const [products, setProducts] = useState([]);
    const [form, setForm] = useState({
        productName: "",
        sku: "",
        category: "",
        brand: "",
        uom: "Kg",
        hsn: "",
        taxRate: "18%",
        mrp: "",
        purchasePrice: "",
        salePrice: "",
        minStock: "",
        barcode: "",
        batchTracking: false,
        serialTracking: false,
        status: true,
    });

    const [search, setSearch] = useState("");

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setForm({ ...form, [name]: type === "checkbox" ? checked : value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setProducts([...products, { ...form, id: Date.now() }]);
        setForm({
            productName: "",
            sku: "",
            category: "",
            brand: "",
            uom: "Kg",
            hsn: "",
            taxRate: "18%",
            mrp: "",
            purchasePrice: "",
            salePrice: "",
            minStock: "",
            barcode: "",
            batchTracking: false,
            serialTracking: false,
            status: true,
        });
    };

    const handleDelete = (id) => {
        setProducts(products.filter((p) => p.id !== id));
    };

    const filteredProducts = products.filter(
        (p) =>
            p.productName.toLowerCase().includes(search.toLowerCase()) ||
            p.sku.toLowerCase().includes(search.toLowerCase()) ||
            p.category.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="container mt-4">
            <h2 className="mb-4">Product Master</h2>
            <form className="row g-3" onSubmit={handleSubmit}>
                <div className="col-md-6">
                    <label className="form-label">Product Name *</label>
                    <input type="text" className="form-control" name="productName" value={form.productName} onChange={handleChange} required/>
                </div>
                <div className="col-md-6">
                    <label className="form-label">SKU / Item Code *</label>
                    <input type="text" className="form-control" name="sku" value={form.sku} onChange={handleChange} required/>
                </div>
                <div className="col-md-6">
                    <label className="form-label">Category *</label>
                    <select className="form-select" name="category" value={form.category} onChange={handleChange} required>
                        <option value="">Select Category</option>
                        <option>Electronics</option>
                        <option>Grocery</option>
                        <option>Pharmacy</option>
                        <option>Clothing</option>
                    </select>
                </div>
                <div className="col-md-6">
                    <label className="form-label">Brand (Optional)</label>
                    <select className="form-select" name="brand" value={form.brand} onChange={handleChange}>
                        <option value="">Select Brand</option>
                        <option>Generic</option>
                        <option>Acme</option>
                        <option>Contoso</option>
                    </select>
                </div>
                <div className="col-md-6">
                    <label className="form-label">Unit of Measure *</label>
                    <select className="form-select" name="uom" value={form.uom} onChange={handleChange} >
                        <option>Kg</option>
                        <option>Litre</option>
                        <option>Piece</option>
                    </select>
                </div>
                <div className="col-md-6">
                    <label className="form-label">HSN Code (Optional)</label>
                    <input type="text" className="form-control" name="hsn" value={form.hsn} onChange={handleChange}/>
                </div>
                <div className="col-md-6">
                    <label className="form-label">Tax Rate *</label>
                    <select className="form-select" name="taxRate" value={form.taxRate} onChange={handleChange}>
                        <option>0%</option>
                        <option>5%</option>
                        <option>12%</option>
                        <option>18%</option>
                        <option>28%</option>
                    </select>
                </div> 
                <div className="col-md-6">
                    <label className="form-label">MRP *</label>
                    <input type="number" step="0.01" className="form-control" name="mrp" value={form.mrp} onChange={handleChange} required/>
                </div>
                <div className="col-md-6">
                    <label className="form-label">Purchase Price *</label>
                    <input type="number" className="form-control" name="purchasePrice" value={form.purchasePrice} onChange={handleChange}  required/>
                </div>
                <div className="col-md-6">
                    <label className="form-label">Sale Price *</label>
                    <input type="number" step="0.01" className="form-control" name="salePrice" value={form.salePrice} onChange={handleChange} required/>
                </div>
                <div className="col-md-6">
                    <label className="form-label">Min Stock / Reorder Level *</label>
                    <input type="number" className="form-control" name="minStock" value={form.minStock} onChange={handleChange} required/>
                </div>
                <div className="col-md-6">
                    <label className="form-label">Barcode (Optional)</label>
                    <input type="text" className="form-control" name="barcode" value={form.barcode}onChange={handleChange}/> 
                </div>
                <div className="col-md-4 form-check">
                    <input type="checkbox" className="form-check-input" name="batchTracking" checked={form.batchTracking} onChange={handleChange}  />
                    <label className="form-check-label">Batch Tracking</label>
                </div>
                <div className="col-md-4 form-check">
                    <input type="checkbox" className="form-check-input" name="serialTracking" checked={form.serialTracking} onChange={handleChange}/>
                    <label className="form-check-label">Serial Tracking</label>
                </div>
               <div className="col-md-4 form-check">
                    <input type="checkbox" className="form-check-input" name="status" checked={form.status} onChange={handleChange}/>
                    <label className="form-check-label">Active Status</label>
                </div>
                <div className="col-12">
                    <button type="submit" className="btn btn-primary">
                        Add Product
                    </button>
                </div>
            </form>
            <div className="mt-4 mb-2">
                <input type="text" className="form-control" placeholder="Search by Name, SKU, Category" value={search} onChange={(e) => setSearch(e.target.value)}/>
            </div>
            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th>SKU</th>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Brand</th>
                        <th>UoM</th>
                        <th>Tax</th>
                        <th>MRP</th>
                        <th>Purchase</th>
                        <th>Sale</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredProducts.length === 0 ? (
                        <tr>
                            <td colSpan="11" className="text-center">
                                No products found.
                            </td>
                        </tr>
                    ) : (
                        filteredProducts.map((p) => (
                            <tr key={p.id}>
                                <td>{p.sku}</td>
                                <td>{p.productName}</td>
                                <td>{p.category}</td>
                                <td>{p.brand}</td>
                                <td>{p.uom}</td>
                                <td>{p.taxRate}</td>
                                <td>{p.mrp}</td>
                                <td>{p.purchasePrice}</td>
                                <td>{p.salePrice}</td>
                                <td>{p.status ? "Active" : "Inactive"}</td>
                                <td>
                                    <button className="btn btn-danger btn-sm" onClick={() => handleDelete(p.id)} >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default Product