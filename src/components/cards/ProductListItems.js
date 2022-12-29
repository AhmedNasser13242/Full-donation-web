import React from "react";
import { Link } from "react-router-dom";

const ProductListItems = ({ product }) => {
  const { price, category, subs, shipping, color, brand, quantity, sold } =
    product;

  return (
    <ul className="list-group">
      <li className="list-group-item" hidden>
        Price{" "}
        <span className="label label-default label-pill pull-xs-right">
          $ {price}
        </span>
      </li>

      {category && (
        <li className="list-group-item">
          دولة التبرع{" "}
          <Link
            to={`/category/${category.slug}`}
            className="label label-default label-pill pull-xs-right"
          >
            {category.name}
          </Link>
        </li>
      )}

      {subs && (
        <li className="list-group-item">
          مكان التبرع
          {subs.map((s) => (
            <Link
              key={s._id}
              to={`/sub/${s.slug}`}
              className="label label-default label-pill pull-xs-right"
            >
              {s.name}
            </Link>
          ))}
        </li>
      )}

      <li className="list-group-item">
        الشحن{" "}
        <span className="label label-default label-pill pull-xs-right">
          {shipping}
        </span>
      </li>

      <li className="list-group-item" hidden>
        Color{" "}
        <span className="label label-default label-pill pull-xs-right">
          {color}
        </span>
      </li>

      <li className="list-group-item" hidden>
        Brand{" "}
        <span className="label label-default label-pill pull-xs-right">
          {brand}
        </span>
      </li>

      <li className="list-group-item" hidden>
        Available{" "}
        <span className="label label-default label-pill pull-xs-right">
          {quantity}
        </span>
      </li>

      <li className="list-group-item">
        تم التبرع ب :{" "}
        <span className="label label-default label-pill pull-xs-right">
          {sold}
        </span>
      </li>
    </ul>
  );
};

export default ProductListItems;
