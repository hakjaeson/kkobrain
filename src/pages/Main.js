import React, { useEffect, useState } from "react";
import "../css/main/main.css";

const MainTop = () => {
  // News 데이터 관리
  const [newsList, setNewsList] = useState([]);

  useEffect(() => {
    // 1. json 호출 하고 성공하면
    const jsonUrl = "./api/news.json";
    fetch(jsonUrl)
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((data) => {
        console.log(data);
        // 자료 보관
        setNewsList(data);
        // 자료를 기반으로 html 태그 생성
        // const result = makeHtmlTag(data);
        // return result;
      })
      .catch((err) => {
        console.log(err);
      });

    // 2. html 태그 생성,
    const makeHtmlTag = (_data) => {
      // html 태그 글자
      let tag = "";
      // 이미지 경로
      const path = "./images";
      _data.forEach((item) => {
        console.log(item);
        const tempTag = `
      <a href="${item.link}" data-id="${item.id}" class="content-list-link">
        <div class="content-list-img">
          <div class="content-list-thumb" style="background: url('${path}/${item.imgpath}') no-repeat center; background-size: cover;"></div>
        </div>
        <div class="content-list-txt">
          <span class="content-list-cate" style="color:${item.txtcolor}">
            <img src="${path}/icon/${item.icon}" alt="크루" />
            ${item.category}
          </span>
          <h4 class="content-list-title">${item.title}</h4>
          <span class="content-list-date">${item.day}</span>
        </div>
      </a>`;

        tag += tempTag;
      });

      // 배치장소
      const swBannerElement = document.querySelector(".news-list");
      swBannerElement.innerHTML = tag;
      return swBannerElement;
    };
  }, []);

  return (
    <section className="main-top">
      <div className="main-banner">
        {/* <!-- start : 슬라이드 넣기 --> */}
        <div className="banner-wrap">
          <div className="swiper swBanner">
            <div className="swiper-wrapper">{/* <!-- JS Json 연동 --> */}</div>
            <div className="swiper-pagination"></div>
          </div>
        </div>
        {/* <!-- end : 슬라이드 넣기 --> */}
      </div>

      <div className="main-event">
        <a href="#"></a>
      </div>
    </section>
  );
};

const MainBottom = () => {
  return (
    <section className="main-bottom">
      <div className="main-contents">
        <div className="content-wrap">
          <h3>NEW. 따끈따끈 새로 나온 글 🔥</h3>
          <div className="content-list news-list">
            {newsList.map((item) => (
              <div key={item.id}>컴포넌트자리</div>
            ))}
          </div>
        </div>
        <div className="content-ad">
          <a href="#"></a>
        </div>
        <div className="content-wrap">
          <h3>Editor’s Pick. 카카오브레인 크루를 소개합니다! 🏃🏻‍♀️🏃‍♂️🏃🏽</h3>
          <div className="content-list crew-list">{/* <!-- JS Json 연동 --> */}</div>

          <div className="bt-wrap">
            <button className="bt">더보기</button>
          </div>
        </div>
      </div>

      <div className="main-cards">
        <div className="main-cards-wrap">
          <h3>폴더 📁</h3>
          <div className="main-cards-slide">
            {/* <!-- Start 카드 슬라이드 --> */}
            <div className="swiper swCards">
              <div className="swiper-wrapper">{/* <!-- JS Json 연동 --> */}</div>
            </div>
            {/* <!-- End 카드 슬라이드 --> */}
          </div>

          <div className="bt-wrap">
            <a href="#" className="bt">
              폴더전체보기
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
const Main = () => {
  return (
    <>
      <MainTop />
      <MainBottom />
    </>
  );
};

export default Main;
