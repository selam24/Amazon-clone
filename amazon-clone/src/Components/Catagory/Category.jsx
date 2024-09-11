import React from "react";
import { CategoryInfos } from "./categoryFullinfos";
import CategoryCard from "./CatagoryCard";
import classes from "../Catagory/Category.module.css";

function Category() {
  return (
    <section className={classes.category_container}>
      {CategoryInfos.map((infos) => (
        <CategoryCard  data={infos} />
      ))}
    </section>
  );
}

export default Category;
