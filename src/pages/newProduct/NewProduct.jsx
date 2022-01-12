import "./newProduct.css";

export default function NewProduct() {
  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Product</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label htmlFor="">Image</label>
          <input type="file" name="" id="" />
        </div>
        <div className="addProductItem">
          <label htmlFor="">Name</label>
          <input type="text" placeholder="Apple Air Pods" />
        </div>
        <div className="addProductItem">
          <label htmlFor="">Stock</label>
          <input type="text" placeholder="123" />
        </div>
        <div className="addProductItem">
          <label htmlFor="">Active</label>
          <select name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="addProductButton">Create</button>
      </form>
    </div>
  );
}
