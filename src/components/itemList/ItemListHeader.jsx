import React from 'react';
import ItemNavigation from './ItemNavigation';
const titleStyle = 'text-2xl font-bold pt-8 pl-2 inline-block float-left leading-7 pb-4';

// 카테고리 별 상품페이지에서 헤더 파트

const ItemListHeader = () => {
  return (
    <div className="w-p-1050 mx-auto clear-both">
      <header className="pl-12">
        <div className="overflow-hidden">
          <img
            src="/img/fruit-icon.png"
            alt="fruit-logo"
            className="inline-block w-16 h-16 float-left"
          />
          <div className={titleStyle}>
            과일<span>&#183;</span>견과<span>&#183;</span>쌀
          </div>
        </div>
        <ItemNavigation />
      </header>
    </div>
  );
};

export default ItemListHeader;
