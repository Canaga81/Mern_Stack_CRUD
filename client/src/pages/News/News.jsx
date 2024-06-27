import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const News = () => {
  const [news, setNews] = useState();
  const [categories, setCategories] = useState();

  const getNews = async () => {
    const response = await axios.get("http://localhost:9090/api/v1/news/all");
    setNews(response.data.news);
  };

  useEffect(() => {

    const getCategories = async () => {
      const response = await axios.get(
        "http://localhost:9090/api/v1/category/all"
      );
      setCategories(response.data.categories);
    };

    getNews();
    getCategories();
  }, []);

  const filterHandler = async (e) => {
    if(e.target.value === '') {
      getNews();
    }
    else {
      const response = await axios.get(`http://localhost:9090/api/v1/news/category/${e.target.value}`);
      setNews(response.data.news);
    }
  }

  return (
    <div className="container my-5">
      <div className="row">
        <div className="mb-5 d-flex justify-content-between align-items-center">
          <h5>Butun Xeberler <span className="text-danger">({news && news.length})</span></h5>
          <div className="d-flex gap-3">
            <Link className="btn btn-primary btn-sm" to={"/news/create"}>
              Yeni Xeber Elave Et
            </Link>
            <select
              onChange={filterHandler}
              className="p-1"
            >
              <option value="">Butun Xeberler</option>
              {categories &&
                categories.map((item) => {
                  return (
                    <option key={item.id} value={item.id}>
                      {item.name}
                    </option>
                  );
                })}
            </select>
          </div>
        </div>

        {news ? (
          news.map((item) => {
            return (
              <div className="col-lg-3" key={item.id}>
                <div className="card">
                  <img src={item.image} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title"> {item.title}</h5>
                    <span className="card-text bg-warning py-1 px-3 rounded-2">
                      {item.name}
                    </span>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    </div>
  );
};

export default News;