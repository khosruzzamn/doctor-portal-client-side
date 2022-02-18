import { Typography } from "@mui/material";
import React from "react";
import blogs from "../../../Data/blogs";
import BlogPost from "./BlogPost";
import "./Blogs.css";

const Blogs = () => {
  return (
    <div className="blogs my-5">
      <div className="container">
        <Typography
          className="text-primary text-uppercase"
          sx={{ mb: 2, mt: 2, textAlign: "center" }}
          variant="h6"
          component="div"
        >
          our blog
        </Typography>
        <Typography sx={{ textAlign: "center" }} variant="h4" component="div">
          From Our Blog News
        </Typography>

        <div className="mt-5">
          {/* <div class="blog-container">
            <div class="blog-card">
              <div class="card__header">
                <img
                  src="https://images.unsplash.com/photo-1511174511562-5f7f18b874f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                  alt="card__image"
                  class="blog-img card__image"
                  width="600"
                />
              </div>
              <div class="card__body">
                <span class="blog-tag  tag-blue">medical tips</span>
                <h4>how bactaria effect our body</h4>
                <p className="text-left">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                  perferendis molestiae non nemo doloribus. Doloremque, nihil!
                  At ea atque quidem!
                </p>
              </div>
              <div class="card__footer">
                <div class="blog-user">
                  <img
                    src="https://i.pravatar.cc/40?img=1"
                    alt="user__image"
                    class="user__image"
                  />
                  <div class="user__info">
                    <h5>Jane Doe</h5>
                    <small>2h ago</small>
                  </div>
                </div>
              </div>
            </div>
            <div class="blog-card">
              <div class="card__header">
                <img
                  src="https://media.istockphoto.com/photos/young-african-radiologist-in-uniform-and-protective-mask-looking-at-picture-id1288262478?b=1&k=20&m=1288262478&s=170667a&w=0&h=9U2S18SmjSuB8tlHPk67tJrYRJKW_k2lVPQFhtd7AvI="
                  alt="card__image"
                  class="blog-img card__image"
                  width="600"
                />
              </div>
              <div class="card__body">
                <span class="blog-tag tag-brown">Food</span>
                <h4>Delicious Food</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                  perferendis molestiae non nemo doloribus. Doloremque, nihil!
                  At ea atque quidem!
                </p>
              </div>
              <div class="card__footer">
                <div class="blog-user">
                  <img
                    src="https://i.pravatar.cc/40?img=2"
                    alt="user__image"
                    class="user__image"
                  />
                  <div class="user__info">
                    <h5>Jony Doe</h5>
                    <small>Yesterday</small>
                  </div>
                </div>
              </div>
            </div>
            <div class="blog-card">
              <div class="card__header">
                <img
                  src="https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                  alt="card__image"
                  class="blog-img card__image"
                  width="600"
                />
              </div>
              <div class="card__body">
                <span class="blog-tag tag-red">How to control diabetics</span>
                <h4>Proceduce to control diabetics</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                  perferendis molestiae non nemo doloribus. Doloremque, nihil!
                  At ea atque quidem!
                </p>
              </div>
              <div class="card__footer">
                <div class="blog-user">
                  <img
                    src="https://i.pravatar.cc/40?img=3"
                    alt="user__image"
                    class="user__image"
                  />
                  <div class="user__info">
                    <h5>John Doe</h5>
                    <small>2d ago</small>
                  </div>
                </div> */}
          {/* </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
