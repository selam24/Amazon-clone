import React from 'react'
import classes from "../Catagory/Category.module.css"

function CategoryCard({data}) {
  return (
    <div className={classes.category}>
      <a href="https://www.amazon.com/Heathyoga-Leggings-Pockets-Thermal-Workout/dp/B07ZH1SB77/?_encoding=UTF8&pd_rd_w=LBGlK&content-id=amzn1.sym.2ada0ca8-c08f-4dd3-bf6e-06e1e651bb29%3Aamzn1.symc.ebdd2303-2907-45b9-b343-3896226c508a&pf_rd_p=2ada0ca8-c08f-4dd3-bf6e-06e1e651bb29&pf_rd_r=35TBWHWCCK8D83DBCRE1&pd_rd_wg=N3i6h&pd_rd_r=e3b628f0-d955-411f-aeb6-4ea14903ad3a&ref_=pd_hp_d_atf_ci_mcx_mr_ca_hp_atf_d">
        <span>
          <h2>{data.title}</h2>
        </span>
        <img src={data.imgLink} alt="" />
        <p>shop now</p>
      </a>
    </div>
  );
}

export default CategoryCard