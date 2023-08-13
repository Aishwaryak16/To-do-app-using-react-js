import "./product.css";
function ProductList(props) {
  const{list, removeElem, text} = props
  return (
    <>
      <ul>
        {props.list.map((t) => {
          return (
            <div className="list-wp mt-4" key={t.id}>
              <li className="list-item">
                <input
                  type="checkbox"
                  className="form-check-input me-2"
                ></input>
                {t.text}
              </li>
              <button className="btn btn-outline-danger" onClick={()=>removeElem(t.id)}>remove</button>
            </div>
          );
        })}
      </ul>
    </>
  );
}
export default ProductList;
