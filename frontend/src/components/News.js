import React, { useEffect, useState } from "react"

export default function News() {
  const [news, setNews] = useState([
    {
      title: '',
      content: ''
    }
  ]);

  useEffect(() => {
    fetch('/showNews').then(res => {
      if (res.ok) {
        return res.json();
      }
    }).then(data => setNews(data));
  })

  return (
    <div className="d-flex justify-content-center flex-wrap">
      { news ? news.map((item) => (
        <div className="card m-2" style={{ width: '20rem' }} key={item.content}>
          <img className="card-img-top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/BBC_News_2019.svg/800px-BBC_News_2019.svg.png" alt="img"  />
          <div className="card-body">
            <h5 className="card-title my-2">News: <br/>{item.title}</h5>
            <p className="lead">
              {item.content}
            </p>
          </div>
        </div>
      )): null}
    </div>
  )
}