// components/blog-details/PostBoxDetails.jsx
import React from "react";
import Link from "next/link";
// En vez de 'dompurify':
import DOMPurify from "isomorphic-dompurify";

import RecentPost from "@/components/blog/recent-post.jsx";

const PostBoxDetails = ({ blog }) => {
  // Sanitiza el HTML antes de mostrarlo
  const sanitizedContent = DOMPurify.sanitize(blog.content);

  return (
    <div className="postbox__area pt-130 pb-110">
      <div className="container">
        <div className="row">
          {/* Columna principal */}
          <div className="col-xxl-8 col-xl-8 col-lg-7 col-md-12">
            <div className="postbox__wrapper pr-20">
              <article className="postbox__item format-image mb-50 transition-3">
                {/* Imagen */}
                <div className="postbox__thumb w-img mb-30">
                  <img src={blog.image} alt={blog.title} />
                </div>

                {/* Contenido */}
                <div className="postbox__content">
                  <div className="postbox__meta mb-40">
                    <span>
                      <Link href="/team-details">
                        <i className="fa-regular fa-user"></i> {blog.author}
                      </Link>
                    </span>
                    <span>
                      <i className="fa-regular fa-clock"></i> {blog.date}
                    </span>
                    <span>
                      <a href="#">
                        <i className="fa-regular fa-message-dots"></i>{" "}
                        {blog.commentsCount || "0"} Comments
                      </a>
                    </span>
                    <span>
                      <i className="fa-light fa-eye"></i> {blog.views} views
                    </span>
                  </div>

                  <h3 className="postbox__title mb-35">{blog.title}</h3>

                  <div className="postbox__content-area pb-20">
                    <div
                      dangerouslySetInnerHTML={{ __html: sanitizedContent }}
                    />
                  </div>
                </div>
              </article>

              {/* Comentarios si los necesitas */}
              <div className="postbox__comment mb-65">
                <h3 className="postbox__comment-title">
                  ({blog.commentsCount || "0"}) Comments
                </h3>
                {/* Renderiza los comentarios aquí, si los tuvieras */}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="col-xxl-4 col-xl-4 col-lg-5 col-md-12">
            <div className="sidebar__wrapper pl-25 pb-50">
              <RecentPost />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostBoxDetails;
